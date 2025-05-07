// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes } from "./GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes";


export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfig extends $dara.Model {
  jqNodes?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes[];
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes },
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

