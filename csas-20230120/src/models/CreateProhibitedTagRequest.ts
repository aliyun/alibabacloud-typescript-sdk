// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProhibitedTagRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the disabled software tag. The description can be up to 128 characters in length and can contain letters, digits, spaces, periods (.), underscores (_), and hyphens (-). Chinese characters are supported. This parameter can be left empty.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the disabled software tag. Fuzzy match is supported. The name can be up to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). Chinese characters are supported. Spaces are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest_616bcc13
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

