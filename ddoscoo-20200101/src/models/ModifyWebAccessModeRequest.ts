// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebAccessModeRequest extends $dara.Model {
  /**
   * @remarks
   * The mode in which a website service is added to Anti-DDoS Pro or Anti-DDoS Premium. Valid values:
   * 
   * *   **0**: A record mode
   * *   **1**: anti-DDoS mode
   * *   **2**: origin redundancy mode
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  accessMode?: number;
  /**
   * @remarks
   * The domain name of the website.
   * 
   * > A forwarding rule must be configured for the domain name. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'number',
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

