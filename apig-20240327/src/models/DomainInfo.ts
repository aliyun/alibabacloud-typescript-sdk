// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DomainInfo extends $dara.Model {
  /**
   * @remarks
   * The certificate identifier.
   * 
   * @example
   * 235556-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The client CA certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIFBTCCAu2gAwIBAgIUORLpYPGSFD1YOP6PMbE7Wd/mpTQwDQYJKoZIhvcNAQEL
   * BQAwE************************************************2VwVOJ2gqX3
   * YuGaxvIbDy0iQJ1GMerPRyzJTeVEtdIKT29u0PdFRr4KZWom35qX7G4=
   * -----END CERTIFICATE-----
   */
  clientCACert?: string;
  /**
   * @remarks
   * The creation source of the domain name.
   * 
   * Valid values:
   * 
   * *   Console
   * *   Ingress
   * 
   * @example
   * Console
   */
  createFrom?: string;
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * d-cq1lthllhtgja4dk54eg
   */
  domainId?: string;
  /**
   * @remarks
   * Specifies whether to enable forcible HTTPS redirection when HTTPS is used as the protocol.
   * 
   * @example
   * false
   */
  forceHttps?: boolean;
  /**
   * @remarks
   * Specifies whether to enable mutual authentication.
   * 
   * @example
   * true
   */
  mTLSEnabled?: boolean;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * abc.com
   */
  name?: string;
  /**
   * @remarks
   * The supported protocol. Valid values:
   * 
   * *   HTTP
   * *   HTTPS
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The domain name status.
   * 
   * Valid values:
   * 
   * *   UnPublished
   * *   Published
   * 
   * @example
   * Published
   */
  status?: string;
  /**
   * @remarks
   * The update timestamp.
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'certIdentifier',
      clientCACert: 'clientCACert',
      createFrom: 'createFrom',
      createTimestamp: 'createTimestamp',
      domainId: 'domainId',
      forceHttps: 'forceHttps',
      mTLSEnabled: 'mTLSEnabled',
      name: 'name',
      protocol: 'protocol',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      clientCACert: 'string',
      createFrom: 'string',
      createTimestamp: 'number',
      domainId: 'string',
      forceHttps: 'boolean',
      mTLSEnabled: 'boolean',
      name: 'string',
      protocol: 'string',
      resourceGroupId: 'string',
      status: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

