// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Sandbox } from "./Sandbox";


export class ListSandboxesOutput extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  items?: Sandbox[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Sandbox },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

