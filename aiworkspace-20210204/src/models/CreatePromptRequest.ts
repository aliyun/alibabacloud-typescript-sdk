// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePromptRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the workspace. Valid values:
   * - PRIVATE (default): Visible only to you and administrators in this workspace.
   * - PUBLIC: Visible to all users in this workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The description of the prompt.
   * 
   * @example
   * This is an information extraction prompt for autonomous driving highway scenarios, focusing on extracting information such as lanes and weather
   */
  description?: string;
  /**
   * @remarks
   * The content of the prompt framework.
   * 
   * @example
   * {
   *   "context":"You are an experienced driver with ten years of driving experience. Please analyze and evaluate the following image scenario.",
   *   "inputData":"{
   *     \\"Reflective tape\\": \\"Usually yellow or alternating yellow and black, attached to permanent protruding obstacles such as wall corners to remind drivers to avoid them.\\",
   *     \\"Parking lock\\": \\"Also known as a parking space lock, it prevents the parking space from being occupied when raised. If a parking lock is present, be sure to output whether it is in the raised or lowered state.\\",
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
   * The name of the prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * Autonomous driving highway information extraction
   */
  promptName?: string;
  /**
   * @remarks
   * The workspace ID. You can call the [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) operation to obtain the ID.
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

