import * as $dara from '@darabonba/typescript';
export declare class DescribeRCDeploymentSetsRequest extends $dara.Model {
    deploymentSetIds?: string;
    deploymentSetName?: string;
    pageNumber?: number;
    pageSize?: number;
    /**
     * @remarks
     * This parameter is required.
     */
    regionId?: string;
    strategy?: string;
    tag?: string;
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
