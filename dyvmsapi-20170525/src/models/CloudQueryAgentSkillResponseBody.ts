// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryAgentSkillResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 座席id
   * 
   * @example
   * 64
   */
  agentId?: number;
  /**
   * @remarks
   * 创建时间，格式: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * 企业编号
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * queueSkill关系表中id
   * 
   * @example
   * 99
   */
  id?: number;
  /**
   * @remarks
   * skill的id
   * 
   * @example
   * 79
   */
  skillId?: number;
  /**
   * @remarks
   * 技能值
   * 
   * @example
   * 7
   */
  skillLevel?: number;
  /**
   * @remarks
   * 技能名称
   * 
   * @example
   * skillname
   */
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      createTime: 'CreateTime',
      enterpriseId: 'EnterpriseId',
      id: 'Id',
      skillId: 'SkillId',
      skillLevel: 'SkillLevel',
      skillName: 'SkillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      createTime: 'string',
      enterpriseId: 'number',
      id: 'number',
      skillId: 'number',
      skillLevel: 'number',
      skillName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudQueryAgentSkillResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 座席技能列表
   */
  list?: CloudQueryAgentSkillResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudQueryAgentSkillResponseBodyDataList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudQueryAgentSkillResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudQueryAgentSkillResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 5B0F201F-DCDA-45C2-AA92-1AE177F94991
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CloudQueryAgentSkillResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

