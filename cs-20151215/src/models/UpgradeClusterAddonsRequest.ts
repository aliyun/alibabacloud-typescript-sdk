// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpgradeClusterAddonsRequestBody } from "./UpgradeClusterAddonsRequestBody";


export class UpgradeClusterAddonsRequest extends $dara.Model {
  /**
   * @remarks
   * The request parameters.
   */
  body?: UpgradeClusterAddonsRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': UpgradeClusterAddonsRequestBody },
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

