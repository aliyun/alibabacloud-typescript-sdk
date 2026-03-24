// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetValidDeductInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Resource package instance ID, can be queried through [QueryResourcePackageInstances]().
   * 
   * @example
   * sas_cspm_dp_cn-***80001
   */
  instanceId?: string;
  /**
   * @remarks
   * Resource package name code, values:
   * 
   * - Vulnerability resource package: **sas_vul_dp_cn**
   * - CSPM resource package: **sas_cspm_dp_cn**
   * - Anti-virus resource package: **sas_viruspackage_dp_cn**
   * 
   * @example
   * sas_vul_dp_cn
   */
  modules?: string;
  /**
   * @remarks
   * Resource package status, default is valid (valid), not modifiable.
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

