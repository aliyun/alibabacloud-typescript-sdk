// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetFilesetQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. The dry run checks parameter validity and prerequisites. The dry run does not delete the specified quota or incur fees.
   * 
   * Valid values:
   * 
   * *   true: performs only a dry run. The system checks the required parameters, request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the HTTP status code 200 is returned.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, the quota is deleted.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The number of files of the quota. Valid values:
   * 
   * *   Minimum value: 10,000.
   * *   Maximum value: 10,000,000,000.
   * 
   * >  If you do not specify this parameter, the number of files is unlimited.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The ID of the CPFS for LINGJUN file system. The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
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
  /**
   * @remarks
   * The total capacity of the quota. Unit: bytes.
   * 
   * Valid values:
   * 
   * *   Minimum value: 10,737,418,240 (10 GiB).
   * *   Step size: 1,073,741,824 (1 GiB).
   * 
   * >  If you do not specify this parameter, the capacity is unlimited.
   * 
   * @example
   * 10737418240
   */
  sizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      fileCountLimit: 'FileCountLimit',
      fileSystemId: 'FileSystemId',
      fsetId: 'FsetId',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      fileCountLimit: 'number',
      fileSystemId: 'string',
      fsetId: 'string',
      sizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

