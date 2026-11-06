import * as $dara from '@darabonba/typescript';
export declare class OfflineSkillRequestBody extends $dara.Model {
    /**
     * @remarks
     * The scope of the operation. Valid values: skill (the entire skill) and version (a specified version).
     *
     * @example
     * version
     */
    scope?: string;
    /**
     * @remarks
     * The skill version number.
     *
     * @example
     * 0.0.1
     */
    skillVersion?: string;
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
export declare class OfflineSkillRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: OfflineSkillRequestBody;
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
