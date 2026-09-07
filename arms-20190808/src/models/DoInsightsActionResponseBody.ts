// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DoInsightsActionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. 200 indicates success; other status codes indicate exceptions.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The return parameter type is related to the module value passed in.
   * 
   * - QueryTopo
   *    ```
   *   {
   * 	"nodes": [Object] #Node collection. See the Node definition in the supplementary description of return parameters.
   * 	"edges": [Object] #Edge collection. See the Edge definition in the supplementary description of return parameters.
   *   }
   *   ```
   * - QueryTopoRed
   * 
   *   ```
   *   {
   * 	"nodeRed": {
   * 		"nodeId": {
   * 			"count": double, #Total number of requests during the query period
   * 			"error": double, #Total number of errors during the query period
   * 			"rt": double, #Average latency during the query period, in milliseconds
   * 		}
   * 	},
   * 	"edgeRed": {
   * 		"edgeId": {
   * 		    "count": double, #Total number of requests during the query period
   * 			"error": double, #Total number of errors during the query period
   * 			"rt": double, #Average latency during the query period, in milliseconds
   * 		}
   * 	}
   * }
   *   ```
   * 
   * @example
   * - QueryTopo
   * 
   * 
   * 	{
   * 		"nodes": [
   * 			{
   * 				"nodeId": "3bfe1a747389273388182760406c079d",
   * 				"entity": {
   * 					"regionId": "cn-hangzhou",
   * 					"appType": "TRACE",
   * 					"appId": "xxxxxxxxxxxxxxxx",
   * 					"name": "prometheus-pop-cn-hangzhou",
   * 					"entityId": "3bfe1a747389273388182760406c079d",
   * 					"firstSeenTms": 1721733226981,
   * 					"lastSeenTms": 1721789171614,
   * 					"type": "APPLICATION"
   * 				},
   * 				"attrs": {
   * 					"RED": {
   * 						"count": 643848.0,
   * 						"error": 0.0,
   * 						"rt": 172.31701892372112
   * 					}
   * 				}
   * 			}
   * 		],
   * 		"edges": [
   * 			{
   * 				"from": "98b4184b22e588cf86e9a29aa4179606",
   * 				"to": "98b4184b22e588cf86e9a29aa4179606",
   * 				"type": "CALLS",
   * 				"attrs": {
   * 					"RED": {
   * 						"count": 4.0,
   * 						"error": 0.0,
   * 						"rt": 37.0
   * 					}
   * 				},
   * 				"edgeId": "5d611597e4b0013d0947615c9eca4de6",
   * 				"firstSeenTms": 1721783795125,
   * 				"lastSeenTms": 1721787371614
   * 			}
   * 		]
   * 	}
   * 
   * 
   * - QueryTopoRed
   * 
   * 	{
   * 		"nodeRed": {
   * 			"361d9f32e58cef316bf2355f3ff05575": {
   * 				"count": 3258110.0,
   * 				"error": 74.0,
   * 				"rt": 167.39844355494878
   * 			}
   * 		},
   * 		"edgeRed": {}
   * 	}
   */
  data?: string;
  /**
   * @remarks
   * The message returned when the call fails.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 626037F5-FDEB-45B0-804C-B3C92797A64E
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the query is successful:
   * 
   * - `true`: Successful.
   * - `false`: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

