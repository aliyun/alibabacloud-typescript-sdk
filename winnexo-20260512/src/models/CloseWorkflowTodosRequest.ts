// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseWorkflowTodosRequest extends $dara.Model {
  /**
   * @remarks
   * 协作空间 ID（命中范围限定该空间内）
   * 
   * This parameter is required.
   * 
   * @example
   * cg_123
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 工作流 ID（run 粒度）
   * 
   * This parameter is required.
   * 
   * @example
   * wf-1
   */
  sourceWorkflowId?: string;
  /**
   * @remarks
   * 租户ID，公共参数；缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      sourceWorkflowId: 'sourceWorkflowId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      sourceWorkflowId: 'string',
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

