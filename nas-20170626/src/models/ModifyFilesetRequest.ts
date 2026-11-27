// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFilesetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The release protection property of the instance. Specifies whether the instance can be released by using the console or by calling the [DeleteFileset](https://help.aliyun.com/document_detail/2402263.html) operation.
   * 
   * - true: enables release protection for the instance.
   * - false: disables release protection for the instance.
   * 
   * > This property only restricts manual release operations and does not take effect on system release operations.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The description of the fileset.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the modification request.
   * 
   * A dry run checks parameter validity and inventory without actually modifying the instance or incurring fees.
   * 
   * Valid values:
   * 
   * - true: performs a dry run. The instance is not modified. The system checks whether required parameters are specified, the request format, business limits, and NAS inventory. If the request fails the dry run, an error is returned. If the request passes the dry run, the HTTP status code 200 is returned.
   * - false: performs a regular request. If the request passes the dry run, the instance is modified.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * - CPFS: must start with `cpfs-`, such as cpfs-099394bd928c****.
   * 
   * - CPFS for Lingjun: must start with `bmcpfs-`, such as bmcpfs-290w65p03ok64ya****.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The Fileset ID.
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
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      fsetId: 'FsetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deletionProtection: 'boolean',
      description: 'string',
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

