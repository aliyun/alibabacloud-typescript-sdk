// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenServiceRequestCommunicationUserInfo extends $dara.Model {
  /**
   * @remarks
   * 非空字符串，填写你自己的应用中用于识别该用户的 ID。
   * 
   * This parameter is required.
   * 
   * @example
   * user-001
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
   * 业务用户信息对象。提供时必须填写其中的 user_id。
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
   * 按接入时约定填写业务用户信息。如果当前业务凭据无需提供用户信息，可省略整个对象。字段名为 user_info 和 user_id。
   */
  communication?: OpenServiceRequestCommunication;
  /**
   * @remarks
   * 必填 JSON 布尔值。false 只验证本次调用，成功返回 TEST_OK；true 提交服务开通申请。
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

