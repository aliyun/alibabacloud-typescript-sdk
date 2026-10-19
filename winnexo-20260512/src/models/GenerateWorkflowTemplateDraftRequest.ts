// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateWorkflowTemplateDraftRequest extends $dara.Model {
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
  previousDraft?: { [key: string]: any };
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
      previousDraft: 'previousDraft',
      requirement: 'requirement',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      previousDraft: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requirement: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(this.previousDraft) {
      $dara.Model.validateMap(this.previousDraft);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

