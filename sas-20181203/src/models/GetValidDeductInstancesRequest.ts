// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetValidDeductInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the resource plan instance. You can call [QueryResourcePackageInstances]() to query instance ID.
   * 
   * @example
   * sas_cspm_dp_cn-***80001
   */
  instanceId?: string;
  /**
   * @remarks
   * The code of the resource plan. Valid values:
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
   * The status of the resource plan. The default value is valid. This parameter does not support modification.
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

