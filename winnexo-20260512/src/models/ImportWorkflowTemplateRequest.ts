// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportWorkflowTemplateRequest extends $dara.Model {
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
   * 可移植模板 JSON（stepId/sortOrder 可省略）
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  template?: { [key: string]: any };
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
      template: 'template',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      template: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tenantId: 'string',
    };
  }

  validate() {
    if(this.template) {
      $dara.Model.validateMap(this.template);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

