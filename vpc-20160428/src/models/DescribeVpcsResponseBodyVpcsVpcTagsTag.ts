// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcsResponseBodyVpcsVpcTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * @example
   * internal
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

