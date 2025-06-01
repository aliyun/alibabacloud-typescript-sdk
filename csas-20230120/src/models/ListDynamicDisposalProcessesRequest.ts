// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicDisposalProcessesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  devTag?: string;
  /**
   * @example
   * none
   */
  disposalAction?: string;
  /**
   * @example
   * dp-xxxxxxxx
   */
  disposalProcessId?: string;
  /**
   * @example
   * 1743143296
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * auto
   */
  recoveryType?: string;
  /**
   * @example
   * 1743143296
   */
  startTime?: number;
  /**
   * @example
   * disposal
   */
  status?: string;
  /**
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

