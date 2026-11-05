import * as $dara from '@darabonba/typescript';
export declare class CreateAgentSpecVersionRequestBody extends $dara.Model {
    /**
     * @remarks
     * The existing version on which the draft is based.
     *
     * @example
     * 1.0.0
     */
    basedOnVersion?: string;
    /**
     * @remarks
     * Specifies the draft version number. If you do not specify this parameter, the version number is automatically incremented.
     *
     * @example
     * 2.0.0
     */
    targetVersion?: string;
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
export declare class CreateAgentSpecVersionRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: CreateAgentSpecVersionRequestBody;
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
