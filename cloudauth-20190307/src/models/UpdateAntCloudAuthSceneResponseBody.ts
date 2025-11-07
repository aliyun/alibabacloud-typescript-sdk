// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAntCloudAuthSceneResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * A07D5838-2BE0-5D2E-B864-D05ADAA5EDE3
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

