// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateDomainResourceRequestProxyTypes extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  proxyPorts?: number[];
  proxyType?: string;
  static names(): { [key: string]: string } {
    return {
      proxyPorts: 'ProxyPorts',
      proxyType: 'ProxyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyPorts: { 'type': 'array', 'itemType': 'number' },
      proxyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.proxyPorts)) {
      $dara.Model.validateArray(this.proxyPorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  httpsExt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  proxyTypes?: CreateDomainResourceRequestProxyTypes[];
  /**
   * @remarks
   * This parameter is required.
   */
  realServers?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      httpsExt: 'HttpsExt',
      instanceIds: 'InstanceIds',
      proxyTypes: 'ProxyTypes',
      realServers: 'RealServers',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      httpsExt: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      proxyTypes: { 'type': 'array', 'itemType': CreateDomainResourceRequestProxyTypes },
      realServers: { 'type': 'array', 'itemType': 'string' },
      rsType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.proxyTypes)) {
      $dara.Model.validateArray(this.proxyTypes);
    }
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

