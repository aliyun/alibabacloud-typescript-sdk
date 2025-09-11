// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachVscFromFilesystemsRequestResourceIds extends $dara.Model {
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
   * The ID of the virtual storage channel.
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

export class DetachVscFromFilesystemsRequest extends $dara.Model {
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
   * The ID information of the file system and virtual storage channel. Each batch can contain up to 10 IDs.
   * 
   * This parameter is required.
   */
  resourceIds?: DetachVscFromFilesystemsRequestResourceIds[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      resourceIds: { 'type': 'array', 'itemType': DetachVscFromFilesystemsRequestResourceIds },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

