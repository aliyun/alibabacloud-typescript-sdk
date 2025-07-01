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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the export directory for the protocol service. The **name of the export directory** appears in the console.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   The description must start with a letter but cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. The dry run checks parameter validity and prerequisites. The dry run does not create an export directory or incur fees.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the request format, service limits, prerequisites, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the ExportId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, an export directory is created.
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
   * cpfs-123****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the fileset that you want to export.
   * 
   * Limits:
   * 
   * *   The fileset already exists.
   * *   You can create only one export directory for a fileset.
   * *   You can specify either a fileset or a path.
   * 
   * @example
   * fset-123****
   */
  fsetId?: string;
  /**
   * @remarks
   * The path of the CPFS directory that you want to export.
   * 
   * Limits:
   * 
   * *   The directory already exists in the CPFS file system.
   * *   You can create only one export directory for a directory.
   * *   You can specify either a fileset or a path.
   * 
   * Format:
   * 
   * *   The path must be 1 to 1,024 characters in length.
   * *   The path must be encoded in UTF-8.
   * *   The path must start and end with a forward slash (/). The root directory is `/`.
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
   * ptc-123****
   */
  protocolServiceId?: string;
  /**
   * @remarks
   * The vSwitch ID of the export directory for the protocol service.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-123****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID of the export directory for the protocol service.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-123****
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
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

