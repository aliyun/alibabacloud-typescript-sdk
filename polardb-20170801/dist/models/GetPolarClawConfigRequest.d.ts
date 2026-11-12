import * as $dara from '@darabonba/typescript';
export declare class GetPolarClawConfigRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID. Usage note: In the Prerequisites section, specify that the ApplicationId can be obtained by calling DescribeApplications (filtered by ApplicationType=polardb_polarclaw), and indicate the retrieval path in the description of the ApplicationId parameter.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * Filters configuration sections by a JSONPath dot-notation path. If this parameter is left empty, all configurations are returned.
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
