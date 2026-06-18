// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the long-term memory. The description must be 1 to 50 characters in length and can contain letters, digits, and characters in the Unicode letter category (including Chinese characters). The description can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * 我的大模型应用$APP_ID关于A用户的长期记忆体
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

