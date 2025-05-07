// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes } from "./UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes";


export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes extends $dara.Model {
  jqNodes?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes[];
  /**
   * @example
   * title
   */
  key?: string;
  /**
   * @example
   * .title
   */
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
      jqNodes: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes },
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

