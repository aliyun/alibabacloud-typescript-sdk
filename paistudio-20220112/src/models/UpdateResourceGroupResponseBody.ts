// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceGroupResponseBody extends $dara.Model {
  /**
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupID?: string;
  /**
   * @example
   * FFB1D4B4-B253-540A-9B3B-AA711C48A1B7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupID: 'ResourceGroupID',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupID: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

