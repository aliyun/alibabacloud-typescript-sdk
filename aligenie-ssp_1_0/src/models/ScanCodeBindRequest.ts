// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanCodeBindRequestBindReq extends $dara.Model {
  /**
   * @remarks
   * Product client ID
   * 
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
   * @remarks
   * Extension parameter
   * 
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
   * Value corresponding to the encoding type. Enter the Project ID of the project to which the product belongs. You can view this in the Tmall Genie AI Platform console.
   * 
   * This parameter is required.
   * 
   * @example
   * 129****0946
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. Enter PROJECT_ID here.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * User Identifier. Enter the value of userOpenId or userUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * Device ID type:  
   * OPEN_ID: Default Device ID identifier.  
   * UNION_ID: Organization-dimension Device ID identifier. You must request an organization in advance on the Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required if IdType is UNION_ID.
   * 
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
   * Input parameters for QR code scanning binding
   * 
   * This parameter is required.
   */
  bindReq?: ScanCodeBindRequestBindReq;
  /**
   * @remarks
   * User identity information
   * 
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

