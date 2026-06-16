// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceRequestResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The resource quota for the workspace.
   * 
   * @example
   * 1000
   */
  cu?: string;
  /**
   * @remarks
   * The GPU resource quota for the workspace.
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
   * Specifies whether to enable auto-renewal. This parameter is required if you set `paymentType` to `Pre`.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal duration. This parameter is required if `autoRenew` is set to `true`.
   * 
   * @example
   * 100
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * The unit of the auto-renewal duration. This parameter is required if `autoRenew` is set to `true`.
   * 
   * @example
   * month
   */
  autoRenewPeriodUnit?: string;
  /**
   * @remarks
   * Specifies whether to automatically start a session cluster when the workspace is created.
   * 
   * @example
   * false
   */
  autoStartSessionCluster?: boolean;
  /**
   * @remarks
   * A token that ensures the idempotency of the request.
   * 
   * @example
   * 8e6aae2810c8f67229ca70bb31cd****
   */
  clientToken?: string;
  /**
   * @remarks
   * The DLF Catalog ID.
   * 
   * @example
   * 123xxxxx
   */
  dlfCatalogId?: string;
  /**
   * @remarks
   * The DLF type.
   * 
   * @example
   * dlf1.0
   */
  dlfType?: string;
  /**
   * @remarks
   * The subscription duration. This parameter is required if you set `paymentType` to `Pre`.
   * 
   * @example
   * 12452
   */
  duration?: string;
  /**
   * @remarks
   * The specifications for the GPU resources.
   */
  gpuSpec?: string[];
  /**
   * @remarks
   * The OSS bucket for the workspace. The path must be in the `oss://<bucket-name>/` format.
   * 
   * @example
   * oss://test-bucket/
   */
  ossBucket?: string;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is required if you set `paymentType` to `Pre`.
   * 
   * @example
   * 1000
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - `PayAsYouGo`: pay-as-you-go
   * 
   * - `Pre`: subscription
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The name of the RAM role used to run Spark jobs.
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
   * The resource group ID.
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
   * The tags to add to the workspace.
   * 
   * **if can be null:**
   * false
   */
  tag?: CreateWorkspaceRequestTag[];
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

