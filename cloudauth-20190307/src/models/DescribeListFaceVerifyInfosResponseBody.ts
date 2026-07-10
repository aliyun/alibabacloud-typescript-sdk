// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeListFaceVerifyInfosResponseBodyFaceVerifyInfos extends $dara.Model {
  /**
   * @remarks
   * The business code.
   * 
   * @example
   * CLOUD_FACE
   */
  bizCode?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * 赵四
   */
  certName?: string;
  /**
   * @remarks
   * The certificate number.
   * 
   * @example
   * 500382199805086199
   */
  certNo?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * sha8ff58e964152c4c4d21005fb98ecb
   */
  certifyId?: string;
  /**
   * @remarks
   * The creation time of the facial recognition record.
   * 
   * @example
   * 2022-10-02T11:16:06Z
   */
  createTime?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 1000010145
   */
  sceneId?: number;
  /**
   * @remarks
   * The authentication status. Valid values:
   * - **1**: Authentication passed.
   * - **2**: Authentication failed.
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      certName: 'CertName',
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      createTime: 'CreateTime',
      sceneId: 'SceneId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      certName: 'string',
      certNo: 'string',
      certifyId: 'string',
      createTime: 'string',
      sceneId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListFaceVerifyInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of facial recognition authentication records.
   */
  faceVerifyInfos?: DescribeListFaceVerifyInfosResponseBodyFaceVerifyInfos[];
  /**
   * @remarks
   * The specified page number returned.
   * 
   * @example
   * 20
   */
  itemsPerPage?: number;
  /**
   * @remarks
   * The current page number for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CC27D8E-24BF-5056-B14E-9F26719C9A8D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of authentication records.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 3
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      faceVerifyInfos: 'FaceVerifyInfos',
      itemsPerPage: 'ItemsPerPage',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceVerifyInfos: { 'type': 'array', 'itemType': DescribeListFaceVerifyInfosResponseBodyFaceVerifyInfos },
      itemsPerPage: 'number',
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.faceVerifyInfos)) {
      $dara.Model.validateArray(this.faceVerifyInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

