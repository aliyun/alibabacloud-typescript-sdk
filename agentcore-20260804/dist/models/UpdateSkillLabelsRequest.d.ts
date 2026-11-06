import * as $dara from '@darabonba/typescript';
export declare class UpdateSkillLabelsRequestBody extends $dara.Model {
    /**
     * @remarks
     * The JSON string for version label mapping.
     *
     * This parameter is required.
     *
     * @example
     * {"latest":"0.0.2","stable":"0.0.1"}
     */
    labels?: string;
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
export declare class UpdateSkillLabelsRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: UpdateSkillLabelsRequestBody;
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
