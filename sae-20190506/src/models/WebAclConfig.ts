// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebAclEntryConfig } from "./WebAclEntryConfig";


export class WebAclConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * **if can be null:**
   * true
   */
  webAclEntries?: WebAclEntryConfig[];
  static names(): { [key: string]: string } {
    return {
      webAclEntries: 'WebAclEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webAclEntries: { 'type': 'array', 'itemType': WebAclEntryConfig },
    };
  }

  validate() {
    if(Array.isArray(this.webAclEntries)) {
      $dara.Model.validateArray(this.webAclEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

