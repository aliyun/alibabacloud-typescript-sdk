import * as $dara from '@darabonba/typescript';
export declare class RestartAIDBClusterRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID. Usage notes: Add a description of the supported cluster types to the DBClusterId parameter description and clarify the meaning of the example value prefix.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
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
