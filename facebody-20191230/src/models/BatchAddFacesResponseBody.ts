// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchAddFacesResponseBodyDataFailedFaces extends $dara.Model {
  /**
   * @example
   * ClientError.IllegalArgument
   */
  code?: string;
  /**
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test/imgsearch/demo/xxxx.png
   */
  imageURL?: string;
  /**
   * @example
   * not found the db=test
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      imageURL: 'ImageURL',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      imageURL: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFacesResponseBodyDataInsertedFaces extends $dara.Model {
  /**
   * @example
   * 16350536
   */
  faceId?: string;
  /**
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test/imgsearch/demo/xxxx.png
   */
  imageURL?: string;
  /**
   * @example
   * 99.79581
   */
  qualitieScore?: number;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      imageURL: 'ImageURL',
      qualitieScore: 'QualitieScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
      imageURL: 'string',
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

export class BatchAddFacesResponseBodyData extends $dara.Model {
  failedFaces?: BatchAddFacesResponseBodyDataFailedFaces[];
  insertedFaces?: BatchAddFacesResponseBodyDataInsertedFaces[];
  static names(): { [key: string]: string } {
    return {
      failedFaces: 'FailedFaces',
      insertedFaces: 'InsertedFaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedFaces: { 'type': 'array', 'itemType': BatchAddFacesResponseBodyDataFailedFaces },
      insertedFaces: { 'type': 'array', 'itemType': BatchAddFacesResponseBodyDataInsertedFaces },
    };
  }

  validate() {
    if(Array.isArray(this.failedFaces)) {
      $dara.Model.validateArray(this.failedFaces);
    }
    if(Array.isArray(this.insertedFaces)) {
      $dara.Model.validateArray(this.insertedFaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFacesResponseBody extends $dara.Model {
  data?: BatchAddFacesResponseBodyData;
  /**
   * @example
   * C46A46D0-3263-181A-A1EE-0901E4595390
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
      data: BatchAddFacesResponseBodyData,
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

