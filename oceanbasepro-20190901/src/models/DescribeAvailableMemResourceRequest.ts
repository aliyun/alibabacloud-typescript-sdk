// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableMemResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * This parameter is required.
   * 
   * @example
   * 14
   */
  cpuNum?: number;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  /**
   * @remarks
   * The number of resource distribution nodes in the tenant.   
   * The number is determined by the deployment mode of the cluster. If the cluster is deployed in 2-2-2 mode, the maximum number of resource distribution nodes is 2.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      cpuNum: 'CpuNum',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuNum: 'number',
      instanceId: 'string',
      tenantId: 'string',
      unitNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

