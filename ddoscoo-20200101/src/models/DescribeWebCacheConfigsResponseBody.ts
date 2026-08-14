// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebCacheConfigsResponseBodyDomainCacheConfigsCustomRules extends $dara.Model {
  cacheTtl?: number;
  mode?: string;
  name?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      cacheTtl: 'CacheTtl',
      mode: 'Mode',
      name: 'Name',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheTtl: 'number',
      mode: 'string',
      name: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCacheConfigsResponseBodyDomainCacheConfigs extends $dara.Model {
  customRules?: DescribeWebCacheConfigsResponseBodyDomainCacheConfigsCustomRules[];
  domain?: string;
  enable?: number;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      customRules: 'CustomRules',
      domain: 'Domain',
      enable: 'Enable',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customRules: { 'type': 'array', 'itemType': DescribeWebCacheConfigsResponseBodyDomainCacheConfigsCustomRules },
      domain: 'string',
      enable: 'number',
      mode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customRules)) {
      $dara.Model.validateArray(this.customRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCacheConfigsResponseBody extends $dara.Model {
  domainCacheConfigs?: DescribeWebCacheConfigsResponseBodyDomainCacheConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainCacheConfigs: 'DomainCacheConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCacheConfigs: { 'type': 'array', 'itemType': DescribeWebCacheConfigsResponseBodyDomainCacheConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainCacheConfigs)) {
      $dara.Model.validateArray(this.domainCacheConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

