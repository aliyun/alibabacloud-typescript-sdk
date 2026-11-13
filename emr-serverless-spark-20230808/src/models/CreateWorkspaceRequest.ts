// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceRequestResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The resource limit of the workspace.
   * 
   * @example
   * 1000
   */
  cu?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 100
   */
  gpu?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      gpu: 'gpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'string',
      gpu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter is required when the paymentType parameter is set to Pre.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal period. This parameter is required when the paymentType parameter is set to Pre.
   * 
   * @example
   * 100
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * The auto-renewal epoch. This parameter is required when the paymentType parameter is set to Pre.
   * 
   * @example
   * month
   */
  autoRenewPeriodUnit?: string;
  /**
   * @remarks
   * Specifies whether to automatically start a session.
   * 
   * @example
   * false
   */
  autoStartSessionCluster?: boolean;
  /**
   * @remarks
   * The client token for idempotence verification.
   * 
   * @example
   * 8e6aae2810c8f67229ca70bb31cd****
   */
  clientToken?: string;
  /**
   * @remarks
   * The DLF catalog information.
   * 
   * @example
   * 123xxxxx
   */
  dlfCatalogId?: string;
  /**
   * @remarks
   * The DLF binding type.
   * 
   * @example
   * dlf1.0
   */
  dlfType?: string;
  /**
   * @remarks
   * The number of subscription periods. This parameter is required when the paymentType parameter is set to Pre.
   * 
   * @example
   * 12452
   */
  duration?: string;
  /**
   * @remarks
   * The list of GPU instance types.
   */
  gpuSpec?: string[];
  /**
   * @remarks
   * The OSS bucket.
   * 
   * @example
   * oss://test-bucket/
   */
  ossBucket?: string;
  /**
   * @remarks
   * The subscription period unit.
   * 
   * @example
   * 1000
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - PayAsYouGo: pay-as-you-go
   * - Pre: subscription
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The name of the RAM role used to execute Spark jobs.
   * 
   * @example
   * AliyunEMRSparkJobRunDefaultRole
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The release type.
   * 
   * @example
   * pro
   */
  releaseType?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmwpi66knkxny
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource specifications.
   */
  resourceSpec?: CreateWorkspaceRequestResourceSpec;
  /**
   * @remarks
   * The list of tags.
   * 
   * **if can be null:**
   * false
   */
  tag?: CreateWorkspaceRequestTag[];
  /**
   * @remarks
   * The name of the workspace.
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
      autoRenew: 'autoRenew',
      autoRenewPeriod: 'autoRenewPeriod',
      autoRenewPeriodUnit: 'autoRenewPeriodUnit',
      autoStartSessionCluster: 'autoStartSessionCluster',
      clientToken: 'clientToken',
      dlfCatalogId: 'dlfCatalogId',
      dlfType: 'dlfType',
      duration: 'duration',
      gpuSpec: 'gpuSpec',
      ossBucket: 'ossBucket',
      paymentDurationUnit: 'paymentDurationUnit',
      paymentType: 'paymentType',
      ramRoleName: 'ramRoleName',
      releaseType: 'releaseType',
      resourceGroupId: 'resourceGroupId',
      resourceSpec: 'resourceSpec',
      tag: 'tag',
      workspaceName: 'workspaceName',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      autoRenewPeriod: 'string',
      autoRenewPeriodUnit: 'string',
      autoStartSessionCluster: 'boolean',
      clientToken: 'string',
      dlfCatalogId: 'string',
      dlfType: 'string',
      duration: 'string',
      gpuSpec: { 'type': 'array', 'itemType': 'string' },
      ossBucket: 'string',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      ramRoleName: 'string',
      releaseType: 'string',
      resourceGroupId: 'string',
      resourceSpec: CreateWorkspaceRequestResourceSpec,
      tag: { 'type': 'array', 'itemType': CreateWorkspaceRequestTag },
      workspaceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gpuSpec)) {
      $dara.Model.validateArray(this.gpuSpec);
    }
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

