// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetail } from "./GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetail";


export class GetDataArchiveOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of data archiving tickets.
   */
  dataArchiveOrderDetail?: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetail;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * NoPermission
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * User [19929582****] not exist
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request, which is used to query logs and troubleshoot issues.
   * 
   * @example
   * 4161CE36-28DF-5191-8A6F-A17076A0B124
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Tracks service requests.
   * 
   * @example
   * 0a06e1e316757357507896067d3780
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataArchiveOrderDetail: 'DataArchiveOrderDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataArchiveOrderDetail: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.dataArchiveOrderDetail && typeof (this.dataArchiveOrderDetail as any).validate === 'function') {
      (this.dataArchiveOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

