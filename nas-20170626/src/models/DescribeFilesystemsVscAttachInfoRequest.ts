// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFilesystemsVscAttachInfoRequestResourceIds extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system. This parameter is required in each ResourceIds entry and must be provided together with VscId.
   * 
   * @example
   * bmcpfs-290t15yn4uo8lid****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the virtual storage channel. This parameter is required in each ResourceIds entry and must be provided together with FileSystemId. The ID starts with vsc-. You can call the ListVscs operation of Lingjun AI Computing Service eflo-controller/2022-12-15 to query the ID. If the virtual storage channel is not created, call CreateVsc to create one.
   * 
   * @example
   * vsc-8vb864o3ppwfvh****
   */
  vscId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      vscId: 'VscId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      vscId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilesystemsVscAttachInfoRequestRoleChain extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account (the primary account UID). This parameter specifies the Alibaba Cloud account for which the service assumes the role.
   * 
   * @example
   * 101522855006****
   */
  assumeRoleFor?: string;
  /**
   * @remarks
   * The resource descriptor of the specified role. Format: acs:ram::$accountID:role/$roleName.
   * 
   * @example
   * acs:ram::123472233814****:role/aliyunnasclientvsc****
   */
  roleArn?: string;
  /**
   * @remarks
   * The role type. Valid values: service and user.
   * 
   * @example
   * service
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      roleArn: 'RoleArn',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'string',
      roleArn: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilesystemsVscAttachInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return per query.
   * 
   * Valid values: 10 to 100.
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. The value is the NextToken parameter value returned by the previous API call.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID information of the file systems and virtual storage channels. A maximum of 10 items are supported per batch.
   * 
   * This parameter is required.
   */
  resourceIds?: DescribeFilesystemsVscAttachInfoRequestResourceIds[];
  /**
   * @remarks
   * The role chain.
   * >Required only for cross-account scenarios.
   */
  roleChain?: DescribeFilesystemsVscAttachInfoRequestRoleChain[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceIds: 'ResourceIds',
      roleChain: 'RoleChain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceIds: { 'type': 'array', 'itemType': DescribeFilesystemsVscAttachInfoRequestResourceIds },
      roleChain: { 'type': 'array', 'itemType': DescribeFilesystemsVscAttachInfoRequestRoleChain },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.roleChain)) {
      $dara.Model.validateArray(this.roleChain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

