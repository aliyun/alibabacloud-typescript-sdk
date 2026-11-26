// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceKnowledgeBaseAdminsResponseBodyCreator extends $dara.Model {
  /**
   * @remarks
   * 是否为不可移除的创建者
   * 
   * @example
   * true
   */
  immutable?: boolean;
  /**
   * @remarks
   * 用户 ID 或用户组 ID
   * 
   * @example
   * 10001
   */
  principalId?: string;
  /**
   * @remarks
   * 主体显示名称，无法解析时为空
   * 
   * @example
   * 张三
   */
  principalName?: string;
  /**
   * @remarks
   * 主体类型：USER 或 USER_GROUP
   * 
   * @example
   * USER
   */
  principalType?: string;
  /**
   * @remarks
   * 权限来源：CREATOR 或 DIRECT
   * 
   * @example
   * CREATOR
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      immutable: 'immutable',
      principalId: 'principalId',
      principalName: 'principalName',
      principalType: 'principalType',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      immutable: 'boolean',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceKnowledgeBaseAdminsResponseBodyEffectiveApprovers extends $dara.Model {
  /**
   * @remarks
   * 产生该审批权限的主体 ID 列表
   * 
   * @example
   * ["10001","group-1"]
   */
  sourcePrincipalIds?: string[];
  /**
   * @remarks
   * 有效审批用户 ID
   * 
   * @example
   * 10001
   */
  userId?: number;
  /**
   * @remarks
   * 租户内显示名称，无法解析时为空
   * 
   * @example
   * 张三
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      sourcePrincipalIds: 'sourcePrincipalIds',
      userId: 'userId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourcePrincipalIds: { 'type': 'array', 'itemType': 'string' },
      userId: 'number',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourcePrincipalIds)) {
      $dara.Model.validateArray(this.sourcePrincipalIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceKnowledgeBaseAdminsResponseBodyPrincipals extends $dara.Model {
  /**
   * @remarks
   * 是否为不可移除的创建者
   * 
   * @example
   * true
   */
  immutable?: boolean;
  /**
   * @remarks
   * 用户 ID 或用户组 ID
   * 
   * @example
   * 10001
   */
  principalId?: string;
  /**
   * @remarks
   * 主体显示名称，无法解析时为空
   * 
   * @example
   * 张三
   */
  principalName?: string;
  /**
   * @remarks
   * 主体类型：USER 或 USER_GROUP
   * 
   * @example
   * USER
   */
  principalType?: string;
  /**
   * @remarks
   * 权限来源：CREATOR 或 DIRECT
   * 
   * @example
   * CREATOR
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      immutable: 'immutable',
      principalId: 'principalId',
      principalName: 'principalName',
      principalType: 'principalType',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      immutable: 'boolean',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceKnowledgeBaseAdminsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 知识库创建者
   */
  creator?: ReplaceKnowledgeBaseAdminsResponseBodyCreator;
  /**
   * @remarks
   * 已配置的知识库根目录业务 ID
   * 
   * @example
   * kb_001
   */
  directoryId?: string;
  /**
   * @remarks
   * 用户组展开和去重后的有效审批人
   */
  effectiveApprovers?: ReplaceKnowledgeBaseAdminsResponseBodyEffectiveApprovers[];
  /**
   * @remarks
   * 错误描述，成功时为空
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * 配置完成后的管理员主体列表，包含创建者
   */
  principals?: ReplaceKnowledgeBaseAdminsResponseBodyPrincipals[];
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      creator: 'creator',
      directoryId: 'directoryId',
      effectiveApprovers: 'effectiveApprovers',
      message: 'message',
      principals: 'principals',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creator: ReplaceKnowledgeBaseAdminsResponseBodyCreator,
      directoryId: 'string',
      effectiveApprovers: { 'type': 'array', 'itemType': ReplaceKnowledgeBaseAdminsResponseBodyEffectiveApprovers },
      message: 'string',
      principals: { 'type': 'array', 'itemType': ReplaceKnowledgeBaseAdminsResponseBodyPrincipals },
      requestId: 'string',
    };
  }

  validate() {
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(Array.isArray(this.effectiveApprovers)) {
      $dara.Model.validateArray(this.effectiveApprovers);
    }
    if(Array.isArray(this.principals)) {
      $dara.Model.validateArray(this.principals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

