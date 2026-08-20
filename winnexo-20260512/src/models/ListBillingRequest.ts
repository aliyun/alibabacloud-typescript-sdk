// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBillingRequest extends $dara.Model {
  /**
   * @remarks
   * The unique business identifier. When bizType is set to LibraryChat, bizId refers to the document library ID.
   * 
   * @example
   * exampleBizId
   */
  bizId?: string;
  /**
   * @remarks
   * The business type. Currently supported values: model Q&A (LlmChat) and document library Q&A (LibraryChat).
   * 
   * @example
   * string_value
   */
  bizType?: string;
  /**
   * @remarks
   * The actual end timestamp of the live stream, in milliseconds.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to filter out bills with zero credit consumption. Default value: true (filtered).
   * 
   * @example
   * true
   */
  ignoreZero?: boolean;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - start: indicates node creation. This is the default value and does not need to be explicitly set in most cases.
   * - stop: stops a real-time meeting task. This corresponds to the creation of a real-time meeting. Set this to stop after the meeting ends to trigger the call. This is used in real-time meeting scenarios.
   * 
   * Note: When ending a real-time recording, you must set this parameter to stop.
   * 
   * @example
   * string_value
   */
  operation?: string;
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
   * The query start time. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Running is returned upon submission.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass it explicitly with --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The user ID (WINNEXO platform user ID, optional filter).
   * 
   * @example
   * 1
   */
  wnUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      bizType: 'bizType',
      endTime: 'endTime',
      ignoreZero: 'ignoreZero',
      operation: 'operation',
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
      bizId: 'string',
      bizType: 'string',
      endTime: 'string',
      ignoreZero: 'boolean',
      operation: 'string',
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

