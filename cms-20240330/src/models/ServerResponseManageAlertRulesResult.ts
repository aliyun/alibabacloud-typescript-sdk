// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ManageAlertRulesResult } from "./ManageAlertRulesResult";


export class ServerResponseManageAlertRulesResult extends $dara.Model {
  /**
   * @remarks
   * The status code of the API response. A value of 200 indicates a successful request. Other values indicate a request exception.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The business data returned by the API, which contains the execution result details of alert rule management operations such as batch enabling or disabling.
   * 
   * @example
   * {"updatedUuidList":["a1b2c3d4-e5f6-7890-abcd-ef1234567890"]}
   */
  data?: ManageAlertRulesResult;
  /**
   * @remarks
   * The error description returned when the request fails. This parameter is empty when the request succeeds.
   * 
   * @example
   * The specified alert rule UUID does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The cursor for the next page in keyset-based pagination. A value of null indicates that no more data is available. Use this value to retrieve the next page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the returned data.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page in the returned data.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID of the API request, which is used for troubleshooting and correlating server-side logs.
   * 
   * @example
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of alert rules actually affected by the operation.
   * 
   * @example
   * 8
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      nextToken: 'nextToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ManageAlertRulesResult,
      message: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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

