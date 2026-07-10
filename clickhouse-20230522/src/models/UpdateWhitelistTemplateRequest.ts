// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWhitelistTemplateRequest extends $dara.Model {
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
   * The IP address whitelist. You can add up to 100 IP addresses, separated by commas.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.1,10.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The whitelist template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 98a6d3db05984dca
   */
  templateId?: string;
  /**
   * @remarks
   * The whitelist template name.
   * 
   * This parameter is required.
   * 
   * @example
   * 98a6d3db05984dca
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityIPList: 'string',
      templateId: 'string',
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

