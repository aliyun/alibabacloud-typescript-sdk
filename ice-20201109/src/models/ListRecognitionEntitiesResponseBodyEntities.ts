// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRecognitionEntitiesResponseBodyEntitiesEntity } from "./ListRecognitionEntitiesResponseBodyEntitiesEntity";


export class ListRecognitionEntitiesResponseBodyEntities extends $dara.Model {
  entity?: ListRecognitionEntitiesResponseBodyEntitiesEntity[];
  static names(): { [key: string]: string } {
    return {
      entity: 'Entity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entity: { 'type': 'array', 'itemType': ListRecognitionEntitiesResponseBodyEntitiesEntity },
    };
  }

  validate() {
    if(Array.isArray(this.entity)) {
      $dara.Model.validateArray(this.entity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

