// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AclEntryConfig } from "./AclEntryConfig";


export class AclConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * **if can be null:**
   * true
   */
  aclEntries?: AclEntryConfig[];
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'aclEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': AclEntryConfig },
    };
  }

  validate() {
    if(Array.isArray(this.aclEntries)) {
      $dara.Model.validateArray(this.aclEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

