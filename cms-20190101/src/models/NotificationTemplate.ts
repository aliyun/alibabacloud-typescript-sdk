// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotificationTemplate extends $dara.Model {
  createTime?: string;
  description?: string;
  /**
   * @example
   * Alarm $.alertName
   */
  enContent?: string;
  /**
   * @example
   * Alarm $.alertName
   */
  enItemContent?: string;
  /**
   * @example
   * Alarm $.alertName
   */
  enTitle?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * DATA,  SMS,  ONCALL,  MAIL,  DING,  WEIXIN,  FEISHU,  SLACK
   */
  type?: string;
  updateTime?: string;
  userId?: string;
  uuid?: string;
  /**
   * @example
   * TEXT, MARKDOWN,CARD
   */
  wraperType?: string;
  /**
   * @example
   * 报警 $.alertName
   */
  zhContent?: string;
  /**
   * @example
   * 报警 $.alertName
   */
  zhItemContent?: string;
  /**
   * @example
   * 报警通知 $.alertName
   */
  zhTitle?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      enContent: 'EnContent',
      enItemContent: 'EnItemContent',
      enTitle: 'EnTitle',
      name: 'Name',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      uuid: 'Uuid',
      wraperType: 'WraperType',
      zhContent: 'ZhContent',
      zhItemContent: 'ZhItemContent',
      zhTitle: 'ZhTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      enContent: 'string',
      enItemContent: 'string',
      enTitle: 'string',
      name: 'string',
      type: 'string',
      updateTime: 'string',
      userId: 'string',
      uuid: 'string',
      wraperType: 'string',
      zhContent: 'string',
      zhItemContent: 'string',
      zhTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

