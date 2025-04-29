// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfacesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the ENI. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the ENI. Valid values of N: 1 to 20.
   * 
   * If a single tag is specified to query ENIs, up to 1,000 ENIs that have this tag can be returned. If multiple tags are specified to query ENIs, up to 1,000 ENIs that have all these tags can be returned. To query more than 1,000 resources that have specified tags, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation.
   * 
   * @example
   * TestValue
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

