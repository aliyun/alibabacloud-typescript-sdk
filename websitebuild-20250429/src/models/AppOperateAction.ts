// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppOperateAction extends $dara.Model {
  /**
   * @remarks
   * The key used to uniquely identify an action.
   * 
   * @example
   * BeginDialogue
   */
  actionKey?: string;
  /**
   * @remarks
   * The text used to display the action name in the user interface.
   * 
   * @example
   * Renew
   */
  actionText?: string;
  /**
   * @remarks
   * Indicates whether the action is available.
   */
  enable?: boolean;
  /**
   * @remarks
   * The URL to redirect to when the action is clicked.
   * 
   * @example
   * https://common-buy.aliyun.com/?orderType=RENEW&commodityCode=domain_website_public_cn&instanceId=12313213
   */
  href?: string;
  static names(): { [key: string]: string } {
    return {
      actionKey: 'ActionKey',
      actionText: 'ActionText',
      enable: 'Enable',
      href: 'Href',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionKey: 'string',
      actionText: 'string',
      enable: 'boolean',
      href: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

