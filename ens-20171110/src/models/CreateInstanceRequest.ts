// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateInstanceRequestDataDisk } from "./CreateInstanceRequestDataDisk";
import { CreateInstanceRequestSystemDisk } from "./CreateInstanceRequestSystemDisk";


export class CreateInstanceRequest extends $dara.Model {
  dataDisk?: CreateInstanceRequestDataDisk[];
  systemDisk?: CreateInstanceRequestSystemDisk;
  /**
   * @remarks
   * Specifies whether to enable the auto-renewal feature. Valid values: **True** and **False**. Default value: False.
   * 
   * @example
   * True
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal period for the instance. This parameter is required when the **AutoRenew** parameter is set to **True**. Valid values: **1** to **12**. Unit: months.
   * 
   * @example
   * 12
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The hostname of the Elastic Compute Service (ECS) instance. General naming rules: The hostname cannot start or end with a period (.) or hyphen (-). It cannot contain consecutive periods (.) or hyphens (-).
   * 
   * Naming rules for specific instances:
   * 
   * *   For Windows instances, the hostname must be **2** to **15** characters in length and cannot contain periods (.) or contain only digits. The hostname cannot contain periods (.) or contain only digits.
   * *   For instances that run one of other operating systems such as Linux, the hostname must be **2** to **64** characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
   * 
   * @example
   * test-HostName
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the image file that you select when creating the instance.
   * 
   * @example
   * yourImage ID
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the instance. The name must conform to the following naming conventions:
   * 
   * *   The name must be **2** to **128** characters in length.
   * *   It must start with a letter but cannot start with http:// or https://.
   * *   The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * If you do not specify this parameter, the instance ID is used as the instance name by default.
   * 
   * @example
   * test:Instance_Name.1-2
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * For more information, see [](~~66124~~).
   * 
   * This parameter is required.
   * 
   * @example
   * ens.se1.tiny
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter is required if you create the instance for the first time. The existing billing method is used by default if you have created an instance. Valid values:
   * 
   * *   **BandwidthByDay**: Pay by daily peak bandwidth.
   * *   **95BandwidthByMonth**: Pay by monthly 95th percentile bandwidth.
   * 
   * @example
   * 95BandwidthByMonth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The type of the IP address. Valid values:
   * 
   * *   **ipv4** (default)
   * *   **ipv6**
   * *   **ipv4Andipv6**
   * 
   * @example
   * ipv4
   */
  ipType?: string;
  /**
   * @remarks
   * The name of the key pair. You can specify only one name.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the instance.
   * 
   * The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include: ``()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/``
   * 
   * @example
   * yourPassword:1
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the preset password of the image. Valid values:
   * 
   * - **true**: The password preset in the image is used, and the **Password** parameter must be null. For secure access, make sure that the selected image has a password configured.
   * 
   * - **false**: does not use the password preset in the image.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The billing method of the instance. Set the value to Subscription.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The subscription period of the instance. Valid values: **1** to **9** and **12**. Unit: months.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  period?: string;
  /**
   * @remarks
   * The internal IP address. If this parameter is specified, you must specify the vSwitch ID. The vSwitch must be created first. Otherwise, an error is returned.
   * 
   * @example
   * 10.10.10.10
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * Specifies whether a public IP address can be assigned to the specified instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  publicIpIdentification?: boolean;
  /**
   * @remarks
   * The number of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  quantity?: string;
  /**
   * @remarks
   * Specifies whether to automatically append sequential suffixes to the hostnames specified by the **HostName** parameter and instance names specified by the **InstanceName** parameter. The sequential suffixes range from **001** to **999**.
   * 
   * Examples: **LocalHost001** and **LocalHost002**, and **MyInstance001** and **MyInstance002**.
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  uniqueSuffix?: boolean;
  /**
   * @remarks
   * Custom data. The data starts with `#!`. The data can be at most 256 characters in length and 16 KB in size. Only custom scripts are supported and cannot be rendered by InstanceMetaData.
   * 
   * You can specify custom data. The data is encoded in Base64. The system does not encrypt your custom data when API requests are initiated. We recommend that you do not pass in confidential information such as passwords and private keys in plaintext. If you want to provide sensitive data such as passwords and private keys, encrypt the data and then encode it in Base64. The data is decrypted on the instance in the way it is encrypted.
   * 
   * For more information, see [User data formats](https://cloudinit.readthedocs.io/en/latest/topics/format.html).
   * 
   * @example
   * #!/bin/sh  echo "Hello World.  The time is now $(date -R)!" | tee /home/output.txt
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * YourVSwitchId
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
      systemDisk: 'SystemDisk',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      ensRegionId: 'EnsRegionId',
      hostName: 'HostName',
      imageId: 'ImageId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      ipType: 'IpType',
      keyPairName: 'KeyPairName',
      ownerId: 'OwnerId',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      paymentType: 'PaymentType',
      period: 'Period',
      privateIpAddress: 'PrivateIpAddress',
      publicIpIdentification: 'PublicIpIdentification',
      quantity: 'Quantity',
      uniqueSuffix: 'UniqueSuffix',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': CreateInstanceRequestDataDisk },
      systemDisk: CreateInstanceRequestSystemDisk,
      autoRenew: 'string',
      autoRenewPeriod: 'string',
      ensRegionId: 'string',
      hostName: 'string',
      imageId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      ipType: 'string',
      keyPairName: 'string',
      ownerId: 'number',
      password: 'string',
      passwordInherit: 'boolean',
      paymentType: 'string',
      period: 'string',
      privateIpAddress: 'string',
      publicIpIdentification: 'boolean',
      quantity: 'string',
      uniqueSuffix: 'boolean',
      userData: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

