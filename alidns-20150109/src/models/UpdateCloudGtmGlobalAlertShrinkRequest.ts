// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmGlobalAlertShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - `zh-CN`: Chinese
   * 
   * - `en-US`: English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * A list of alert configurations.
   */
  alertConfigShrink?: string;
  /**
   * @remarks
   * A list of alert notification groups.
   */
  alertGroupShrink?: string;
  /**
   * @remarks
   * A client-generated token to ensure request idempotence. This token must be unique for each request, contain only ASCII characters, and be no more than 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      alertConfigShrink: 'AlertConfig',
      alertGroupShrink: 'AlertGroup',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      alertConfigShrink: 'string',
      alertGroupShrink: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

