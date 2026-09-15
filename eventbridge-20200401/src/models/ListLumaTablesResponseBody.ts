// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LumaTable } from "./LumaTable";


export class ListLumaTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of event tables bound to the Agent.
   * 
   * @example
   * [{"Name":"my_table","Namespace":"my_namespace"}]
   */
  tables?: LumaTable[];
  static names(): { [key: string]: string } {
    return {
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tables: { 'type': 'array', 'itemType': LumaTable },
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
   * The response code of the operation. A value of Success indicates success. An error code is returned if the call fails.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The list of event tables bound to the Agent. All results are returned at once without pagination.
   */
  data?: ListLumaTablesResponseBodyData;
  /**
   * @remarks
   * The message returned by the operation. The value is Operation success if the call succeeds, or a specific error description if the call fails.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, used for troubleshooting and ticket feedback.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of true indicates success.
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

