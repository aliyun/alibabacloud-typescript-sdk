// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPromptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access type. Valid values:
   * 
   * - PUBLIC: Accessible to all members in the current workspace.
   * - PRIVATE: Accessible only to the creator.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The creation time. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2024-10-16T01:44:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the prompt.
   * 
   * @example
   * This is an information extraction prompt for autonomous driving highway scenarios, focusing on extracting lanes, weather, and other details
   */
  description?: string;
  /**
   * @remarks
   * The content of the prompt.
   * 
   * @example
   * {
   *   "context":"You are an experienced driver with ten years of driving experience. Please analyze and judge the following image scenario.",
   *   "inputData":"{
   *     \\"Reflective tape\\": \\"Usually yellow or yellow-and-black striped, attached to permanent protruding obstacles such as wall corners to remind drivers to avoid them. It is strip-shaped, not a traffic cone, not a parking lock, and not a water barrier!\\",
   *     \\"Parking lock\\": \\"Also known as a parking space lock, it prevents the parking space from being occupied when raised. If a parking lock is present, make sure to output whether it is in the raised or lowered state. It is in the raised state if the lifting frame is up; otherwise, it is in the lowered state.\\"
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
   * The update time. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2024-08-27T02:01:10Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the prompt.
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

