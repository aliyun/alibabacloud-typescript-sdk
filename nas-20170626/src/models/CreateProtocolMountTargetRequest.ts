// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProtocolMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * Default value: DEFAULT_VPC_GROUP_NAME.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may differ for each API request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the protocol service export directory. This parameter is displayed as **Export Directory Name** in the console.
   * 
   * Limits:
   * - The description must be 2 to 128 characters in length and can contain letters and Chinese characters.
   * - The description must start with a letter or a Chinese character and cannot start with `http://` or `https://`.
   * - The description can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * 此导出目录的描述
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request. A dry run checks parameter validity, dependencies, and other conditions without actually creating the instance or incurring charges.
   * 
   * Valid values:
   * - true: sends a dry run request without creating the export directory. The dry run checks whether required parameters are specified, whether the request format is valid, and whether business limit dependencies are met. If the check fails, the corresponding error is returned. If the check succeeds, HTTP status code 200 is returned, but ExportId is empty.
   * 
   * - false (default): sends a normal request. After the check succeeds, the instance is created.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the fileset to export.
   * 
   * Limits:
   * - The fileset must already exist.
   * - Only one export directory can be created for each fileset.
   * - You must specify one and only one of FsetId and Path.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  /**
   * @remarks
   * The path of the CPFS directory to export.
   * 
   * Limits:
   * - The directory must already exist on the CPFS file system.
   * - Only one export can be created for each directory.
   * - You must specify one and only one of FsetId and Path.
   * 
   * Format:
   * - The path must be 1 to 1,024 characters in length.
   * - The path must be encoded in UTF-8.
   * - The path must start and end with a forward slash (/). The root directory is `/`.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The ID of the protocol service.
   * 
   * This parameter is required.
   * 
   * @example
   * ptc-197ed6a00f2b****
   */
  protocolServiceId?: string;
  /**
   * @remarks
   * The ID of the vSwitch for the protocol service export.
   * 
   * If the storage redundancy type of the file system is not zone-redundant storage (ZRS), this parameter is required when VpcId is specified.
   * >  The vSwitch must be in the same zone as the target CPFS file system.
   * 
   * @example
   * vsw-2vc3c2lybvdllxyq4****
   * 
   * **if can be null:**
   * true
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The list of vSwitch IDs for the protocol service export.
   * 
   * **if can be null:**
   * true
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the VPC for the protocol service export.
   * 
   * @example
   * vpc-2vct297b8157bth9z****
   * 
   * **if can be null:**
   * true
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      fsetId: 'FsetId',
      path: 'Path',
      protocolServiceId: 'ProtocolServiceId',
      vSwitchId: 'VSwitchId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      fsetId: 'string',
      path: 'string',
      protocolServiceId: 'string',
      vSwitchId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

