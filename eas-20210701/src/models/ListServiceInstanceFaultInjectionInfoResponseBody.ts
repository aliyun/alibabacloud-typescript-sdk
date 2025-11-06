// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceFaultInjectionInfoResponseBodyFaultInfoListFaultStatus extends $dara.Model {
  /**
   * @example
   * FaultInjectedSuccess
   */
  faultStatus?: string;
  /**
   * @example
   * Network interface not found
   */
  faultStatusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      faultStatus: 'FaultStatus',
      faultStatusMessage: 'FaultStatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultStatus: 'string',
      faultStatusMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceFaultInjectionInfoResponseBodyFaultInfoList extends $dara.Model {
  /**
   * @example
   * {
   *   "FaultType": "DiskBurnTask",
   *   "FaultArgs": {
   *     "FaultAction": "burn",
   *     "Read": true,
   *     "Write": true,
   *     "Size": 100
   *   }
   * }
   */
  faultArgs?: any;
  faultStatus?: ListServiceInstanceFaultInjectionInfoResponseBodyFaultInfoListFaultStatus;
  /**
   * @example
   * DiskFillTask
   */
  faultType?: string;
  static names(): { [key: string]: string } {
    return {
      faultArgs: 'FaultArgs',
      faultStatus: 'FaultStatus',
      faultType: 'FaultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultArgs: 'any',
      faultStatus: ListServiceInstanceFaultInjectionInfoResponseBodyFaultInfoListFaultStatus,
      faultType: 'string',
    };
  }

  validate() {
    if(this.faultStatus && typeof (this.faultStatus as any).validate === 'function') {
      (this.faultStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceFaultInjectionInfoResponseBody extends $dara.Model {
  faultInfoList?: ListServiceInstanceFaultInjectionInfoResponseBodyFaultInfoList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      faultInfoList: 'FaultInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultInfoList: { 'type': 'array', 'itemType': ListServiceInstanceFaultInjectionInfoResponseBodyFaultInfoList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.faultInfoList)) {
      $dara.Model.validateArray(this.faultInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

