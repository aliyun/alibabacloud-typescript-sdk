// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterCustomFaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the face.
   * 
   * @example
   * c6cc71cb44a9491093818faf9d60****
   */
  faceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 91AEA76D-25B5-50DF-9126-AA6BB10FDAF4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
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

