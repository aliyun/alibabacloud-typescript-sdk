// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersResponseBodyDataRecordsVSwitches extends $dara.Model {
  /**
   * @example
   * vsw-8vbl54xzux86usy61r5zm
   */
  vSwitchId?: string;
  /**
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
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @example
   * xxljob-c20f7ec9a78
   */
  clusterId?: string;
  /**
   * @example
   * xxl-job-test-1730427510169
   */
  clusterName?: string;
  /**
   * @example
   * scx.small.x2
   */
  clusterSpec?: string;
  /**
   * @example
   * 2024-10-29 15:56:36
   */
  createTime?: string;
  /**
   * @example
   * 2024-10-29 15:56:36
   */
  endTime?: string;
  /**
   * @example
   * xxljob
   */
  engineType?: string;
  /**
   * @example
   * 2.0.0
   */
  engineVersion?: string;
  internetDomain?: string;
  /**
   * @example
   * http://xxljob-b9e19e46c4e.schedulerx.mse.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @example
   * 1
   */
  productType?: number;
  spInstanceId?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  tags?: { [key: string]: any };
  vSwitches?: ListClustersResponseBodyDataRecordsVSwitches[];
  versionLifecycle?: string;
  /**
   * @remarks
   * VPC ID
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
      createTime: 'CreateTime',
      endTime: 'EndTime',
      engineType: 'EngineType',
      engineVersion: 'EngineVersion',
      internetDomain: 'InternetDomain',
      intranetDomain: 'IntranetDomain',
      productType: 'ProductType',
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
      createTime: 'string',
      endTime: 'string',
      engineType: 'string',
      engineVersion: 'string',
      internetDomain: 'string',
      intranetDomain: 'string',
      productType: 'number',
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * -
   */
  records?: ListClustersResponseBodyDataRecords[];
  /**
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
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListClustersResponseBodyData;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 39938688-0BAB-5AD8-BF02-F4910FAC7589
   */
  requestId?: string;
  /**
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

