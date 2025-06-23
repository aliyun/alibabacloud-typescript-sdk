// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebCCGlobalSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the HTTP flood mitigation feature is enabled. Valid values:
   * 
   * *   **open**
   * *   **close**
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  ccGlobalSwitch?: string;
  /**
   * @remarks
   * The domain name of the website.
   * 
   * >  A forwarding rule must be configured for the domain name. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      ccGlobalSwitch: 'CcGlobalSwitch',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccGlobalSwitch: 'string',
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

