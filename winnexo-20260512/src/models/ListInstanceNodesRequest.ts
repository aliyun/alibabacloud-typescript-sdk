// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceNodesRequest extends $dara.Model {
  /**
   * @remarks
   * 协作空间ID
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 物理工作流实例ID（planId）
   * 
   * This parameter is required.
   * 
   * @example
   * plan_example
   */
  instanceId?: string;
  /**
   * @remarks
   * 租户ID，缺省使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      instanceId: 'instanceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      instanceId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

