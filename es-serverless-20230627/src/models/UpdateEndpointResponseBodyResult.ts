// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEndpointResponseBodyResult extends $dara.Model {
  /**
   * @example
   * ep-bp1i98bcbb1540d0****
   */
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'endpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

