// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFilesystemsVscAttachInfoRequestResourceIds extends $dara.Model {
  /**
   * @remarks
   * The file system ID.
   * 
   * @example
   * bmcpfs-290t15yn4uo8lid****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The virtual storage channel ID.
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
  assumeRoleFor?: string;
  roleArn?: string;
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
   * The number of results for each query.
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
   * The query token. Set the value to the NextToken value returned in the previous API call.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID information of file systems and virtual storage channels. A maximum of 10 entries can be specified per batch.
   * 
   * This parameter is required.
   */
  resourceIds?: DescribeFilesystemsVscAttachInfoRequestResourceIds[];
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

