// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryAgentRequest extends $dara.Model {
  /**
   * @remarks
   * 是否启用；正整数，只能是0或者1，0是停用，1是启用
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * 多个座席号以英文逗号分隔 最多支持500个座席
   * 
   * @example
   * 1111,2222
   */
  cnos?: string;
  /**
   * @remarks
   * 通过座席备注信息检索；取值说明：前缀模糊匹配
   * 
   * @example
   * comment1
   */
  comment?: string;
  /**
   * @remarks
   * 创建时间终止时间点；取值说明："2019-10-11 23:59:59"
   * 
   * @example
   * 2026-04-20 12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 查询条数；正整数，大于0，最大不能超过1000，默认10
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * 通过座席名称检索；取值说明：前后缀模糊匹配
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * 排序方式,按照创建时间排序；0正序 1倒序
   * 
   * @example
   * 0
   */
  order?: number;
  ownerId?: number;
  /**
   * @remarks
   * 队列号；当qno不为空时，查询指定队列的所有座席记录
   * 
   * @example
   * 333
   */
  qno?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 是否返回绑定座席的队列信息；0:不返回 1:需要返回 默认值:1
   * 
   * @example
   * 10
   */
  returnQueue?: number;
  /**
   * @remarks
   * 从第几条开始；正整数，大于等于0，默认0
   * 
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * 创建时间起始时间点；取值说明："2019-10-11 00:00:00"
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * 是否在线；正整数，只能是0或者1，0是离线，1是在线
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * webrtc软电话返回地址；取值说明：0：企业默认 1：公网域名 2：专线域名 3：公网IP 4：专线IP
   * 
   * @example
   * 1
   */
  webrtcUrlType?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      cnos: 'Cnos',
      comment: 'Comment',
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      limit: 'Limit',
      name: 'Name',
      order: 'Order',
      ownerId: 'OwnerId',
      qno: 'Qno',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      returnQueue: 'ReturnQueue',
      start: 'Start',
      startTime: 'StartTime',
      status: 'Status',
      webrtcUrlType: 'WebrtcUrlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      cnos: 'string',
      comment: 'string',
      endTime: 'string',
      enterpriseId: 'number',
      limit: 'number',
      name: 'string',
      order: 'number',
      ownerId: 'number',
      qno: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      returnQueue: 'number',
      start: 'number',
      startTime: 'string',
      status: 'number',
      webrtcUrlType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

