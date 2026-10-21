// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The storage capacity of the file system after the scale-up.
   * 
   * The new capacity must be greater than the current capacity of the file system. Unit: GiB.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. Generate a unique value from your client to ensure that the value is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotency](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may differ for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request.
   * 
   * A dry run checks parameter validity and resource availability without actually creating an instance or incurring charges.
   * 
   * Valid values:  
   * - true: Sends a dry run request without creating an instance. The check items include required parameters, request format, business limits, and NAS inventory. If the check fails, the corresponding error is returned. If the check passes, HTTP status code 200 is returned, but FileSystemId is empty.  
   * - false (default): Sends a normal request. After the check passes, the instance is created.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * - Extreme NAS: The ID must start with `extreme-`, for example, extreme-0015\\*\\*\\*\\*.
   * - CPFS: The ID must start with `cpfs-`, for example, cpfs-125487\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * extreme-0015****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      clientToken: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

