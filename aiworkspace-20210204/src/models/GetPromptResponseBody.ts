// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPromptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access type. Valid values:
   * 
   * - PUBLIC: All members in the current workspace can access the prompt.
   * - PRIVATE: Only the creator can access the prompt.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-10-16T01:44:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The prompt description.
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
   *     \\"Reflective strips\\": \\"Usually yellow or yellow-black alternating, attached to permanent protruding obstacles such as wall corners to remind drivers to avoid them. They are strip-shaped, not cones, not ground locks, not water barriers!\\",
   *     \\"Ground lock\\": \\"Also called a parking space lock, it can prevent a parking space from being occupied when raised. When a ground lock is present, you must indicate whether it is in the raised or lowered state. It is in the raised state when there is a raised frame, otherwise it is in the lowered state.\\",
   *   }"
   * }
   */
  frameworkContent?: string;
  /**
   * @remarks
   * The prompt template framework type.
   * 
   * @example
   * ICIO
   */
  frameworkType?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2024-08-27T02:01:10Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The prompt name.
   * 
   * @example
   * Autonomous driving prompt
   */
  promptName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      createTime: 'CreateTime',
      description: 'Description',
      frameworkContent: 'FrameworkContent',
      frameworkType: 'FrameworkType',
      modifyTime: 'ModifyTime',
      promptName: 'PromptName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      createTime: 'string',
      description: 'string',
      frameworkContent: 'string',
      frameworkType: 'string',
      modifyTime: 'string',
      promptName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

