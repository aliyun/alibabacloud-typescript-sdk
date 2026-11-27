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
   * The client token that is used to ensure the idempotence of the request. You can generate a parameter value from your client to ensure that the value is unique across different requests.
   * 
   * The ClientToken parameter supports only ASCII characters and can be up to 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request may be different.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the export directory for the protocol service. It is displayed as the **Export Directory Name** in the console.
   * 
   * Limits:
   * - The value must be 2 to 128 characters in length.
   * - The value must start with a letter or a Chinese character, and cannot start with `http://` or `https://`.
   * - The value can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * The description of this export directory
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the creation request.
   * A dry run helps you check the validity of parameters and dependencies without actually creating the instance or incurring fees.
   * 
   * Valid values:
   * - true: sends a check request and does not create the export directory. The check items include whether required parameters are specified, the request format, and business limits and dependencies. If the check fails, the corresponding error is returned. If the check succeeds, the HTTP status code 200 is returned, but ExportId is empty.
   * - false (default): sends a normal request and directly creates the instance after the check succeeds.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * > The target CPFS file system must be in the Running state before you can call this operation. It takes about 20 to 40 minutes for a file system to reach the Running state after creation. You can poll the Status field by calling the [DescribeFileSystems](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-describefilesystems) operation. A value of Running indicates that the file system is ready.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the Fileset to be exported.
   * 
   * Limits:
   * - The Fileset must already exist.
   * - Only one export directory can be created for a single Fileset.
   * - You must specify either Fileset or Path, but not both.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  /**
   * @remarks
   * The path of the CPFS directory to be exported.
   * 
   * Limits:
   * - The directory must already exist on the CPFS file system.
   * - Only one export can be created for the same directory.
   * - You must specify either Fileset or Path, but not both.
   * 
   * Format:
   * - The value must be 1 to 1,024 characters in length.
   * - The value must be encoded in UTF-8.
   * - The value must start and end with a forward slash (/). The root directory is `/`.
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
   * The ID of the vSwitch to which the protocol service export belongs.
   * 
   * If the storage redundancy type of the file system is not zone-redundant storage (ZRS) and VpcId is specified, this parameter is required.
   * > The vSwitch must be in the same zone as the target CPFS file system (the ZoneId values must be the same). You can call the [DescribeFileSystems](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-describefilesystems) operation to query the ZoneId field of the file system, and then select a vSwitch in the same zone.
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
   * The ID of the VPC to which the protocol service export belongs.
   * > The CIDR block of the selected VPC must not overlap with the VPC CIDR block of the target CPFS file system. You can call the DescribeVpcs operation of VPC to query the CidrBlock field of each VPC for comparison, and select a VPC that does not conflict and is in the same zone as the file system.
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

