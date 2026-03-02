// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonitorWebhook extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  enterpriseId?: number;
  /**
   * @example
   * 2022-05-01T00:00:00.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-05-01T00:00:00.000Z
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 钉钉机器人
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DINGDING
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=**********
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'enterpriseId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      method: 'method',
      name: 'name',
      type: 'type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      method: 'string',
      name: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

