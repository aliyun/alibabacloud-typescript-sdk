// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBillingRequest extends $dara.Model {
  /**
   * @remarks
   * The platform application token issued by the console. If you specify this parameter, the request is executed as the user specified by opsUserId or opsUserCode.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The unique identifier of the business. When bizType is set to LibraryChat, bizId refers to the ID of the document library.
   * 
   * @example
   * exampleBizId
   */
  bizId?: string;
  /**
   * @remarks
   * The business type. Valid values: LlmChat (model Q&A) and LibraryChat (document library Q&A).
   * 
   * @example
   * string_value
   */
  bizType?: string;
  /**
   * @remarks
   * The actual end timestamp of the live stream. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to filter out bills with zero credit consumption. Default value: true.
   * 
   * @example
   * true
   */
  ignoreZero?: boolean;
  /**
   * @remarks
   * The operation item. Valid values:
   * - start: indicates the creation of a task. This is the default value and usually does not need to be explicitly specified.
   * - stop: stops a real-time meeting task. This corresponds to the creation of a real-time meeting and is set to stop to trigger a call after the meeting ends. This value is used in real-time meeting scenarios.
   * Note: When you end a real-time recording, you must set this parameter to stop.
   * 
   * @example
   * string_value
   */
  operation?: string;
  /**
   * @remarks
   * The code of the proxy user, which is unique within the tenant. This parameter is used only when the application credential is configured as source_uid.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The ID of the proxy user, which is the WINNEXO platform user ID. This parameter is used only when the application credential is configured as winnexo_uid.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Minimum value: 1. Maximum value: 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. A status of Running is returned immediately after the task is submitted.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. For winnexo-cli, this parameter is explicitly passed by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The user ID, which is the WINNEXO platform user ID. This parameter is optional for filtering.
   * 
   * @example
   * 1
   */
  wnUserId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      bizId: 'bizId',
      bizType: 'bizType',
      endTime: 'endTime',
      ignoreZero: 'ignoreZero',
      operation: 'operation',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      page: 'page',
      pageSize: 'pageSize',
      startTime: 'startTime',
      status: 'status',
      tenantId: 'tenantId',
      wnUserId: 'wnUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      bizId: 'string',
      bizType: 'string',
      endTime: 'string',
      ignoreZero: 'boolean',
      operation: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      page: 'number',
      pageSize: 'number',
      startTime: 'string',
      status: 'string',
      tenantId: 'string',
      wnUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

