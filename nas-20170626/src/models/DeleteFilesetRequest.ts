// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFilesetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may differ for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this deletion request.
   * 
   * A dry run checks parameter validity and resource availability without actually deleting the instance.
   * 
   * Valid values:
   * 
   * - true: Sends a check request without deleting the instance. The check items include whether required parameters are specified, the request format, and business limitations. If the check fails, the corresponding error is returned. If the check passes, HTTP status code 200 is returned.
   * 
   * - false (default): Sends a normal request. After the check passes, the instance is directly deleted.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * - CPFS: The ID must start with `cpfs-`, such as cpfs-099394bd928c****.
   * 
   * - CPFS for Lingjun: The ID must start with `bmcpfs-`, such as bmcpfs-290w65p03ok64ya****.
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

