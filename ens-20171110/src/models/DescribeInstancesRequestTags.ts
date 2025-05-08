// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that are to add to the instance. Valid values: 1 to 20.
   * 
   * @example
   * tag
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. Valid values: 1 to 20.
   * 
   * @example
   * 2
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

