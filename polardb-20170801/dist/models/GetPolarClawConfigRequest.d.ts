import * as $dara from '@darabonba/typescript';
export declare class GetPolarClawConfigRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The path to the configuration section to retrieve, specified in JSONPath dot notation. If this parameter is empty, the entire configuration is returned.
     *
     * @example
     * models
     */
    configPath?: string;
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
