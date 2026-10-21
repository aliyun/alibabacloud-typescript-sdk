// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachVscToFilesystemsRequestResourceIds extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * bmcpfs-290t15yn4uo8lid****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the VSC. You can call the ListVscs operation of the Lingjun AI Computing Service eflo-controller/2022-12-15 API to query the ID. If no VSC is created, you can call the CreateVsc operation to create one.
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
  /**
   * @remarks
   * The UID of the Alibaba Cloud account. This parameter specifies the Alibaba Cloud account for which the service assumes the role.
   * 
   * @example
   * 176498472570****
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
   * The type of the role. Valid values: service and user.
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

export class AttachVscToFilesystemsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the value from your client and ensure that the value is unique across different requests.
   * 
   * The client token can only contain ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The IDs of the file systems and virtual storage channels (VSCs). You can specify up to 10 IDs per batch. This parameter must be passed in a flattened format, such as ResourceIds.1.FileSystemId=bmcpfs-xxx&ResourceIds.1.VscId=vsc-xxx. JSON arrays are not supported.
   * 
   * This parameter is required.
   */
  resourceIds?: AttachVscToFilesystemsRequestResourceIds[];
  /**
   * @remarks
   * The role chain.
   * > Required only for cross-account scenarios.
   */
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

