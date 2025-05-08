// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewaysResponseBodyNatGatewaysTags extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestKey
   * 
   * @deprecated
   */
  tagKey?: string;
  /**
   * @example
   * TestValue
   * 
   * @deprecated
   */
  tagValue?: string;
  /**
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      tagKey: 'string',
      tagValue: 'string',
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

