// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserInfoInChannelResponseBodyProperty } from "./DescribeUserInfoInChannelResponseBodyProperty";


export class DescribeUserInfoInChannelResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  isChannelExist?: boolean;
  /**
   * @example
   * true
   */
  isInChannel?: boolean;
  property?: DescribeUserInfoInChannelResponseBodyProperty[];
  /**
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  /**
   * @example
   * 1557909133
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      isChannelExist: 'IsChannelExist',
      isInChannel: 'IsInChannel',
      property: 'Property',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isChannelExist: 'boolean',
      isInChannel: 'boolean',
      property: { 'type': 'array', 'itemType': DescribeUserInfoInChannelResponseBodyProperty },
      requestId: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.property)) {
      $dara.Model.validateArray(this.property);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

