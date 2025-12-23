// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateABTestFixedFlowDividersRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: string[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': 'string' },
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

