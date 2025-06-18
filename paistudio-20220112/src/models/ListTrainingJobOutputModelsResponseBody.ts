// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTrainingJobOutputModelsResponseBodyOutputModels } from "./ListTrainingJobOutputModelsResponseBodyOutputModels";


export class ListTrainingJobOutputModelsResponseBody extends $dara.Model {
  outputModels?: ListTrainingJobOutputModelsResponseBodyOutputModels[];
  static names(): { [key: string]: string } {
    return {
      outputModels: 'OutputModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputModels: { 'type': 'array', 'itemType': ListTrainingJobOutputModelsResponseBodyOutputModels },
    };
  }

  validate() {
    if(Array.isArray(this.outputModels)) {
      $dara.Model.validateArray(this.outputModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

