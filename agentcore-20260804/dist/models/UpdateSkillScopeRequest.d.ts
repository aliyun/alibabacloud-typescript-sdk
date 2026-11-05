import * as $dara from '@darabonba/typescript';
export declare class UpdateSkillScopeRequestBody extends $dara.Model {
    /**
     * @remarks
     * The visibility.
     *
     * This parameter is required.
     *
     * @example
     * PUBLIC
     */
    scope?: string;
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
export declare class UpdateSkillScopeRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: UpdateSkillScopeRequestBody;
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
