// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePromptRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace visibility. Valid values:
   * - PRIVATE (default): Visible only to you and administrators in this workspace.
   * - PUBLIC: Visible to everyone in this workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The prompt description.
   * 
   * @example
   * This is a prompt for information extraction in autonomous driving highway scenarios, focusing on extracting lane and weather information
   */
  description?: string;
  /**
   * @remarks
   * The prompt framework content.
   * 
   * @example
   * {
   *   "context":"You are an experienced driver with ten years of driving experience. Please analyze and make judgments about the following image scenarios.",
   *   "inputData":"{
   *     \\"Reflective strips\\": \\"Usually yellow or yellow-black alternating, attached to permanent protruding obstacles such as wall corners to remind drivers to avoid them.\\",
   *     \\"Ground lock\\": \\"Also called a parking space lock. When raised, it prevents the parking space from being occupied. When a ground lock is present, you must indicate whether it is in the raised or lowered state.\\",
   *   }"
   * }
   */
  frameworkContent?: string;
  /**
   * @remarks
   * The prompt optimization template.
   * 
   * @example
   * ICIO
   */
  frameworkType?: string;
  /**
   * @remarks
   * The prompt name.
   * 
   * This parameter is required.
   * 
   * @example
   * Autonomous driving highway information extraction
   */
  promptName?: string;
  /**
   * @remarks
   * The workspace ID. You can obtain the ID by calling the [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 796**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      frameworkContent: 'FrameworkContent',
      frameworkType: 'FrameworkType',
      promptName: 'PromptName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      frameworkContent: 'string',
      frameworkType: 'string',
      promptName: 'string',
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

