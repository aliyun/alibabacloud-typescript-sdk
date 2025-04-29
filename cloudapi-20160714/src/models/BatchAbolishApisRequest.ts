// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchAbolishApisRequestApi } from "./BatchAbolishApisRequestApi";


export class BatchAbolishApisRequest extends $dara.Model {
  /**
   * @remarks
   * The APIs that you want to operate.
   * 
   * This parameter is required.
   */
  api?: BatchAbolishApisRequestApi[];
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: { 'type': 'array', 'itemType': BatchAbolishApisRequestApi },
      securityToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.api)) {
      $dara.Model.validateArray(this.api);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

