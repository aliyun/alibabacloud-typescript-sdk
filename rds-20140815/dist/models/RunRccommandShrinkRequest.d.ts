import * as $dara from '@darabonba/typescript';
export declare class RunRCCommandShrinkRequest extends $dara.Model {
    clientToken?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    commandContent?: string;
    containerId?: string;
    containerName?: string;
    /**
     * @example
     * PlainText
     */
    contentEncoding?: string;
    description?: string;
    enableParameter?: boolean;
    frequency?: string;
    instanceIdsShrink?: string;
    keepCommand?: boolean;
    launcher?: string;
    name?: string;
    parametersShrink?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    regionId?: string;
    /**
     * @example
     * Once
     */
    repeatMode?: string;
    resourceGroupId?: string;
    resourceTagsShrink?: string;
    tagsShrink?: string;
    /**
     * @example
     * ProcessTree
     */
    terminationMode?: string;
    timeout?: number;
    /**
     * @remarks
     * This parameter is required.
     *
     * @example
     * RunShellScript
     */
    type?: string;
    username?: string;
    windowsPasswordName?: string;
    workingDir?: string;
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
