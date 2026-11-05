import * as $dara from '@darabonba/typescript';
export declare class CreateRCDeploymentSetRequestTag extends $dara.Model {
    key?: string;
    value?: string;
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
export declare class CreateRCDeploymentSetRequest extends $dara.Model {
    clientToken?: string;
    deploymentSetName?: string;
    description?: string;
    groupCount?: number;
    onUnableToRedeployFailedInstance?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    regionId?: string;
    strategy?: string;
    tag?: CreateRCDeploymentSetRequestTag[];
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
