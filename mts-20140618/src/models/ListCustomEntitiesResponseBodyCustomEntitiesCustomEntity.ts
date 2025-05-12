// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomEntitiesResponseBodyCustomEntitiesCustomEntity extends $dara.Model {
  /**
   * @example
   * 1
   */
  customEntityId?: string;
  /**
   * @example
   * { "finegrainName":"example" }
   */
  customEntityInfo?: string;
  /**
   * @example
   * exampleName
   */
  customEntityName?: string;
  static names(): { [key: string]: string } {
    return {
      customEntityId: 'CustomEntityId',
      customEntityInfo: 'CustomEntityInfo',
      customEntityName: 'CustomEntityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEntityId: 'string',
      customEntityInfo: 'string',
      customEntityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

