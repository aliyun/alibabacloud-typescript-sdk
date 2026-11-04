// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceUserByNameResponseBodyDataListFacePicListFeatureDTOList extends $dara.Model {
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
   * The response code of the algorithm:
   * 
   * - **200**: The execution is successful.
   * - Other values: An error code is returned. For more information about error codes, see [Error codes](https://help.aliyun.com/document_detail/288314.html).
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

export class QueryFaceUserByNameResponseBodyDataListFacePicList extends $dara.Model {
  /**
   * @remarks
   * The MD5 hash value of the face picture of the user.
   * 
   * @example
   * TestFaceMd5
   */
  faceMd5?: string;
  /**
   * @remarks
   * The URL of the face picture of the user.
   * 
   * @example
   * https://example.com/test.jpeg
   */
  faceUrl?: string;
  /**
   * @remarks
   * The list of face feature values.
   */
  featureDTOList?: QueryFaceUserByNameResponseBodyDataListFacePicListFeatureDTOList[];
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
      featureDTOList: { 'type': 'array', 'itemType': QueryFaceUserByNameResponseBodyDataListFacePicListFeatureDTOList },
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

export class QueryFaceUserByNameResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The 13-digit timestamp when the face data was created, in milliseconds.
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
   * The list of face picture information of the user.
   */
  facePicList?: QueryFaceUserByNameResponseBodyDataListFacePicList[];
  /**
   * @remarks
   * The timestamp when the face data was last modified, in milliseconds.
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
      facePicList: { 'type': 'array', 'itemType': QueryFaceUserByNameResponseBodyDataListFacePicList },
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

export class QueryFaceUserByNameResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of face information returned when the call is successful.
   */
  list?: QueryFaceUserByNameResponseBodyDataList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 15
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 8
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryFaceUserByNameResponseBodyDataList },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserByNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code of the API operation:
   * 
   * - **200**: The call is successful.
   * - Other values: An error code is returned. For more information about error codes, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned when the call is successful.
   */
  data?: QueryFaceUserByNameResponseBodyData;
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
   * Indicates whether the call is successful:
   * - **true**: The call is successful.
   * - **false**: The call fails.
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
      data: QueryFaceUserByNameResponseBodyData,
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

