// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Figure } from "./Figure";


export class DetectImageFacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The faces.
   */
  faces?: Figure[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6E93D6C9-5AC0-49F9-914D-E02678D3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      faces: 'Faces',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faces: { 'type': 'array', 'itemType': Figure },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.faces)) {
      $dara.Model.validateArray(this.faces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

