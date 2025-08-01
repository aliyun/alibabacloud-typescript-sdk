// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallMonitorAgentRequest extends $dara.Model {
  androidInstanceIds?: string[];
  /**
   * @example
   * Node
   */
  saleMode?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      saleMode: 'SaleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      saleMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

