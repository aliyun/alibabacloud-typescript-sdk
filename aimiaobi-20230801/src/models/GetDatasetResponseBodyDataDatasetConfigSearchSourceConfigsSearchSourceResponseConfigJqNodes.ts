// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes } from "./GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes";


export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes extends $dara.Model {
  jqNodes?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes[];
  /**
   * @example
   * 节点key
   */
  key?: string;
  /**
   * @example
   * 节点路径
   */
  path?: string;
  /**
   * @example
   * 节点数据类型：string number list object base
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
      key: 'Key',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes },
      key: 'string',
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jqNodes)) {
      $dara.Model.validateArray(this.jqNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

