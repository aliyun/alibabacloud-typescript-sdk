// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DoInsightsActionRequest extends $dara.Model {
  /**
   * @remarks
   * The query parameters. Different module types correspond to different query parameters.
   * 
   * *   QueryTopo
   * 
   * <!---->
   * 
   *     {
   *         "regionId": string,  # The region ID.
   *         "startTime": string, #. The start time. Format: yyyy-MM-dd HH:mm:ss.
   *         "endTime": string, # The end time. Format: yyyy-MM-dd HH:mm:ss.
   *         "edgeFilter": { # The edge filter condition.
   *             "includeTypes": [enum], # The edge types to be included.
   *             "excludeTypes": [enum], # The edge types to be excluded.
   *             "fromNodeFilter": { # The source node filter condition.
   *                 "includeEntityTypes": [enum] # The entity types to be included.
   *                 "excludeEntityTypes": [enum] #The entity types to be excluded.
   *             },
   *             "toNodeFilter": {  #The target node filter condition.
   *                 "includeEntityTypes": [enum] # The entity types to be included.
   *                 "excludeEntityTypes": [enum] #The entity types to be excluded.
   *             }
   *         },
   *         "includeIsolatedNodes": boolean, #Specifies whether to include isolated nodes.
   *         "isolatedNodeFilter": { # The isolated node filter condition.
   *             "includeEntityTypes": [enum] # The entity types to be included.
   *             "excludeEntityTypes": [enum] #The entity types to be excluded.
   *          },
   *         "queryMetrics": boolean, # Specifies whether to query RED metrics along with metrics.
   *         "timeoutSecs": int, # The timeout period of metric query.
   *     	"redOption": { # The metric query option.
   *     		"skipRt": boolean,  # Specifies whether to skip querying the response time.
   *     		"skipCount": boolean, # Specifies whether to skip querying the number of requests.
   *     		"skipError": boolean # Specifies whether to skip querying the number of errors.
   *     	}
   *     }
   * 
   * *   QueryTopoRed
   * 
   * <!---->
   * 
   *     {
   *         "regionId": string,  # The region ID.
   *         "startTime": string, #. The start time. Format: yyyy-MM-dd HH:mm:ss.
   *         "endTime": string,   # The end time. Format: yyyy-MM-dd HH:mm:ss.
   *         "edgeIds": [string]  # The edge ID to be queried.
   *         "nodeIds": [string]  # The node ID to be queried.
   *         "redOption": { # The metric query option.
   *             "skipRt": boolean,  # Specifies whether to skip querying the response time.
   *             "skipRt": boolean,  # Specifies whether to skip querying the number of requests.
   *             "skipError": boolean # Specifies whether to skip querying the number of errors.
   *         }
   *     }
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
   * 		"endTime": "2024-07-23 20:16:00", # Limit the topology query range to 2024-07-23 19:16:00 to 2024-07-23 20:16:00
   * 		"edgeFilter": {
   * 			"includeTypes": [
   * 				"CALLS" # The resulting topology only contains edges of call relationships.
   * 			],
   * 			"fromNodeFilter": {
   * 				"includeEntityTypes": [ # The source node type of the call edge must be application type
   * 					"APPLICATION" 
   * 				]
   * 			},
   * 			"toNodeFilter": {
   * 				"includeEntityTypes": [ # The target node of the call edge must be an application type or an external service type.
   * 					"APPLICATION",
   * 					"EXTERNAL_SERVICE"
   * 				]
   * 			}
   * 		},
   * 		"includeIsolatedNodes": false, # The resulting topology does not contain isolated nodes
   * 		"queryMetrics": true, # Synchronously query the RED indicator
   * 		"timeoutSecs": 20, #It takes up to 20 seconds to query indicator data
   * 		"redOption": { # The query indicators include time consumption, request volume, and query skip errors.
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
   * 		"redOption": { # The query indicators include time consumption, request volume, and query skip errors.
   * 			"skipCount": false,
   * 			"skipError": true,
   * 			"skipRt": false
   * 		}
   * 	}
   */
  data?: string;
  /**
   * @remarks
   * The module type.
   * 
   * *   QueryTopo
   * 
   *     Queries topologies. A topology consists of edges and nodes, where each edge has a corresponding type and each node corresponds to an entity, which also has its type. By setting filter parameters such as the type of edges, the type of nodes, and the query time range, you can filter out the required topology data.
   * 
   * *   QueryTopoRed
   * 
   *     Queries topology RED metrics (number of requests, duration, number of errors). When querying a topology with the metric query option enabled, it might not be possible to retrieve all metric data due to the topology being too large. This module allows users to actively query for metric data of specified nodes and edges.
   * 
   * Note: The aforementioned modules are currently in a canary release phase and are not enabled by default. If you need to enable them, please contact the ARMS on-duty number.
   * 
   * Valid values:
   * 
   * *   QueryTopoRed
   * *   QueryTopo
   * 
   * This parameter is required.
   * 
   * @example
   * QueryTopo
   */
  module?: string;
  /**
   * @remarks
   * The region ID.
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

