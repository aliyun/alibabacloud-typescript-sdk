import * as $dara from '@darabonba/typescript';
export declare class UpdatePolarClawAgentRequestFiles extends $dara.Model {
    /**
     * @remarks
     * The file content.
     *
     * @example
     * You are a helpful assistant.
     */
    fileContent?: string;
    /**
     * @remarks
     * The file name. The value must be one of the following allowed file names: AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, HEARTBEAT.md, BOOTSTRAP.md, MEMORY.md, or MEMORY.alt.md.
     *
     * @example
     * SOUL.md
     */
    fileName?: string;
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
export declare class UpdatePolarClawAgentRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the agent to update.
     *
     * This parameter is required.
     *
     * @example
     * work
     */
    agentId?: string;
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The new avatar.
     *
     * @example
     * test
     */
    avatar?: string;
    /**
     * @remarks
     * The list of files to update.
     *
     * @example
     * [{"FileName":"SOUL.md","FileContent":"You are a helpful assistant."}]
     */
    files?: UpdatePolarClawAgentRequestFiles[];
    /**
     * @remarks
     * Specifies whether to set the agent as the default agent.
     *
     * @example
     * true
     */
    isDefault?: boolean;
    /**
     * @remarks
     * Specifies whether to keep files when switching the workspace.
     *
     * @example
     * false
     */
    keepWorkspaceFiles?: boolean;
    /**
     * @remarks
     * The model override.
     *
     * @example
     * claude-sonnet-4-5
     */
    model?: string;
    /**
     * @remarks
     * The new display name of the agent.
     *
     * @example
     * Work Bot
     */
    name?: string;
    /**
     * @remarks
     * Specifies whether to restart the gateway after creation. Default value: true.
     *
     * @example
     * true
     */
    restart?: boolean;
    /**
     * @remarks
     * The new working directory path.
     *
     * @example
     * /home/node/.openclaw/workspace-work-v2
     */
    workspace?: string;
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
