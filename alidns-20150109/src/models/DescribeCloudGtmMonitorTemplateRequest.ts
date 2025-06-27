// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudGtmMonitorTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   **zh-CN**: Chinese
   * *   **en-US** (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the health check template that you want to query. This ID uniquely identifies the health check template.
   * 
   * This parameter is required.
   * 
   * @example
   * mtp-89518052425100**80
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

