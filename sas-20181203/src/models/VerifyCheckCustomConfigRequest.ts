// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCheckCustomConfigRequestCustomCheckConfigCloudAssetInstance extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the asset.
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
   * The definition rule of the custom check item.
   * 
   * @example
   * {"AssociatedData":{"ToDataList":[{"DataName":"ACS_ECS_Instance","PropertyPath":"InstanceId","FromPropertyPath":"InstanceId"}]},"MatchProperty":{"Operator":"AND","MatchProperties":[{"DataName":"ACS_ECS_Disk","PropertyPath":"DiskId","MatchOperator":"EQ","MatchPropertyValue":"testId"}]}}
   */
  checkRule?: string;
  /**
   * @remarks
   * The asset instance on which you want to test the rule.
   */
  cloudAssetInstance?: VerifyCheckCustomConfigRequestCustomCheckConfigCloudAssetInstance;
  /**
   * @remarks
   * The asset subtype of the cloud service.
   * 
   * @example
   * DISK
   */
  instanceSubType?: string;
  /**
   * @remarks
   * The asset type of the cloud service. Valid values:
   * 
   * - **ECS**: server
   * - **SLB**: load balancing
   * - **RDS**: ApsaraDB RDS database
   * - **MONGODB**: ApsaraDB for MongoDB database
   * - **KVSTORE**: ApsaraDB for Redis database
   * - **ACR**: ACR
   * - **CSK**: CSK
   * - **VPC**: VPC
   * - **ACTIONTRAIL**: ActionTrail
   * - **CDN**: CDN
   * - **CAS**: Certificate Management Service (formerly SSL Certificates Service)
   * - **RDC**: Apsara Devops
   * - **RAM**: RAM
   * - **DDOS**: distributed deny of service
   * - **WAF**: WAF
   * - **OSS**: access control
   * - **POLARDB**: POLARDB
   * - **POSTGRESQL**: PostgreSQL
   * - **MSE**: MSE
   * - **NAS**: NAS
   * - **SDDP**: SDDP
   * - **EIP**: EIP.
   * 
   * @example
   * ECS
   */
  instanceType?: string;
  /**
   * @remarks
   * The cloud asset vendor. Valid values:
   * - **ALIYUN**: Alibaba Cloud
   * - **Tencent**: Tencent Cloud
   * - **HUAWEICLOUD**: Huawei Cloud
   * - **Azure**: Microsoft Azure
   * - **AWS**: Amazon Web Services (AWS).
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
   * The name of the custom configuration item for the check item. The name is unique within the check item.
   * 
   * @example
   * IPList
   */
  name?: string;
  /**
   * @remarks
   * The operation type of the custom configuration item for the check item. Set this parameter to DELETE only for deletion operations. You do not need to specify this parameter for creation or update operations.
   * 
   * @example
   * DELETE
   */
  operation?: string;
  /**
   * @remarks
   * The user-configured value string of the custom configuration item for the check item.
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
   * The ID of the repair flow that corresponds to the repair operation.
   * 
   * @example
   * 7fec0a3395b345c18f108ffc9fc0****
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the repair parameter for the check item. The name is unique within the check item.
   * 
   * @example
   * IPLists
   */
  name?: string;
  /**
   * @remarks
   * The operation type of the custom configuration item for the check item. Set this parameter to DELETE only for deletion operations. You do not need to specify this parameter for creation or update operations.
   * 
   * @example
   * DELETE
   */
  operation?: string;
  /**
   * @remarks
   * The user-configured value string of the repair configuration item for the check item.
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
   * The ID of the check item.
   * 
   * @example
   * 76
   */
  checkId?: number;
  /**
   * @remarks
   * The input parameters for custom check item validation.
   */
  customCheckConfig?: VerifyCheckCustomConfigRequestCustomCheckConfig;
  /**
   * @remarks
   * The list of custom parameter configuration items for the check item.
   */
  customConfigs?: VerifyCheckCustomConfigRequestCustomConfigs[];
  /**
   * @remarks
   * The repair parameters supported by the repair feature of the check item.
   */
  repairConfigs?: VerifyCheckCustomConfigRequestRepairConfigs[];
  /**
   * @remarks
   * The validation type for Threat Detection Service parameters. Valid values:
   * - **REPAIR_CONFIG**: repair and custom parameter validation (default).
   * - **CHECK_ITEM_CONFIG**: custom check item validation.
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

