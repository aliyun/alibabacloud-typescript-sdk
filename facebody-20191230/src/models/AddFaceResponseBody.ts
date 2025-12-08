// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddFaceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 5
   */
  faceId?: string;
  /**
   * @example
   * 99.79581
   */
  qualitieScore?: number;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      qualitieScore: 'QualitieScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
      qualitieScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceResponseBody extends $dara.Model {
  data?: AddFaceResponseBodyData;
  /**
   * @example
   * 2B93C43A-F824-40C8-AF79-844342B0F43A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddFaceResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

