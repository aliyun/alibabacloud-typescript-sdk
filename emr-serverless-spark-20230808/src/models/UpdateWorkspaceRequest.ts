// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceRequestGpuSubscription extends $dara.Model {
  autoRenew?: boolean;
  duration?: number;
  /**
   * @example
   * 8
   */
  gpuMachineNum?: number;
  instanceId?: string;
  /**
   * @example
   * ecs.gn7i-c8g1.2xlarge
   */
  instanceTypeId?: string;
  /**
   * @example
   * BUY
   */
  operation?: string;
  paymentDurationUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'autoRenew',
      duration: 'duration',
      gpuMachineNum: 'gpuMachineNum',
      instanceId: 'instanceId',
      instanceTypeId: 'instanceTypeId',
      operation: 'operation',
      paymentDurationUnit: 'paymentDurationUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      duration: 'number',
      gpuMachineNum: 'number',
      instanceId: 'string',
      instanceTypeId: 'string',
      operation: 'string',
      paymentDurationUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceRequestSubscription extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter is required for the pre-paid billing type.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal duration. This parameter is required for the pre-paid billing type.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * The auto-renewal period unit. This parameter is required for the pre-paid billing type.
   * 
   * @example
   * MONTH
   */
  autoRenewPeriodUnit?: string;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * my-token-asxkxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The number of subscription periods. This parameter is required for the pre-paid billing type.
   * 
   * @example
   * 1799
   */
  duration?: string;
  /**
   * @remarks
   * The subscription period unit.
   * 
   * @example
   * MONTH
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The list of running queues to be converted.
   */
  queue?: string[];
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'autoRenew',
      autoRenewPeriod: 'autoRenewPeriod',
      autoRenewPeriodUnit: 'autoRenewPeriodUnit',
      clientToken: 'clientToken',
      duration: 'duration',
      paymentDurationUnit: 'paymentDurationUnit',
      queue: 'queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      autoRenewPeriod: 'string',
      autoRenewPeriodUnit: 'string',
      clientToken: 'string',
      duration: 'string',
      paymentDurationUnit: 'string',
      queue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.queue)) {
      $dara.Model.validateArray(this.queue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The upper limit of workspace resources.
   * 
   * @example
   * 5000
   */
  cu?: number;
  /**
   * @remarks
   * The number of GPU cards.
   * 
   * @example
   * 100
   */
  gpu?: number;
  /**
   * @remarks
   * The GPU instance type.
   */
  gpuSpec?: string[];
  gpuSubscription?: UpdateWorkspaceRequestGpuSubscription;
  ipWhiteList?: string[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmwpi66knkxny
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information for converting from pay-as-you-go to subscription.
   */
  subscription?: UpdateWorkspaceRequestSubscription;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-975bcfda9625****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * default
   */
  workspaceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      gpu: 'gpu',
      gpuSpec: 'gpuSpec',
      gpuSubscription: 'gpuSubscription',
      ipWhiteList: 'ipWhiteList',
      resourceGroupId: 'resourceGroupId',
      subscription: 'subscription',
      workspaceId: 'workspaceId',
      workspaceName: 'workspaceName',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      gpu: 'number',
      gpuSpec: { 'type': 'array', 'itemType': 'string' },
      gpuSubscription: UpdateWorkspaceRequestGpuSubscription,
      ipWhiteList: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      subscription: UpdateWorkspaceRequestSubscription,
      workspaceId: 'string',
      workspaceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gpuSpec)) {
      $dara.Model.validateArray(this.gpuSpec);
    }
    if(this.gpuSubscription && typeof (this.gpuSubscription as any).validate === 'function') {
      (this.gpuSubscription as any).validate();
    }
    if(Array.isArray(this.ipWhiteList)) {
      $dara.Model.validateArray(this.ipWhiteList);
    }
    if(this.subscription && typeof (this.subscription as any).validate === 'function') {
      (this.subscription as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

