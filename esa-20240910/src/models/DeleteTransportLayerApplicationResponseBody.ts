// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTransportLayerApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 90510C29-1E40-5A11-93F1-B9F5EDF57EE1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

