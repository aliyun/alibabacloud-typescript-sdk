// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListValueAddedResponseBodyValueAddedList extends $dara.Model {
  /**
   * @example
   * 1580918400000
   */
  expireTime?: number;
  /**
   * @example
   * 1575527305000
   */
  gmtCreate?: number;
  /**
   * @example
   * ddos_fl_pre-cn-xxxx
   */
  instanceId?: string;
  /**
   * @example
   * 5497558138880
   */
  logSize?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  storeRegion?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      instanceId: 'InstanceId',
      logSize: 'LogSize',
      status: 'Status',
      storeRegion: 'StoreRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      gmtCreate: 'number',
      instanceId: 'string',
      logSize: 'number',
      status: 'number',
      storeRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListValueAddedResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  valueAddedList?: ListValueAddedResponseBodyValueAddedList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      valueAddedList: 'ValueAddedList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      valueAddedList: { 'type': 'array', 'itemType': ListValueAddedResponseBodyValueAddedList },
    };
  }

  validate() {
    if(Array.isArray(this.valueAddedList)) {
      $dara.Model.validateArray(this.valueAddedList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

