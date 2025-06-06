// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicDisposalProcessesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number to display in the paginated query. Range: 1~10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Terminal device ID.
   * 
   * @example
   * E7798391-2554-FE83-E0B7-045DDED629A8
   */
  devTag?: string;
  /**
   * @remarks
   * Disposal action.
   * - **ztna_connect**: Prohibit connection to the zero-trust intranet.
   * - **nac_connect**: Prohibit connection to the office network access.
   * - **none**: No disposal action.
   * 
   * @example
   * none
   */
  disposalAction?: string;
  /**
   * @remarks
   * Disposal process ID.
   * 
   * @example
   * dp-xxxxxxxx
   */
  disposalProcessId?: string;
  /**
   * @remarks
   * The end time for querying dynamic disposal processes. Format: Unix timestamp (in seconds).
   * 
   * @example
   * 1743143296
   */
  endTime?: number;
  /**
   * @remarks
   * The number of items per page in the paginated query. Range: 1~1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Recovery type.
   * - **auto**: Automatic recovery.
   * - **console**: Console recovery.
   * - **auth**: Recovery by authentication and reporting.
   * 
   * @example
   * auto
   */
  recoveryType?: string;
  /**
   * @remarks
   * The start time for querying dynamic disposal processes. Format: Unix timestamp (in seconds).
   * 
   * @example
   * 1743143296
   */
  startTime?: number;
  /**
   * @remarks
   * Disposal status. Values:
   * - **disposal**: In the disposal state.
   * - **finished**: Already automatically recovered.
   * - **recovery**: Recovered by authentication and reporting or console recovery.
   * 
   * @example
   * disposal
   */
  status?: string;
  /**
   * @remarks
   * Username.
   * 
   * @example
   * xiaoming
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      devTag: 'DevTag',
      disposalAction: 'DisposalAction',
      disposalProcessId: 'DisposalProcessId',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      recoveryType: 'RecoveryType',
      startTime: 'StartTime',
      status: 'Status',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      devTag: 'string',
      disposalAction: 'string',
      disposalProcessId: 'string',
      endTime: 'number',
      pageSize: 'number',
      recoveryType: 'string',
      startTime: 'number',
      status: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

