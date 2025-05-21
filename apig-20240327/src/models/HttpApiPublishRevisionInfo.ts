// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiPublishRevisionInfoCloudProductConfig } from "./HttpApiPublishRevisionInfoCloudProductConfig";
import { HttpApiDomainInfo } from "./HttpApiDomainInfo";
import { HttpApiPublishRevisionInfoDnsConfigs } from "./HttpApiPublishRevisionInfoDnsConfigs";
import { HttpApiPublishRevisionInfoEnvironmentInfo } from "./HttpApiPublishRevisionInfoEnvironmentInfo";
import { HttpApiOperationInfo } from "./HttpApiOperationInfo";
import { HttpApiPublishRevisionInfoServiceConfigs } from "./HttpApiPublishRevisionInfoServiceConfigs";
import { HttpApiPublishRevisionInfoVipConfigs } from "./HttpApiPublishRevisionInfoVipConfigs";


export class HttpApiPublishRevisionInfo extends $dara.Model {
  /**
   * @example
   * SingleService
   */
  backendScene?: string;
  /**
   * @example
   * Service
   */
  backendType?: string;
  cloudProductConfig?: HttpApiPublishRevisionInfoCloudProductConfig;
  /**
   * @example
   * 1718807057927
   */
  createTimestamp?: number;
  customDomains?: HttpApiDomainInfo[];
  dnsConfigs?: HttpApiPublishRevisionInfoDnsConfigs[];
  /**
   * @example
   * env-xxx
   */
  environmentInfo?: HttpApiPublishRevisionInfoEnvironmentInfo;
  /**
   * @example
   * true
   */
  isCurrentVersion?: boolean;
  operations?: HttpApiOperationInfo[];
  /**
   * @example
   * apr-xxx
   */
  revisionId?: string;
  serviceConfigs?: HttpApiPublishRevisionInfoServiceConfigs[];
  /**
   * @example
   * env-xxx.com
   */
  subDomains?: HttpApiDomainInfo[];
  vipConfigs?: HttpApiPublishRevisionInfoVipConfigs[];
  static names(): { [key: string]: string } {
    return {
      backendScene: 'backendScene',
      backendType: 'backendType',
      cloudProductConfig: 'cloudProductConfig',
      createTimestamp: 'createTimestamp',
      customDomains: 'customDomains',
      dnsConfigs: 'dnsConfigs',
      environmentInfo: 'environmentInfo',
      isCurrentVersion: 'isCurrentVersion',
      operations: 'operations',
      revisionId: 'revisionId',
      serviceConfigs: 'serviceConfigs',
      subDomains: 'subDomains',
      vipConfigs: 'vipConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendScene: 'string',
      backendType: 'string',
      cloudProductConfig: HttpApiPublishRevisionInfoCloudProductConfig,
      createTimestamp: 'number',
      customDomains: { 'type': 'array', 'itemType': HttpApiDomainInfo },
      dnsConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoDnsConfigs },
      environmentInfo: HttpApiPublishRevisionInfoEnvironmentInfo,
      isCurrentVersion: 'boolean',
      operations: { 'type': 'array', 'itemType': HttpApiOperationInfo },
      revisionId: 'string',
      serviceConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoServiceConfigs },
      subDomains: { 'type': 'array', 'itemType': HttpApiDomainInfo },
      vipConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoVipConfigs },
    };
  }

  validate() {
    if(this.cloudProductConfig && typeof (this.cloudProductConfig as any).validate === 'function') {
      (this.cloudProductConfig as any).validate();
    }
    if(Array.isArray(this.customDomains)) {
      $dara.Model.validateArray(this.customDomains);
    }
    if(Array.isArray(this.dnsConfigs)) {
      $dara.Model.validateArray(this.dnsConfigs);
    }
    if(this.environmentInfo && typeof (this.environmentInfo as any).validate === 'function') {
      (this.environmentInfo as any).validate();
    }
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    if(Array.isArray(this.serviceConfigs)) {
      $dara.Model.validateArray(this.serviceConfigs);
    }
    if(Array.isArray(this.subDomains)) {
      $dara.Model.validateArray(this.subDomains);
    }
    if(Array.isArray(this.vipConfigs)) {
      $dara.Model.validateArray(this.vipConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

