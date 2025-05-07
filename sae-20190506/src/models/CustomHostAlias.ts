// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HostAlias } from "./HostAlias";


export class CustomHostAlias extends $dara.Model {
  hostAliases?: HostAlias[];
  static names(): { [key: string]: string } {
    return {
      hostAliases: 'hostAliases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAliases: { 'type': 'array', 'itemType': HostAlias },
    };
  }

  validate() {
    if(Array.isArray(this.hostAliases)) {
      $dara.Model.validateArray(this.hostAliases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

