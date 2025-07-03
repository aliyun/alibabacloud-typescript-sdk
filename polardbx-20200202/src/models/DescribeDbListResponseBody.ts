// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDbListResponseBodyData } from "./DescribeDbListResponseBodyData";


export class DescribeDbListResponseBody extends $dara.Model {
  data?: DescribeDbListResponseBodyData[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  /**
   * @example
   * true
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
      data: { 'type': 'array', 'itemType': DescribeDbListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

