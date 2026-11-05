import * as $dara from '@darabonba/typescript';
export declare class RedraftSkillVersionRequestBody extends $dara.Model {
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
export declare class RedraftSkillVersionRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: RedraftSkillVersionRequestBody;
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
