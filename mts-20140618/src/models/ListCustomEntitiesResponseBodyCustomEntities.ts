// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomEntitiesResponseBodyCustomEntitiesCustomEntity } from "./ListCustomEntitiesResponseBodyCustomEntitiesCustomEntity";


export class ListCustomEntitiesResponseBodyCustomEntities extends $dara.Model {
  customEntity?: ListCustomEntitiesResponseBodyCustomEntitiesCustomEntity[];
  static names(): { [key: string]: string } {
    return {
      customEntity: 'CustomEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEntity: { 'type': 'array', 'itemType': ListCustomEntitiesResponseBodyCustomEntitiesCustomEntity },
    };
  }

  validate() {
    if(Array.isArray(this.customEntity)) {
      $dara.Model.validateArray(this.customEntity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

