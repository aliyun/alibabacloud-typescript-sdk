// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesResponseBodyResourcesExecutor extends $dara.Model {
  /**
   * @remarks
   * This parameter is invalid and deprecated.
   * 
   * @example
   * 110973******7793
   */
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

