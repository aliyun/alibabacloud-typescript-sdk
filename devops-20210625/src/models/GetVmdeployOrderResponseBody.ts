// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVMDeployOrderResponseBodyDeployOrderActions extends $dara.Model {
  /**
   * @example
   * true
   */
  disable?: boolean;
  /**
   * @example
   * {}
   */
  params?: any;
  /**
   * @example
   * StopVMDeployOrder
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      disable: 'disable',
      params: 'params',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disable: 'boolean',
      params: 'any',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfoDeployMachinesActions extends $dara.Model {
  /**
   * @example
   * true
   */
  disable?: boolean;
  /**
   * @example
   * {}
   */
  params?: any;
  /**
   * @example
   * RetryVMDeployMachine
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      disable: 'disable',
      params: 'params',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disable: 'boolean',
      params: 'any',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfoDeployMachines extends $dara.Model {
  actions?: GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfoDeployMachinesActions[];
  /**
   * @example
   * 22
   */
  batchNum?: number;
  /**
   * @example
   * ok
   */
  clientStatus?: string;
  /**
   * @example
   * 1111111111
   */
  createTime?: number;
  /**
   * @example
   * 127.0.0.1
   */
  ip?: string;
  /**
   * @example
   * sasssasa
   */
  machineSn?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * 11111111
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      batchNum: 'batchNum',
      clientStatus: 'clientStatus',
      createTime: 'createTime',
      ip: 'ip',
      machineSn: 'machineSn',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfoDeployMachinesActions },
      batchNum: 'number',
      clientStatus: 'string',
      createTime: 'number',
      ip: 'string',
      machineSn: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfo extends $dara.Model {
  /**
   * @example
   * 11
   */
  batchNum?: number;
  deployMachines?: GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfoDeployMachines[];
  /**
   * @example
   * 1111
   */
  hostGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      batchNum: 'batchNum',
      deployMachines: 'deployMachines',
      hostGroupId: 'hostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchNum: 'number',
      deployMachines: { 'type': 'array', 'itemType': GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfoDeployMachines },
      hostGroupId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deployMachines)) {
      $dara.Model.validateArray(this.deployMachines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVMDeployOrderResponseBodyDeployOrder extends $dara.Model {
  actions?: GetVMDeployOrderResponseBodyDeployOrderActions[];
  /**
   * @example
   * 111111111111
   */
  createTime?: number;
  /**
   * @example
   * ssaassa
   */
  creator?: string;
  /**
   * @example
   * 2
   */
  currentBatch?: number;
  deployMachineInfo?: GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfo;
  /**
   * @example
   * 11111
   */
  deployOrderId?: string;
  exceptionCode?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * 3
   */
  totalBatch?: number;
  /**
   * @example
   * 11111111111
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      createTime: 'createTime',
      creator: 'creator',
      currentBatch: 'currentBatch',
      deployMachineInfo: 'deployMachineInfo',
      deployOrderId: 'deployOrderId',
      exceptionCode: 'exceptionCode',
      status: 'status',
      totalBatch: 'totalBatch',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': GetVMDeployOrderResponseBodyDeployOrderActions },
      createTime: 'number',
      creator: 'string',
      currentBatch: 'number',
      deployMachineInfo: GetVMDeployOrderResponseBodyDeployOrderDeployMachineInfo,
      deployOrderId: 'string',
      exceptionCode: 'string',
      status: 'string',
      totalBatch: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(this.deployMachineInfo && typeof (this.deployMachineInfo as any).validate === 'function') {
      (this.deployMachineInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVMDeployOrderResponseBody extends $dara.Model {
  deployOrder?: GetVMDeployOrderResponseBodyDeployOrder;
  /**
   * @example
   * ”“
   */
  errorCode?: string;
  /**
   * @example
   * ”“
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true 接口调用成功，false 接口调用失败
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      deployOrder: 'deployOrder',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployOrder: GetVMDeployOrderResponseBodyDeployOrder,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.deployOrder && typeof (this.deployOrder as any).validate === 'function') {
      (this.deployOrder as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

