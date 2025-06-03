// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAssistantCapabilityRequestMessagesContent } from "./GetAssistantCapabilityRequestMessagesContent";


export class GetAssistantCapabilityRequestMessages extends $dara.Model {
  content?: GetAssistantCapabilityRequestMessagesContent;
  /**
   * @example
   * 这是一张小猫钓鱼图
   */
  contentDesc?: string;
  /**
   * @example
   * 1642448000000
   */
  createAt?: number;
  /**
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentDesc: 'contentDesc',
      createAt: 'createAt',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: GetAssistantCapabilityRequestMessagesContent,
      contentDesc: 'string',
      createAt: 'number',
      role: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

