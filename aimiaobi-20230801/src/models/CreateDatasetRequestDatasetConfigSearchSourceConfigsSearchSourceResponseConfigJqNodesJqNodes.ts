// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes } from "./CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes";


export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes extends $dara.Model {
  jqNodes?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes[];
  /**
   * @example
   * title
   */
  key?: string;
  path?: string;
  /**
   * @example
   * string
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
      jqNodes: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes },
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

