// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExposedInstanceDetailResponseBodyExposedChainsAllVulList extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * RHSA-2022:0274-Important: polkit pkexec Local Privilege Escalation Vulnerability(CVE-2021-4034)
   */
  aliasName?: string;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * SCA:ACSV-2020-052801
   */
  name?: string;
  /**
   * @remarks
   * The priority to fix the vulnerability. Valid values:
   * 
   * *   **asap**: high
   * *   **later**: medium
   * *   **nntf**: low
   * 
   * >  We recommend that you fix the vulnerabilities that have the **high** priority at the earliest opportunity.
   * 
   * @example
   * asap
   */
  necessity?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: Linux software vulnerabilities
   * *   **sys**: Windows system vulnerabilities
   * *   **cms**: Web-CMS vulnerabilities
   * *   **app**: application vulnerabilities
   * *   **emg**: urgent vulnerabilities
   * *   **sca**: middleware vulnerabilities
   * 
   * @example
   * sca
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 4f9ce097-4a7d-48fe-baef-6960e5b6****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      name: 'Name',
      necessity: 'Necessity',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      name: 'string',
      necessity: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceDetailResponseBodyExposedChainsCspmRiskList extends $dara.Model {
  /**
   * @remarks
   * The subtype of the cloud asset. Valid values:
   * 
   * *   **0**: Elastic Compute Service (ECS).
   * 
   *     *   **100**: instance.
   * 
   * *   **3**: ApsaraDB RDS.
   * 
   *     *   **0**: instance.
   * 
   * *   **4**: ApsaraDB for MongoDB (MongoDB).
   * 
   *     *   **0**: instance.
   * 
   * *   **5**: ApsaraDB for Redis (Redis).
   * 
   *     *   **0**: instance.
   * 
   * @example
   * 100
   */
  assetSubType?: number;
  /**
   * @remarks
   * The subtype name of the cloud asset. Valid values:
   * 
   * *   **INSTANCE**: MongoDB instance, Apsara DB for RDS instance, and ApsaraDB for Redis instance.
   * *   **ECS_INSTANCE**: ECS instance.
   * 
   * @example
   * INSTANCE
   */
  assetSubTypeName?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   0: an ECS instance.
   * *   3: an ApsaraDB RDS instance.
   * *   4: an ApsaraDB for MongoDB instance.
   * *   5: an ApsaraDB for Redis instance.
   * 
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * The name of the cloud asset type. Valid values:
   * 
   * *   **ECS**
   * *   **RDS**
   * *   **KVSTORE**
   * *   **MONGODB**
   * 
   * @example
   * ECS
   */
  assetTypeName?: string;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * Create Alert Rule
   */
  checkName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp14ggqzi9k6ocfb****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **HIGH**
   * *   **MEDIUM**
   * *   **LOW**
   * 
   * @example
   * HIGH
   */
  riskLevel?: string;
  /**
   * @remarks
   * The type of the cloud asset by source. Valid values:
   * 
   * *   **0**: an asset provided by Alibaba Cloud.
   * 
   * @example
   * 0
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      assetSubType: 'AssetSubType',
      assetSubTypeName: 'AssetSubTypeName',
      assetType: 'AssetType',
      assetTypeName: 'AssetTypeName',
      checkName: 'CheckName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      riskLevel: 'RiskLevel',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetSubTypeName: 'string',
      assetType: 'number',
      assetTypeName: 'string',
      checkName: 'string',
      instanceId: 'string',
      regionId: 'string',
      riskLevel: 'string',
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

export class DescribeExposedInstanceDetailResponseBodyExposedChainsRealVulList extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * RHSA-2022:0274-Important: polkit pkexec Local Privilege Escalation Vulnerability(CVE-2021-4034)
   */
  aliasName?: string;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * SCA:ACSV-2020-052801
   */
  name?: string;
  /**
   * @remarks
   * The priority to fix the vulnerability. Valid values:
   * 
   * *   **asap**: high
   * *   **later**: medium
   * *   **nntf**: low
   * 
   * >  We recommend that you fix the vulnerabilities that have the **high** priority at the earliest opportunity.
   * 
   * @example
   * asap
   */
  necessity?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: Linux software vulnerabilities
   * *   **sys**: Windows system vulnerabilities
   * *   **cms**: Web-CMS vulnerabilities
   * *   **app**: application vulnerabilities
   * *   **emg**: urgent vulnerabilities
   * *   **sca**: middleware vulnerabilities
   * 
   * @example
   * sca
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 4f9ce097-4a7d-48fe-baef-6960e5b6****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      name: 'Name',
      necessity: 'Necessity',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      name: 'string',
      necessity: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceDetailResponseBodyExposedChains extends $dara.Model {
  /**
   * @remarks
   * The information about all vulnerabilities on the server.
   */
  allVulList?: DescribeExposedInstanceDetailResponseBodyExposedChainsAllVulList[];
  /**
   * @remarks
   * The list of configuration risks.
   */
  cspmRiskList?: DescribeExposedInstanceDetailResponseBodyExposedChainsCspmRiskList[];
  /**
   * @remarks
   * The server component that is exposed on the Internet.
   * 
   * @example
   * openssl,openssh
   */
  exposureComponent?: string;
  /**
   * @remarks
   * The IP address of the server or the public endpoint of the database.
   * 
   * @example
   * 47.99.XX.XX
   */
  exposureIp?: string;
  /**
   * @remarks
   * The port that is exposed on the Internet.
   * 
   * @example
   * 22
   */
  exposurePort?: string;
  /**
   * @remarks
   * The resource from which the server or database is exposed. Valid values:
   * 
   * *   **INTERNET_IP**: the public IP address of an Elastic Compute Service (ECS) instance.
   * *   **SLB**: the public IP address of a Server Load Balancer (SLB) instance.
   * *   **EIP**: an elastic IP address (EIP).
   * *   **DNAT**: the Network Address Translation (NAT) gateway that connects to the Internet by using the Destination Network Address Translation (DNAT) feature
   * *   **DB_CONNECTION**: the public endpoint of a database.
   * 
   * @example
   * INTERNET_IP
   */
  exposureType?: string;
  /**
   * @remarks
   * The ID of the instance to which the resource belongs. The valid values of this parameter vary based on the value of the ExposureType parameter.
   * 
   * *   If the value of the ExposureType parameter is **INTERNET_IP**, this parameter is empty.
   * *   If the value of the ExposureType parameter is **SLB**, the value of this parameter is the ID of the SLB instance.
   * *   If the value of the ExposureType parameter is **EIP**, the value of this parameter is the ID of the EIP.
   * *   If the value of the ExposureType parameter is **DNAT**, the value of this parameter is the ID of the NAT gateway.
   * *   If the value of the ExposureType parameter is **DB_CONNECTION**, the value of this parameter is the ID of the database.
   * 
   * @example
   * eip-bp1bkgowzam49rld3****
   */
  exposureTypeId?: string;
  /**
   * @remarks
   * The server group to which the server belongs.
   * 
   * @example
   * sg-bp1iw5enua6gf5i2xr7z
   */
  groupNo?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp116qem8npvchqc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * worker-k8s-for-cs-c929ee2a145214f89a8b248005be5****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 47.99.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The information about the vulnerabilities that are exposed on the Internet and can be exploited by attackers.
   */
  realVulList?: DescribeExposedInstanceDetailResponseBodyExposedChainsRealVulList[];
  /**
   * @remarks
   * The region ID.
   * 
   * >  For information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The UUID of the server or the instance ID of the database.
   * 
   * @example
   * 4f9ce097-4a7d-48fe-baef-6960e5b6****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      allVulList: 'AllVulList',
      cspmRiskList: 'CspmRiskList',
      exposureComponent: 'ExposureComponent',
      exposureIp: 'ExposureIp',
      exposurePort: 'ExposurePort',
      exposureType: 'ExposureType',
      exposureTypeId: 'ExposureTypeId',
      groupNo: 'GroupNo',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      realVulList: 'RealVulList',
      regionId: 'RegionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allVulList: { 'type': 'array', 'itemType': DescribeExposedInstanceDetailResponseBodyExposedChainsAllVulList },
      cspmRiskList: { 'type': 'array', 'itemType': DescribeExposedInstanceDetailResponseBodyExposedChainsCspmRiskList },
      exposureComponent: 'string',
      exposureIp: 'string',
      exposurePort: 'string',
      exposureType: 'string',
      exposureTypeId: 'string',
      groupNo: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      realVulList: { 'type': 'array', 'itemType': DescribeExposedInstanceDetailResponseBodyExposedChainsRealVulList },
      regionId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allVulList)) {
      $dara.Model.validateArray(this.allVulList);
    }
    if(Array.isArray(this.cspmRiskList)) {
      $dara.Model.validateArray(this.cspmRiskList);
    }
    if(Array.isArray(this.realVulList)) {
      $dara.Model.validateArray(this.realVulList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of exposure details of the server or database.
   */
  exposedChains?: DescribeExposedInstanceDetailResponseBodyExposedChains[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * C590482B-54A7-4273-8115-9DBE2DE46B26
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exposedChains: 'ExposedChains',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedChains: { 'type': 'array', 'itemType': DescribeExposedInstanceDetailResponseBodyExposedChains },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exposedChains)) {
      $dara.Model.validateArray(this.exposedChains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

