// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names. Separate multiple domain names with commas (,). Only domain names registered with Alibaba Cloud are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * test1.com,test2.com
   */
  domainNames?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The description of the domain name.
   * 
   * @example
   * test domain transfer
   */
  remark?: string;
  /**
   * @remarks
   * The destination user ID. The domain names and their Domain Name System (DNS) records are transferred to the destination user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  targetUserId?: number;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      lang: 'Lang',
      remark: 'Remark',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      lang: 'string',
      remark: 'string',
      targetUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

