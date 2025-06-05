// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecognitionEntitiesResponseBodyEntitiesEntity extends $dara.Model {
  /**
   * @example
   * **************544cb84754************
   */
  entityId?: string;
  /**
   * @example
   * {}
   */
  entityInfo?: string;
  entityName?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityInfo: 'EntityInfo',
      entityName: 'EntityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityInfo: 'string',
      entityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

