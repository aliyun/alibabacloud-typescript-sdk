// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryIncidentTracingSubNodesCountRequest extends $dara.Model {
  vertexIdAndTypeList?: string[][];
  static names(): { [key: string]: string } {
    return {
      vertexIdAndTypeList: 'VertexIdAndTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vertexIdAndTypeList: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.vertexIdAndTypeList)) {
      $dara.Model.validateArray(this.vertexIdAndTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

