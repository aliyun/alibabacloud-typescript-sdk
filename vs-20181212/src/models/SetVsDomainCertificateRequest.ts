// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetVsDomainCertificateRequest extends $dara.Model {
  /**
   * @example
   * Cert-77****7
   */
  certName?: string;
  /**
   * @example
   * free
   */
  certType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 1
   */
  forceSet?: string;
  ownerId?: number;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * xxxxxxx
   */
  SSLPri?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * on
   */
  SSLProtocol?: string;
  /**
   * @example
   * 328uiuii28****82dsada81
   */
  SSLPub?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certType: 'CertType',
      domainName: 'DomainName',
      forceSet: 'ForceSet',
      ownerId: 'OwnerId',
      region: 'Region',
      SSLPri: 'SSLPri',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certType: 'string',
      domainName: 'string',
      forceSet: 'string',
      ownerId: 'number',
      region: 'string',
      SSLPri: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

