// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @example
   * c66d65f411b9143bab253bfef61c03c48
   */
  associatedResourceId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      associatedResourceId: 'AssociatedResourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      associatedResourceId: 'string',
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

