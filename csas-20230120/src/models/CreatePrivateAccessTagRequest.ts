// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrivateAccessTagRequest extends $dara.Model {
  /**
   * @remarks
   * Private access tag description. It can be 1 to 128 characters long. It supports Chinese characters, uppercase and lowercase English letters, numbers, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * 这是一条内网访问标签
   */
  description?: string;
  /**
   * @remarks
   * Private access tag name. It can be 1 to 128 characters long. It supports Chinese characters, uppercase and lowercase English letters, numbers, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * tag_name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

