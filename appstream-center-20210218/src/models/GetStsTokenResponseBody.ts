// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStsTokenResponseBodyStsTokenModel extends $dara.Model {
  /**
   * @remarks
   * The tenant ID, which is the UID of the Alibaba Cloud account.
   * 
   * @example
   * 105552640689****
   */
  aliUid?: number;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * be4be09e-cd00-4b4c-add7-11b4d8****
   */
  sessionId?: string;
  /**
   * @remarks
   * The temporary credentials.
   * 
   * @example
   * sts****
   */
  stsToken?: string;
  /**
   * @remarks
   * The tenant ID, which is the UID of the Alibaba Cloud account.
   * 
   * @example
   * 105552640689****
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      sessionId: 'SessionId',
      stsToken: 'StsToken',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      sessionId: 'string',
      stsToken: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStsTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CCF92035-6231-5ABB-930E-1E003C32****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the token.
   */
  stsTokenModel?: GetStsTokenResponseBodyStsTokenModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stsTokenModel: 'StsTokenModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stsTokenModel: GetStsTokenResponseBodyStsTokenModel,
    };
  }

  validate() {
    if(this.stsTokenModel && typeof (this.stsTokenModel as any).validate === 'function') {
      (this.stsTokenModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

