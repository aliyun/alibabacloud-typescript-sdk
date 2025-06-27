// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudGtmMonitorTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * B57C121B-A45F-44D8-A9B2-13E5A5044195
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the health check template. This ID uniquely identifies the health check template.
   * 
   * @example
   * mtp-89518052425100**80
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
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

