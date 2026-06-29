// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachVscToFilesystemsRequestResourceIds extends $dara.Model {
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

export class AttachVscToFilesystemsRequestRoleChain extends $dara.Model {
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

export class AttachVscToFilesystemsRequest extends $dara.Model {
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
   * The ID information of file systems and virtual storage channels. A maximum of 10 entries can be specified per batch.
   * 
   * This parameter is required.
   */
  resourceIds?: AttachVscToFilesystemsRequestResourceIds[];
  roleChain?: AttachVscToFilesystemsRequestRoleChain[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      resourceIds: 'ResourceIds',
      roleChain: 'RoleChain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      resourceIds: { 'type': 'array', 'itemType': AttachVscToFilesystemsRequestResourceIds },
      roleChain: { 'type': 'array', 'itemType': AttachVscToFilesystemsRequestRoleChain },
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

