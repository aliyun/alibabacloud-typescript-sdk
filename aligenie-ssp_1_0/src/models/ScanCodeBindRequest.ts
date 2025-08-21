// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanCodeBindRequestBindReq extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RnY8v0W0ZVn58ZrUAOr2RD
   */
  clientId?: string;
  /**
   * @remarks
   * authCode
   * 
   * This parameter is required.
   * 
   * @example
   * ASdfre
   */
  code?: string;
  /**
   * @example
   * {"key":"value"}
   */
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      code: 'Code',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      code: 'string',
      extInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanCodeBindRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 129****0946
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 111
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanCodeBindRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bindReq?: ScanCodeBindRequestBindReq;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: ScanCodeBindRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      bindReq: 'BindReq',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindReq: ScanCodeBindRequestBindReq,
      userInfo: ScanCodeBindRequestUserInfo,
    };
  }

  validate() {
    if(this.bindReq && typeof (this.bindReq as any).validate === 'function') {
      (this.bindReq as any).validate();
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

