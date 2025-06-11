// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTagValueNameRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the tag group.
   * 
   * This parameter is required.
   * 
   * @example
   * Tag group 1
   */
  key?: string;
  /**
   * @remarks
   * The new name of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * Tag 2
   */
  newValue?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * Tag 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      newValue: 'NewValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      newValue: 'string',
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

