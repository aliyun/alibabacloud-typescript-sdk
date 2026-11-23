// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenServiceRequestCommunicationUserInfo extends $dara.Model {
  /**
   * @remarks
   * 客户应用内的业务用户标识，须符合凭据身份配置。非空，最多 256 个 UTF-16 代码单元，无首尾空白、控制字符或非法 Unicode。不是阿里云 UID、订单号或 SP 实例 ID。
   * 
   * This parameter is required.
   * 
   * @example
   * example-user-001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenServiceRequestCommunication extends $dara.Model {
  /**
   * @remarks
   * communication 存在时必填的对象，只包含 user_id，不能为 null 或空对象。
   * 
   * This parameter is required.
   */
  userInfo?: OpenServiceRequestCommunicationUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'user_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: OpenServiceRequestCommunicationUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenServiceRequest extends $dara.Model {
  /**
   * @remarks
   * 按凭据的业务身份配置提供；固定用户身份或不要求正文用户身份时可省略。若提供，必须是只含 user_info 的对象，不能为 null 或空对象。测试与真实开通请求执行相同身份检查。
   */
  communication?: OpenServiceRequestCommunication;
  /**
   * @remarks
   * 必填 JSON 布尔值，无默认值。false 仅验证接口、鉴权、身份和请求参数，成功返回 TEST_OK，不实际开通。true 发起服务开通；返回 OPENING 时仍在处理中。重复发送 true 仍是开通操作，不是只读状态查询。字符串 true/false 不合法。
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  openBenefits?: boolean;
  static names(): { [key: string]: string } {
    return {
      communication: 'communication',
      openBenefits: 'openBenefits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      communication: OpenServiceRequestCommunication,
      openBenefits: 'boolean',
    };
  }

  validate() {
    if(this.communication && typeof (this.communication as any).validate === 'function') {
      (this.communication as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

