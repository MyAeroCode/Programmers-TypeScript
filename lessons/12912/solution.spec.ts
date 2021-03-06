import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(3, 5);
        const expect = 12;
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(3, 3);
        const expect = 3;
        deepStrictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution(5, 3);
        const expect = 12;
        deepStrictEqual(actual, expect);
    });
});
