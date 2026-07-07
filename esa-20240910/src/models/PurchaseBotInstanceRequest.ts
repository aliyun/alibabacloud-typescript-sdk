// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseBotInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The bot instance specifications.
   * 
   * This parameter is required.
   * 
   * @example
   * enterprise_bot
   */
  botInstanceLevel?: string;
  /**
   * @remarks
   * The site instance.
   * 
   * This parameter is required.
   * 
   * @example
   * esa-site-23kde*****
   */
  siteInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      botInstanceLevel: 'BotInstanceLevel',
      siteInstanceId: 'SiteInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botInstanceLevel: 'string',
      siteInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

