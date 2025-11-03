// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudAssetDetailResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * Indicates whether alerts are generated for the current cloud asset. Valid values:
   * 
   * *   **YES**
   * *   **NO**
   * 
   * @example
   * NO
   */
  alarmStatus?: string;
  /**
   * @remarks
   * The subtype of the cloud asset.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The name of the cloud asset subtype.
   * 
   * @example
   * INSTANCE
   */
  assetSubTypeName?: string;
  /**
   * @remarks
   * The type of the cloud asset. Valid values:
   * 
   * *   **0**: ECS.
   * *   **1**: SLB.
   * *   **3**: ApsaraDB RDS.
   * *   **4**: ApsaraDB for MongoDB.
   * *   **5**: ApsaraDB for Redis.
   * *   **6**: Container Registry.
   * *   **8**: Container Service for Kubernetes.
   * *   **9**: VPC.
   * *   **11**: ActionTrail.
   * *   **12**: CDN.
   * *   **13**: Certificate Management Service.
   * *   **14**: Apsara Devops.
   * *   **15**: RAM.
   * *   **16**: Anti-DDoS.
   * *   **17**: WAF.
   * *   **18**: OSS.
   * *   **19**: PolarDB.
   * *   **20**: ApsaraDB RDS for PostgreSQL.
   * *   **21**: MSE.
   * *   **22**: NAS.
   * *   **23**: DSC.
   * *   **24**: EIP.
   * *   **25**: IDaaS-EIAM.
   * *   **26**: PolarDB-X.
   * *   **27**: Elasticsearch.
   * 
   * @example
   * 3
   */
  assetType?: number;
  /**
   * @remarks
   * The name of the cloud asset type.
   * 
   * @example
   * RDS
   */
  assetTypeName?: string;
  /**
   * @remarks
   * The time when the instance was created. The value is a timestamp.
   * 
   * @example
   * 1607365213000
   */
  createdTime?: number;
  /**
   * @remarks
   * The detailed address of the cloud asset.
   */
  detailLink?: string;
  /**
   * @remarks
   * The instance ID of the cloud asset.
   * 
   * @example
   * rm-uf6t6u05n6g48****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name of the cloud asset.
   * 
   * @example
   * yztest-l***
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 1.2.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * Detailed asset information.
   * 
   * @example
   * {"owner":{"displayName":"123","id":"123"},"intranetEndpoint":"oss-cn-shanghai-internal.aliyuncs.com","extranetEndpoint":"oss-cn-shanghai.aliyuncs.com","storageClass":"Standard","name":"test","location":"oss-cn-shanghai","creationDate":1629882579000,"region":"cn-shanghai"}
   */
  originalAssetInfo?: string;
  /**
   * @remarks
   * The region in which the cloud asset resides.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hanghzou
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether risks are detected on the current cloud asset. Valid values:
   * 
   * *   **YES**
   * *   **NO**
   * 
   * @example
   * NO
   */
  riskStatus?: string;
  /**
   * @remarks
   * The security information about the cloud asset.
   * 
   * @example
   * {\\"seriousNum\\":0,\\"appNum\\":0,\\"baselineMedium\\":0,\\"remindNum\\":0,\\"imageVulNntf\\":0,\\"cveNum\\":0,\\"vul\\":0,\\"uuid\\":\\"rm-uf6t6u05n6g485o70\\",\\"emgNum\\":0,\\"weakPWNum\\":0,\\"imageMaliciousFileRemind\\":0,\\"imageBaselineMedium\\":0,\\"laterVulCount\\":0,\\"cmsNum\\":0,\\"imageMaliciousFileSerious\\":0,\\"agentlessMalicious\\":0,\\"suspNum\\":0,\\"imageBaselineHigh\\":0,\\"asapVulCount\\":0,\\"imageVulLater\\":0,\\"agentlessAll\\":0,\\"sysNum\\":0,\\"containerLater\\":0,\\"containerSuspicious\\":0,\\"imageBaselineNum\\":0,\\"newSuspicious\\":0,\\"nntfVulCount\\":0,\\"scaNum\\":0,\\"containerNntf\\":0,\\"health\\":0,\\"trojan\\":0,\\"suspicious\\":0,\\"imageMaliciousFileSuspicious\\":0,\\"containerRemind\\":0,\\"baselineLow\\":0,\\"imageVulAsap\\":0,\\"imageBaselineLow\\":0,\\"containerAsap\\":0,\\"agentlessBaseline\\":0,\\"agentlessVulSca\\":0,\\"agentlessVulCve\\":0,\\"containerSerious\\":0,\\"baselineHigh\\":0,\\"account\\":0,\\"baselineNum\\":6}
   */
  securityInfo?: string;
  /**
   * @remarks
   * The service provider of the cloud asset. Valid values:
   * 
   * *   **0**: Alibaba Cloud.
   * *   **1**: service provider that is unrecognized.
   * *   **2**: data center.
   * *   **3**, **4**, **5**, and **7**: third-party service provider.
   * *   **8**: simple application server.
   * 
   * @example
   * 0
   */
  vendor?: number;
  /**
   * @remarks
   * Account id for multi-cloud instances.
   * 
   * @example
   * 123
   */
  vendorUid?: string;
  /**
   * @remarks
   * The account name of the multi-cloud instance.
   * 
   * @example
   * test
   */
  vendorUserName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      assetSubType: 'AssetSubType',
      assetSubTypeName: 'AssetSubTypeName',
      assetType: 'AssetType',
      assetTypeName: 'AssetTypeName',
      createdTime: 'CreatedTime',
      detailLink: 'DetailLink',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      originalAssetInfo: 'OriginalAssetInfo',
      regionId: 'RegionId',
      riskStatus: 'RiskStatus',
      securityInfo: 'SecurityInfo',
      vendor: 'Vendor',
      vendorUid: 'VendorUid',
      vendorUserName: 'VendorUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: 'string',
      assetSubType: 'number',
      assetSubTypeName: 'string',
      assetType: 'number',
      assetTypeName: 'string',
      createdTime: 'number',
      detailLink: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      originalAssetInfo: 'string',
      regionId: 'string',
      riskStatus: 'string',
      securityInfo: 'string',
      vendor: 'number',
      vendorUid: 'string',
      vendorUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAssetDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of instances in the list of cloud assets returned.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * An array that consists of the details of the cloud assets.
   */
  instances?: GetCloudAssetDetailResponseBodyInstances[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * CB45CAED-31C3-517A-8619-10F632D3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instances: { 'type': 'array', 'itemType': GetCloudAssetDetailResponseBodyInstances },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

