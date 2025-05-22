// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetailsSubStatusDetails extends $dara.Model {
  appliedType?: string;
  certId?: string;
  certName?: string;
  commonName?: string;
  domain?: string;
  expireTime?: number;
  productCertId?: string;
  productCertName?: string;
  reasonCode?: string;
  static names(): { [key: string]: string } {
    return {
      appliedType: 'AppliedType',
      certId: 'CertId',
      certName: 'CertName',
      commonName: 'CommonName',
      domain: 'Domain',
      expireTime: 'ExpireTime',
      productCertId: 'ProductCertId',
      productCertName: 'ProductCertName',
      reasonCode: 'ReasonCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedType: 'string',
      certId: 'string',
      certName: 'string',
      commonName: 'string',
      domain: 'string',
      expireTime: 'number',
      productCertId: 'string',
      productCertName: 'string',
      reasonCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

