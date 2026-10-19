// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateWorkflowTemplateDraftShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 协作空间 ID
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 上一轮草稿；提供时基于它迭代修改
   * 
   * @example
   * example
   */
  previousDraftShrink?: string;
  /**
   * @remarks
   * 模板需求描述
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  requirement?: string;
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
      previousDraftShrink: 'previousDraft',
      requirement: 'requirement',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      previousDraftShrink: 'string',
      requirement: 'string',
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

