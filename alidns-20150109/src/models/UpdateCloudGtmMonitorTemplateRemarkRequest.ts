// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmMonitorTemplateRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * The new description of the template. If you do not specify this parameter, the original description is deleted.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the health check template. This ID uniquely identifies a health check template.
   * 
   * This parameter is required.
   * 
   * @example
   * mtp-89518052455928**00
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clientToken: 'ClientToken',
      remark: 'Remark',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clientToken: 'string',
      remark: 'string',
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

