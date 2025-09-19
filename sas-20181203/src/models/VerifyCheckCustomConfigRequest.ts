// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCheckCustomConfigRequestCustomCheckConfigCloudAssetInstance extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the asset.
   * 
   * @example
   * i-0jl4mjgl261cfrz5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCheckCustomConfigRequestCustomCheckConfig extends $dara.Model {
  /**
   * @remarks
   * Define rules for custom inspection items.
   * 
   * @example
   * {"AssociatedData":{"ToDataList":[{"DataName":"ACS_ECS_Instance","PropertyPath":"InstanceId","FromPropertyPath":"InstanceId"}]},"MatchProperty":{"Operator":"AND","MatchProperties":[{"DataName":"ACS_ECS_Disk","PropertyPath":"DiskId","MatchOperator":"EQ","MatchPropertyValue":"testId"}]}}
   */
  checkRule?: string;
  /**
   * @remarks
   * Asset instance that requires testing rules
   */
  cloudAssetInstance?: VerifyCheckCustomConfigRequestCustomCheckConfigCloudAssetInstance;
  /**
   * @remarks
   * Asset subtype of the cloud product
   * 
   * @example
   * DISK
   */
  instanceSubType?: string;
  /**
   * @remarks
   * Asset types of cloud products. Values:
   * - **ECS**: Elastic Compute Service 
   * - **SLB**: Server Load Balancer 
   * - **RDS**: Relational Database Service 
   * - **MONGODB**: MongoDB Database 
   * - **KVSTORE**: Redis Database 
   * - **ACR**: Container Registry 
   * - **CSK**: CSK 
   * - **VPC**: Virtual Private Cloud 
   * - **ACTIONTRAIL**: Action Trail 
   * - **CDN**: Content Delivery Network 
   * - **CAS**: Digital Certificate Management Service [formerly SSL Certificates] 
   * - **RDC**: DevOps 
   * - **RAM**: Resource Access Management 
   * - **DDOS**: Distributed Denial of Service 
   * - **WAF**: Web Application Firewall 
   * - **OSS**: Object Storage Service 
   * - **POLARDB**: POLARDB 
   * - **POSTGRESQL**: PostgreSQL 
   * - **MSE**: MSE 
   * - **NAS**: Network Attached Storage 
   * - **SDDP**: Sensitive Data Discovery and Protection 
   * - **EIP**: Elastic IP
   * 
   * @example
   * ECS
   */
  instanceType?: string;
  /**
   * @remarks
   * Cloud asset vendor. Values: 
   * - **ALIYUN**: Alibaba Cloud 
   * - **Tencent**: Tencent Cloud 
   * - **HUAWEICLOUD**: Huawei Cloud 
   * - **Azure**: Microsoft 
   * - **AWS**: Amazon Web Services (AWS)
   * 
   * @example
   * ALIYUN
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      checkRule: 'CheckRule',
      cloudAssetInstance: 'CloudAssetInstance',
      instanceSubType: 'InstanceSubType',
      instanceType: 'InstanceType',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRule: 'string',
      cloudAssetInstance: VerifyCheckCustomConfigRequestCustomCheckConfigCloudAssetInstance,
      instanceSubType: 'string',
      instanceType: 'string',
      vendor: 'string',
    };
  }

  validate() {
    if(this.cloudAssetInstance && typeof (this.cloudAssetInstance as any).validate === 'function') {
      (this.cloudAssetInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCheckCustomConfigRequestCustomConfigs extends $dara.Model {
  /**
   * @remarks
   * Name of the custom configuration item for the check item, unique within the same check item.
   * 
   * @example
   * IPList
   */
  name?: string;
  /**
   * @remarks
   * Operation type for the custom configuration item of the check item. Only pass DELETE when deleting; no need to pass for creation or update.
   * 
   * @example
   * DELETE
   */
  operation?: string;
  /**
   * @remarks
   * User-configured value string for the custom configuration item of the check item.
   * 
   * @example
   * 10.12.4.XX
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operation: 'Operation',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operation: 'string',
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

export class VerifyCheckCustomConfigRequestRepairConfigs extends $dara.Model {
  /**
   * @remarks
   * ID of the repair process during the repair.
   * 
   * @example
   * 7fec0a3395b345c18f108ffc9fc0****
   */
  flowId?: string;
  /**
   * @remarks
   * Name of the repair parameter for the check item, unique within the same check item.
   * 
   * @example
   * IPLists
   */
  name?: string;
  /**
   * @remarks
   * Operation type for the custom configuration item of the check item. Only pass DELETE when deleting; no need to pass for creation or update.
   * 
   * @example
   * DELETE
   */
  operation?: string;
  /**
   * @remarks
   * User-configured value string for the repair parameter of the check item.
   * 
   * @example
   * 172.26.49.XX
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      name: 'Name',
      operation: 'Operation',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      name: 'string',
      operation: 'string',
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

export class VerifyCheckCustomConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Check item ID.
   * 
   * @example
   * 76
   */
  checkId?: number;
  /**
   * @remarks
   * Custom check item to validate input parameters.
   */
  customCheckConfig?: VerifyCheckCustomConfigRequestCustomCheckConfig;
  /**
   * @remarks
   * List of custom configuration items for the check item.
   */
  customConfigs?: VerifyCheckCustomConfigRequestCustomConfigs[];
  /**
   * @remarks
   * Repair parameters supported by the check item\\"s repair function.
   */
  repairConfigs?: VerifyCheckCustomConfigRequestRepairConfigs[];
  /**
   * @remarks
   * Situation Awareness parameter validation types: 
   * - **REPAIR_CONFIG**: Repair and custom parameter validation (default) 
   * - **CHECK_ITEM_CONFIG**: Custom check item validation
   * 
   * @example
   * REPAIR_CONFIG
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      customCheckConfig: 'CustomCheckConfig',
      customConfigs: 'CustomConfigs',
      repairConfigs: 'RepairConfigs',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      customCheckConfig: VerifyCheckCustomConfigRequestCustomCheckConfig,
      customConfigs: { 'type': 'array', 'itemType': VerifyCheckCustomConfigRequestCustomConfigs },
      repairConfigs: { 'type': 'array', 'itemType': VerifyCheckCustomConfigRequestRepairConfigs },
      type: 'string',
    };
  }

  validate() {
    if(this.customCheckConfig && typeof (this.customCheckConfig as any).validate === 'function') {
      (this.customCheckConfig as any).validate();
    }
    if(Array.isArray(this.customConfigs)) {
      $dara.Model.validateArray(this.customConfigs);
    }
    if(Array.isArray(this.repairConfigs)) {
      $dara.Model.validateArray(this.repairConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

