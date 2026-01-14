// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIndexMonitorResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {
   *     "code": "Success",
   *     "status_code": 200,
   *     "data": {
   *         "storageMonitorData": Object{...},
   *         "qpsMonitorData": Object{...}
   *     },
   *     "success": true,
   *     "message": "success",
   *     "request_id": "65d34b79-b97e-478e-a0a3-xxx",
   *     "status": "SUCCESS"
   * }
   */
  data?: any;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 778C0B3B-xxxx-5FC1-A947-36EDD13606AB
   */
  requestId?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
      requestId: 'string',
      status: 'number',
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

