// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeListFaceVerifyInfosResponseBodyFaceVerifyInfos extends $dara.Model {
  /**
   * @remarks
   * Business code.
   * 
   * @example
   * CLOUD_FACE
   */
  bizCode?: string;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * 赵四
   */
  certName?: string;
  /**
   * @remarks
   * ID number.
   * 
   * @example
   * 500382199805086199
   */
  certNo?: string;
  /**
   * @remarks
   * ID of the certificate.
   * 
   * @example
   * sha8ff58e964152c4c4d21005fb98ecb
   */
  certifyId?: string;
  /**
   * @remarks
   * Creation time of the face recognition record.
   * 
   * @example
   * 2022-10-02T11:16:06Z
   */
  createTime?: string;
  /**
   * @remarks
   * Scene ID.
   * 
   * @example
   * 1000010145
   */
  sceneId?: number;
  /**
   * @remarks
   * Verification status:
   * - **1**: Verification passed.
   * - **2**: Verification failed.
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
   * List of face verification records.
   */
  faceVerifyInfos?: DescribeListFaceVerifyInfosResponseBodyFaceVerifyInfos[];
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 20
   */
  itemsPerPage?: number;
  /**
   * @remarks
   * Pagination parameter: current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * ID of the current request.
   * 
   * @example
   * 1CC27D8E-24BF-5056-B14E-9F26719C9A8D
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of verifications.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
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

