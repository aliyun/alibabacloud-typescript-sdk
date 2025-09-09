// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsCommodityResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the returned result.
   * 
   * @example
   * test
   */
  data?: string;
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * DC3ABA3E-0F8A-4596-9104-F5155C34315B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

