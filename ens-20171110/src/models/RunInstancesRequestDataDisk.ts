// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInstancesRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The category of the disk. Valid values:
   * 
   * *   **cloud_efficiency**: ultra disk.
   * *   **cloud_ssd**: all-flash disk.
   * *   **local_hdd**: local HDD.
   * *   **local_ssd**: local SSD.
   * 
   * @example
   * cloud_efficiency
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the disk. Valid values:
   * 
   * *   true.
   * *   false (default).
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is used for the disk. Valid values:
   * 
   * *   true.
   * *   false (default).
   * 
   * >  If you set the Encrypted parameter to true, the default service key is used when the KMSKeyId parameter is empty.
   * 
   * @example
   * false
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The size of a data disk. Unit: GiB.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      encrypted: 'boolean',
      KMSKeyId: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

