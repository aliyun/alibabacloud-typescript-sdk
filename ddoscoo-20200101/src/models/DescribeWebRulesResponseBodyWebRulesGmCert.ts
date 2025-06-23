// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebRulesResponseBodyWebRulesGmCert extends $dara.Model {
  /**
   * @remarks
   * The ID of the SM certificate.
   * 
   * @example
   * 725****
   */
  certId?: string;
  /**
   * @remarks
   * Indicates whether Enable SM Certificate-based Verification is turned on.
   * 
   * *   0: no
   * *   1: yes
   * 
   * @example
   * 1
   */
  gmEnable?: number;
  /**
   * @remarks
   * Indicates whether Allow Access Only from SM Certificates-based Clients is turned on.
   * 
   * *   0: no
   * *   1: yes
   * 
   * @example
   * 1
   */
  gmOnly?: number;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      gmEnable: 'GmEnable',
      gmOnly: 'GmOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      gmEnable: 'number',
      gmOnly: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

