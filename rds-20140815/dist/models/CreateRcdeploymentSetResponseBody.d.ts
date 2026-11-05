import * as $dara from '@darabonba/typescript';
export declare class CreateRCDeploymentSetResponseBody extends $dara.Model {
    deploymentSetId?: string;
    requestId?: string;
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
