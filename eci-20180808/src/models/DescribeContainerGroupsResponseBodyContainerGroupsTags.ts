// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupsResponseBodyContainerGroupsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * name
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test-xh
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

