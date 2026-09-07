// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DoInsightsActionRequest extends $dara.Model {
  /**
   * @remarks
   * Query parameters. The query parameters vary depending on the module type.
   * 
   * - QueryTopo
   * ```
   * {
   *     "regionId": string,  #Region ID
   *     "startTime": string, #Start time in the format of yyyy-MM-dd HH:mm:ss
   *     "endTime": string, #End time in the format of yyyy-MM-dd HH:mm:ss
   *     "edgeFilter": { #Edge filter conditions
   *         "includeTypes": [enum], #Edge types to include
   *         "excludeTypes": [enum], #Edge types to exclude
   *         "fromNodeFilter": { #Source node filter conditions
   *             "includeEntityTypes": [enum] #Entity types to include
   *             "excludeEntityTypes": [enum] #Entity types to exclude
   *         },
   *         "toNodeFilter": {  #Target node filter conditions
   *             "includeEntityTypes": [enum] #Entity types to include
   *             "excludeEntityTypes": [enum] #Entity types to exclude
   *         }
   *     },
   *     "includeIsolatedNodes": boolean, #Whether to include isolated nodes
   *     "isolatedNodeFilter": { # Isolated node filter conditions
   *         "includeEntityTypes": [enum] #Entity types to include
   *         "excludeEntityTypes": [enum] #Entity types to exclude
   *      },
   *     "queryMetrics": boolean, # Whether to synchronously query related RED metrics when querying topology
   *     "timeoutSecs": int, # Metrics query timeout in seconds
   * 	"redOption": { #Metrics query control options
   * 		"skipRt": boolean,  # Whether to skip querying RT metrics
   * 		"skipCount": boolean, # Whether to skip querying request count metrics
   * 		"skipError": boolean # Whether to skip querying error count metrics
   * 	}
   * }
   * 
   * ```
   * 
   * - QueryTopoRed
   * 
   * ```
   * {
   *     "regionId": string,  #Region ID
   *     "startTime": string, #Start time in the format of yyyy-MM-dd HH:mm:ss
   *     "endTime": string,   #End time in the format of yyyy-MM-dd HH:mm:ss
   *     "edgeIds": [string]  #Edge IDs to query
   *     "nodeIds": [string]  #Node IDs to query
   *     "redOption": { #Metrics query control options
   *         "skipRt": boolean,  # Whether to skip querying RT metrics
   *         "skipCount": boolean, # Whether to skip querying request count metrics
   *         "skipError": boolean # Whether to skip querying error count metrics
   *     }
   * }
   * 
   * ```
   * 
   * This parameter is required.
   * 
   * @example
   * - QueryTopo
   * 
   * 
   * 	{
   * 		"regionId": "cn-hangzhou",
   * 		"startTime": "2024-07-23 19:16:00",  
   * 		"endTime": "2024-07-23 20:16:00", # 限定拓扑查询范围为 2024-07-23 19:16:00至2024-07-23 20:16:00
   * 		"edgeFilter": {
   * 			"includeTypes": [
   * 				"CALLS" # 限定结果拓扑中仅包含调用关系的边
   * 			],
   * 			"fromNodeFilter": {
   * 				"includeEntityTypes": [ # 限定调用边的源节点类型必须为应用类型
   * 					"APPLICATION" 
   * 				]
   * 			},
   * 			"toNodeFilter": {
   * 				"includeEntityTypes": [ # 限定调用边的目标节点必须为应用类型或者外部服务类型
   * 					"APPLICATION",
   * 					"EXTERNAL_SERVICE"
   * 				]
   * 			}
   * 		},
   * 		"includeIsolatedNodes": false, # 结果拓扑中不包含孤立节点
   * 		"queryMetrics": true, # 同步查询RED指标
   * 		"timeoutSecs": 20, #最多用20秒来查询指标数据
   * 		"redOption": { # 查询的指标包括耗时、请求量，跳过错误数的查询
   * 			"skipRt": false,
   * 			"skipCount": false,
   * 			"skipError": true
   * 		}
   * 	}
   * 
   * 
   * 
   * - QueryTopoRed
   * 
   * 
   * 	{
   * 		"regionId": "cn-hangzhou",
   * 		"startTime": "2024-07-23 10:00:00",
   * 		"endTime": "2024-07-23 14:00:00",
   * 		"edgeIds": [
   * 			"097843bd50b06fbe2c6c1d8b761a7e8b"
   * 		],
   * 		"nodeIds": [
   * 			"23d973261c6923da1b5b7a571ec1aa8b"
   * 		],
   * 		"redOption": { # 查询的指标包括耗时、请求量，跳过错误数的查询
   * 			"skipCount": false,
   * 			"skipError": true,
   * 			"skipRt": false
   * 		}
   * 	}
   */
  data?: string;
  /**
   * @remarks
   * Module type
   * - QueryTopo 
   *   
   *     Topology query feature. A topology consists of edges and nodes. Each edge has a corresponding type, each node has a corresponding entity, and each entity has its type. By setting the edge type, node type, query time range, and other filter parameters, you can filter out the required topology data.
   * 
   * - QueryTopoRed
   *     
   *     Topology RED metrics (request count, latency, error count) query. When querying a topology with the metrics query option enabled, the topology may be too large to retrieve all metrics data. This feature allows users to actively query metrics data for specified nodes and edges.
   * 
   * 
   * Note: The above features are in canary release and are not enabled by default. To enable them, please contact ARMS on-call support.
   * 
   * This parameter is required.
   * 
   * @example
   * QueryTopo
   */
  module?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      module: 'Module',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      module: 'string',
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

