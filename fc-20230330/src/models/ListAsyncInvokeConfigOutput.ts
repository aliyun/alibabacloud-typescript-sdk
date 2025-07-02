// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AsyncConfig } from "./AsyncConfig";


export class ListAsyncInvokeConfigOutput extends $dara.Model {
  configs?: AsyncConfig[];
  /**
   * @example
   * 8bj81uI8n****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': AsyncConfig },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

