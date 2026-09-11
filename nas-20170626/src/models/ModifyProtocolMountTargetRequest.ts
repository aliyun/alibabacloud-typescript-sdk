// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyProtocolMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a unique value from your client to ensure that different requests have unique ClientToken values.
   * 
   * ClientToken supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system uses the RequestId of the API request as the ClientToken. The RequestId may vary for each API request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the export directory of the protocol service.
   * 
   * Limits:
   * 
   * - The description must be 2 to 128 characters in length.
   * - The description must start with a letter or Chinese character and cannot start with `http://` or `https://`.
   * - The description can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * Description of this export directory
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this modification request.
   * 
   * A dry run checks parameter validity and dependency conditions without actually modifying the export directory or incurring charges.
   * 
   * Valid values:
   * 
   * - **true**: Sends a dry run request without modifying the export directory. The check items include required parameters, request format, and business dependency conditions.
   *   - **DryRun=true also performs resource status checks** (including the requirement that the export directory is in the AVAILABLE state).
   *   - If the export directory status does not meet the requirements (such as CREATING), the corresponding error is returned.
   *   - **DryRun does not bypass status checks**. It only validates request parameter validity and basic dependencies.
   *   - If the check fails, the corresponding error is returned. If the check passes, HTTP status code 200 is returned.
   * 
   * - **false (default)**: Sends a normal request. After the check passes, the export directory parameters are directly modified.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The export directory ID of the protocol service. Call [DescribeProtocolMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolmounttarget-cpfs) to obtain the export directory information.
   * 
   * This parameter is required.
   * 
   * @example
   * exp-19abf5beab8d****
   */
  exportId?: string;
  /**
   * @remarks
   * The file system ID. Call [DescribeFileSystems](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describefilesystems-cpfs) (with FileSystemType set to cpfs) to obtain the file system information.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The protocol service ID. Call [DescribeProtocolService](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolservice-cpfs) to obtain the protocol service information.
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

