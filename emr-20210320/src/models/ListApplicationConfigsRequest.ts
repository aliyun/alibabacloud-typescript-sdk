// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * HDFS
   */
  applicationName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-e6a9d46e9267****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the configuration file.
   * 
   * @example
   * hdfs-site.xml
   */
  configFileName?: string;
  /**
   * @remarks
   * The key of the configuration item.
   * 
   * @example
   * dfs.replication
   */
  configItemKey?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * 2
   */
  configItemValue?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The page number of the next page returned.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * @example
   * ng-d555335ced5c****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * i-bp10h9rezawz1i4o****
   */
  nodeId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      clusterId: 'ClusterId',
      configFileName: 'ConfigFileName',
      configItemKey: 'ConfigItemKey',
      configItemValue: 'ConfigItemValue',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupId: 'NodeGroupId',
      nodeId: 'NodeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      clusterId: 'string',
      configFileName: 'string',
      configItemKey: 'string',
      configItemValue: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupId: 'string',
      nodeId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

