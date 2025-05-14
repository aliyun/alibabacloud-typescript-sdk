// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAddonsResponseBodyAddons } from "./ListAddonsResponseBodyAddons";


export class ListAddonsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of available components.
   */
  addons?: ListAddonsResponseBodyAddons[];
  static names(): { [key: string]: string } {
    return {
      addons: 'addons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListAddonsResponseBodyAddons },
    };
  }

  validate() {
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

