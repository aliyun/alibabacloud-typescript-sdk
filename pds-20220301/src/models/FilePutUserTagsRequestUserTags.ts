// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilePutUserTagsRequestUserTags extends $dara.Model {
  /**
   * @remarks
   * The name of the tag. The tag name cannot be empty and cannot contain number signs (#).
   * 
   * This parameter is required.
   * 
   * @example
   * tag
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The tag value cannot contain number signs (#).
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

