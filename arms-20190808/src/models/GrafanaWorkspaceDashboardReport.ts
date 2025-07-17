// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceDashboardReport extends $dara.Model {
  /**
   * @example
   * 1680861352600
   */
  gmtCreate?: number;
  /**
   * @example
   * grafana-cn-**********
   */
  grafanaWorkspaceId?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1680861352600
   */
  lastSendTime?: number;
  msg?: string;
  name?: string;
  /**
   * @example
   * ******@aliyun.com
   */
  reportChannelTarget?: string;
  /**
   * @example
   * Email
   */
  reportChannelType?: string;
  /**
   * @example
   * Grid,Simple
   */
  reportStyle?: string;
  /**
   * @example
   * Image
   */
  reportType?: string;
  status?: string;
  /**
   * @example
   * 1
   */
  triggerDay?: string;
  /**
   * @example
   * 12:25
   */
  triggerTime?: string;
  /**
   * @example
   * ByWeek
   */
  triggerType?: string;
  /**
   * @example
   * Dashboard URL
   */
  url?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      grafanaWorkspaceId: 'grafanaWorkspaceId',
      id: 'id',
      lastSendTime: 'lastSendTime',
      msg: 'msg',
      name: 'name',
      reportChannelTarget: 'reportChannelTarget',
      reportChannelType: 'reportChannelType',
      reportStyle: 'reportStyle',
      reportType: 'reportType',
      status: 'status',
      triggerDay: 'triggerDay',
      triggerTime: 'triggerTime',
      triggerType: 'triggerType',
      url: 'url',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      grafanaWorkspaceId: 'string',
      id: 'number',
      lastSendTime: 'number',
      msg: 'string',
      name: 'string',
      reportChannelTarget: 'string',
      reportChannelType: 'string',
      reportStyle: 'string',
      reportType: 'string',
      status: 'string',
      triggerDay: 'string',
      triggerTime: 'string',
      triggerType: 'string',
      url: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

