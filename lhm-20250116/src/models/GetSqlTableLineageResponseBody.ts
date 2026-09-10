// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlTableLineageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of downstream tables.
   */
  downstreamTables?: string[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * connection timeout
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: Successful.
   * - false: Failed. Use errCode and errMessage to troubleshoot the issue.
   */
  success?: boolean;
  /**
   * @remarks
   * The list of upstream tables.
   */
  upstreamTables?: string[];
  static names(): { [key: string]: string } {
    return {
      downstreamTables: 'downstreamTables',
      errorMsg: 'errorMsg',
      success: 'success',
      upstreamTables: 'upstreamTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downstreamTables: { 'type': 'array', 'itemType': 'string' },
      errorMsg: 'string',
      success: 'boolean',
      upstreamTables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.downstreamTables)) {
      $dara.Model.validateArray(this.downstreamTables);
    }
    if(Array.isArray(this.upstreamTables)) {
      $dara.Model.validateArray(this.upstreamTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlTableLineageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data body returned by the operation. For the field structure, see the child parameters.
   */
  data?: GetSqlTableLineageResponseBodyData;
  /**
   * @remarks
   * The error code. An empty string is returned if the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. An empty string is returned if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues with the current call.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: Successful.
   * - false: Failed. Use errCode and errMessage to troubleshoot the issue.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSqlTableLineageResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
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

