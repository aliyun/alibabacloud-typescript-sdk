import * as $dara from '@darabonba/typescript';
export declare class CreateApplicationPromptRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID. You must specify an application with `ApplicationType` set to `mem0`. You can first call the CreateApplication operation with `ApplicationType` set to `mem0` to create an application, and then pass the returned ApplicationId to this operation. This parameter does not apply to other application types such as standard PolarClaw or Supabase.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The prompt name.
     *
     * This parameter is required.
     *
     * @example
     * my_prompt
     */
    promptName?: string;
    /**
     * @remarks
     * The prompt type.
     *
     * This parameter is required.
     *
     * @example
     * CONVERSATION_SUMMERY
     * SEMANTIC_MEMORY
     * MEMORY_ANSWER_PROMPT
     * USER_MEMORY_EXTRACTION_PROMPT
     * AGENT_MEMORY_EXTRACTION_PROMPT
     * PROCEDURAL_MEMORY_SYSTEM_PROMPT
     * RETRIEVE_NODES_PROMPT
     * EXTRACT_RELATIONS_PROMPT
     * UPDATE_GRAPH_PROMPT
     * DELETE_RELATIONS_SYSTEM_PROMPT
     */
    promptType?: string;
    /**
     * @remarks
     * The prompt content.
     *
     * This parameter is required.
     *
     * @example
     * prompt content
     */
    promptValue?: string;
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
