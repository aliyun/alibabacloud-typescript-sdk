// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckCountStatisticResponseBodyCheckCountStatisticDTOCheckCountStatisticItems extends $dara.Model {
  /**
   * @remarks
   * The number of the CPU cores used by the host instance.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The instance ID of the cloud service.
   * 
   * @example
   * i-wz9bpxyu6t74qn9g****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name of the asset.
   * 
   * @example
   * launch-advisor-2021****
   */
  instanceName?: string;
  /**
   * @remarks
   * The subtype of the cloud service.
   * 
   * @example
   * 0
   */
  instanceSubType?: number;
  /**
   * @remarks
   * The asset subtype of the cloud service. Valid values:
   * 
   * *   If **InstanceTypeName** is set to **ECS**, this parameter supports the following valid values:
   * 
   *     *   **INSTANCE**
   *     *   **DISK**
   *     *   **SECURITY_GROUP**
   * 
   * *   If **InstanceTypeName** is set to **ACR**, this parameter supports the following valid values:
   * 
   *     *   **REPOSITORY_ENTERPRISE**
   *     *   **REPOSITORY_PERSON**
   * 
   * *   If **InstanceTypeName** is set to **RAM**, this parameter supports the following valid values:
   * 
   *     *   **ALIAS**
   *     *   **USER**
   *     *   **POLICY**
   *     *   **GROUP**
   * 
   * *   If **InstanceTypeName** is set to **WAF**, this parameter supports the following valid value:
   * 
   *     *   **DOMAIN**
   * 
   * *   If **InstanceTypeName** is set to other values, this parameter supports the following valid values:
   * 
   *     *   **INSTANCE**
   * 
   * @example
   * INSTANCE
   */
  instanceSubTypeName?: string;
  /**
   * @remarks
   * The asset type. Valid values:
   * 
   * *   **0**: Elastic Compute Service (ECS) instance.
   * *   **1**: Server Load Balancer (SLB) instance.
   * *   **2**: NAT gateway.
   * *   **3**: ApsaraDB RDS instance.
   * *   **4**: ApsaraDB for MongoDB (MongoDB) instance.
   * *   **5**: Tair (Redis OSS-compatible) (Tair) instance.
   * *   **6**: container image.
   * *   **7**: container.
   * 
   * @example
   * 0
   */
  instanceType?: number;
  /**
   * @remarks
   * The asset type of the cloud service. Valid values:
   * 
   * *   **ECS**: ECS.
   * *   **SLB**: SLB.
   * *   **RDS**: ApsaraDB RDS.
   * *   **MONGODB**: ApsaraDB for MongoDB.
   * *   **KVSTORE**: Tair.
   * *   **ACR**: Container Registry.
   * *   **CSK**: Container Service for Kubernetes (ACK).
   * *   **VPC**: Virtual Private Cloud (VPC).
   * *   **ACTIONTRAIL**: ActionTrail.
   * *   **CDN**: Alibaba Cloud CDN (CDN).
   * *   **CAS**: Certificate Management Service (formerly SSL Certificates Service).
   * *   **RDC**: Alibaba Cloud DevOps.
   * *   **RAM**: Resource Access Management (RAM).
   * *   **DDOS**: Anti-DDoS.
   * *   **WAF**: Web Application Firewall (WAF).
   * *   **OSS**: Object Storage Service (OSS).
   * *   **POLARDB**: PolarDB.
   * *   **POSTGRESQL**: ApsaraDB RDS for PostgreSQL.
   * *   **MSE**: Microservices Engine (MSE).
   * *   **NAS**: File Storage NAS (NAS).
   * *   **SDDP**: Sensitive Data Discovery and Protection (SDDP).
   * *   **EIP**: Elastic IP Address (EIP).
   * 
   * @example
   * ECS
   */
  instanceTypeName?: string;
  /**
   * @remarks
   * The public IP address of the host instance.
   * 
   * @example
   * 1.2.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the host instance.
   * 
   * @example
   * 1.2.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The version of the operating system that the host instance runs.
   * 
   * @example
   * linux
   */
  os?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The number of risk items.
   * 
   * @example
   * 22
   */
  riskCount?: number;
  /**
   * @remarks
   * The UUID of the host instance.
   * 
   * @example
   * c9107c04-942f-40c1-981a-f1c1****
   */
  uuid?: string;
  /**
   * @remarks
   * The cloud service provider. Valid values:
   * 
   * *   **ALIYUN**: Alibaba Cloud.
   * *   **TENCENT**: Tencent Cloud.
   * *   **MICROSOFT**: Microsoft Azure.
   * *   **AWS**: AWS.
   * 
   * @example
   * ALIYUN
   */
  vendor?: number;
  /**
   * @remarks
   * The ID of the VPC to which the host instance belongs.
   * 
   * @example
   * vpc-uf60agqq65bs98zoo****
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceSubType: 'InstanceSubType',
      instanceSubTypeName: 'InstanceSubTypeName',
      instanceType: 'InstanceType',
      instanceTypeName: 'InstanceTypeName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      os: 'Os',
      regionId: 'RegionId',
      riskCount: 'RiskCount',
      uuid: 'Uuid',
      vendor: 'Vendor',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceSubType: 'number',
      instanceSubTypeName: 'string',
      instanceType: 'number',
      instanceTypeName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      os: 'string',
      regionId: 'string',
      riskCount: 'number',
      uuid: 'string',
      vendor: 'number',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckCountStatisticResponseBodyCheckCountStatisticDTO extends $dara.Model {
  /**
   * @remarks
   * The risk item statistics.
   */
  checkCountStatisticItems?: GetCheckCountStatisticResponseBodyCheckCountStatisticDTOCheckCountStatisticItems[];
  /**
   * @remarks
   * The type of the statistics. Valid values:
   * 
   * *   **user**: the top five users that are granted excessive permissions.
   * *   **role**: the top five roles that are granted excessive permissions.
   * *   **instance**: the top five cloud services on which risks are detected.
   * 
   * @example
   * instance
   */
  statisticType?: string;
  static names(): { [key: string]: string } {
    return {
      checkCountStatisticItems: 'CheckCountStatisticItems',
      statisticType: 'StatisticType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCountStatisticItems: { 'type': 'array', 'itemType': GetCheckCountStatisticResponseBodyCheckCountStatisticDTOCheckCountStatisticItems },
      statisticType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkCountStatisticItems)) {
      $dara.Model.validateArray(this.checkCountStatisticItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckCountStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The risk item statistics.
   */
  checkCountStatisticDTO?: GetCheckCountStatisticResponseBodyCheckCountStatisticDTO;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20456DD5-5CBF-5015-9173-12CA4246B***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkCountStatisticDTO: 'CheckCountStatisticDTO',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCountStatisticDTO: GetCheckCountStatisticResponseBodyCheckCountStatisticDTO,
      requestId: 'string',
    };
  }

  validate() {
    if(this.checkCountStatisticDTO && typeof (this.checkCountStatisticDTO as any).validate === 'function') {
      (this.checkCountStatisticDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

