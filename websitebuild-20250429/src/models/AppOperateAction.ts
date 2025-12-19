// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppOperateAction extends $dara.Model {
  /**
   * @remarks
   * 用于唯一标识一个操作行为
   */
  actionKey?: string;
  /**
   * @remarks
   * 用于在界面中展示操作名称
   */
  actionText?: string;
  /**
   * @remarks
   * 标识该操作是否可用
   */
  enable?: boolean;
  /**
   * @remarks
   * 点击操作时跳转的URL地址
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

