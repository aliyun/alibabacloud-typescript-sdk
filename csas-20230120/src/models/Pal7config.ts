// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PAL7ConfigBypassConfig } from "./Pal7configBypassConfig";
import { PAL7ConfigDnsConfig } from "./Pal7configDnsConfig";
import { PAL7ConfigJsHookConfig } from "./Pal7configJsHookConfig";
import { PAL7ConfigRequestHeaderRewriteConfig } from "./Pal7configRequestHeaderRewriteConfig";
import { PAL7ConfigRequestQueryRewriteConfig } from "./Pal7configRequestQueryRewriteConfig";
import { PAL7ConfigResponseHeaderRewriteConfig } from "./Pal7configResponseHeaderRewriteConfig";
import { PAL7ConfigResponseRewriteConfig } from "./Pal7configResponseRewriteConfig";


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

