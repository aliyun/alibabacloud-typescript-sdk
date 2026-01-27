// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommonConfigIdpDingtalk extends $dara.Model {
  eventCallbackBase?: string;
  eventLabel?: string;
  homePage?: string;
  loginRedirect?: string;
  static names(): { [key: string]: string } {
    return {
      eventCallbackBase: 'EventCallbackBase',
      eventLabel: 'EventLabel',
      homePage: 'HomePage',
      loginRedirect: 'LoginRedirect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCallbackBase: 'string',
      eventLabel: 'string',
      homePage: 'string',
      loginRedirect: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonConfigIdpFeishu extends $dara.Model {
  eventCallbackBase?: string;
  eventLabel?: string;
  homePage?: string;
  loginRedirect?: string;
  static names(): { [key: string]: string } {
    return {
      eventCallbackBase: 'EventCallbackBase',
      eventLabel: 'EventLabel',
      homePage: 'HomePage',
      loginRedirect: 'LoginRedirect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCallbackBase: 'string',
      eventLabel: 'string',
      homePage: 'string',
      loginRedirect: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonConfigIdpIdaas2 extends $dara.Model {
  eventCallbackBase?: string;
  eventLabel?: string;
  static names(): { [key: string]: string } {
    return {
      eventCallbackBase: 'EventCallbackBase',
      eventLabel: 'EventLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCallbackBase: 'string',
      eventLabel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonConfigIdpSaml extends $dara.Model {
  acs?: string;
  metadata?: string;
  static names(): { [key: string]: string } {
    return {
      acs: 'Acs',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acs: 'string',
      metadata: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonConfigIdp extends $dara.Model {
  apOidcCallbackUrl?: string;
  dingtalk?: CommonConfigIdpDingtalk;
  feishu?: CommonConfigIdpFeishu;
  idaas2?: CommonConfigIdpIdaas2;
  saml?: CommonConfigIdpSaml;
  static names(): { [key: string]: string } {
    return {
      apOidcCallbackUrl: 'ApOidcCallbackUrl',
      dingtalk: 'Dingtalk',
      feishu: 'Feishu',
      idaas2: 'Idaas2',
      saml: 'Saml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apOidcCallbackUrl: 'string',
      dingtalk: CommonConfigIdpDingtalk,
      feishu: CommonConfigIdpFeishu,
      idaas2: CommonConfigIdpIdaas2,
      saml: CommonConfigIdpSaml,
    };
  }

  validate() {
    if(this.dingtalk && typeof (this.dingtalk as any).validate === 'function') {
      (this.dingtalk as any).validate();
    }
    if(this.feishu && typeof (this.feishu as any).validate === 'function') {
      (this.feishu as any).validate();
    }
    if(this.idaas2 && typeof (this.idaas2 as any).validate === 'function') {
      (this.idaas2 as any).validate();
    }
    if(this.saml && typeof (this.saml as any).validate === 'function') {
      (this.saml as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonConfig extends $dara.Model {
  idp?: CommonConfigIdp;
  static names(): { [key: string]: string } {
    return {
      idp: 'Idp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idp: CommonConfigIdp,
    };
  }

  validate() {
    if(this.idp && typeof (this.idp as any).validate === 'function') {
      (this.idp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

