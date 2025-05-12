// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopsShrinkRequestBundleModels extends $dara.Model {
  /**
   * @remarks
   * The number of cloud computers that you want to create. Valid values: 1 to 300. Default value: null.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The ID of a cloud computer template.
   * 
   * @example
   * b-je9hani001wfn****
   */
  bundleId?: string;
  /**
   * @remarks
   * The name of the cloud computer. The name must meet the following requirements:
   * 
   * *   The name must be 1 to 64 characters in length.
   * *   The name must start with a letter but cannot start with `http://` or `https://`.
   * *   The name can only contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * testDesktopName
   */
  desktopName?: string;
  /**
   * @remarks
   * The IDs of the end users to whom the cloud computer are assigned.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The custom hostnames of the cloud computers. This parameter is valid only if the office network is an AD office network and the operating system type of the cloud computers is Windows.
   * 
   * The hostnames must meet the following requirements:
   * 
   * *   The hostnames must be 2 to 15 characters in length.
   * *   The hostnames can contain only letters, digits, and hyphens (-). The hostnames cannot start or end with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
   * 
   * When you create multiple cloud computers, you can use the `name_prefix[begin_number,bits]name_suffix` naming format to name the cloud computers. For example, if you set the value of the Hostname parameter to ecd-[1,4]-test, the hostname of the first cloud computer is ecd-0001-test, the hostname of the second cloud computer is ecd-0002-test, and so on.
   * 
   * *   `name_prefix`: the prefix of the hostname.
   * *   `[begin_number,bits]`: the sequential number in the hostname. The `begin_number` value is the starting digit. Valid values of begin_number: 0 to 999999. Default value: 0. The `bits` value is the number of digits. Valid values: 1 to 6. Default value: 6.
   * *   `name_suffix`: the suffix of the hostname.
   * 
   * @example
   * testhost
   */
  hostname?: string;
  /**
   * @remarks
   * Specifies whether to enable disk encryption.
   * 
   * @example
   * false
   */
  volumeEncryptionEnabled?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is used when disk encryption is enabled. You can call the [ListKeys](https://help.aliyun.com/document_detail/28951.html) operation to query the list of KMS keys.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      bundleId: 'BundleId',
      desktopName: 'DesktopName',
      endUserIds: 'EndUserIds',
      hostname: 'Hostname',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      bundleId: 'string',
      desktopName: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      hostname: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

