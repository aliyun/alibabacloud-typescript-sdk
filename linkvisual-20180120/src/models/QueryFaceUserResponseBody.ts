// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceUserResponseBodyDataFacePicListFeatureDTOList extends $dara.Model {
  /**
   * @remarks
   * The name of the algorithm.
   * 
   * @example
   * TestAlgorithmName
   */
  algorithmName?: string;
  /**
   * @remarks
   * The provider of the algorithm.
   * 
   * @example
   * TestAlgorithmProvider
   */
  algorithmProvider?: string;
  /**
   * @remarks
   * The version of the algorithm.
   * 
   * @example
   * TestAlgorithmVersion
   */
  algorithmVersion?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The MD5 hash of the face.
   * 
   * @example
   * TestFaceMd5
   */
  faceMd5?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmVersion: 'AlgorithmVersion',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      faceMd5: 'FaceMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmVersion: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      faceMd5: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserResponseBodyDataFacePicList extends $dara.Model {
  /**
   * @remarks
   * The MD5 hash of the photo.
   * 
   * @example
   * TestFaceMd5
   */
  faceMd5?: string;
  /**
   * @remarks
   * The URL of the photo.
   * 
   * @example
   * https://test.com/xxx.jpg
   */
  faceUrl?: string;
  /**
   * @remarks
   * The list of face feature values.
   */
  featureDTOList?: QueryFaceUserResponseBodyDataFacePicListFeatureDTOList[];
  static names(): { [key: string]: string } {
    return {
      faceMd5: 'FaceMd5',
      faceUrl: 'FaceUrl',
      featureDTOList: 'FeatureDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceMd5: 'string',
      faceUrl: 'string',
      featureDTOList: { 'type': 'array', 'itemType': QueryFaceUserResponseBodyDataFacePicListFeatureDTOList },
    };
  }

  validate() {
    if(Array.isArray(this.featureDTOList)) {
      $dara.Model.validateArray(this.featureDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The user ID in the caller\\"s system.
   * 
   * @example
   * TestCustomUserId
   */
  customUserId?: string;
  /**
   * @remarks
   * The list of face photo information.
   */
  facePicList?: QueryFaceUserResponseBodyDataFacePicList[];
  /**
   * @remarks
   * The username.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The user parameters.
   * 
   * @example
   * {"age":28, "sex":"male"}
   */
  params?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * TestUserId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      customUserId: 'CustomUserId',
      facePicList: 'FacePicList',
      name: 'Name',
      params: 'Params',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUserId: 'string',
      facePicList: { 'type': 'array', 'itemType': QueryFaceUserResponseBodyDataFacePicList },
      name: 'string',
      params: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.facePicList)) {
      $dara.Model.validateArray(this.facePicList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: QueryFaceUserResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A13279A-5640-45E7-87AA-83750541AD0E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceUserResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

