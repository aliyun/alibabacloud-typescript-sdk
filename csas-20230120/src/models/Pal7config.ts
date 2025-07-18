// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PAL7ConfigReplaceRule } from "./Pal7configReplaceRule";
import { PAL7ConfigRewriteOp } from "./Pal7configRewriteOp";


export class PAL7ConfigBypassConfigUrlBypassRules extends $dara.Model {
  froms?: string[];
  paths?: string[];
  static names(): { [key: string]: string } {
    return {
      froms: 'Froms',
      paths: 'Paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      froms: { 'type': 'array', 'itemType': 'string' },
      paths: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.froms)) {
      $dara.Model.validateArray(this.froms);
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PAL7ConfigBypassConfig extends $dara.Model {
  appBypassFroms?: string[];
  mode?: string;
  urlBypassRules?: PAL7ConfigBypassConfigUrlBypassRules[];
  static names(): { [key: string]: string } {
    return {
      appBypassFroms: 'AppBypassFroms',
      mode: 'Mode',
      urlBypassRules: 'UrlBypassRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appBypassFroms: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      urlBypassRules: { 'type': 'array', 'itemType': PAL7ConfigBypassConfigUrlBypassRules },
    };
  }

  validate() {
    if(Array.isArray(this.appBypassFroms)) {
      $dara.Model.validateArray(this.appBypassFroms);
    }
    if(Array.isArray(this.urlBypassRules)) {
      $dara.Model.validateArray(this.urlBypassRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PAL7ConfigDnsConfig extends $dara.Model {
  dnsServers?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsServers: 'DnsServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dnsServers)) {
      $dara.Model.validateArray(this.dnsServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PAL7ConfigJsHookConfig extends $dara.Model {
  mode?: string;
  replaceRules?: PAL7ConfigReplaceRule[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      replaceRules: 'ReplaceRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      replaceRules: { 'type': 'array', 'itemType': PAL7ConfigReplaceRule },
    };
  }

  validate() {
    if(Array.isArray(this.replaceRules)) {
      $dara.Model.validateArray(this.replaceRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PAL7ConfigRequestHeaderRewriteConfig extends $dara.Model {
  ops?: PAL7ConfigRewriteOp[];
  static names(): { [key: string]: string } {
    return {
      ops: 'Ops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ops: { 'type': 'array', 'itemType': PAL7ConfigRewriteOp },
    };
  }

  validate() {
    if(Array.isArray(this.ops)) {
      $dara.Model.validateArray(this.ops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PAL7ConfigRequestQueryRewriteConfig extends $dara.Model {
  ops?: PAL7ConfigRewriteOp[];
  static names(): { [key: string]: string } {
    return {
      ops: 'Ops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ops: { 'type': 'array', 'itemType': PAL7ConfigRewriteOp },
    };
  }

  validate() {
    if(Array.isArray(this.ops)) {
      $dara.Model.validateArray(this.ops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PAL7ConfigResponseHeaderRewriteConfig extends $dara.Model {
  ops?: PAL7ConfigRewriteOp[];
  static names(): { [key: string]: string } {
    return {
      ops: 'Ops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ops: { 'type': 'array', 'itemType': PAL7ConfigRewriteOp },
    };
  }

  validate() {
    if(Array.isArray(this.ops)) {
      $dara.Model.validateArray(this.ops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PAL7ConfigResponseRewriteConfig extends $dara.Model {
  mode?: string;
  replaceRules?: PAL7ConfigReplaceRule[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      replaceRules: 'ReplaceRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      replaceRules: { 'type': 'array', 'itemType': PAL7ConfigReplaceRule },
    };
  }

  validate() {
    if(Array.isArray(this.replaceRules)) {
      $dara.Model.validateArray(this.replaceRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PAL7Config extends $dara.Model {
  bypassConfig?: PAL7ConfigBypassConfig;
  certId?: string;
  dnsConfig?: PAL7ConfigDnsConfig;
  jsHookConfig?: PAL7ConfigJsHookConfig;
  /**
   * @example
   * 逗号分隔的枚举值：automatic,custom
   */
  proxyDomainTypes?: Buffer;
  requestHeaderRewriteConfig?: PAL7ConfigRequestHeaderRewriteConfig;
  requestQueryRewriteConfig?: PAL7ConfigRequestQueryRewriteConfig;
  responseHeaderRewriteConfig?: PAL7ConfigResponseHeaderRewriteConfig;
  responseRewriteConfig?: PAL7ConfigResponseRewriteConfig;
  static names(): { [key: string]: string } {
    return {
      bypassConfig: 'BypassConfig',
      certId: 'CertId',
      dnsConfig: 'DnsConfig',
      jsHookConfig: 'JsHookConfig',
      proxyDomainTypes: 'ProxyDomainTypes',
      requestHeaderRewriteConfig: 'RequestHeaderRewriteConfig',
      requestQueryRewriteConfig: 'RequestQueryRewriteConfig',
      responseHeaderRewriteConfig: 'ResponseHeaderRewriteConfig',
      responseRewriteConfig: 'ResponseRewriteConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bypassConfig: PAL7ConfigBypassConfig,
      certId: 'string',
      dnsConfig: PAL7ConfigDnsConfig,
      jsHookConfig: PAL7ConfigJsHookConfig,
      proxyDomainTypes: 'Buffer',
      requestHeaderRewriteConfig: PAL7ConfigRequestHeaderRewriteConfig,
      requestQueryRewriteConfig: PAL7ConfigRequestQueryRewriteConfig,
      responseHeaderRewriteConfig: PAL7ConfigResponseHeaderRewriteConfig,
      responseRewriteConfig: PAL7ConfigResponseRewriteConfig,
    };
  }

  validate() {
    if(this.bypassConfig && typeof (this.bypassConfig as any).validate === 'function') {
      (this.bypassConfig as any).validate();
    }
    if(this.dnsConfig && typeof (this.dnsConfig as any).validate === 'function') {
      (this.dnsConfig as any).validate();
    }
    if(this.jsHookConfig && typeof (this.jsHookConfig as any).validate === 'function') {
      (this.jsHookConfig as any).validate();
    }
    if(this.requestHeaderRewriteConfig && typeof (this.requestHeaderRewriteConfig as any).validate === 'function') {
      (this.requestHeaderRewriteConfig as any).validate();
    }
    if(this.requestQueryRewriteConfig && typeof (this.requestQueryRewriteConfig as any).validate === 'function') {
      (this.requestQueryRewriteConfig as any).validate();
    }
    if(this.responseHeaderRewriteConfig && typeof (this.responseHeaderRewriteConfig as any).validate === 'function') {
      (this.responseHeaderRewriteConfig as any).validate();
    }
    if(this.responseRewriteConfig && typeof (this.responseRewriteConfig as any).validate === 'function') {
      (this.responseRewriteConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

