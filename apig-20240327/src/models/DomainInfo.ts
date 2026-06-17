// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DomainInfo extends $dara.Model {
  /**
   * @remarks
   * The China Security certificate identity.
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
   * The source from which the domain name was created.
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
  domainScope?: string;
  /**
   * @remarks
   * Specifies whether to enable forced HTTPS redirect when the HTTPS protocol type is configured.
   * 
   * @example
   * false
   */
  forceHttps?: boolean;
  /**
   * @remarks
   * Specifies whether to enable mTLS mutual authentication.
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
   * The protocol type supported by the domain name. Valid values:
   * 
   * - HTTP: Only HTTP is supported.
   * - HTTPS: Only HTTPS is supported.
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
      domainScope: 'domainScope',
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
      domainScope: 'string',
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

