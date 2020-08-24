import { describe, it } from "mocha";
import { solution } from "./solution";
import { strictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(6, [7, 10]);
        const expect = 28;
        strictEqual(actual, expect);
    });
});
