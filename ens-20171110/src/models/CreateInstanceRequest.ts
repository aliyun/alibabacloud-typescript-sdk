// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The size of the first data cloud disk. Unit: GiB. The size must be at least 20 GiB and a multiple of 10.
   * 
   * @example
   * 50
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB. The value must be a multiple of 10 and cannot be smaller than the image size. For the valid range, refer to the SystemDiskMinSize and SystemDiskMaxSize values returned by DescribeAvailableResourceInfo. 20 GiB and 40 GiB are common configurations and do not indicate that only these two values are supported.
   * 
   * @example
   * 40
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $dara.Model {
  dataDisk?: CreateInstanceRequestDataDisk[];
  systemDisk?: CreateInstanceRequestSystemDisk;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values: **True** | **False** (default).
   * 
   * @example
   * True
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal period. This parameter is required when **AutoRenew** is set to **True**. Valid values: **1** to **12**. Unit: months.
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
   * The hostname of the instance.
   * General naming conventions: Periods (.) and hyphens (-) cannot be used as the first or last character and cannot be used consecutively.
   * 
   * Specific naming conventions:
   * - Windows instances: The hostname must be **2** to **15** characters in length. Periods (.) are not supported. The hostname cannot consist entirely of digits. Uppercase letters, lowercase letters, digits, and hyphens (-) are allowed.
   * - Other instances (such as Linux): The hostname must be **2** to **64** characters in length. Multiple periods (.) are supported. Each segment separated by a period can contain uppercase letters, lowercase letters, digits, and hyphens (-).
   * 
   * @example
   * test-HostName
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the image that is used to start the instance.
   * 
   * @example
   * yourImage ID
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the instance. Naming conventions:
   * 
   * - The name must be **2** to **128** characters in length and can contain letters and Chinese characters.
   * - The name must start with an uppercase letter, a lowercase letter, or a Chinese character. It cannot start with http:// or https://.
   * - The name can contain digits, colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * If this parameter is not specified, the default value is the InstanceId of the instance.
   * 
   * @example
   * test：Instance_Name.1-2
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * For details about instance types, see [Limits](https://help.aliyun.com/document_detail/66124.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ens.se1.tiny
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter is required when you create an instance for the first time. If you already have instance resources, the existing billing method is used by default. Valid values:
   * 
   * - **BandwidthByDay**: daily peak bandwidth.
   * 
   * - **95BandwidthByMonth**: monthly 95th percentile bandwidth.
   * 
   * @example
   * 95BandwidthByMonth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The IP type. Valid values:
   * 
   * - **ipv4** (default): IPv4.
   * 
   * - **ipv6**: IPv6.
   * 
   * - **ipv4Andipv6**: IPv4 and IPv6.
   * 
   * @example
   * ipv4
   */
  ipType?: string;
  /**
   * @remarks
   * The name of the key pair. Only a single name is supported.
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
   * The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported: ```()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/```
   * 
   * @example
   * yourPassword:1
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the preset password of the image. Valid values:
   * 
   * - **true**: The preset password of the image is used. The **Password** parameter must be empty, and you must make sure that the image has a preset password.
   * - **false**: The preset password of the image is not used.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The payment method. Currently, this is a fixed value of Subscription (subscription instance). Modification is not supported.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The subscription duration. Valid values: **1** to **9** and **12**. Unit: months.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  period?: string;
  /**
   * @remarks
   * The private IP address. If you specify a private IP address, you must also specify the VSwitchId parameter. The vSwitch must be created in advance. Otherwise, an error is returned.
   * 
   * @example
   * 10.10.10.10
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * Specifies whether a public IP address can be assigned to the specified instance. Valid values:
   * 
   * - **true** (default): A public IP address can be assigned.
   * - **false**: A public IP address cannot be assigned.
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
   * Specifies whether to add sequential suffixes to **HostName** and **InstanceName**. The sequential suffixes start from **001** and cannot exceed **999**.
   * 
   * Example: **LocalHost001**, **LocalHost002**, **MyInstance001**, and **MyInstance002**.
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  uniqueSuffix?: boolean;
  /**
   * @remarks
   * The custom data. The data must start with `#!`. The maximum length is 256 characters and the maximum size is 16 KB. Only custom data scripts are supported. InstanceMetaData rendering is not supported.
   * 
   * 
   * You can pass in custom data that is Base64-encoded. When you call the API to initiate a request, the custom data you specify is not encrypted. Do not pass in confidential information such as passwords and private keys in plaintext. If you need to pass in passwords or private keys, encrypt the content first and then Base64-encode it before passing it in. Decrypt the content in the same way inside the instance.
   * 
   * For more information, see [Data format](https://cloudinit.readthedocs.io/en/latest/topics/format.html).
   * 
   * @example
   * #!/bin/sh  echo "Hello World.  The time is now $(date -R)!" | tee /home/output.txt
   */
  userData?: string;
  /**
   * @remarks
   * The vSwitch ID.
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

