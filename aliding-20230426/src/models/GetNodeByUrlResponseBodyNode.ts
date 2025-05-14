// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNodeByUrlResponseBodyNodeStatisticalInfo } from "./GetNodeByUrlResponseBodyNodeStatisticalInfo";


export class GetNodeByUrlResponseBodyNode extends $dara.Model {
  /**
   * @example
   * ALIDOC
   */
  category?: string;
  /**
   * @example
   * 2023-05-15T11:29Z
   */
  createTime?: string;
  /**
   * @example
   * 01472825524039877041
   */
  creatorId?: string;
  /**
   * @example
   * adoc
   */
  extension?: string;
  /**
   * @example
   * false
   */
  hasChildren?: boolean;
  /**
   * @example
   * 2023-05-15T11:29Z
   */
  modifiedTime?: string;
  /**
   * @example
   * 01472825524039877041
   */
  modifierId?: string;
  /**
   * @example
   * node_name
   */
  name?: string;
  /**
   * @example
   * EpGBa2Lm8aRmzkkNhplMx1prWgN7R35y
   */
  nodeId?: string;
  /**
   * @example
   * READER
   */
  permissionRole?: string;
  /**
   * @example
   * 512
   */
  size?: number;
  statisticalInfo?: GetNodeByUrlResponseBodyNodeStatisticalInfo;
  /**
   * @example
   * FILE
   */
  type?: string;
  /**
   * @example
   * node_url
   */
  url?: string;
  /**
   * @example
   * By8jQS1ZYjGn5b0M
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      extension: 'Extension',
      hasChildren: 'HasChildren',
      modifiedTime: 'ModifiedTime',
      modifierId: 'ModifierId',
      name: 'Name',
      nodeId: 'NodeId',
      permissionRole: 'PermissionRole',
      size: 'Size',
      statisticalInfo: 'StatisticalInfo',
      type: 'Type',
      url: 'Url',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      creatorId: 'string',
      extension: 'string',
      hasChildren: 'boolean',
      modifiedTime: 'string',
      modifierId: 'string',
      name: 'string',
      nodeId: 'string',
      permissionRole: 'string',
      size: 'number',
      statisticalInfo: GetNodeByUrlResponseBodyNodeStatisticalInfo,
      type: 'string',
      url: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.statisticalInfo && typeof (this.statisticalInfo as any).validate === 'function') {
      (this.statisticalInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

