// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaultDiagnosisUserListResponseBodyUserListFaultList extends $dara.Model {
  /**
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
   * @example
   * 1614936817
   */
  channelCreatedTs?: number;
  /**
   * @example
   * 904
   */
  channelId?: string;
  /**
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  faultList?: DescribeFaultDiagnosisUserListResponseBodyUserListFaultList[];
  /**
   * @example
   * 123456
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
   * @example
   * 2
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCnt?: number;
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

