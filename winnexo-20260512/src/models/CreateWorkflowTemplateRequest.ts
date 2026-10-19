// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowTemplateRequest extends $dara.Model {
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
   * 完整模板定义 JSON（name/description/steps）
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  definition?: { [key: string]: any };
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
      definition: 'definition',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      definition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tenantId: 'string',
    };
  }

  validate() {
    if(this.definition) {
      $dara.Model.validateMap(this.definition);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

