import * as $dara from '@darabonba/typescript';
export declare class DeleteRCDeploymentSetRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the deployment set.
     *
     * This parameter is required.
     *
     * @example
     * ds-uf6c8qerk019bj1l****
     */
    deploymentSetId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
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
