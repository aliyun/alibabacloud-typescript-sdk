// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncAppInstanceForPartnerResponseBodyDataAppInstance extends $dara.Model {
  /**
   * @example
   * WD20250626114752000001
   */
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncAppInstanceForPartnerResponseBodyData extends $dara.Model {
  appInstance?: SyncAppInstanceForPartnerResponseBodyDataAppInstance;
  static names(): { [key: string]: string } {
    return {
      appInstance: 'AppInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstance: SyncAppInstanceForPartnerResponseBodyDataAppInstance,
    };
  }

  validate() {
    if(this.appInstance && typeof (this.appInstance as any).validate === 'function') {
      (this.appInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncAppInstanceForPartnerResponseBody extends $dara.Model {
  data?: SyncAppInstanceForPartnerResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SyncAppInstanceForPartnerResponseBodyData,
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

