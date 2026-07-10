// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWhitelistTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist. Separate multiple IP addresses with commas (,). You can add up to 100 IP addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.1,10.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The name of the whitelist template.
   * 
   * This parameter is required.
   * 
   * @example
   * InvoiceTemplate
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityIPList: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

