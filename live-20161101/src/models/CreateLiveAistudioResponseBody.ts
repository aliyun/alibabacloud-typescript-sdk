// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveAIStudioResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17D7526C-69AD-5761-8037-071C27358345
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the virtual studio template.
   * 
   * @example
   * 369ced1f-c33a-49e5-91da-bdaae3d6c1c2
   */
  studioId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      studioId: 'StudioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      studioId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

