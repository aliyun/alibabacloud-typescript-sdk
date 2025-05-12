// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSpMetadataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The metadata of the SP.
   */
  spMetadata?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spMetadata: 'SpMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spMetadata: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

