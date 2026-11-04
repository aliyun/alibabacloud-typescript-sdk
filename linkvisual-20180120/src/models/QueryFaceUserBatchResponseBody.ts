// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceUserBatchResponseBodyDataFacePicListFeatureDTOList extends $dara.Model {
  /**
   * @remarks
   * The algorithm name.
   * 
   * @example
   * TestAlgorithmName
   */
  algorithmName?: string;
  /**
   * @remarks
   * The algorithm provider.
   * 
   * @example
   * TestAlgorithmProvider
   */
  algorithmProvider?: string;
  /**
   * @remarks
   * The algorithm version.
   * 
   * @example
   * TestAlgorithmVersion
   */
  algorithmVersion?: string;
  /**
   * @remarks
   * The algorithm return code:
   * 
   * - **200**: Successful.
   * - Other values: Error codes. For more information, see [Error codes](https://help.aliyun.com/document_detail/288314.html).
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when an error occurs during algorithm execution.
   * 
   * @example
   * parameter error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The MD5 hash value of the face feature.
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

export class QueryFaceUserBatchResponseBodyDataFacePicList extends $dara.Model {
  /**
   * @remarks
   * The MD5 hash value of the user\\"s face picture.
   * 
   * @example
   * TestFaceMd5
   */
  faceMd5?: string;
  /**
   * @remarks
   * The URL of the user\\"s face picture.
   * 
   * @example
   * https://example.com/test.jpeg
   */
  faceUrl?: string;
  /**
   * @remarks
   * The list of face feature values.
   */
  featureDTOList?: QueryFaceUserBatchResponseBodyDataFacePicListFeatureDTOList[];
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
      featureDTOList: { 'type': 'array', 'itemType': QueryFaceUserBatchResponseBodyDataFacePicListFeatureDTOList },
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

export class QueryFaceUserBatchResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The 13-digit timestamp when the user\\"s face data was created, in milliseconds.
   * 
   * @example
   * 1636427314000
   */
  createTime?: number;
  /**
   * @remarks
   * The user identification ID.
   * 
   * @example
   * 1234567890
   */
  customUserId?: string;
  /**
   * @remarks
   * The list of face picture information for the user.
   */
  facePicList?: QueryFaceUserBatchResponseBodyDataFacePicList[];
  /**
   * @remarks
   * The 13-digit timestamp when the user\\"s face data was last modified, in milliseconds.
   * 
   * @example
   * 1636436864000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * Tony
   */
  name?: string;
  /**
   * @remarks
   * The custom user parameters.
   * 
   * @example
   * {"key1":"value1", "key2":"value2"}
   */
  params?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 3mtjaqebeq4d****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      customUserId: 'CustomUserId',
      facePicList: 'FacePicList',
      modifyTime: 'ModifyTime',
      name: 'Name',
      params: 'Params',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      customUserId: 'string',
      facePicList: { 'type': 'array', 'itemType': QueryFaceUserBatchResponseBodyDataFacePicList },
      modifyTime: 'number',
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

export class QueryFaceUserBatchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API return code:
   * 
   * - **200**: Successful.
   * - Other values: Error codes. For more information, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned when the call is successful.
   */
  data?: QueryFaceUserBatchResponseBodyData[];
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * face user not exist
   */
  errorMessage?: string;
  /**
   * @remarks
   * The unique identifier generated by Alibaba Cloud for the request.
   * 
   * @example
   * 0A13279A-5640-45E7-87AA-83750541AD0E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful:
   * - **true**: The call was successful.
   * - **false**: The call failed.
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
      data: { 'type': 'array', 'itemType': QueryFaceUserBatchResponseBodyData },
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

