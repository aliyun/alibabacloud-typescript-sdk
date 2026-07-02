// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKmsInstanceResponseBodyKmsInstanceBindVpcsBindVpc extends $dara.Model {
  regionId?: string;
  vSwitchId?: string;
  vpcId?: string;
  vpcOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpcOwnerId: 'VpcOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcOwnerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceResponseBodyKmsInstanceBindVpcs extends $dara.Model {
  bindVpc?: GetKmsInstanceResponseBodyKmsInstanceBindVpcsBindVpc[];
  static names(): { [key: string]: string } {
    return {
      bindVpc: 'BindVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpc: { 'type': 'array', 'itemType': GetKmsInstanceResponseBodyKmsInstanceBindVpcsBindVpc },
    };
  }

  validate() {
    if(Array.isArray(this.bindVpc)) {
      $dara.Model.validateArray(this.bindVpc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceResponseBodyKmsInstance extends $dara.Model {
  bindVpcs?: GetKmsInstanceResponseBodyKmsInstanceBindVpcs;
  /**
   * @remarks
   * The CA certificate chain for the KMS instance in PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\r\\nMIIDuzCCAqOgAwIBAgIJALTKwWAjvbMiMA0GCSqGSIb3DQEBCwUAMHQxCzAJBgNV****-----END CERTIFICATE-----
   */
  caCertificateChainPem?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - `PREPAY`: subscription
   * 
   * - `POSTPAY`: pay-as-you-go
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The creation time of the KMS instance.
   * 
   * @example
   * 2023-09-05T12:44:20Z
   */
  createTime?: string;
  deletionProtection?: boolean;
  deletionProtectionDescription?: string;
  /**
   * @remarks
   * The expiration time of the KMS instance.
   * 
   * @example
   * 2023-10-05T16:00:00Z
   */
  endDate?: string;
  /**
   * @remarks
   * The ID of the KMS instance.
   * 
   * @example
   * kst-bjj62f5ba3dnpb6v8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the KMS instance.
   * 
   * @example
   * kst-bjj62f5ba3dnpb6v8****
   */
  instanceName?: string;
  /**
   * @remarks
   * The maximum number of keys that can be created in the KMS instance.
   * 
   * @example
   * 1000
   */
  keyNum?: number;
  /**
   * @remarks
   * Indicates whether logging is enabled for the KMS instance. Valid values: `1` (enabled) and `0` (disabled).
   * 
   * @example
   * 1
   */
  log?: number;
  /**
   * @remarks
   * The log storage capacity. Unit: GB.
   * 
   * @example
   * 100
   */
  logStorage?: number;
  /**
   * @remarks
   * The product type.<br>Subscription:<br>`kms_ddi_public_cn`: China site<br>`kms_ddi_public_intl`: international site<br>Pay-as-you-go:<br>`kms_ppi_public_cn`: China site<br>`kms_ppi_public_intl`: international site<br><br><br><br><br><br>
   * 
   * @example
   * kms_ddi_public_cn
   */
  productType?: string;
  /**
   * @remarks
   * The version of the KMS instance.
   * 
   * @example
   * 3
   */
  productVersion?: string;
  /**
   * @remarks
   * The sales status of the instance.
   * 
   * @example
   * Normal
   */
  saleStatus?: string;
  /**
   * @remarks
   * The maximum number of credentials that can be created in the KMS instance.
   * 
   * @example
   * 10
   */
  secretNum?: string;
  /**
   * @remarks
   * The computing performance of the KMS instance.
   * 
   * @example
   * 1000
   */
  spec?: number;
  /**
   * @remarks
   * The time when the KMS instance was enabled.
   * 
   * @example
   * 2023-09-05T12:44:19Z
   */
  startDate?: string;
  /**
   * @remarks
   * The status of the KMS instance. Valid values:
   * 
   * - `Uninitialized`: The instance is not enabled.
   * 
   * - `Connecting`: The instance is connecting.
   * 
   * - `Connected`: The instance is enabled.
   * 
   * - `Disconnected`: The instance is disconnected.
   * 
   * - `Error`: The instance is in an error state.
   * 
   * @example
   * Connected
   */
  status?: string;
  /**
   * @remarks
   * The VPC to which the KMS instance is attached.
   * 
   * @example
   * vpc-bp19z7cwmltad5dff****
   */
  vpcId?: string;
  /**
   * @remarks
   * The maximum number of VPCs that can be associated with the KMS instance for access control.
   * 
   * @example
   * 5
   */
  vpcNum?: number;
  /**
   * @remarks
   * The vSwitches in the VPC to which the KMS instance is attached.
   * 
   * @example
   * vsw-bp1i512amda6d10a0****
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * The zones to which the KMS instance is attached.
   * 
   * @example
   * "cn-hangzhou-k",       "cn-hangzhou-j"
   */
  zoneIds?: string[];
  static names(): { [key: string]: string } {
    return {
      bindVpcs: 'BindVpcs',
      caCertificateChainPem: 'CaCertificateChainPem',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      deletionProtection: 'DeletionProtection',
      deletionProtectionDescription: 'DeletionProtectionDescription',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      keyNum: 'KeyNum',
      log: 'Log',
      logStorage: 'LogStorage',
      productType: 'ProductType',
      productVersion: 'ProductVersion',
      saleStatus: 'SaleStatus',
      secretNum: 'SecretNum',
      spec: 'Spec',
      startDate: 'StartDate',
      status: 'Status',
      vpcId: 'VpcId',
      vpcNum: 'VpcNum',
      vswitchIds: 'VswitchIds',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpcs: GetKmsInstanceResponseBodyKmsInstanceBindVpcs,
      caCertificateChainPem: 'string',
      chargeType: 'string',
      createTime: 'string',
      deletionProtection: 'boolean',
      deletionProtectionDescription: 'string',
      endDate: 'string',
      instanceId: 'string',
      instanceName: 'string',
      keyNum: 'number',
      log: 'number',
      logStorage: 'number',
      productType: 'string',
      productVersion: 'string',
      saleStatus: 'string',
      secretNum: 'string',
      spec: 'number',
      startDate: 'string',
      status: 'string',
      vpcId: 'string',
      vpcNum: 'number',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.bindVpcs && typeof (this.bindVpcs as any).validate === 'function') {
      (this.bindVpcs as any).validate();
    }
    if(Array.isArray(this.vswitchIds)) {
      $dara.Model.validateArray(this.vswitchIds);
    }
    if(Array.isArray(this.zoneIds)) {
      $dara.Model.validateArray(this.zoneIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the KMS instance.
   * 
   * @example
   * 3
   */
  kmsInstance?: GetKmsInstanceResponseBodyKmsInstance;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use this ID to locate and troubleshoot issues.
   * 
   * @example
   * 46b4a94a-57d2-44b4-9810-1e87d31abb33
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsInstance: 'KmsInstance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstance: GetKmsInstanceResponseBodyKmsInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.kmsInstance && typeof (this.kmsInstance as any).validate === 'function') {
      (this.kmsInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

