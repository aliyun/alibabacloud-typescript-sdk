import * as $dara from '@darabonba/typescript';
export declare class ModifyRCDeploymentSetAttributeRequest extends $dara.Model {
    /**
     * @remarks
     * This parameter is required.
     *
     * @example
     * ds-bp1frxuzdg87zh4p****
     */
    deploymentSetId?: string;
    /**
     * @example
     * DeploymentSetTestName
     */
    deploymentSetName?: string;
    /**
     * @example
     * TestDescription
     */
    description?: string;
    /**
     * @remarks
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
