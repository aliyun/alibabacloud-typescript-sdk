// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillRequest extends $dara.Model {
  /**
   * @remarks
   * 是否返回完整文件树（默认 False，避免大体积响应）
   * 
   * @example
   * false
   */
  includeSkillFiles?: boolean;
  /**
   * @remarks
   * 技能编码（全局唯一），优先级高于 skillName
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  /**
   * @remarks
   * 技能名称，未传 skillCode 时使用；租户范围内必须唯一
   * 
   * @example
   * string_value
   */
  skillName?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 视角：draft（草稿/编辑视角）或 published（已发布视角，默认）
   * 
   * @example
   * draft
   */
  viewMode?: string;
  static names(): { [key: string]: string } {
    return {
      includeSkillFiles: 'includeSkillFiles',
      skillCode: 'skillCode',
      skillName: 'skillName',
      tenantId: 'tenantId',
      viewMode: 'viewMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeSkillFiles: 'boolean',
      skillCode: 'string',
      skillName: 'string',
      tenantId: 'string',
      viewMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

