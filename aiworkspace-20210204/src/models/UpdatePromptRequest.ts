// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePromptRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the prompt.
   * 
   * @example
   * This is an information extraction prompt for autonomous driving highway scenarios, focusing on extracting lane and weather information
   */
  description?: string;
  /**
   * @remarks
   * The prompt content.
   * 
   * @example
   * {
   *   "context":"You are an experienced driver with ten years of driving experience. Please analyze and make judgments about the following image scenarios.",
   *   "inputData":"{
   *     \\"Reflective strips\\": \\"Usually yellow, or yellow-black alternating, attached to permanent protruding obstacles such as wall corners to remind drivers to avoid them.\\",
   *     \\"Ground lock\\": \\"Also known as a parking space lock. When raised, it prevents the parking space from being occupied. When a ground lock is present, you must indicate whether it is in the raised or lowered state.\\",
   *   }"
   * }
   */
  frameworkContent?: string;
  /**
   * @remarks
   * The framework type of the prompt template.
   * 
   * @example
   * ICIO
   */
  frameworkType?: string;
  /**
   * @remarks
   * The workspace ID. You can obtain the ID by calling the [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 302914
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      frameworkContent: 'FrameworkContent',
      frameworkType: 'FrameworkType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      frameworkContent: 'string',
      frameworkType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

