// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * The new description. The description must be 1 to 50 characters in length and can contain characters in the letter category of Unicode, which includes letters, Chinese characters, and digits. The description can also contain half-width colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * 我的大模型应用$APP_ID关于B用户的长期记忆体
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

