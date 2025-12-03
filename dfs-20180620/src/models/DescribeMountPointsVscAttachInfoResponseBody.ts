// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMountPointsVscAttachInfoResponseBodyAttachInfos extends $dara.Model {
  /**
   * @example
   * vsc-agent-f5a9bb4b041541f595a0c239c9e0f971-cn-shanghai
   */
  instanceId?: string;
  /**
   * @example
   * f-9dd3c6bajmy110.cn-zhangjiakou.dfs.aliyuncs.com
   */
  mountPointId?: string;
  /**
   * @example
   * vsc-bp18fhqie89loyqixyieal
   */
  vscId?: string;
  /**
   * @example
   * cxc
   */
  vscName?: string;
  vscStatus?: string;
  /**
   * @example
   * Primary
   */
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mountPointId: 'MountPointId',
      vscId: 'VscId',
      vscName: 'VscName',
      vscStatus: 'VscStatus',
      vscType: 'VscType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mountPointId: 'string',
      vscId: 'string',
      vscName: 'string',
      vscStatus: 'string',
      vscType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountPointsVscAttachInfoResponseBody extends $dara.Model {
  attachInfos?: DescribeMountPointsVscAttachInfoResponseBodyAttachInfos[];
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * asd0daj****
   */
  nextToken?: string;
  /**
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      attachInfos: 'AttachInfos',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachInfos: { 'type': 'array', 'itemType': DescribeMountPointsVscAttachInfoResponseBodyAttachInfos },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachInfos)) {
      $dara.Model.validateArray(this.attachInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

