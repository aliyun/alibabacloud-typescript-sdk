// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTenantAddonsResponseBodyAddons } from "./ListTenantAddonsResponseBodyAddons";


export class ListTenantAddonsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the plug-in.
   */
  addons?: ListTenantAddonsResponseBodyAddons[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addons: 'Addons',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListTenantAddonsResponseBodyAddons },
      requestId: 'string',
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

