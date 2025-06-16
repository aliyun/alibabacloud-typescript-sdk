// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkAclAttributesResponseBodyNetworkAclAttribute } from "./DescribeNetworkAclAttributesResponseBodyNetworkAclAttribute";


export class DescribeNetworkAclAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the network ACLs.
   */
  networkAclAttribute?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttribute;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5905F9C-0161-4E72-9CB1-1F3F3CF6268A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclAttribute: 'NetworkAclAttribute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclAttribute: DescribeNetworkAclAttributesResponseBodyNetworkAclAttribute,
      requestId: 'string',
    };
  }

  validate() {
    if(this.networkAclAttribute && typeof (this.networkAclAttribute as any).validate === 'function') {
      (this.networkAclAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

