// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetValidDeductInstancesRequestSdkRequest extends $dara.Model {
  /**
   * @remarks
   * The resource plan instance ID. You can call QueryResourcePackageInstances to query the ID.
   * 
   * @example
   * sas_cspm_dp_cn-***80001
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource plan name code. Valid values:
   * 
   * - Vulnerability resource plan: **sas_vul_dp_cn**
   * - CSPM resource plan: **sas_cspm_dp_cn**
   * - Anti-virus Edition resource plan: **sas_viruspackage_dp_cn**
   * 
   * @example
   * sas_vul_dp_cn
   */
  modules?: string;
  /**
   * @remarks
   * The resource plan status. Default value: valid. This parameter cannot be modified.
   * 
   * @example
   * Available
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      modules: 'Modules',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      modules: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetValidDeductInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-fuzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Security Center SDK request parameters.
   */
  sdkRequest?: GetValidDeductInstancesRequestSdkRequest;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sdkRequest: 'SdkRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sdkRequest: GetValidDeductInstancesRequestSdkRequest,
    };
  }

  validate() {
    if(this.sdkRequest && typeof (this.sdkRequest as any).validate === 'function') {
      (this.sdkRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

