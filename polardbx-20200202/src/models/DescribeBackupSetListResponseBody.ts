// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackupSetListResponseBodyData } from "./DescribeBackupSetListResponseBodyData";


export class DescribeBackupSetListResponseBody extends $dara.Model {
  data?: DescribeBackupSetListResponseBodyData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1A6D328C-84B8-40DC-BF49-6C73984D7494
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
      data: { 'type': 'array', 'itemType': DescribeBackupSetListResponseBodyData },
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

