// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyProtocolMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the token on your client and ensure that the token is unique across different requests.
   * 
   * The client token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request may be different.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the export directory for the protocol service.
   * 
   * Limits:
   * - The description must be 2 to 128 characters in length.
   * - It must start with a letter or a Chinese character and cannot start with `http://` or `https://`.
   * - It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * Description of the export directory
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the modification request.
   * 
   * A dry run checks whether the parameters are valid and whether the dependencies are met. It does not actually modify the export directory or incur any fees.
   * 
   * Valid values:
   * 
   * - **true**: A dry run is performed and the export directory is not modified. The system checks whether required parameters are specified, the request format is valid, and the business limits and dependencies are met.
   *   - **A dry run with DryRun set to true also checks the resource status** (including the requirement that the export directory must be in the AVAILABLE state).
   *   - If the status of the export directory does not meet the requirements (for example, the status is CREATING), the corresponding error is returned.
   *   - **A dry run does not bypass the status check**. It is only used to verify the validity of request parameters and basic dependencies.
   *   - If the request fails the dry run, the corresponding error is returned. If the request passes the dry run, the HTTP status code 200 is returned.
   * 
   * - **false** (default): A normal request is sent. If the request passes the check, the parameters of the export directory are directly modified.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the export directory for the protocol service. You can call the [DescribeProtocolMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolmounttarget-cpfs) operation to query the export directory information and obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exp-19abf5beab8d****
   */
  exportId?: string;
  /**
   * @remarks
   * The ID of the file system. You can call the [DescribeFileSystems](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describefilesystems-cpfs) operation to query the file system information and obtain the ID. Set the FileSystemType parameter to cpfs.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the protocol service. You can call the [DescribeProtocolService](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolservice-cpfs) operation to query the protocol service information and obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ptc-197ed6a00f2b****
   */
  protocolServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      exportId: 'ExportId',
      fileSystemId: 'FileSystemId',
      protocolServiceId: 'ProtocolServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      exportId: 'string',
      fileSystemId: 'string',
      protocolServiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

