// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListCdrObsRequest extends $dara.Model {
  /**
   * @remarks
   * 业务ID
   * 
   * @example
   * AssociatedId
   */
  associatedId?: number;
  /**
   * @remarks
   * 客户城市
   * 
   * @example
   * 示例值示例值
   */
  city?: string;
  /**
   * @remarks
   * 座席电话
   * 
   * @example
   * xxx
   */
  clientNumber?: string;
  /**
   * @remarks
   * 座席号，要求只能是 4-11 位数字
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 客户号码
   * 
   * @example
   * 177xxxx
   */
  customerNumber?: string;
  /**
   * @remarks
   * 结束时间，时间戳格式精确到秒，开始时间和结束时间跨度不能超过一个月。默认值取当前时间
   * 
   * @example
   * 1775024775
   */
  endTime?: number;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 8004970
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 是否邀评: 0: 否 1: 是 2: -
   * 
   * @example
   * 0
   */
  evaluation?: number;
  /**
   * @remarks
   * 是否隐藏号码。 0: 不隐藏，1: 中间四位，2: 最后八位 3: 全部号码，4: 最后四位。默认值为 0
   * 
   * @example
   * 0
   */
  hiddenType?: number;
  /**
   * @remarks
   * 热线号码
   * 
   * @example
   * Hotline
   */
  hotline?: string;
  /**
   * @remarks
   * 业务ID类型，1：工单；2：业务记录
   * 
   * @example
   * 44
   */
  idType?: number;
  /**
   * @remarks
   * 查询条数，范围 10-100。默认值为 10。注：limit + offset 不允许超过100000
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * 通话记录唯一标识
   * 
   * @example
   * MainUniqueId
   */
  mainUniqueId?: string;
  /**
   * @remarks
   * 标记。取值范围如下： 为空表示全部， 1:留言 2:转移 3:咨询 4:三方 5:传真接收 6:会议 7:交互 8:IVR中放弃 9:已进入IVR 10:未进入IVR 11:队列中放弃 12:队列中溢出 注： 其中mark值2,3,4,7仅在status=1(座席接听)时有效， mark值1,5,6,8,9,10,11,12在status=3(系统接听)时有效
   * 
   * @example
   * 3
   */
  mark?: number;
  /**
   * @remarks
   * 偏移量，范围 0-99990。默认值为 0。注：limit + offset 不允许超过100000
   * 
   * @example
   * 0
   */
  offset?: number;
  ownerId?: number;
  /**
   * @remarks
   * 客户省份
   * 
   * @example
   * 示例值示例值
   */
  province?: string;
  /**
   * @remarks
   * 队列及时应答: 0: 否 1: 是 2: -
   * 
   * @example
   * 0
   */
  queueAnswerInTime?: number;
  /**
   * @remarks
   * 请求唯一标识
   * 
   * @example
   * RequestUniqueId
   */
  requestUniqueId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 开始时间，时间戳格式精确到秒。默认值取当前月份第一天
   * 
   * @example
   * 1775024775
   */
  startTime?: number;
  /**
   * @remarks
   * 接听状态。取值范围如下： 0: 全部 1: 客户未接听 2: 座席未接听 3: 双方接听 默认值为0
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      associatedId: 'AssociatedId',
      city: 'City',
      clientNumber: 'ClientNumber',
      cno: 'Cno',
      customerNumber: 'CustomerNumber',
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      evaluation: 'Evaluation',
      hiddenType: 'HiddenType',
      hotline: 'Hotline',
      idType: 'IdType',
      limit: 'Limit',
      mainUniqueId: 'MainUniqueId',
      mark: 'Mark',
      offset: 'Offset',
      ownerId: 'OwnerId',
      province: 'Province',
      queueAnswerInTime: 'QueueAnswerInTime',
      requestUniqueId: 'RequestUniqueId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedId: 'number',
      city: 'string',
      clientNumber: 'string',
      cno: 'string',
      customerNumber: 'string',
      endTime: 'number',
      enterpriseId: 'number',
      evaluation: 'number',
      hiddenType: 'number',
      hotline: 'string',
      idType: 'number',
      limit: 'number',
      mainUniqueId: 'string',
      mark: 'number',
      offset: 'number',
      ownerId: 'number',
      province: 'string',
      queueAnswerInTime: 'number',
      requestUniqueId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

