// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEgressProxyGatewayAttributeRequestAddListenerProperties extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 17486
   */
  port?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEgressProxyGatewayAttributeRequestRemoveListenerProperties extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 32720
   */
  port?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEgressProxyGatewayAttributeRequestTlsInterceptProperties extends $dara.Model {
  /**
   * @example
   * 1f01a6f9-a0e7-64e5-9d3c-29c056****
   */
  privateCaCertificateId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * enable
   */
  tlsInterceptMode?: string;
  static names(): { [key: string]: string } {
    return {
      privateCaCertificateId: 'PrivateCaCertificateId',
      tlsInterceptMode: 'TlsInterceptMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateCaCertificateId: 'string',
      tlsInterceptMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEgressProxyGatewayAttributeRequest extends $dara.Model {
  addListenerProperties?: UpdateEgressProxyGatewayAttributeRequestAddListenerProperties[];
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
   */
  clientToken?: string;
  /**
   * @example
   * eppool-gw80d96a96ca0b00****
   */
  defaultEgressProxyIpPoolId?: string;
  /**
   * @example
   * testEpg
   */
  description?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * epg-gw80bb6a94f835db****
   */
  egressProxyGatewayId?: string;
  /**
   * @example
   * testEpg
   */
  egressProxyGatewayName?: string;
  removeListenerProperties?: UpdateEgressProxyGatewayAttributeRequestRemoveListenerProperties[];
  tlsInterceptProperties?: UpdateEgressProxyGatewayAttributeRequestTlsInterceptProperties;
  static names(): { [key: string]: string } {
    return {
      addListenerProperties: 'AddListenerProperties',
      clientToken: 'ClientToken',
      defaultEgressProxyIpPoolId: 'DefaultEgressProxyIpPoolId',
      description: 'Description',
      dryRun: 'DryRun',
      egressProxyGatewayId: 'EgressProxyGatewayId',
      egressProxyGatewayName: 'EgressProxyGatewayName',
      removeListenerProperties: 'RemoveListenerProperties',
      tlsInterceptProperties: 'TlsInterceptProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addListenerProperties: { 'type': 'array', 'itemType': UpdateEgressProxyGatewayAttributeRequestAddListenerProperties },
      clientToken: 'string',
      defaultEgressProxyIpPoolId: 'string',
      description: 'string',
      dryRun: 'boolean',
      egressProxyGatewayId: 'string',
      egressProxyGatewayName: 'string',
      removeListenerProperties: { 'type': 'array', 'itemType': UpdateEgressProxyGatewayAttributeRequestRemoveListenerProperties },
      tlsInterceptProperties: UpdateEgressProxyGatewayAttributeRequestTlsInterceptProperties,
    };
  }

  validate() {
    if(Array.isArray(this.addListenerProperties)) {
      $dara.Model.validateArray(this.addListenerProperties);
    }
    if(Array.isArray(this.removeListenerProperties)) {
      $dara.Model.validateArray(this.removeListenerProperties);
    }
    if(this.tlsInterceptProperties && typeof (this.tlsInterceptProperties as any).validate === 'function') {
      (this.tlsInterceptProperties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

