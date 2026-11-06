import * as $dara from '@darabonba/typescript';
export declare class DescribeAvailableModelsRequest extends $dara.Model {
    /**
     * @remarks
     * The Kubernetes cluster type, such as aideploy.
     *
     * @example
     * aideploy
     */
    kubeType?: string;
    /**
     * @remarks
     * The model type. Valid values: custom and public. If you do not specify this parameter, all models are returned.
     *
     * @example
     * custom
     */
    modelType?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
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
