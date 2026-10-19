// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGpuClusterTopologyResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * The edge data in the topology structure.
   * 
   * @example
   * "edges": [
   *         {
   *           "type": "GPU",
   *           "src_id": "00534a88",
   *           "dst_id": "260525e9",
   *           "values": {
   *             "Exception": [
   *               {
   *                 "key": "NCCL HANG",
   *                 "value": "error0"
   *               }
   *             ],
   *             "Metric": [
   *               {
   *                 "key": "a",
   *                 "value": "372201199012283428"
   *               }
   *             ],
   *             "Basic": [
   *               {
   *                 "key": "NCCL Version",
   *                 "value": "v2.22.3"
   *               }
   *             ]
   *           },
   *           "style": {
   *             "lineWidth": "0.01",
   *             "opacity": "1",
   *             "selectedStyle": "\\"{\\\\\\"opacity\\\\\\": 1, \\\\\\"lineWidth\\\\\\": 1}\\"",
   *             "stroke": "#e94242\\n"
   *           }
   *         }
   *       ]
   */
  edges?: any;
  /**
   * @remarks
   * The node data in the topology structure.
   * 
   * @example
   * "nodes": [
   *         {
   *           "id": "i-xxxxxx",
   *           "name": "i-xxxxxx",
   *           "gpu_list": [
   *             {
   *               "id": "6cc37fbc",
   *               "name": "GPU0",
   *               "style": {
   *                 "fill": "#e94242",
   *                 "opacity": "0.1"
   *               },
   *               "values": {
   *                 "Metric": [
   *                   {
   *                     "key": "0",
   *                     "value": "gpu_util(%)"
   *                   }
   *                 ],
   *                 "Basic": [
   *                   {
   *                     "key": "1",
   *                     "value": "Gpu Number"
   *                   }
   *                 ],
   *                 "Exception": [
   *                   {
   *                     "key": "NCCL HANG",
   *                     "value": "error0"
   *                   }
   *                 ]
   *               }
   *             }
   *           ],
   *           "style": {
   *             "fillOpacity": "0.5",
   *             "fill": "#e94242"
   *           },
   *           "values": {
   *             "Exception": [
   *               {
   *                 "key": "NCCL HANG",
   *                 "value": "error0"
   *               }
   *             ],
   *             "Basic": [
   *               {
   *                 "key": "podList",
   *                 "value": "podname1"
   *               }
   *             ],
   *             "Metric": [
   *               {
   *                 "key": "instance",
   *                 "value": "i-xxxxxx"
   *               }
   *             ]
   *           }
   *         }
   *       ],
   */
  nodes?: any;
  static names(): { [key: string]: string } {
    return {
      edges: 'edges',
      nodes: 'nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: 'any',
      nodes: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGpuClusterTopologyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster topology data structure.
   */
  data?: GetGpuClusterTopologyResponseBodyDataData;
  /**
   * @remarks
   * The number of GPU cards returned.
   * 
   * @example
   * 36
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetGpuClusterTopologyResponseBodyDataData,
      total: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGpuClusterTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. Valid values: Success, Sysom.ServerError, Sysom.InvalidParameter.
   * 
   * @example
   * Fail/Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned by the operation.
   */
  data?: GetGpuClusterTopologyResponseBodyData;
  /**
   * @remarks
   * The error message returned when the code is not Success.
   * 
   * @example
   * some error msg if not success，“” if success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * return real request ID
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetGpuClusterTopologyResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

