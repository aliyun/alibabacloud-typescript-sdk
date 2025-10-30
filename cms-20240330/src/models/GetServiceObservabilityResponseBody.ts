// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceObservabilityResponseBodyEntryPointInfo extends $dara.Model {
  /**
   * @remarks
   * Authentication Token for Data Reporting
   * 
   * @example
   * gaddp****@de20f2***1ce***
   */
  authToken?: string;
  /**
   * @remarks
   * Private Network Access Address
   * 
   * @example
   * project-xtrace-xxxx-cn-hangzhou.cn-hangzhou-intranet.log.aliyuncs.com
   */
  privateDomain?: string;
  /**
   * @remarks
   * SLS Project
   * 
   * @example
   * proj-xtrace-xxxxx
   */
  project?: string;
  /**
   * @remarks
   * Public Network Access Address
   * 
   * @example
   * project-xtrace-xxxx-cn-hangzhou.cn-hangzhou.log.aliyuncs.com
   */
  publicDomain?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      privateDomain: 'privateDomain',
      project: 'project',
      publicDomain: 'publicDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      privateDomain: 'string',
      project: 'string',
      publicDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceObservabilityResponseBody extends $dara.Model {
  /**
   * @remarks
   * Endpoint and Authentication Information
   */
  entryPointInfo?: GetServiceObservabilityResponseBodyEntryPointInfo;
  /**
   * @remarks
   * Billing Type
   * 
   * @example
   * arms=serverless;xtrace=serverless
   */
  feeType?: string;
  /**
   * @remarks
   * Quota Configuration
   */
  quotas?: { [key: string]: string };
  /**
   * @remarks
   * Region
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 4852B9B5-345C-5CBC-A15F-786D83ECCBBA
   */
  requestId?: string;
  /**
   * @remarks
   * System Configuration
   */
  settings?: { [key: string]: string };
  /**
   * @remarks
   * Resource Initialization Status
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Application Observability Type
   * 
   * @example
   * apm
   */
  type?: string;
  /**
   * @remarks
   * Workspace Name
   * 
   * @example
   * default-cms-1654218***343050-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entryPointInfo: 'entryPointInfo',
      feeType: 'feeType',
      quotas: 'quotas',
      regionId: 'regionId',
      requestId: 'requestId',
      settings: 'settings',
      status: 'status',
      type: 'type',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryPointInfo: GetServiceObservabilityResponseBodyEntryPointInfo,
      feeType: 'string',
      quotas: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      requestId: 'string',
      settings: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      status: 'string',
      type: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.entryPointInfo && typeof (this.entryPointInfo as any).validate === 'function') {
      (this.entryPointInfo as any).validate();
    }
    if(this.quotas) {
      $dara.Model.validateMap(this.quotas);
    }
    if(this.settings) {
      $dara.Model.validateMap(this.settings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

