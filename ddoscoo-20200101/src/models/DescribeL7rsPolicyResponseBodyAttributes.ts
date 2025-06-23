// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeL7RsPolicyResponseBodyAttributesAttribute } from "./DescribeL7rsPolicyResponseBodyAttributesAttribute";


export class DescribeL7RsPolicyResponseBodyAttributes extends $dara.Model {
  /**
   * @remarks
   * The parameters for back-to-origin settings.
   */
  attribute?: DescribeL7RsPolicyResponseBodyAttributesAttribute;
  /**
   * @remarks
   * The address of the origin server.
   * 
   * @example
   * 1.***.***.1
   */
  realServer?: string;
  /**
   * @remarks
   * The address type of the origin server. Valid values:
   * 
   * *   **0**: IP address
   * *   **1**: domain name
   * 
   * @example
   * 0
   */
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      realServer: 'RealServer',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: DescribeL7RsPolicyResponseBodyAttributesAttribute,
      realServer: 'string',
      rsType: 'number',
    };
  }

  validate() {
    if(this.attribute && typeof (this.attribute as any).validate === 'function') {
      (this.attribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

