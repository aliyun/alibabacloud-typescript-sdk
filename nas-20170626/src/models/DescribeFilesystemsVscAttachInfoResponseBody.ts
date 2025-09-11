// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFilesystemsVscAttachInfoResponseBodyVscAttachInfoVscAttachInfo extends $dara.Model {
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
   * The association status of the file system and virtual channel. Valid values:
   * 
   * *   Attaching: The association is being made.
   * *   Attached: The association is complete.
   * *   Detaching: The association is being canceled.
   * *   Detached: The association is canceled.
   * *   Failed: The association failed.
   * 
   * @example
   * Attached
   */
  status?: string;
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
      status: 'Status',
      vscId: 'VscId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      status: 'string',
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

export class DescribeFilesystemsVscAttachInfoResponseBodyVscAttachInfo extends $dara.Model {
  vscAttachInfo?: DescribeFilesystemsVscAttachInfoResponseBodyVscAttachInfoVscAttachInfo[];
  static names(): { [key: string]: string } {
    return {
      vscAttachInfo: 'VscAttachInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vscAttachInfo: { 'type': 'array', 'itemType': DescribeFilesystemsVscAttachInfoResponseBodyVscAttachInfoVscAttachInfo },
    };
  }

  validate() {
    if(Array.isArray(this.vscAttachInfo)) {
      $dara.Model.validateArray(this.vscAttachInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilesystemsVscAttachInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of directories to return for each query.
   * 
   * Valid values: 10 to 1000.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Query token, which is the NextToken value returned from the previous API call.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of associated information.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * A collection of file system and virtual channel association data.
   */
  vscAttachInfo?: DescribeFilesystemsVscAttachInfoResponseBodyVscAttachInfo;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vscAttachInfo: 'VscAttachInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vscAttachInfo: DescribeFilesystemsVscAttachInfoResponseBodyVscAttachInfo,
    };
  }

  validate() {
    if(this.vscAttachInfo && typeof (this.vscAttachInfo as any).validate === 'function') {
      (this.vscAttachInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

