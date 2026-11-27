// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaultDiagnosisUserListResponseBodyUserListFaultList extends $dara.Model {
  /**
   * @remarks
   * The fault type.
   * 
   * @example
   * JOIN_SLOW
   */
  faultType?: string;
  static names(): { [key: string]: string } {
    return {
      faultType: 'FaultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponseBodyUserList extends $dara.Model {
  /**
   * @remarks
   * The creation timestamp of the channel. The time is a UNIX timestamp in seconds.
   * 
   * @example
   * 1614936817
   */
  channelCreatedTs?: number;
  /**
   * @remarks
   * The ID of the channel.
   * 
   * @example
   * 904
   */
  channelId?: string;
  /**
   * @remarks
   * The time when the user first joined the channel. The time is a UNIX timestamp in seconds.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @remarks
   * The time when the user last left the channel. The time is a UNIX timestamp in seconds.
   * 
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * The list of faults.
   */
  faultList?: DescribeFaultDiagnosisUserListResponseBodyUserListFaultList[];
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channelCreatedTs: 'ChannelCreatedTs',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      faultList: 'FaultList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCreatedTs: 'number',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      faultList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserListResponseBodyUserListFaultList },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.faultList)) {
      $dara.Model.validateArray(this.faultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCnt?: number;
  /**
   * @remarks
   * The detailed list of users with faults.
   */
  userList?: DescribeFaultDiagnosisUserListResponseBodyUserList[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
      userList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserListResponseBodyUserList },
    };
  }

  validate() {
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

