// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LumaTable } from "./LumaTable";


export class ListLumaTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The effective page size for this request. If the Limit parameter is not specified, the server default value is used. If the specified value exceeds the upper limit, the value is adjusted to the maximum allowed value.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The token for the next page. Pass this value as the NextToken parameter in the next request to retrieve the next page. An empty value indicates that no more data is available.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of event tables bound to the agent.
   * 
   * @example
   * [{"Name":"my_table","Namespace":"my_namespace"}]
   */
  tables?: LumaTable[];
  /**
   * @remarks
   * The total number of event tables bound to the agent, regardless of the number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
      tables: 'Tables',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      tables: { 'type': 'array', 'itemType': LumaTable },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLumaTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of Success indicates a successful call. If the call fails, a specific error code is returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The list of event tables bound to the agent, including entries and pagination information.
   */
  data?: ListLumaTablesResponseBodyData;
  /**
   * @remarks
   * The message returned by the operation. The value Operation success is returned if the call succeeds. A specific error description is returned if the call fails.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of this request, which is used for troubleshooting and ticket submission.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of true indicates a successful call.
   * 
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
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListLumaTablesResponseBodyData,
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

