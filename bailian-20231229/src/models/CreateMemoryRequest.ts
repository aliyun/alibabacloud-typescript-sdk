// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the long-term memory. The description is empty by default. The value must be 1 to 50 characters in length and can contain characters in the letter category of Unicode, which includes letters, Chinese characters, and digits. The value can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * Long-term memory of user A for my LLM application $APP_ID
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

