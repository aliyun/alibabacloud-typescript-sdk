// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyDataListProductInfo extends $dara.Model {
  /**
   * @remarks
   * The capacity mode. Valid values:
   * - provisioned: reserved capacity with elastic scaling.
   * - ondemand: pay-as-you-go.
   * 
   * @example
   * provisioned
   */
  capacityType?: string;
  /**
   * @remarks
   * Specifies whether the message trace feature is enabled.
   * - true: The message trace feature is enabled.
   * - false: The message trace feature is disabled.
   * 
   * <props="intl">This parameter does not take effect. Regardless of whether this parameter is enabled, the instance supports the message trace feature by default.
   * <props="china">This parameter takes effect only for Serverless instances. If the message trace feature is enabled, message trace fees are incurred. For more information about billing, see [Serverless billing description](https://help.aliyun.com/document_detail/2586280.html).
   * 
   * <props="china">For pay-as-you-go and subscription instances, this parameter does not take effect. Regardless of whether this parameter is enabled, the message trace feature is supported by default.
   * 
   * @example
   * true
   */
  traceOn?: boolean;
  static names(): { [key: string]: string } {
    return {
      capacityType: 'capacityType',
      traceOn: 'traceOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityType: 'string',
      traceOn: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataListTags extends $dara.Model {
  /**
   * @remarks
   * The key of the resource tag.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the resource tag.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The commodity code of the ApsaraMQ for RocketMQ 5.x series instance, such as ons_rmqsub_public_cn.
   * 
   * @example
   * ons_rmqsub_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the instance version was last updated, in YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-01 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the instance expires, in YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-09-01 00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The number of consumer groups created in the instance.
   * 
   * @example
   * 10
   */
  groupCount?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - PayAsYouGo: pay-as-you-go (postpaid).
   * - Subscription: subscription (prepaid).
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The product information.
   */
  productInfo?: ListInstancesResponseBodyDataListProductInfo;
  /**
   * @remarks
   * The ID of the region to which the instance belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the instance was released, in YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-09-07 00:00:00
   */
  releaseTime?: string;
  /**
   * @remarks
   * The remarks for the instance.
   * 
   * @example
   * This is remark for instance.
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmx7caj******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The primary series code of the instance. Valid values:
   * - standard: Standard Edition.
   * - ultimate: Platinum Edition.
   * - professional: Professional Edition.
   * - shared: Shared Edition.
   * - dedicated: Dedicated Edition.
   * 
   * @example
   * standard
   */
  seriesCode?: string;
  /**
   * @remarks
   * The service code of the instance. The service code for ApsaraMQ for RocketMQ is rmq.
   * 
   * @example
   * rmq
   */
  serviceCode?: string;
  /**
   * @remarks
   * The time when the instance was created, in YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - RELEASED: Released.
   * - RUNNING: Running.
   * - STOPPED: Stopped.
   * - CHANGING: Changing.
   * - CREATING: Creating.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The sub-series code of the instance. Valid values:
   * - cluster_ha: cluster high-availability edition.
   * - single_node: single-node edition.
   * - serverless: serverless edition.
   * 
   * @example
   * cluster_ha
   */
  subSeriesCode?: string;
  /**
   * @remarks
   * The resource tag list.
   */
  tags?: ListInstancesResponseBodyDataListTags[];
  /**
   * @remarks
   * The number of topics created in the instance.
   * 
   * @example
   * 20
   */
  topicCount?: number;
  /**
   * @remarks
   * The time when the instance was last modified, in YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-02 00:00:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user to whom the instance belongs.
   * 
   * @example
   * 6W0xz2uPfiwp****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'commodityCode',
      createTime: 'createTime',
      expireTime: 'expireTime',
      groupCount: 'groupCount',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      paymentType: 'paymentType',
      productInfo: 'productInfo',
      regionId: 'regionId',
      releaseTime: 'releaseTime',
      remark: 'remark',
      resourceGroupId: 'resourceGroupId',
      seriesCode: 'seriesCode',
      serviceCode: 'serviceCode',
      startTime: 'startTime',
      status: 'status',
      subSeriesCode: 'subSeriesCode',
      tags: 'tags',
      topicCount: 'topicCount',
      updateTime: 'updateTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      createTime: 'string',
      expireTime: 'string',
      groupCount: 'number',
      instanceId: 'string',
      instanceName: 'string',
      paymentType: 'string',
      productInfo: ListInstancesResponseBodyDataListProductInfo,
      regionId: 'string',
      releaseTime: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      seriesCode: 'string',
      serviceCode: 'string',
      startTime: 'string',
      status: 'string',
      subSeriesCode: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataListTags },
      topicCount: 'number',
      updateTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.productInfo && typeof (this.productInfo as any).validate === 'function') {
      (this.productInfo as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The paged data.
   */
  list?: ListInstancesResponseBodyDataList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned results.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * MissingPageNumber
   */
  code?: string;
  /**
   * @remarks
   * The response result.
   */
  data?: ListInstancesResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * PageNumber
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * pageNumber
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter pageNumber is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Each request has a unique ID that you can use to troubleshoot and locate issues.
   * 
   * @example
   * 84445A20-2B50-5306-A3C0-AF99FC1833C6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListInstancesResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

