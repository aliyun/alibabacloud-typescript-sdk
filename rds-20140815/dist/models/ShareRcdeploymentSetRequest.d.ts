import * as $dara from '@darabonba/typescript';
export declare class ShareRCDeploymentSetRequest extends $dara.Model {
    /**
     * @remarks
     * This parameter is required.
     */
    deploymentSetId?: string;
    /**
     * @remarks
     * This parameter is required.
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
