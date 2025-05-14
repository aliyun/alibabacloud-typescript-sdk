// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GrantPermissionsRequestBody } from "./GrantPermissionsRequestBody";


export class GrantPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: GrantPermissionsRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': GrantPermissionsRequestBody },
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

