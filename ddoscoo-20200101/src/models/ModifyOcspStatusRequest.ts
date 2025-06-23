// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOcspStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name for which you want to configure the Static Page Caching policy.
   * 
   * > You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all the domain names that are added to Anti-DDoS Pro or Anti-DDoS Premium.
   * 
   * This parameter is required.
   * 
   * @example
   * click.linktech.cn
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether to enable the OCSP feature. Valid values:
   * 
   * *   **1**: yes.
   * *   **0**: no.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

