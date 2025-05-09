// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskFlowConstantsResponseBodyDagConstantsDagConstant } from "./ListTaskFlowConstantsResponseBodyDagConstantsDagConstant";


export class ListTaskFlowConstantsResponseBodyDagConstants extends $dara.Model {
  dagConstant?: ListTaskFlowConstantsResponseBodyDagConstantsDagConstant[];
  static names(): { [key: string]: string } {
    return {
      dagConstant: 'DagConstant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagConstant: { 'type': 'array', 'itemType': ListTaskFlowConstantsResponseBodyDagConstantsDagConstant },
    };
  }

  validate() {
    if(Array.isArray(this.dagConstant)) {
      $dara.Model.validateArray(this.dagConstant);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

