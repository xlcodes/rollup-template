import {sayHello} from "../index"
import {expect} from "@jest/globals";

describe('测试', () => {
    it('demo', () => {
        expect(sayHello()).toBe("hello world!")
    })
});
