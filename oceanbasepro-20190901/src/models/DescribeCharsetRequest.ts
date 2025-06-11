// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCharsetRequest extends $dara.Model {
  instanceId?: string;
  /**
   * @remarks
   * 实例的系列  - normal（默认）：标准集群版（云盘）  - normal_ssd：标准集群版（本地盘） - history：历史库集群版。
   * 
   * @example
   * normal
   */
  series?: string;
  /**
   * @remarks
   * The return result of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * Oracle
   */
  tenantMode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      series: 'Series',
      tenantMode: 'TenantMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      series: 'string',
      tenantMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

