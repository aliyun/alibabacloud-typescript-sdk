// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEdgeMachineModelsResponseBodyModels } from "./DescribeEdgeMachineModelsResponseBodyModels";


export class DescribeEdgeMachineModelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud-native box models.
   */
  models?: DescribeEdgeMachineModelsResponseBodyModels[];
  static names(): { [key: string]: string } {
    return {
      models: 'models',
    };
  }

  static types(): { [key: string]: any } {
    return {
      models: { 'type': 'array', 'itemType': DescribeEdgeMachineModelsResponseBodyModels },
    };
  }

  validate() {
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

