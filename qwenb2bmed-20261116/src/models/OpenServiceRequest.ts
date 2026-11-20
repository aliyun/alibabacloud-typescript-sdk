// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenServiceRequestCommunicationUserInfo extends $dara.Model {
  /**
   * @remarks
   * The customer business user ID.
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
   * The object that carries the customer business user identifier.
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
   * The business user identity. It is provided based on the identity configuration bound to the gateway credentials.
   */
  communication?: OpenServiceRequestCommunication;
  /**
   * @remarks
   * Specifies whether to actually activate the benefits. A value of true initiates the activation process. A value of false only verifies the call and returns TEST_OK.
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

