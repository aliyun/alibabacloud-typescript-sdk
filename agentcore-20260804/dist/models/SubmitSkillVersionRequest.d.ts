import * as $dara from '@darabonba/typescript';
export declare class SubmitSkillVersionRequestBody extends $dara.Model {
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
export declare class SubmitSkillVersionRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: SubmitSkillVersionRequestBody;
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
