// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceRequestSubscription extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to enable auto-renewal. Required for subscription plans.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal duration. Required for subscription plans.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * The unit for the auto-renewal duration. Required for subscription plans.
   * 
   * @example
   * MONTH
   */
  autoRenewPeriodUnit?: string;
  /**
   * @remarks
   * A unique, case-sensitive token to ensure request idempotence.
   * 
   * @example
   * my-token-asxkxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The subscription duration. This parameter is required for subscription plans.
   * 
   * @example
   * 1799
   */
  duration?: string;
  /**
   * @remarks
   * The unit of the subscription period.
   * 
   * @example
   * MONTH
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The queues to convert to the subscription plan.
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
   * The resource cap for the workspace.
   * 
   * @example
   * 5000
   */
  cu?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 100
   */
  gpu?: number;
  /**
   * @remarks
   * The GPU specifications.
   */
  gpuSpec?: string[];
  /**
   * @remarks
   * The IP whitelist.
   */
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
   * Details for converting a pay-as-you-go workspace to a subscription plan.
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

