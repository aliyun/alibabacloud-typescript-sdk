// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExtendClusterRequestNodeGroupsNodeTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * my_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * my_value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

