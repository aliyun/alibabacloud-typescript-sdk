// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudOutboundObClidReportResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 客户接听数
   * 
   * @example
   * 4
   */
  answeredCount?: string;
  /**
   * @remarks
   * 平均通话时长
   * 
   * @example
   * 00:02:12
   */
  avgBridgeTime?: string;
  /**
   * @remarks
   * 平均等待时长
   * 
   * @example
   * 5
   */
  avgPreviewObWaitTime?: number;
  /**
   * @example
   * 示例值示例值
   */
  callType?: string;
  /**
   * @remarks
   * 城市
   * 
   * @example
   * 示例值示例值
   */
  city?: string;
  /**
   * @remarks
   * 外显号码
   * 
   * @example
   * 01089192349
   */
  clid?: string;
  /**
   * @remarks
   * 号码接听率
   * 
   * @example
   * 20%
   */
  clidRate?: string;
  /**
   * @remarks
   * 创建日期
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * 客户侧计费分钟数
   * 
   * @example
   * 45
   */
  customerBillMinute?: number;
  /**
   * @remarks
   * 时间范围
   * 
   * @example
   * 示例值示例值示例值
   */
  dateTimeRange?: string;
  /**
   * @remarks
   * 报表日期
   * 
   * @example
   * 2026-04-20
   */
  day?: string;
  /**
   * @remarks
   * 企业Id
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 小时
   * 
   * @example
   * 0
   */
  hour?: string;
  /**
   * @remarks
   * 最长通话时长
   * 
   * @example
   * 00:00:45
   */
  maxBridgeTime?: string;
  /**
   * @remarks
   * 最短通话时长
   * 
   * @example
   * 00:00:03
   */
  minBridgeTime?: string;
  /**
   * @remarks
   * 响铃数
   * 
   * @example
   * 19
   */
  previewObCustomerRingingCount?: number;
  /**
   * @remarks
   * 响铃率
   * 
   * @example
   * 95%
   */
  previewObCustomerRingingRate?: string;
  /**
   * @remarks
   * 省份
   * 
   * @example
   * 示例值示例值
   */
  province?: string;
  /**
   * @remarks
   * 格式化日期
   * 
   * @example
   * 示例值
   */
  rowName?: string;
  /**
   * @remarks
   * 总通话时长
   * 
   * @example
   * 00:08:48
   */
  totalBridgeTime?: string;
  /**
   * @remarks
   * 外呼总数
   * 
   * @example
   * 20
   */
  totalCount?: string;
  /**
   * @remarks
   * 中继群组代号
   * 
   * @example
   * 10000
   */
  trunkGroupKey?: string;
  /**
   * @remarks
   * 有效通话平均时长
   * 
   * @example
   * 00:00:21
   */
  validAvgBridgeTime?: string;
  /**
   * @remarks
   * 有效通话次数
   * 
   * @example
   * 2
   */
  validCalls?: string;
  /**
   * @remarks
   * 有效通话总时长
   * 
   * @example
   * 00:00:42
   */
  validTotalBridgeTime?: string;
  static names(): { [key: string]: string } {
    return {
      answeredCount: 'AnsweredCount',
      avgBridgeTime: 'AvgBridgeTime',
      avgPreviewObWaitTime: 'AvgPreviewObWaitTime',
      callType: 'CallType',
      city: 'City',
      clid: 'Clid',
      clidRate: 'ClidRate',
      createTime: 'CreateTime',
      customerBillMinute: 'CustomerBillMinute',
      dateTimeRange: 'DateTimeRange',
      day: 'Day',
      enterpriseId: 'EnterpriseId',
      hour: 'Hour',
      maxBridgeTime: 'MaxBridgeTime',
      minBridgeTime: 'MinBridgeTime',
      previewObCustomerRingingCount: 'PreviewObCustomerRingingCount',
      previewObCustomerRingingRate: 'PreviewObCustomerRingingRate',
      province: 'Province',
      rowName: 'RowName',
      totalBridgeTime: 'TotalBridgeTime',
      totalCount: 'TotalCount',
      trunkGroupKey: 'TrunkGroupKey',
      validAvgBridgeTime: 'ValidAvgBridgeTime',
      validCalls: 'ValidCalls',
      validTotalBridgeTime: 'ValidTotalBridgeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answeredCount: 'string',
      avgBridgeTime: 'string',
      avgPreviewObWaitTime: 'number',
      callType: 'string',
      city: 'string',
      clid: 'string',
      clidRate: 'string',
      createTime: 'string',
      customerBillMinute: 'number',
      dateTimeRange: 'string',
      day: 'string',
      enterpriseId: 'number',
      hour: 'string',
      maxBridgeTime: 'string',
      minBridgeTime: 'string',
      previewObCustomerRingingCount: 'number',
      previewObCustomerRingingRate: 'string',
      province: 'string',
      rowName: 'string',
      totalBridgeTime: 'string',
      totalCount: 'string',
      trunkGroupKey: 'string',
      validAvgBridgeTime: 'string',
      validCalls: 'string',
      validTotalBridgeTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudOutboundObClidReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 返回数据
   */
  list?: CloudOutboundObClidReportResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudOutboundObClidReportResponseBodyDataList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudOutboundObClidReportResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudOutboundObClidReportResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 9FF70B74-1B3C-44C1-ACDF-8DF962988F0E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CloudOutboundObClidReportResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

