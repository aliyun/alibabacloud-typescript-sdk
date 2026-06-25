// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersResponseBodyDataRecordsVSwitches extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vbl54xzux86usy61r5zm
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The availability zone.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * - PREPAY: Subscription.
   * - POSTPAY: Pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * xxljob-c20f7ec9a78
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * xxl-job-test-1730427510169
   */
  clusterName?: string;
  /**
   * @remarks
   * The instance specification.
   * 
   * @example
   * scx.small.x2
   */
  clusterSpec?: string;
  /**
   * @example
   * 1
   */
  clusterType?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-10-29 15:56:36
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2024-10-29 15:56:36
   */
  endTime?: string;
  /**
   * @remarks
   * The engine type.
   * 
   * @example
   * xxljob
   */
  engineType?: string;
  /**
   * @remarks
   * The engine version.
   * 
   * @example
   * 2.0.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The public domain name.
   * > Currently not supported.
   * 
   * @example
   * 暂无
   */
  internetDomain?: string;
  /**
   * @remarks
   * The internal domain name.
   * 
   * @example
   * http://xxljob-b9e19e46c4e.schedulerx.mse.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @remarks
   * The product version.
   * - 1: Developer Edition.
   * - 2: Professional Edition.
   * - 3: Enterprise Edition.
   * 
   * @example
   * 1
   */
  productType?: number;
  source?: string;
  /**
   * @remarks
   * The order asset instance ID.
   * 
   * @example
   * mse_schedulerxpost_public_cn-htq402sak02
   */
  spInstanceId?: string;
  /**
   * @remarks
   * The cluster status.
   * 
   * - 1: Creating.
   * - 2: Running.
   * - 3: Restarting.
   * - 4: Destroying.
   * - 5: Creation failed.
   * - 6: Stopped.
   * - 99: Deleted.
   * 
   * @example
   * 1
   */
  status?: number;
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The availability zone and vSwitch information.
   */
  vSwitches?: ListClustersResponseBodyDataRecordsVSwitches[];
  versionLifecycle?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1fxort6ag5h9752i305
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterSpec: 'ClusterSpec',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      engineType: 'EngineType',
      engineVersion: 'EngineVersion',
      internetDomain: 'InternetDomain',
      intranetDomain: 'IntranetDomain',
      productType: 'ProductType',
      source: 'Source',
      spInstanceId: 'SpInstanceId',
      status: 'Status',
      tags: 'Tags',
      vSwitches: 'VSwitches',
      versionLifecycle: 'VersionLifecycle',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterSpec: 'string',
      clusterType: 'number',
      createTime: 'string',
      endTime: 'string',
      engineType: 'string',
      engineVersion: 'string',
      internetDomain: 'string',
      intranetDomain: 'string',
      productType: 'number',
      source: 'string',
      spInstanceId: 'string',
      status: 'number',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      vSwitches: { 'type': 'array', 'itemType': ListClustersResponseBodyDataRecordsVSwitches },
      versionLifecycle: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  records?: ListClustersResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListClustersResponseBodyDataRecords },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  data?: ListClustersResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * This parameter is required.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * The ID of this request, which is a unique identifier generated by Alibaba Cloud for this request. It can be used for troubleshooting.
   * 
   * @example
   * 39938688-0BAB-5AD8-BF02-F4910FAC7589
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListClustersResponseBodyData,
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

