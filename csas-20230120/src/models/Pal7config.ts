// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PAL7ConfigReplaceRule } from "./Pal7configReplaceRule";
import { PAL7ConfigRewriteOp } from "./Pal7configRewriteOp";


export class PAL7ConfigBypassConfigUrlBypassRules extends $dara.Model {
  /**
   * @remarks
   * An array of source IP address ranges that are allowed to anonymously access the application paths.
   */
  froms?: string[];
  /**
   * @remarks
   * The URL paths that allow anonymous access.
   */
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
  /**
   * @remarks
   * An array of source IP address ranges that are allowed to anonymously access the application.
   */
  appBypassFroms?: string[];
  /**
   * @remarks
   * The anonymous access mode. The default value is **disabled**. Valid values:
   * 
   * - **disabled**: Disables anonymous access.
   * 
   * - **url**: Sets anonymous access at the URL level.
   * 
   * - **app**: Sets anonymous access at the application level.
   * 
   * @example
   * disabled
   */
  mode?: string;
  /**
   * @remarks
   * An array of rules for anonymous access to URLs.
   */
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
  /**
   * @remarks
   * An array of DNS server addresses. The gateway preferentially uses the DNS servers configured here to resolve internal domain names.
   */
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
  /**
   * @remarks
   * The mode for rewriting internal network requests in JavaScript. The default value is **disabled**. Valid values:
   * 
   * - **disabled**: Disables traffic redirection for JavaScript.
   * 
   * - **whitelist**: Enables the whitelist mode to redirect traffic as needed.
   * 
   * @example
   * disabled
   */
  mode?: string;
  /**
   * @remarks
   * An array of rules for rewriting internal network requests in JavaScript.
   */
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
  /**
   * @remarks
   * An array of rewrite operations.
   */
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
  /**
   * @remarks
   * An array of rewrite operations.
   */
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
  /**
   * @remarks
   * An array of rewrite operations.
   */
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
  /**
   * @remarks
   * The rewrite mode. The default value is **auto**. Valid values:
   * 
   * - **disabled**: Disables rewriting of internal domain names in HTML.
   * 
   * - **auto**: Enables the automatic mode. The system automatically detects and rewrites internal domain names in HTML.
   * 
   * @example
   * auto
   */
  mode?: string;
  /**
   * @remarks
   * An array of rewrite rules.
   */
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
  /**
   * @remarks
   * The configuration for anonymous access.
   */
  bypassConfig?: PAL7ConfigBypassConfig;
  /**
   * @remarks
   * The certificate ID. This parameter is required when you use a custom proxy domain name.
   * 
   * @example
   * cert-xxxx
   */
  certId?: string;
  /**
   * @remarks
   * The DNS configuration.
   */
  dnsConfig?: PAL7ConfigDnsConfig;
  /**
   * @remarks
   * The configuration for rewriting internal network requests in JavaScript.
   */
  jsHookConfig?: PAL7ConfigJsHookConfig;
  /**
   * @remarks
   * The type of the proxy domain name. Valid values:
   * 
   * - **automatic**: Uses a mapped proxy domain name.
   * 
   * - **custom**: Uses a custom proxy domain name.
   * 
   * @example
   * automatic
   */
  proxyDomainTypes?: Buffer;
  /**
   * @remarks
   * The rules for rewriting HTTP request headers.
   */
  requestHeaderRewriteConfig?: PAL7ConfigRequestHeaderRewriteConfig;
  /**
   * @remarks
   * The configuration for rewriting HTTP request query parameters.
   */
  requestQueryRewriteConfig?: PAL7ConfigRequestQueryRewriteConfig;
  /**
   * @remarks
   * The configuration for rewriting HTTP response headers.
   */
  responseHeaderRewriteConfig?: PAL7ConfigResponseHeaderRewriteConfig;
  /**
   * @remarks
   * The configuration for rewriting internal domain names in HTML.
   */
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

