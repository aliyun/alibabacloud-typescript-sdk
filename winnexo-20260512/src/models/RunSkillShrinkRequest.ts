// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSkillShrinkRequest extends $dara.Model {
  argumentsShrink?: string;
  /**
   * @remarks
   * 幂等 token，调用方自行生成；当前版本仅记录到 metadata，未做去重
   * 
   * @example
   * string_value
   */
  clientToken?: string;
  /**
   * @remarks
   * 抽象模型名（模型档位），不传默认 standard
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * 数字员工名称；用于按绑定关系计算 CodeAgent allowedSkills 白名单
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
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
  static names(): { [key: string]: string } {
    return {
      argumentsShrink: 'arguments',
      clientToken: 'clientToken',
      model: 'model',
      operatingObjectName: 'operatingObjectName',
      skillCode: 'skillCode',
      skillName: 'skillName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argumentsShrink: 'string',
      clientToken: 'string',
      model: 'string',
      operatingObjectName: 'string',
      skillCode: 'string',
      skillName: 'string',
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

