// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClusterChecksResponseBodyChecks } from "./ListClusterChecksResponseBodyChecks";


export class ListClusterChecksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of check items.
   */
  checks?: ListClusterChecksResponseBodyChecks[];
  static names(): { [key: string]: string } {
    return {
      checks: 'checks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checks: { 'type': 'array', 'itemType': ListClusterChecksResponseBodyChecks },
    };
  }

  validate() {
    if(Array.isArray(this.checks)) {
      $dara.Model.validateArray(this.checks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

