// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFilesetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the value on your client, but you must ensure that the value is unique among different requests.
   * 
   * The client token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the delete request.
   * 
   * A dry run helps you check parameter validity and resource availability without actually deleting the instance.
   * 
   * Valid values:
   * 
   * - true: performs a dry run and does not delete the instance. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the dry run, an error is returned. If the request passes the dry run, the HTTP status code 200 is returned.
   * 
   * - false (default): sends a normal request and directly deletes the instance after it passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * - CPFS: The ID must start with `cpfs-`. Example: cpfs-099394bd928c****.
   * 
   * - CPFS for Lingjun: The ID must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya****.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The fileset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      fsetId: 'FsetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      fsetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

