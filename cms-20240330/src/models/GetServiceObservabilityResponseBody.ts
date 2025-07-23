// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceObservabilityResponseBodyEntryPointInfo extends $dara.Model {
  authToken?: string;
  privateDomain?: string;
  /**
   * @remarks
   * SLS Project
   * 
   * @example
   * proj-xtrace-xxxxx
   */
  project?: string;
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
  entryPointInfo?: GetServiceObservabilityResponseBodyEntryPointInfo;
  feeType?: string;
  quotas?: { [key: string]: string };
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 4852B9B5-345C-5CBC-A15F-786D83ECCBBA
   */
  requestId?: string;
  settings?: { [key: string]: string };
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * apm
   */
  type?: string;
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

