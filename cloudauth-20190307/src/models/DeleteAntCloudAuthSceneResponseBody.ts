// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAntCloudAuthSceneResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * 80D1ACD4-1C7D-53CB-8C54-3758FF03C762
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

