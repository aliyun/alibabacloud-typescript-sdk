import * as $dara from '@darabonba/typescript';
export declare class RunRCCommandRequestResourceTags extends $dara.Model {
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
export declare class RunRCCommandRequestTags extends $dara.Model {
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
export declare class RunRCCommandRequest extends $dara.Model {
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
    instanceIds?: string[];
    keepCommand?: boolean;
    launcher?: string;
    name?: string;
    parameters?: {
        [key: string]: any;
    };
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
    resourceTags?: RunRCCommandRequestResourceTags[];
    tags?: RunRCCommandRequestTags[];
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
