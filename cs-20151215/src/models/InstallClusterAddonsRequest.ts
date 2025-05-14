// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstallClusterAddonsRequestBody } from "./InstallClusterAddonsRequestBody";


export class InstallClusterAddonsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * ags-metrics-collector
   */
  body?: InstallClusterAddonsRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': InstallClusterAddonsRequestBody },
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

