// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMountPointsVscAttachInfoRequestQueryInfos extends $dara.Model {
  /**
   * @example
   * i-2zehyz70ednszl6rrfj6
   */
  instanceId?: string;
  /**
   * @example
   * f-9dd3c6bajmy110.cn-zhangjiakou.dfs.aliyuncs.com
   */
  mountPointId?: string;
  /**
   * @example
   * vsc-bp19yqmujug2r18z0h9qal
   */
  vscId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mountPointId: 'MountPointId',
      vscId: 'VscId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mountPointId: 'string',
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

export class DescribeMountPointsVscAttachInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * MYR6sz6qkmauspAy8oxjHP-tOLtD4KSv3DzI7G6iywTx1ZCExO50GtSuiTB9z0JppvYQ2iUa8s4HbcFanMQfDIlds4da87_Ax4UJMva****
   */
  nextToken?: string;
  queryInfos?: DescribeMountPointsVscAttachInfoRequestQueryInfos[];
  /**
   * @example
   * false
   */
  useAssumeRoleChkServerPerm?: boolean;
  static names(): { [key: string]: string } {
    return {
      inputRegionId: 'InputRegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      queryInfos: 'QueryInfos',
      useAssumeRoleChkServerPerm: 'UseAssumeRoleChkServerPerm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputRegionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      queryInfos: { 'type': 'array', 'itemType': DescribeMountPointsVscAttachInfoRequestQueryInfos },
      useAssumeRoleChkServerPerm: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.queryInfos)) {
      $dara.Model.validateArray(this.queryInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

