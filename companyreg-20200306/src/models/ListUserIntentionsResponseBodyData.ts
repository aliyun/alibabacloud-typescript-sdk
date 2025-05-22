// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserIntentionsResponseBodyData extends $dara.Model {
  area?: string;
  /**
   * @example
   * I100000033443
   */
  bizId?: string;
  /**
   * @example
   * esp.lgo
   */
  bizType?: string;
  contactName?: string;
  /**
   * @example
   * 2022-01-24 15:43:58
   */
  createTime?: number;
  description?: string;
  ext?: string;
  /**
   * @example
   * 18000000000
   */
  mobile?: string;
  reason?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 2022-01-24 15:43:58
   */
  updateTime?: number;
  /**
   * @example
   * 1219541161213057
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      bizId: 'BizId',
      bizType: 'BizType',
      contactName: 'ContactName',
      createTime: 'CreateTime',
      description: 'Description',
      ext: 'Ext',
      mobile: 'Mobile',
      reason: 'Reason',
      status: 'Status',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      bizId: 'string',
      bizType: 'string',
      contactName: 'string',
      createTime: 'number',
      description: 'string',
      ext: 'string',
      mobile: 'string',
      reason: 'string',
      status: 'number',
      updateTime: 'number',
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

