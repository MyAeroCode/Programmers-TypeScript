import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution([1, 1, 3, 3, 0, 1, 1]);
        const expect = [1, 3, 0, 1];
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution([4, 4, 4, 3, 3]);
        const expect = [4, 3];
        deepStrictEqual(actual, expect);
    });
});
