// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateWorkspaceRequestResourceSpec } from "./CreateWorkspaceRequestResourceSpec";
import { CreateWorkspaceRequestTag } from "./CreateWorkspaceRequestTag";


export class CreateWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter is required only if the paymentType parameter is set to Pre.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal duration. This parameter is required only if the paymentType parameter is set to Pre.
   * 
   * @example
   * 100
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * The unit of the auto-renewal duration. This parameter is required only if the paymentType parameter is set to Pre.
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
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 8e6aae2810c8f67229ca70bb31cd****
   */
  clientToken?: string;
  /**
   * @remarks
   * The information of the Data Lake Formation (DLF) catalog.
   * 
   * @example
   * 123xxxxx
   */
  dlfCatalogId?: string;
  /**
   * @remarks
   * The version of DLF.
   * 
   * @example
   * dlf1.0
   */
  dlfType?: string;
  /**
   * @remarks
   * The subscription period. This parameter is required only if the paymentType parameter is set to Pre.
   * 
   * @example
   * 12452
   */
  duration?: string;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket.
   * 
   * @example
   * oss://test-bucket/
   */
  ossBucket?: string;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * @example
   * 1000
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PayAsYouGo
   * *   Pre
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The name of the role used to run Spark jobs.
   * 
   * @example
   * AliyunEMRSparkJobRunDefaultRole
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The type of the version.
   * 
   * @example
   * pro
   */
  releaseType?: string;
  /**
   * @remarks
   * The resource specifications.
   */
  resourceSpec?: CreateWorkspaceRequestResourceSpec;
  /**
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
      ossBucket: 'ossBucket',
      paymentDurationUnit: 'paymentDurationUnit',
      paymentType: 'paymentType',
      ramRoleName: 'ramRoleName',
      releaseType: 'releaseType',
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
      ossBucket: 'string',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      ramRoleName: 'string',
      releaseType: 'string',
      resourceSpec: CreateWorkspaceRequestResourceSpec,
      tag: { 'type': 'array', 'itemType': CreateWorkspaceRequestTag },
      workspaceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
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

