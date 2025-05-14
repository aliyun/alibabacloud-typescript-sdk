// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNodeResponseBodyNodeStatisticalInfo } from "./GetNodeResponseBodyNodeStatisticalInfo";


export class GetNodeResponseBodyNode extends $dara.Model {
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
   * true
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
   * MNDoBb60VLBPraakI1Ywxyyn8lemrZQ3
   */
  nodeId?: string;
  /**
   * @example
   * READER
   */
  permissionRole?: string;
  /**
   * @example
   * 123123
   */
  size?: number;
  statisticalInfo?: GetNodeResponseBodyNodeStatisticalInfo;
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
      statisticalInfo: GetNodeResponseBodyNodeStatisticalInfo,
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

