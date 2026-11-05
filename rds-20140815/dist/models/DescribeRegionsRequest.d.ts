import * as $dara from '@darabonba/typescript';
export declare class DescribeRegionsRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies the language of the **LocalName** parameter in the response. Valid values:
     * * **zh-CN**: Chinese
     * * **en-US**: English
     *
     * Default value: **en-US**.
     *
     * @example
     * en-US
     */
    acceptLanguage?: string;
    resourceOwnerId?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
