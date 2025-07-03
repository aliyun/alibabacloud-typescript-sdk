// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGdnInstancesResponseBodyData } from "./DescribeGdnInstancesResponseBodyData";


export class DescribeGdnInstancesResponseBody extends $dara.Model {
  data?: DescribeGdnInstancesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 7B044BD1-6402-5DE9-9AED-63D15A994E37
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeGdnInstancesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

