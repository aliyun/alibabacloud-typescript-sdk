// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudAssetSummaryResponseBodyGroupedFieldsCloudAssetSummaryMetas extends $dara.Model {
  /**
   * @remarks
   * Subtype of the cloud product
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * 云产品的类型。取值：
   * 
   * - **0**：云服务器 ECS
   * - **1**：负载均衡
   * - **3**：云数据库 RDS
   * - **4**：云数据库 MongoDB 版
   * - **5**：云数据库 Tair（兼容 Redis）
   * - **6**：容器镜像服务
   * - **8**：容器服务Kubernetes版
   * - **9**：专有网络VPC
   * - **11**：操作审计
   * - **12**：CDN
   * - **13**：数字证书管理服务（原SSL证书）
   * - **14**：云效
   * - **15**：访问控制
   * - **16**：DDoS防护
   * - **17**：Web应用防火墙
   * - **18**：对象存储
   * - **19**：云原生关系型数据库 PolarDB
   * - **20**：云数据库 PostgreSQL 版
   * - **21**：微服务引擎
   * - **22**：文件存储NAS
   * - **23**：数据安全中心
   * - **24**：弹性公网IP
   * - **25**：云身份服务-EIAM
   * - **26**：PolarDB-X
   * - **27**：Elasticsearch
   * 
   * @example
   * 16
   */
  assetType?: number;
  /**
   * @remarks
   * Total number of this type of cloud product instances.
   * 
   * @example
   * 16
   */
  instanceCount?: number;
  /**
   * @remarks
   * Total number of risky instances for this type of cloud product.
   * 
   * @example
   * 5
   */
  instanceRiskCount?: number;
  /**
   * @remarks
   * 服务器厂商。取值：
   * 
   * - **0**：阿里云资产
   * - **1**：云外资产
   * - **2**：IDC资产
   * - **3**、**4**、**5**、**7**：其它云资产
   * - **8**：轻量级资产
   * 
   * @example
   * 3
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      assetSubType: 'AssetSubType',
      assetType: 'AssetType',
      instanceCount: 'InstanceCount',
      instanceRiskCount: 'InstanceRiskCount',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      instanceCount: 'number',
      instanceRiskCount: 'number',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAssetSummaryResponseBodyGroupedFields extends $dara.Model {
  /**
   * @remarks
   * List of cloud product statistics
   */
  cloudAssetSummaryMetas?: GetCloudAssetSummaryResponseBodyGroupedFieldsCloudAssetSummaryMetas[];
  /**
   * @remarks
   * Total number of cloud product instances.
   * 
   * @example
   * 919
   */
  instanceCountTotal?: number;
  /**
   * @remarks
   * Total number of cloud product instances at risk
   * 
   * @example
   * 544
   */
  instanceRiskCountTotal?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAssetSummaryMetas: 'CloudAssetSummaryMetas',
      instanceCountTotal: 'InstanceCountTotal',
      instanceRiskCountTotal: 'InstanceRiskCountTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssetSummaryMetas: { 'type': 'array', 'itemType': GetCloudAssetSummaryResponseBodyGroupedFieldsCloudAssetSummaryMetas },
      instanceCountTotal: 'number',
      instanceRiskCountTotal: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAssetSummaryMetas)) {
      $dara.Model.validateArray(this.cloudAssetSummaryMetas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAssetSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Summary information of cloud assets.
   */
  groupedFields?: GetCloudAssetSummaryResponseBodyGroupedFields;
  /**
   * @remarks
   * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
   * 
   * @example
   * F5CF78A7-30AA-59DB-847F-13EE3AE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupedFields: 'GroupedFields',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupedFields: GetCloudAssetSummaryResponseBodyGroupedFields,
      requestId: 'string',
    };
  }

  validate() {
    if(this.groupedFields && typeof (this.groupedFields as any).validate === 'function') {
      (this.groupedFields as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

