// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Alias } from "./Alias";


export class ListAliasesOutput extends $dara.Model {
  aliases?: Alias[];
  /**
   * @example
   * test
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      aliases: 'aliases',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: { 'type': 'array', 'itemType': Alias },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliases)) {
      $dara.Model.validateArray(this.aliases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

