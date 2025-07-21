// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKmsInstanceResponseBodyKmsInstanceBindVpcsBindVpc extends $dara.Model {
  /**
   * @remarks
   * The region to which the VPC belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The vSwitch in the VPC.
   * 
   * @example
   * vsw-bp1i512amhdje10f1****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp19z7djuhtad5dff****
   */
  vpcId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 190325303126****
   */
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
  /**
   * @remarks
   * A list of associated VPCs.
   * 
   * >  If your self-managed applications are deployed in multiple VPCs in the same region, you can associate VPCs with the KMS instance beyond the VPC that you specify when you enable the KMS instance. The VPCs can belong to the same Alibaba Cloud account or different Alibaba Cloud accounts. After the configuration is complete, self-managed applications in the VPCs can access the specified KMS instance.
   */
  bindVpcs?: GetKmsInstanceResponseBodyKmsInstanceBindVpcs;
  /**
   * @remarks
   * The content of the certificate authority (CA) certificate of the KMS instance.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\r\\nMIIDuzCCAqOgAwIBAgIJALTKwWAjvbMiMA0GCSqGSIb3DQEBCwUAMHQxCzAJBgNV****-----END CERTIFICATE-----
   */
  caCertificateChainPem?: string;
  chargeType?: string;
  /**
   * @remarks
   * The time when the KMS instance is created.
   * 
   * @example
   * 2023-09-05T12:44:20Z
   */
  createTime?: string;
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
   * The number of keys that can be created for the KMS instance.
   * 
   * @example
   * 1000
   */
  keyNum?: number;
  productVersion?: string;
  /**
   * @remarks
   * The number of secrets that can be created for the KMS instance.
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
   * The time when the KMS instance is enabled.
   * 
   * @example
   * 2023-09-05T12:44:19Z
   */
  startDate?: string;
  /**
   * @remarks
   * The status of the KMS instance. Valid values:
   * 
   * *   Uninitialized: The KMS instance is not enabled.
   * *   Connecting: The KMS instance is being connected.
   * *   Connected: The KMS instance is enabled.
   * *   Disconnected: The KMS instance is disconnected.
   * *   Error: The KMS instance is abnormal.
   * 
   * @example
   * Connected
   */
  status?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) with which the KMS instance is associated.
   * 
   * @example
   * vpc-bp19z7cwmltad5dff****
   */
  vpcId?: string;
  /**
   * @remarks
   * The access management quota for the KMS instance.
   * 
   * @example
   * 5
   */
  vpcNum?: number;
  /**
   * @remarks
   * The vSwitch in the VPC.
   * 
   * @example
   * vsw-bp1i512amda6d10a0****
   */
  vswitchIds?: string;
  /**
   * @remarks
   * The zone with which the KMS instance is associated.
   * 
   * @example
   * "cn-hangzhou-k",       "cn-hangzhou-j"
   */
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      bindVpcs: 'BindVpcs',
      caCertificateChainPem: 'CaCertificateChainPem',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      keyNum: 'KeyNum',
      productVersion: 'ProductVersion',
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
      endDate: 'string',
      instanceId: 'string',
      instanceName: 'string',
      keyNum: 'number',
      productVersion: 'string',
      secretNum: 'string',
      spec: 'number',
      startDate: 'string',
      status: 'string',
      vpcId: 'string',
      vpcNum: 'number',
      vswitchIds: 'string',
      zoneIds: 'string',
    };
  }

  validate() {
    if(this.bindVpcs && typeof (this.bindVpcs as any).validate === 'function') {
      (this.bindVpcs as any).validate();
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
   */
  kmsInstance?: GetKmsInstanceResponseBodyKmsInstance;
  /**
   * @remarks
   * The request ID.
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

