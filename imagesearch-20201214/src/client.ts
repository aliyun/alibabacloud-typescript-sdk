// This file is auto-generated, don't edit it
/**
 */
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';

export class AddImageResponseBodyPicInfo extends $dara.Model {
  /**
   * @remarks
   * The result of category prediction. If a category is specified in the request, the specified category prevails.
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  /**
   * @remarks
   * The result of subject identification. The subject area of the image is in the format of `x1,x2,y1,y2`. `x1 and y1` represent the position in the upper-left corner, in pixels. `x2 and y2` represent the position in the lower-right corner, in pixels. If a subject area is specified in the request, the specified subject area prevails.
   * 
   * @example
   * 94,691,206,650
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareSimilarByImageResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name (PicName) of the deleted image.
   * 
   * @example
   * 5555.jpg
   */
  picNames?: string[];
  static names(): { [key: string]: string } {
    return {
      picNames: 'PicNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.picNames)) {
      $dara.Model.validateArray(this.picNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * The capacity of the plan. Unit: × 10,000 images.
   * 
   * @example
   * 10
   */
  capacity?: number;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * imagesearchName
   */
  name?: string;
  /**
   * @remarks
   * The number of queries per second supported by the plan.
   * 
   * @example
   * 1
   */
  qps?: number;
  /**
   * @remarks
   * The information about the region.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The Image Search model.
   * 
   * 0: commodity search. 1: generic image search.
   * 
   * @example
   * 0
   */
  serviceType?: number;
  /**
   * @remarks
   * The number of images.
   * 
   * @example
   * 10063
   */
  totalCount?: number;
  /**
   * @remarks
   * The time when the instance was created. Unit: milliseconds.
   * 
   * @example
   * 1620382716000
   */
  utcCreate?: string;
  /**
   * @remarks
   * The time when the instance expires. Unit: milliseconds.
   * 
   * @example
   * 1623081600000
   */
  utcExpireTime?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      name: 'Name',
      qps: 'Qps',
      region: 'Region',
      serviceType: 'ServiceType',
      totalCount: 'TotalCount',
      utcCreate: 'UtcCreate',
      utcExpireTime: 'UtcExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      name: 'string',
      qps: 'number',
      region: 'string',
      serviceType: 'number',
      totalCount: 'number',
      utcCreate: 'string',
      utcExpireTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The status of the export task.
   * 
   * *   PROCESSING: in progress
   * *   FAIL: failed
   * *   SUCCESS: successful
   * 
   * @example
   * PROCESSING
   */
  dumpMetaStatus?: string;
  /**
   * @remarks
   * The ID of the export task.
   * 
   * @example
   * 500
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      dumpMetaStatus: 'DumpMetaStatus',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dumpMetaStatus: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaListResponseBodyDataDumpMetaList extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * *   A value of 0 indicates that the operation is successful.
   * *   Values other than 0 indicate errors.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 500
   */
  id?: number;
  /**
   * @remarks
   * The address where you can download the metadata. The address is valid for 2 hours.
   * 
   * @example
   * https://imagesearchname.oss-cn-shanghai.aliyuncs.com/xxx
   */
  metaUrl?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The status of the export task.
   * 
   * *   PROCESSING: in progress
   * *   FAIL: failed
   * *   SUCCESS: successful
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The time when the task was created. Unit: milliseconds.
   * 
   * @example
   * 1629095713000
   */
  utcCreate?: string;
  /**
   * @remarks
   * The time when the task was updated. Unit: milliseconds.
   * 
   * @example
   * 1629095760000
   */
  utcModified?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      metaUrl: 'MetaUrl',
      msg: 'Msg',
      status: 'Status',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'number',
      metaUrl: 'string',
      msg: 'string',
      status: 'string',
      utcCreate: 'string',
      utcModified: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of tasks that are used to export metadata.
   */
  dumpMetaList?: DumpMetaListResponseBodyDataDumpMetaList[];
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dumpMetaList: 'DumpMetaList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dumpMetaList: { 'type': 'array', 'itemType': DumpMetaListResponseBodyDataDumpMetaList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dumpMetaList)) {
      $dara.Model.validateArray(this.dumpMetaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 500
   */
  id?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * *   PROCESSING: in progress
   * *   FAIL: failed
   * *   SUCCESS: successful
   * 
   * @example
   * PROCESSING
   */
  incrementStatus?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      incrementStatus: 'IncrementStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      incrementStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListResponseBodyDataIncrementsInstance extends $dara.Model {
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket.
   * 
   * @example
   * bucketName
   */
  bucketName?: string;
  /**
   * @remarks
   * The callback address.
   * 
   * @example
   * http://xxxxx
   */
  callbackAddress?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * *   A value of 0 indicates that the operation is successful.
   * *   Values other than 0 indicate errors.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The address where you can download the result. The address is valid for 2 hours.
   * 
   * @example
   * https://imagesearchname.oss-cn-shanghai.aliyuncs.com/xxx
   */
  errorUrl?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 500
   */
  id?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * sucess
   */
  msg?: string;
  /**
   * @remarks
   * The absolute path to the increment.meta file in the bucket. The path must start with a forward slash (/) and cannot end with a forward slash (/).
   * 
   * @example
   * /xx/xx
   */
  path?: string;
  /**
   * @remarks
   * The status of the batch task.
   * 
   * *   PROCESSING: in progress
   * *   FAIL: failed
   * *   SUCCESS: successful
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The time when the task was created. Unit: milliseconds.
   * 
   * @example
   * 1629095713000
   */
  utcCreate?: string;
  /**
   * @remarks
   * The time when the task was updated. Unit: milliseconds.
   * 
   * @example
   * 1629095760000
   */
  utcModified?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      callbackAddress: 'CallbackAddress',
      code: 'Code',
      errorUrl: 'ErrorUrl',
      id: 'Id',
      msg: 'Msg',
      path: 'Path',
      status: 'Status',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      callbackAddress: 'string',
      code: 'string',
      errorUrl: 'string',
      id: 'number',
      msg: 'string',
      path: 'string',
      status: 'string',
      utcCreate: 'string',
      utcModified: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListResponseBodyDataIncrements extends $dara.Model {
  instance?: IncreaseListResponseBodyDataIncrementsInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': IncreaseListResponseBodyDataIncrementsInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of batch tasks.
   */
  increments?: IncreaseListResponseBodyDataIncrements;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      increments: 'Increments',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      increments: IncreaseListResponseBodyDataIncrements,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.increments && typeof (this.increments as any).validate === 'function') {
      (this.increments as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyAuctions extends $dara.Model {
  /**
   * @remarks
   * The category of the image.
   * 
   * @example
   * 20
   */
  categoryId?: number;
  /**
   * @remarks
   * The user-defined content.
   * 
   * @example
   * zidingyi
   */
  customContent?: string;
  /**
   * @remarks
   * The attribute, which is an integer.
   * 
   * @example
   * 2
   */
  intAttr?: number;
  /**
   * @example
   * 20
   */
  intAttr2?: number;
  intAttr3?: number;
  intAttr4?: number;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @remarks
   * The similarity score of the returned image. Valid values: 0 to 1.
   * 
   * >  To use this feature, you must upgrade the SDK to version 3.1.1.
   * 
   * @example
   * 1
   */
  score?: number;
  /**
   * @remarks
   * The score information about the image.
   * 
   * > *   This parameter is not supported. We recommend that you use the Score parameter.
   * >*   The SortExprValues parameter indicates a 2-tuple in which values are separated by a semicolon (;). The first value indicates the correlation score of the returned image. A greater value indicates a higher correlation with the sample image. Different algorithms are used.
   * >*   If the value of CategoryId is within the value range from 0 to 2, the value range of SortExprValues is from 0 to 7.33136443711219e+24.
   * >*   If the value of CategoryId is not within the value range from 0 to 2, the value range of SortExprValues is from 0 to 5.37633353624177e+24. If the returned image is identical with the sample image, the highest correlation score is generated.
   * 
   * @example
   * 5.37633353624177e+24;0
   */
  sortExprValues?: string;
  /**
   * @remarks
   * The attribute, which is a string.
   * 
   * @example
   * ss
   */
  strAttr?: string;
  /**
   * @example
   * test
   */
  strAttr2?: string;
  strAttr3?: string;
  strAttr4?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      customContent: 'CustomContent',
      intAttr: 'IntAttr',
      intAttr2: 'IntAttr2',
      intAttr3: 'IntAttr3',
      intAttr4: 'IntAttr4',
      picName: 'PicName',
      productId: 'ProductId',
      score: 'Score',
      sortExprValues: 'SortExprValues',
      strAttr: 'StrAttr',
      strAttr2: 'StrAttr2',
      strAttr3: 'StrAttr3',
      strAttr4: 'StrAttr4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      customContent: 'string',
      intAttr: 'number',
      intAttr2: 'number',
      intAttr3: 'number',
      intAttr4: 'number',
      picName: 'string',
      productId: 'string',
      score: 'number',
      sortExprValues: 'string',
      strAttr: 'string',
      strAttr2: 'string',
      strAttr3: 'string',
      strAttr4: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyHead extends $dara.Model {
  /**
   * @remarks
   * The number of images returned.
   * 
   * @example
   * 10
   */
  docsFound?: number;
  /**
   * @remarks
   * The number of images that match the search conditions on the Image Search instance.
   * 
   * @example
   * 10000
   */
  docsReturn?: number;
  /**
   * @remarks
   * The time it takes to complete the search process. Unit: milliseconds.
   * 
   * @example
   * 95
   */
  searchTime?: number;
  static names(): { [key: string]: string } {
    return {
      docsFound: 'DocsFound',
      docsReturn: 'DocsReturn',
      searchTime: 'SearchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docsFound: 'number',
      docsReturn: 'number',
      searchTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyPicInfoAllCategories extends $dara.Model {
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * other
   */
  id?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * 88888888
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyPicInfoMultiRegion extends $dara.Model {
  /**
   * @remarks
   * The result of subject recognition.
   * 
   * The subject area of the image, in the format of x1,x2,y1,y2. Specifically, x1 and y1 specify the upper-left pixel, and x2 and y2 specify the lower-right pixel. If a subject area is specified in the request, the specified subject area prevails.
   * 
   * @example
   * 280,486,232,351
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyPicInfo extends $dara.Model {
  /**
   * @remarks
   * The categories that are supported by the system.
   */
  allCategories?: SearchImageByNameResponseBodyPicInfoAllCategories[];
  /**
   * @remarks
   * The category selected by the system.
   * 
   * If a category is specified in the request, the specified category prevails.
   * 
   * @example
   * 20
   */
  categoryId?: number;
  /**
   * @remarks
   * The recognized subjects.
   */
  multiRegion?: SearchImageByNameResponseBodyPicInfoMultiRegion[];
  /**
   * @remarks
   * The result of subject recognition.
   * 
   * The subject area of the image, in the format of x1,x2,y1,y2. Specifically, x1 and y1 specify the upper-left pixel, and x2 and y2 specify the lower-right pixel. If a subject area is specified in the request, the specified subject area prevails.
   * 
   * @example
   * 280,486,232,351
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      allCategories: 'AllCategories',
      categoryId: 'CategoryId',
      multiRegion: 'MultiRegion',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCategories: { 'type': 'array', 'itemType': SearchImageByNameResponseBodyPicInfoAllCategories },
      categoryId: 'number',
      multiRegion: { 'type': 'array', 'itemType': SearchImageByNameResponseBodyPicInfoMultiRegion },
      region: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allCategories)) {
      $dara.Model.validateArray(this.allCategories);
    }
    if(Array.isArray(this.multiRegion)) {
      $dara.Model.validateArray(this.multiRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyAuctions extends $dara.Model {
  /**
   * @remarks
   * The category of the image.
   * 
   * @example
   * 8888888
   */
  categoryId?: number;
  /**
   * @remarks
   * The user-defined content.
   * 
   * @example
   * zidingyi
   */
  customContent?: string;
  /**
   * @remarks
   * The attribute, which is an integer.
   * 
   * @example
   * 2
   */
  intAttr?: number;
  /**
   * @example
   * 20
   */
  intAttr2?: number;
  intAttr3?: number;
  intAttr4?: number;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @remarks
   * The similarity score of the searched image. Valid values: 0 to 1.
   * 
   * >  To use this feature, you must upgrade the SDK to version 3.1.1.
   * 
   * @example
   * 1
   */
  score?: number;
  /**
   * @remarks
   * The score information about the image.
   * 
   * > *   This parameter is not supported. We recommend that you use the Score parameter.
   * >*   The SortExprValues parameter indicates a 2-tuple in which values are separated by a semicolon (;). The first value indicates the correlation score of the returned image. A greater value indicates a higher correlation with the sample image. Different algorithms are used.
   * >*   If the value of CategoryId is within the value range from 0 to 2, the value range of SortExprValues is from 0 to 7.33136443711219e+24.
   * >*   If the value of CategoryId is not within the value range from 0 to 2, the value range of SortExprValues is from 0 to 5.37633353624177e+24. If the returned image is identical with the sample image, the highest correlation score is generated.
   * 
   * @example
   * 5.37633353624177e+24;0
   */
  sortExprValues?: string;
  /**
   * @remarks
   * The attribute, which is a string.
   * 
   * @example
   * 2
   */
  strAttr?: string;
  /**
   * @example
   * test
   */
  strAttr2?: string;
  strAttr3?: string;
  strAttr4?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      customContent: 'CustomContent',
      intAttr: 'IntAttr',
      intAttr2: 'IntAttr2',
      intAttr3: 'IntAttr3',
      intAttr4: 'IntAttr4',
      picName: 'PicName',
      productId: 'ProductId',
      score: 'Score',
      sortExprValues: 'SortExprValues',
      strAttr: 'StrAttr',
      strAttr2: 'StrAttr2',
      strAttr3: 'StrAttr3',
      strAttr4: 'StrAttr4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      customContent: 'string',
      intAttr: 'number',
      intAttr2: 'number',
      intAttr3: 'number',
      intAttr4: 'number',
      picName: 'string',
      productId: 'string',
      score: 'number',
      sortExprValues: 'string',
      strAttr: 'string',
      strAttr2: 'string',
      strAttr3: 'string',
      strAttr4: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyHead extends $dara.Model {
  /**
   * @remarks
   * The number of images returned.
   * 
   * @example
   * 10
   */
  docsFound?: number;
  /**
   * @remarks
   * The number of images that match the search conditions on the Image Search instance.
   * 
   * @example
   * 10000
   */
  docsReturn?: number;
  /**
   * @remarks
   * The time it takes to complete the search process. Unit: milliseconds.
   * 
   * @example
   * 95
   */
  searchTime?: number;
  static names(): { [key: string]: string } {
    return {
      docsFound: 'DocsFound',
      docsReturn: 'DocsReturn',
      searchTime: 'SearchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docsFound: 'number',
      docsReturn: 'number',
      searchTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyPicInfoAllCategories extends $dara.Model {
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * 88888888
   */
  id?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * other
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyPicInfoMultiRegion extends $dara.Model {
  /**
   * @remarks
   * The result of subject recognition. The subject area of the image, in the format of x1,x2,y1,y2. Specifically, x1 and y1 specify the upper-left pixel, and x2 and y2 specify the lower-right pixel. If a subject area is specified in the request, the specified subject area prevails.
   * 
   * @example
   * 280,486,232,351
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyPicInfo extends $dara.Model {
  /**
   * @remarks
   * The categories that are supported by the system.
   */
  allCategories?: SearchImageByPicResponseBodyPicInfoAllCategories[];
  /**
   * @remarks
   * The category selected by the system. If a category is specified in the request, the specified category prevails.
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  /**
   * @remarks
   * The recognized subjects.
   * 
   * >  To use this feature, you must upgrade the SDK to version 3.1.1.
   */
  multiRegion?: SearchImageByPicResponseBodyPicInfoMultiRegion[];
  /**
   * @remarks
   * The result of subject recognition. The subject area of the image, in the format of x1,x2,y1,y2. Specifically, x1 and y1 specify the upper-left pixel, and x2 and y2 specify the lower-right pixel. If a subject area is specified in the request, the specified subject area prevails.
   * 
   * @example
   * 280,486,232,351
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      allCategories: 'AllCategories',
      categoryId: 'CategoryId',
      multiRegion: 'MultiRegion',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCategories: { 'type': 'array', 'itemType': SearchImageByPicResponseBodyPicInfoAllCategories },
      categoryId: 'number',
      multiRegion: { 'type': 'array', 'itemType': SearchImageByPicResponseBodyPicInfoMultiRegion },
      region: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allCategories)) {
      $dara.Model.validateArray(this.allCategories);
    }
    if(Array.isArray(this.multiRegion)) {
      $dara.Model.validateArray(this.multiRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByTextResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @example
   * 111
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 222
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @example
   * xxxxxx
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @example
   * PauseNotify
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByTextResponseBodyAuctions extends $dara.Model {
  /**
   * @example
   * 8888888
   */
  categoryId?: number;
  /**
   * @example
   * zidingyi
   */
  customContent?: string;
  /**
   * @example
   * 2
   */
  intAttr?: number;
  /**
   * @example
   * 2
   */
  intAttr2?: number;
  /**
   * @example
   * 2
   */
  intAttr3?: number;
  /**
   * @example
   * 2
   */
  intAttr4?: number;
  /**
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @example
   * 1
   */
  score?: number;
  /**
   * @example
   * xxxx
   */
  strAttr?: string;
  /**
   * @example
   * xxxx
   */
  strAttr2?: string;
  /**
   * @example
   * xxxx
   */
  strAttr3?: string;
  /**
   * @example
   * xxxx
   */
  strAttr4?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      customContent: 'CustomContent',
      intAttr: 'IntAttr',
      intAttr2: 'IntAttr2',
      intAttr3: 'IntAttr3',
      intAttr4: 'IntAttr4',
      picName: 'PicName',
      productId: 'ProductId',
      score: 'Score',
      strAttr: 'StrAttr',
      strAttr2: 'StrAttr2',
      strAttr3: 'StrAttr3',
      strAttr4: 'StrAttr4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      customContent: 'string',
      intAttr: 'number',
      intAttr2: 'number',
      intAttr3: 'number',
      intAttr4: 'number',
      picName: 'string',
      productId: 'string',
      score: 'number',
      strAttr: 'string',
      strAttr2: 'string',
      strAttr3: 'string',
      strAttr4: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByTextResponseBodyHead extends $dara.Model {
  /**
   * @example
   * 10
   */
  docsFound?: number;
  /**
   * @example
   * 10000
   */
  docsReturn?: number;
  /**
   * @example
   * 95
   */
  searchTime?: number;
  static names(): { [key: string]: string } {
    return {
      docsFound: 'DocsFound',
      docsReturn: 'DocsReturn',
      searchTime: 'SearchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docsFound: 'number',
      docsReturn: 'number',
      searchTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByTextResponseBodyPicInfoAllCategories extends $dara.Model {
  /**
   * @example
   * 88888888
   */
  id?: number;
  /**
   * @example
   * other
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByTextResponseBodyPicInfo extends $dara.Model {
  allCategories?: SearchImageByTextResponseBodyPicInfoAllCategories[];
  static names(): { [key: string]: string } {
    return {
      allCategories: 'AllCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCategories: { 'type': 'array', 'itemType': SearchImageByTextResponseBodyPicInfoAllCategories },
    };
  }

  validate() {
    if(Array.isArray(this.allCategories)) {
      $dara.Model.validateArray(this.allCategories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the image. For more information, see [Category reference](https://help.aliyun.com/document_detail/179184.html).
   * 
   * > *   For product image search, if you specify a category for an image, the specified category prevails. If you do not specify a category for an image, the system predicts the category, and returns the prediction result in the response.
   * >*   For generic image search, only 88888888 may be returned for this parameter in the response regardless of whether a category is specified.
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  /**
   * @remarks
   * Specifies whether to identify the subject in the image and search for images based on the subject identification result. Default value: true. Valid values:
   * 
   * *   true: The system identifies the subject in the image, and searches for images based on the subject identification result. The subject identification result is included in the response.
   * *   false: The system does not identify the subject in the image, and searches for images based on the entire image.
   * 
   * @example
   * true
   */
  crop?: boolean;
  /**
   * @remarks
   * The user-defined content. The value can be up to 4,096 characters in length.
   * 
   * > If you specify this parameter, the response includes this parameter and its value. You can add text such as an image description.
   * 
   * @example
   * zidingyi
   */
  customContent?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length. If an Image Search instance is purchased, you can log on to the [Image Search console](https://imagesearch.console.aliyun.com/) to view the instance. If no Image Search instance is purchased, you must purchase an instance. For more information, see [Activate Image Search](https://help.aliyun.com/document_detail/179178.html) and [Create an instance](https://help.aliyun.com/document_detail/66569.html).
   * 
   * > The instance name is not the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The attribute, which is an integer. The attribute can be used to filter images when you search for images. If you specify this parameter, the response includes this parameter and its value.
   * 
   * @example
   * 22
   */
  intAttr?: number;
  /**
   * @remarks
   * The attribute, which is an integer. The attribute can be used to filter images when you search for images. If you specify this parameter, the response includes this parameter and its value.
   * 
   * @example
   * 22
   */
  intAttr2?: number;
  intAttr3?: number;
  intAttr4?: number;
  /**
   * @remarks
   * The image file. The image file is encoded in Base64.
   * 
   * *   The file size of the image cannot exceed 4 MB.
   * *   The following image formats are supported: PNG, JPG, JPEG, BMP, GIF, WebP, TIFF, and PPM.
   * *   The transmission timeout period cannot exceed 5 seconds.
   * *   For product and generic image searches, the length and width of the image must range from 100 pixels to 4,096 pixels.
   * *   The image cannot contain rotation settings.
   * 
   * > *   If you use SDKs to call this operation, you do not need to specify **PicContent**. The SDKs encapsulate this parameter and automatically encode its value in Base64. For more information about how to use Image Search SDK for Java, see [Java SDK](https://help.aliyun.com/document_detail/179188.html).
   * >*   If you use OpenAPI Explorer to call this operation, you can select only the **2019-03-25** version. If you call this operation of other versions, the value of **PicContent** cannot be encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  picContent?: string;
  /**
   * @remarks
   * The name of the image. The name can be up to 512 characters in length.
   * 
   * > *   An image is uniquely identified by the values of ProductId and PicName.
   * >*   If you add an image whose product ID (ProductId) and image name (PicName) are the same as those of an existing image, the newly added image overwrites the existing image.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The ID of the product. The ID can be up to 512 characters in length.
   * 
   * > A product may have multiple images.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @remarks
   * The subject area of the image, in the format of `x1,x2,y1,y2`. `x1 and y1` represent the position in the upper-left corner, in pixels. `x2 and y2` represent the position in the lower-right corner, in pixels.
   * 
   * > *   If you specify Region, the system searches for images based on the value of Region regardless of the value of Crop.
   * >*   The value of Region does not have a unit. The value is generated based on the length and width of the image. If the length and width of the image are scaled, the value of Region must be proportionally adjusted.
   * 
   * @example
   * 280,486,232,351
   */
  region?: string;
  /**
   * @remarks
   * The attribute, which is a string. The value can be up to 128 characters in length. The attribute can be used to filter images when you search for images. If you specify this parameter, the response includes this parameter and its value.
   * 
   * > The value cannot contain the following special characters: \\ ¥ $ & %
   * 
   * @example
   * ss
   */
  strAttr?: string;
  /**
   * @remarks
   * The attribute, which is a string. The value can be up to 128 characters in length. The attribute can be used to filter images when you search for images. If you specify this parameter, the response includes this parameter and its value.
   * 
   * > The value cannot contain the following special characters: \\ ¥ $ & %
   * 
   * @example
   * ss
   */
  strAttr2?: string;
  strAttr3?: string;
  strAttr4?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      crop: 'Crop',
      customContent: 'CustomContent',
      instanceName: 'InstanceName',
      intAttr: 'IntAttr',
      intAttr2: 'IntAttr2',
      intAttr3: 'IntAttr3',
      intAttr4: 'IntAttr4',
      picContent: 'PicContent',
      picName: 'PicName',
      productId: 'ProductId',
      region: 'Region',
      strAttr: 'StrAttr',
      strAttr2: 'StrAttr2',
      strAttr3: 'StrAttr3',
      strAttr4: 'StrAttr4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      crop: 'boolean',
      customContent: 'string',
      instanceName: 'string',
      intAttr: 'number',
      intAttr2: 'number',
      intAttr3: 'number',
      intAttr4: 'number',
      picContent: 'string',
      picName: 'string',
      productId: 'string',
      region: 'string',
      strAttr: 'string',
      strAttr2: 'string',
      strAttr3: 'string',
      strAttr4: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the image. For more information, see [Category reference](https://help.aliyun.com/document_detail/179184.html).
   * 
   * > *   For product image search, if you specify a category for an image, the specified category prevails. If you do not specify a category for an image, the system predicts the category, and returns the prediction result in the response.
   * >*   For generic image search, only 88888888 may be returned for this parameter in the response regardless of whether a category is specified.
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  /**
   * @remarks
   * Specifies whether to identify the subject in the image and search for images based on the subject identification result. Default value: true. Valid values:
   * 
   * *   true: The system identifies the subject in the image, and searches for images based on the subject identification result. The subject identification result is included in the response.
   * *   false: The system does not identify the subject in the image, and searches for images based on the entire image.
   * 
   * @example
   * true
   */
  crop?: boolean;
  /**
   * @remarks
   * The user-defined content. The value can be up to 4,096 characters in length.
   * 
   * > If you specify this parameter, the response includes this parameter and its value. You can add text such as an image description.
   * 
   * @example
   * zidingyi
   */
  customContent?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length. If an Image Search instance is purchased, you can log on to the [Image Search console](https://imagesearch.console.aliyun.com/) to view the instance. If no Image Search instance is purchased, you must purchase an instance. For more information, see [Activate Image Search](https://help.aliyun.com/document_detail/179178.html) and [Create an instance](https://help.aliyun.com/document_detail/66569.html).
   * 
   * > The instance name is not the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The attribute, which is an integer. The attribute can be used to filter images when you search for images. If you specify this parameter, the response includes this parameter and its value.
   * 
   * @example
   * 22
   */
  intAttr?: number;
  /**
   * @remarks
   * The attribute, which is an integer. The attribute can be used to filter images when you search for images. If you specify this parameter, the response includes this parameter and its value.
   * 
   * @example
   * 22
   */
  intAttr2?: number;
  intAttr3?: number;
  intAttr4?: number;
  /**
   * @remarks
   * The image file. The image file is encoded in Base64.
   * 
   * *   The file size of the image cannot exceed 4 MB.
   * *   The following image formats are supported: PNG, JPG, JPEG, BMP, GIF, WebP, TIFF, and PPM.
   * *   The transmission timeout period cannot exceed 5 seconds.
   * *   For product and generic image searches, the length and width of the image must range from 100 pixels to 4,096 pixels.
   * *   The image cannot contain rotation settings.
   * 
   * > *   If you use SDKs to call this operation, you do not need to specify **PicContent**. The SDKs encapsulate this parameter and automatically encode its value in Base64. For more information about how to use Image Search SDK for Java, see [Java SDK](https://help.aliyun.com/document_detail/179188.html).
   * >*   If you use OpenAPI Explorer to call this operation, you can select only the **2019-03-25** version. If you call this operation of other versions, the value of **PicContent** cannot be encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  picContentObject?: Readable;
  /**
   * @remarks
   * The name of the image. The name can be up to 512 characters in length.
   * 
   * > *   An image is uniquely identified by the values of ProductId and PicName.
   * >*   If you add an image whose product ID (ProductId) and image name (PicName) are the same as those of an existing image, the newly added image overwrites the existing image.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The ID of the product. The ID can be up to 512 characters in length.
   * 
   * > A product may have multiple images.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @remarks
   * The subject area of the image, in the format of `x1,x2,y1,y2`. `x1 and y1` represent the position in the upper-left corner, in pixels. `x2 and y2` represent the position in the lower-right corner, in pixels.
   * 
   * > *   If you specify Region, the system searches for images based on the value of Region regardless of the value of Crop.
   * >*   The value of Region does not have a unit. The value is generated based on the length and width of the image. If the length and width of the image are scaled, the value of Region must be proportionally adjusted.
   * 
   * @example
   * 280,486,232,351
   */
  region?: string;
  /**
   * @remarks
   * The attribute, which is a string. The value can be up to 128 characters in length. The attribute can be used to filter images when you search for images. If you specify this parameter, the response includes this parameter and its value.
   * 
   * > The value cannot contain the following special characters: \\ ¥ $ & %
   * 
   * @example
   * ss
   */
  strAttr?: string;
  /**
   * @remarks
   * The attribute, which is a string. The value can be up to 128 characters in length. The attribute can be used to filter images when you search for images. If you specify this parameter, the response includes this parameter and its value.
   * 
   * > The value cannot contain the following special characters: \\ ¥ $ & %
   * 
   * @example
   * ss
   */
  strAttr2?: string;
  strAttr3?: string;
  strAttr4?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      crop: 'Crop',
      customContent: 'CustomContent',
      instanceName: 'InstanceName',
      intAttr: 'IntAttr',
      intAttr2: 'IntAttr2',
      intAttr3: 'IntAttr3',
      intAttr4: 'IntAttr4',
      picContentObject: 'PicContent',
      picName: 'PicName',
      productId: 'ProductId',
      region: 'Region',
      strAttr: 'StrAttr',
      strAttr2: 'StrAttr2',
      strAttr3: 'StrAttr3',
      strAttr4: 'StrAttr4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      crop: 'boolean',
      customContent: 'string',
      instanceName: 'string',
      intAttr: 'number',
      intAttr2: 'number',
      intAttr3: 'number',
      intAttr4: 'number',
      picContentObject: 'Readable',
      picName: 'string',
      productId: 'string',
      region: 'string',
      strAttr: 'string',
      strAttr2: 'string',
      strAttr3: 'string',
      strAttr4: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code returned.
   * 
   * *   A value of 0 indicates that the request was successful.
   * *   Values other than 0 indicate that the request failed.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * > No value is returned if the request was successful, and an error message is returned if the request failed.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The results of category prediction and subject identification.
   */
  picInfo?: AddImageResponseBodyPicInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0845DE6-52AF-4B50-9F15-51ED4044E6AB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      picInfo: 'PicInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      picInfo: AddImageResponseBodyPicInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.picInfo && typeof (this.picInfo as any).validate === 'function') {
      (this.picInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddImageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareSimilarByImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  primaryPicContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  secondaryPicContent?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      primaryPicContent: 'PrimaryPicContent',
      secondaryPicContent: 'SecondaryPicContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      primaryPicContent: 'string',
      secondaryPicContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareSimilarByImageAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  primaryPicContentObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  secondaryPicContentObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      primaryPicContentObject: 'PrimaryPicContent',
      secondaryPicContentObject: 'SecondaryPicContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      primaryPicContentObject: 'Readable',
      secondaryPicContentObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareSimilarByImageResponseBody extends $dara.Model {
  accessDeniedDetail?: CompareSimilarByImageResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * success
   */
  msg?: string;
  /**
   * @example
   * B3137727-7D6E-488C-BA21-0E034C38A879
   */
  requestId?: string;
  /**
   * @example
   * 0.85
   */
  score?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      msg: 'Msg',
      requestId: 'RequestId',
      score: 'Score',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: CompareSimilarByImageResponseBodyAccessDeniedDetail,
      code: 'number',
      msg: 'string',
      requestId: 'string',
      score: 'number',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareSimilarByImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CompareSimilarByImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CompareSimilarByImageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageRequest extends $dara.Model {
  filter?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  isDeleteByFilter?: boolean;
  /**
   * @remarks
   * The name of the image.
   * 
   * *   If this parameter is not set, the system deletes all the images that correspond to the specified ProductId parameter.
   * *   If this parameter is set, the system deletes only the image that is specified by the ProductId and PicName parameters.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The ID of the commodity.
   * 
   * >  A commodity may have multiple images.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      instanceName: 'InstanceName',
      isDeleteByFilter: 'IsDeleteByFilter',
      picName: 'PicName',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      instanceName: 'string',
      isDeleteByFilter: 'boolean',
      picName: 'string',
      productId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * *   A value of 0 indicates that the operation is successful.
   * *   Values other than 0 indicate errors.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The information about the deleted images.
   */
  data?: DeleteImageResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0703956F-9BCC-48FA-99F7-96C0BF449C69
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DeleteImageResponseBodyData,
      message: 'string',
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

export class DeleteImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteImageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * imagesearchName
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the instance.
   */
  instance?: DetailResponseBodyInstance;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 36C43E96-8F68-44AA-B1AF-B1F7AB94A6C1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DetailResponseBodyInstance,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * imagesearchName
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the export task.
   */
  data?: DumpMetaResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 36C43E96-8F68-44AA-B1AF-B1F7AB94A6C1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DumpMetaResponseBodyData,
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

export class DumpMetaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DumpMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DumpMetaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the export task.
   * 
   * @example
   * 500
   */
  id?: number;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of images to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the task that is used to export metadata.
   */
  data?: DumpMetaListResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B3137727-7D6E-488C-BA21-0E034C38A879
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
      data: DumpMetaListResponseBodyData,
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

export class DumpMetaListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DumpMetaListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DumpMetaListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket.
   * 
   * >  The bucket must be in the same region as the Image Search instance.
   * 
   * This parameter is required.
   * 
   * @example
   * bucketName
   */
  bucketName?: string;
  /**
   * @remarks
   * The callback address.
   * 
   * @example
   * http://xxxxx
   */
  callbackAddress?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * imagesearchName
   */
  instanceName?: string;
  /**
   * @remarks
   * The absolute path to the increment.meta file in the bucket. The path must start with a forward slash (/) and cannot end with a forward slash (/).
   * 
   * This parameter is required.
   * 
   * @example
   * /xxx/xxx
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      callbackAddress: 'CallbackAddress',
      instanceName: 'InstanceName',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      callbackAddress: 'string',
      instanceName: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the task.
   */
  data?: IncreaseInstanceResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 36C43E96-8F68-44AA-B1AF-B1F7AB94A6C1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: IncreaseInstanceResponseBodyData,
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

export class IncreaseInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IncreaseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IncreaseInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket.
   * 
   * @example
   * bucketName
   */
  bucketName?: string;
  /**
   * @remarks
   * The ID of the batch task.
   * 
   * @example
   * 500
   */
  id?: number;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of images to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The absolute path to the increment.meta file in the bucket. The path must start with a forward slash (/) and cannot end with a forward slash (/).
   * 
   * @example
   * /xxx/xxx
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      id: 'Id',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      id: 'number',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the batch task.
   */
  data?: IncreaseListResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B3137727-7D6E-488C-BA21-0E034C38A879
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
      data: IncreaseListResponseBodyData,
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

export class IncreaseListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IncreaseListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IncreaseListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the product. For more information, see [Category references](https://help.aliyun.com/document_detail/179184.html).
   * 
   * *   For product search: If a category is specified, the specified category prevails. If no category is specified, the system estimates and selects a category. The category selected by the system is included in the response.
   * *   For generic search: The parameter value is set to 88888888 regardless of whether a category is specified.
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  distinctProductId?: boolean;
  /**
   * @remarks
   * The filter conditions. int_attr supports the following operators: >, >=, <, <=, and =. str_attr supports the following operators: = and !=. You can set the logical operator between conditions to AND or OR.
   * 
   * Examples:
   * 
   * *   int_attr>=100
   * *   str_attr!="value1"
   * *   int_attr=1000 AND str_attr="value1"
   * 
   * @example
   * int_attr>=100
   */
  filter?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of images to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  num?: number;
  /**
   * @remarks
   * The name of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @remarks
   * The number of the image to return. Valid values: 0 to 499. Default value: 0.
   * 
   * @example
   * 0
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      distinctProductId: 'DistinctProductId',
      filter: 'Filter',
      instanceName: 'InstanceName',
      num: 'Num',
      picName: 'PicName',
      productId: 'ProductId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      distinctProductId: 'boolean',
      filter: 'string',
      instanceName: 'string',
      num: 'number',
      picName: 'string',
      productId: 'string',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The product descriptions returned.
   */
  auctions?: SearchImageByNameResponseBodyAuctions[];
  /**
   * @remarks
   * The error code returned.
   * 
   * *   A value of 0 indicates that the operation is successful.
   * *   Values other than 0 indicate errors.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The summary of the search result.
   */
  head?: SearchImageByNameResponseBodyHead;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The information such as the system-selected category and result of subject recognition.
   */
  picInfo?: SearchImageByNameResponseBodyPicInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 36C43E96-8F68-44AA-B1AF-B1F7AB94A6C1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      auctions: 'Auctions',
      code: 'Code',
      head: 'Head',
      msg: 'Msg',
      picInfo: 'PicInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctions: { 'type': 'array', 'itemType': SearchImageByNameResponseBodyAuctions },
      code: 'number',
      head: SearchImageByNameResponseBodyHead,
      msg: 'string',
      picInfo: SearchImageByNameResponseBodyPicInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.auctions)) {
      $dara.Model.validateArray(this.auctions);
    }
    if(this.head && typeof (this.head as any).validate === 'function') {
      (this.head as any).validate();
    }
    if(this.picInfo && typeof (this.picInfo as any).validate === 'function') {
      (this.picInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchImageByNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchImageByNameResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the product. For more information, see [Category references](https://help.aliyun.com/document_detail/179184.html).
   * 
   * *   For product search: If a category is specified, the specified category prevails. If no category is specified, the system estimates and selects a category. The category selected by the system is included in the response.
   * *   For generic search: The parameter value is set to 88888888 regardless of whether a category is specified.
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  /**
   * @remarks
   * Specifies whether to recognize the subject in the image and search for images based on the recognized subject. Valid values: true and false. Default value: true.
   * 
   * *   true: The system recognizes the subject in the image, and searches for images based on the recognized subject. The recognition result is included in the response.
   * *   false: The system does not recognize the subject of the image, and searches for images based on the entire image.
   * 
   * @example
   * true
   */
  crop?: boolean;
  distinctProductId?: boolean;
  /**
   * @remarks
   * The filter conditions. int_attr supports the following operators: >, >=, <, <=, and =. str_attr supports the following operators: = and !=. You can set the logical operator between conditions to AND or OR.
   * 
   * Examples:
   * 
   * *   int_attr>=100
   * *   str_attr!="value1"
   * *   Example: int_attr=1000 AND str_attr="value1"
   * 
   * @example
   * int_attr=1000 AND str_attr="value1"
   */
  filter?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of images to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  num?: number;
  /**
   * @remarks
   * The image file. The image file is encoded in Base64.
   * 
   * *   The file size of the image cannot exceed 4 MB.
   * *   The following image formats are supported: PNG, JPG, JPEG, BMP, GIF, WebP, TIFF, and PPM.
   * *   The transmission timeout period cannot exceed 5 seconds.
   * *   For brand image searches, the length and the width of the image must range from 200 pixels to 4,096 pixels.
   * *   For cloth image searches, the length and the width of the image must range from 448 pixels to 4,096 pixels.
   * *   For product and generic image searches, the length and the width of the image must range from 100 pixels to 4,096 pixels.
   * *   The image cannot contain rotation settings.
   * 
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  picContent?: string;
  /**
   * @remarks
   * The subject area of the image. Specify the subject area in the following format: `x1,x2,y1,y2`. `x1 and y1` represent the upper-left corner pixel. `x2 and y2` represent the lower-right corner pixel.
   * 
   * >*   If you set the Region parameter, the system searches for images based on the value of Region regardless of the value of the Crop parameter.
   * 
   * @example
   * 280,486,232,351
   */
  region?: string;
  /**
   * @remarks
   * The number of the image to return. Valid values: 0 to 499. Default value: 0.
   * 
   * @example
   * 0
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      crop: 'Crop',
      distinctProductId: 'DistinctProductId',
      filter: 'Filter',
      instanceName: 'InstanceName',
      num: 'Num',
      picContent: 'PicContent',
      region: 'Region',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      crop: 'boolean',
      distinctProductId: 'boolean',
      filter: 'string',
      instanceName: 'string',
      num: 'number',
      picContent: 'string',
      region: 'string',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the product. For more information, see [Category references](https://help.aliyun.com/document_detail/179184.html).
   * 
   * *   For product search: If a category is specified, the specified category prevails. If no category is specified, the system estimates and selects a category. The category selected by the system is included in the response.
   * *   For generic search: The parameter value is set to 88888888 regardless of whether a category is specified.
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  /**
   * @remarks
   * Specifies whether to recognize the subject in the image and search for images based on the recognized subject. Valid values: true and false. Default value: true.
   * 
   * *   true: The system recognizes the subject in the image, and searches for images based on the recognized subject. The recognition result is included in the response.
   * *   false: The system does not recognize the subject of the image, and searches for images based on the entire image.
   * 
   * @example
   * true
   */
  crop?: boolean;
  distinctProductId?: boolean;
  /**
   * @remarks
   * The filter conditions. int_attr supports the following operators: >, >=, <, <=, and =. str_attr supports the following operators: = and !=. You can set the logical operator between conditions to AND or OR.
   * 
   * Examples:
   * 
   * *   int_attr>=100
   * *   str_attr!="value1"
   * *   Example: int_attr=1000 AND str_attr="value1"
   * 
   * @example
   * int_attr=1000 AND str_attr="value1"
   */
  filter?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of images to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  num?: number;
  /**
   * @remarks
   * The image file. The image file is encoded in Base64.
   * 
   * *   The file size of the image cannot exceed 4 MB.
   * *   The following image formats are supported: PNG, JPG, JPEG, BMP, GIF, WebP, TIFF, and PPM.
   * *   The transmission timeout period cannot exceed 5 seconds.
   * *   For brand image searches, the length and the width of the image must range from 200 pixels to 4,096 pixels.
   * *   For cloth image searches, the length and the width of the image must range from 448 pixels to 4,096 pixels.
   * *   For product and generic image searches, the length and the width of the image must range from 100 pixels to 4,096 pixels.
   * *   The image cannot contain rotation settings.
   * 
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  picContentObject?: Readable;
  /**
   * @remarks
   * The subject area of the image. Specify the subject area in the following format: `x1,x2,y1,y2`. `x1 and y1` represent the upper-left corner pixel. `x2 and y2` represent the lower-right corner pixel.
   * 
   * >*   If you set the Region parameter, the system searches for images based on the value of Region regardless of the value of the Crop parameter.
   * 
   * @example
   * 280,486,232,351
   */
  region?: string;
  /**
   * @remarks
   * The number of the image to return. Valid values: 0 to 499. Default value: 0.
   * 
   * @example
   * 0
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      crop: 'Crop',
      distinctProductId: 'DistinctProductId',
      filter: 'Filter',
      instanceName: 'InstanceName',
      num: 'Num',
      picContentObject: 'PicContent',
      region: 'Region',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      crop: 'boolean',
      distinctProductId: 'boolean',
      filter: 'string',
      instanceName: 'string',
      num: 'number',
      picContentObject: 'Readable',
      region: 'string',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBody extends $dara.Model {
  /**
   * @remarks
   * The product descriptions returned.
   */
  auctions?: SearchImageByPicResponseBodyAuctions[];
  /**
   * @remarks
   * The error code returned.
   * 
   * *   A value of 0 indicates that the operation is successful.
   * *   Values other than 0 indicate errors.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The summary of the search result.
   */
  head?: SearchImageByPicResponseBodyHead;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The information such as the system-selected category and result of subject recognition.
   */
  picInfo?: SearchImageByPicResponseBodyPicInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B3137727-7D6E-488C-BA21-0E034C38A879
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      auctions: 'Auctions',
      code: 'Code',
      head: 'Head',
      msg: 'Msg',
      picInfo: 'PicInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctions: { 'type': 'array', 'itemType': SearchImageByPicResponseBodyAuctions },
      code: 'number',
      head: SearchImageByPicResponseBodyHead,
      msg: 'string',
      picInfo: SearchImageByPicResponseBodyPicInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.auctions)) {
      $dara.Model.validateArray(this.auctions);
    }
    if(this.head && typeof (this.head as any).validate === 'function') {
      (this.head as any).validate();
    }
    if(this.picInfo && typeof (this.picInfo as any).validate === 'function') {
      (this.picInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchImageByPicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchImageByPicResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByTextRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  distinctProductId?: boolean;
  /**
   * @example
   * int_attr=1000 AND str_attr="value1"
   */
  filter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @example
   * 10
   */
  num?: number;
  /**
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      distinctProductId: 'DistinctProductId',
      filter: 'Filter',
      instanceName: 'InstanceName',
      num: 'Num',
      start: 'Start',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distinctProductId: 'boolean',
      filter: 'string',
      instanceName: 'string',
      num: 'number',
      start: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByTextResponseBody extends $dara.Model {
  accessDeniedDetail?: SearchImageByTextResponseBodyAccessDeniedDetail;
  auctions?: SearchImageByTextResponseBodyAuctions[];
  /**
   * @example
   * 0
   */
  code?: number;
  head?: SearchImageByTextResponseBodyHead;
  /**
   * @example
   * success
   */
  msg?: string;
  picInfo?: SearchImageByTextResponseBodyPicInfo;
  /**
   * @example
   * B3137727-7D6E-488C-BA21-0E034C38A879
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      auctions: 'Auctions',
      code: 'Code',
      head: 'Head',
      msg: 'Msg',
      picInfo: 'PicInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: SearchImageByTextResponseBodyAccessDeniedDetail,
      auctions: { 'type': 'array', 'itemType': SearchImageByTextResponseBodyAuctions },
      code: 'number',
      head: SearchImageByTextResponseBodyHead,
      msg: 'string',
      picInfo: SearchImageByTextResponseBodyPicInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(Array.isArray(this.auctions)) {
      $dara.Model.validateArray(this.auctions);
    }
    if(this.head && typeof (this.head as any).validate === 'function') {
      (this.head as any).validate();
    }
    if(this.picInfo && typeof (this.picInfo as any).validate === 'function') {
      (this.picInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByTextResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchImageByTextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchImageByTextResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageRequest extends $dara.Model {
  /**
   * @remarks
   * The user-defined content. The value can be up to 4,096 characters in length.
   * 
   * >  If you set this parameter, the response includes this parameter and its value. You can add text such as an image description.
   * 
   * @example
   * zidingyi
   */
  customContent?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The attribute, which is an integer. The attribute can be used to filter images when you search for images. If you set this parameter, the response includes this parameter and its value.
   * 
   * @example
   * 2
   */
  intAttr?: number;
  /**
   * @example
   * 20
   */
  intAttr2?: number;
  intAttr3?: number;
  intAttr4?: number;
  /**
   * @remarks
   * The name of the image. The name can be up to 512 characters in length.
   * 
   * > *   An image is uniquely identified by the values of the ProductId and PicName parameters.
   * >*   If you add an image whose product ID (ProductId) and image name (PicName) are the same as those of an existing image, the newly added image overwrites the existing image.
   * 
   * This parameter is required.
   * 
   * @example
   * namexxx.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The ID of the product. The ID can be up to 512 characters in length.
   * 
   * >  A product may have multiple images.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @remarks
   * The attribute, which is a string. The value can be up to 128 characters in length. The attribute can be used to filter images. If you set this parameter, the response includes this parameter and its value.
   * 
   * @example
   * ss
   */
  strAttr?: string;
  /**
   * @example
   * test
   */
  strAttr2?: string;
  strAttr3?: string;
  strAttr4?: string;
  static names(): { [key: string]: string } {
    return {
      customContent: 'CustomContent',
      instanceName: 'InstanceName',
      intAttr: 'IntAttr',
      intAttr2: 'IntAttr2',
      intAttr3: 'IntAttr3',
      intAttr4: 'IntAttr4',
      picName: 'PicName',
      productId: 'ProductId',
      strAttr: 'StrAttr',
      strAttr2: 'StrAttr2',
      strAttr3: 'StrAttr3',
      strAttr4: 'StrAttr4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customContent: 'string',
      instanceName: 'string',
      intAttr: 'number',
      intAttr2: 'number',
      intAttr3: 'number',
      intAttr4: 'number',
      picName: 'string',
      productId: 'string',
      strAttr: 'string',
      strAttr2: 'string',
      strAttr3: 'string',
      strAttr4: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * *   A value of 0 indicates that the operation is successful.
   * *   Values other than 0 indicate errors.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E0845DE6-52AF-4B50-9F15-51ED4044E6AB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateImageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("imagesearch", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Adds an image to an Image Search instance.
   * 
   * @remarks
   * You can call this operation to add an image to an Image Search instance.
   * > If you want to obtain more information about the service and technical support, click [Online Consulting](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or join the DingTalk group (ID 35035130).
   * ## QPS limits
   * By default, the concurrency limit for adding an image to instances whose image capacity specifications are 0.1 million images is 1. This means that the system can process up to one request of adding an image every second. By default, the concurrency limit for adding an image to instances of other image capacity specifications is 5. This means that the system can process up to five requests of adding an image every second.
   * 
   * @param request - AddImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImageResponse
   */
  async addImageWithOptions(request: AddImageRequest, runtime: $dara.RuntimeOptions): Promise<AddImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.customContent)) {
      body["CustomContent"] = request.customContent;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.intAttr)) {
      body["IntAttr"] = request.intAttr;
    }

    if (!$dara.isNull(request.intAttr2)) {
      body["IntAttr2"] = request.intAttr2;
    }

    if (!$dara.isNull(request.intAttr3)) {
      body["IntAttr3"] = request.intAttr3;
    }

    if (!$dara.isNull(request.intAttr4)) {
      body["IntAttr4"] = request.intAttr4;
    }

    if (!$dara.isNull(request.picContent)) {
      body["PicContent"] = request.picContent;
    }

    if (!$dara.isNull(request.picName)) {
      body["PicName"] = request.picName;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.strAttr)) {
      body["StrAttr"] = request.strAttr;
    }

    if (!$dara.isNull(request.strAttr2)) {
      body["StrAttr2"] = request.strAttr2;
    }

    if (!$dara.isNull(request.strAttr3)) {
      body["StrAttr3"] = request.strAttr3;
    }

    if (!$dara.isNull(request.strAttr4)) {
      body["StrAttr4"] = request.strAttr4;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddImage",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddImageResponse>(await this.callApi(params, req, runtime), new AddImageResponse({}));
    } else {
      return $dara.cast<AddImageResponse>(await this.execute(params, req, runtime), new AddImageResponse({}));
    }

  }

  /**
   * Adds an image to an Image Search instance.
   * 
   * @remarks
   * You can call this operation to add an image to an Image Search instance.
   * > If you want to obtain more information about the service and technical support, click [Online Consulting](https://www.aliyun.com/core/online-consult?from=aZgW6LJHr2) or join the DingTalk group (ID 35035130).
   * ## QPS limits
   * By default, the concurrency limit for adding an image to instances whose image capacity specifications are 0.1 million images is 1. This means that the system can process up to one request of adding an image every second. By default, the concurrency limit for adding an image to instances of other image capacity specifications is 5. This means that the system can process up to five requests of adding an image every second.
   * 
   * @param request - AddImageRequest
   * @returns AddImageResponse
   */
  async addImage(request: AddImageRequest): Promise<AddImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addImageWithOptions(request, runtime);
  }

  async addImageAdvance(request: AddImageAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<AddImageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ImageSearch",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let addImageReq = new AddImageRequest({ });
    OpenApiUtil.convert(request, addImageReq);
    if (!$dara.isNull(request.picContentObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.picContentObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      addImageReq.picContent = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let addImageResp = await this.addImageWithOptions(addImageReq, runtime);
    return addImageResp;
  }

  /**
   * 对比图片相似值
   * 
   * @param request - CompareSimilarByImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompareSimilarByImageResponse
   */
  async compareSimilarByImageWithOptions(request: CompareSimilarByImageRequest, runtime: $dara.RuntimeOptions): Promise<CompareSimilarByImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.primaryPicContent)) {
      body["PrimaryPicContent"] = request.primaryPicContent;
    }

    if (!$dara.isNull(request.secondaryPicContent)) {
      body["SecondaryPicContent"] = request.secondaryPicContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompareSimilarByImage",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CompareSimilarByImageResponse>(await this.callApi(params, req, runtime), new CompareSimilarByImageResponse({}));
    } else {
      return $dara.cast<CompareSimilarByImageResponse>(await this.execute(params, req, runtime), new CompareSimilarByImageResponse({}));
    }

  }

  /**
   * 对比图片相似值
   * 
   * @param request - CompareSimilarByImageRequest
   * @returns CompareSimilarByImageResponse
   */
  async compareSimilarByImage(request: CompareSimilarByImageRequest): Promise<CompareSimilarByImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.compareSimilarByImageWithOptions(request, runtime);
  }

  async compareSimilarByImageAdvance(request: CompareSimilarByImageAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<CompareSimilarByImageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ImageSearch",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let compareSimilarByImageReq = new CompareSimilarByImageRequest({ });
    OpenApiUtil.convert(request, compareSimilarByImageReq);
    if (!$dara.isNull(request.primaryPicContentObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.primaryPicContentObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      compareSimilarByImageReq.primaryPicContent = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    if (!$dara.isNull(request.secondaryPicContentObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.secondaryPicContentObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      compareSimilarByImageReq.secondaryPicContent = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let compareSimilarByImageResp = await this.compareSimilarByImageWithOptions(compareSimilarByImageReq, runtime);
    return compareSimilarByImageResp;
  }

  /**
   * This topic describes the syntax of the DeleteImage operation and provides examples of this operation. You can call this operation to delete images from an Image Search instance.
   * 
   * @remarks
   * This operation deletes images from an Image Search instance.
   * >  A success response is returned even if the specified image does not exist on the instance. Therefore, you cannot determine whether the image exists on the instance based on the response.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 20. In this case, the system can process at most 20 requests every second.
   * 
   * @param request - DeleteImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImageResponse
   */
  async deleteImageWithOptions(request: DeleteImageRequest, runtime: $dara.RuntimeOptions): Promise<DeleteImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.isDeleteByFilter)) {
      body["IsDeleteByFilter"] = request.isDeleteByFilter;
    }

    if (!$dara.isNull(request.picName)) {
      body["PicName"] = request.picName;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteImage",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteImageResponse>(await this.callApi(params, req, runtime), new DeleteImageResponse({}));
    } else {
      return $dara.cast<DeleteImageResponse>(await this.execute(params, req, runtime), new DeleteImageResponse({}));
    }

  }

  /**
   * This topic describes the syntax of the DeleteImage operation and provides examples of this operation. You can call this operation to delete images from an Image Search instance.
   * 
   * @remarks
   * This operation deletes images from an Image Search instance.
   * >  A success response is returned even if the specified image does not exist on the instance. Therefore, you cannot determine whether the image exists on the instance based on the response.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 20. In this case, the system can process at most 20 requests every second.
   * 
   * @param request - DeleteImageRequest
   * @returns DeleteImageResponse
   */
  async deleteImage(request: DeleteImageRequest): Promise<DeleteImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the Detail operation and provides examples of this operation. You can call this operation to query instance details.
   * 
   * @remarks
   * This operation queries instance details.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process only 1 request every second.
   * 
   * @param request - DetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetailResponse
   */
  async detailWithOptions(request: DetailRequest, runtime: $dara.RuntimeOptions): Promise<DetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Detail",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DetailResponse>(await this.callApi(params, req, runtime), new DetailResponse({}));
    } else {
      return $dara.cast<DetailResponse>(await this.execute(params, req, runtime), new DetailResponse({}));
    }

  }

  /**
   * This topic describes the syntax of the Detail operation and provides examples of this operation. You can call this operation to query instance details.
   * 
   * @remarks
   * This operation queries instance details.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process only 1 request every second.
   * 
   * @param request - DetailRequest
   * @returns DetailResponse
   */
  async detail(request: DetailRequest): Promise<DetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detailWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the DumpMeta operation and provides examples of this operation. You can call this operation to create a task for exporting metadata from an Image Search instance.
   * 
   * @remarks
   * This operation creates a task for exporting metadata from an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - DumpMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DumpMetaResponse
   */
  async dumpMetaWithOptions(request: DumpMetaRequest, runtime: $dara.RuntimeOptions): Promise<DumpMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DumpMeta",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DumpMetaResponse>(await this.callApi(params, req, runtime), new DumpMetaResponse({}));
    } else {
      return $dara.cast<DumpMetaResponse>(await this.execute(params, req, runtime), new DumpMetaResponse({}));
    }

  }

  /**
   * This topic describes the syntax of the DumpMeta operation and provides examples of this operation. You can call this operation to create a task for exporting metadata from an Image Search instance.
   * 
   * @remarks
   * This operation creates a task for exporting metadata from an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - DumpMetaRequest
   * @returns DumpMetaResponse
   */
  async dumpMeta(request: DumpMetaRequest): Promise<DumpMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dumpMetaWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the DumpMetaList operation and provides examples of this operation. You can call this operation to query tasks that are used for exporting metadata from an Image Search instance.
   * 
   * @remarks
   * This operation queries tasks that are used for exporting metadata from an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - DumpMetaListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DumpMetaListResponse
   */
  async dumpMetaListWithOptions(request: DumpMetaListRequest, runtime: $dara.RuntimeOptions): Promise<DumpMetaListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DumpMetaList",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DumpMetaListResponse>(await this.callApi(params, req, runtime), new DumpMetaListResponse({}));
    } else {
      return $dara.cast<DumpMetaListResponse>(await this.execute(params, req, runtime), new DumpMetaListResponse({}));
    }

  }

  /**
   * This topic describes the syntax of the DumpMetaList operation and provides examples of this operation. You can call this operation to query tasks that are used for exporting metadata from an Image Search instance.
   * 
   * @remarks
   * This operation queries tasks that are used for exporting metadata from an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - DumpMetaListRequest
   * @returns DumpMetaListResponse
   */
  async dumpMetaList(request: DumpMetaListRequest): Promise<DumpMetaListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dumpMetaListWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the IncreaseInstance operation and provides examples of this operation. You can call this operation to create a batch task on an Image Search instance.
   * 
   * @remarks
   * This operation creates a batch task on an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - IncreaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IncreaseInstanceResponse
   */
  async increaseInstanceWithOptions(request: IncreaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<IncreaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.callbackAddress)) {
      query["CallbackAddress"] = request.callbackAddress;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IncreaseInstance",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<IncreaseInstanceResponse>(await this.callApi(params, req, runtime), new IncreaseInstanceResponse({}));
    } else {
      return $dara.cast<IncreaseInstanceResponse>(await this.execute(params, req, runtime), new IncreaseInstanceResponse({}));
    }

  }

  /**
   * This topic describes the syntax of the IncreaseInstance operation and provides examples of this operation. You can call this operation to create a batch task on an Image Search instance.
   * 
   * @remarks
   * This operation creates a batch task on an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - IncreaseInstanceRequest
   * @returns IncreaseInstanceResponse
   */
  async increaseInstance(request: IncreaseInstanceRequest): Promise<IncreaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.increaseInstanceWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the IncreaseList operation and provides examples of this operation. You can call this operation to query batch tasks on an Image Search instance.
   * 
   * @remarks
   * This operation queries batch tasks on an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - IncreaseListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IncreaseListResponse
   */
  async increaseListWithOptions(request: IncreaseListRequest, runtime: $dara.RuntimeOptions): Promise<IncreaseListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IncreaseList",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<IncreaseListResponse>(await this.callApi(params, req, runtime), new IncreaseListResponse({}));
    } else {
      return $dara.cast<IncreaseListResponse>(await this.execute(params, req, runtime), new IncreaseListResponse({}));
    }

  }

  /**
   * This topic describes the syntax of the IncreaseList operation and provides examples of this operation. You can call this operation to query batch tasks on an Image Search instance.
   * 
   * @remarks
   * This operation queries batch tasks on an Image Search instance.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 1. In this case, the system can process at most 1 request every second.
   * 
   * @param request - IncreaseListRequest
   * @returns IncreaseListResponse
   */
  async increaseList(request: IncreaseListRequest): Promise<IncreaseListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.increaseListWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the SearchByName operation and provides examples of this operation. You can call this operation to search for images by image name on an Image Search instance.
   * 
   * @remarks
   * This operation searches for images by image name on an Image Search instance.
   * ## QPS limits
   * The maximum number of queries per second is displayed in the Image Search console. The upper limit is specified when you purchase the instance. You can set the upper limit to 5 QPS or 10 QPS.
   * 
   * @param request - SearchImageByNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchImageByNameResponse
   */
  async searchImageByNameWithOptions(request: SearchImageByNameRequest, runtime: $dara.RuntimeOptions): Promise<SearchImageByNameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.distinctProductId)) {
      body["DistinctProductId"] = request.distinctProductId;
    }

    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.num)) {
      body["Num"] = request.num;
    }

    if (!$dara.isNull(request.picName)) {
      body["PicName"] = request.picName;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.start)) {
      body["Start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchImageByName",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SearchImageByNameResponse>(await this.callApi(params, req, runtime), new SearchImageByNameResponse({}));
    } else {
      return $dara.cast<SearchImageByNameResponse>(await this.execute(params, req, runtime), new SearchImageByNameResponse({}));
    }

  }

  /**
   * This topic describes the syntax of the SearchByName operation and provides examples of this operation. You can call this operation to search for images by image name on an Image Search instance.
   * 
   * @remarks
   * This operation searches for images by image name on an Image Search instance.
   * ## QPS limits
   * The maximum number of queries per second is displayed in the Image Search console. The upper limit is specified when you purchase the instance. You can set the upper limit to 5 QPS or 10 QPS.
   * 
   * @param request - SearchImageByNameRequest
   * @returns SearchImageByNameResponse
   */
  async searchImageByName(request: SearchImageByNameRequest): Promise<SearchImageByNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchImageByNameWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the SearchByPic operation and provides examples of this operation. You can call this operation to search for images by image on an Image Search Instance.
   * 
   * @remarks
   * This operation searches for images by image name on an Image Search instance.
   * ## QPS limits
   * The maximum number of queries per second is displayed in the Image Search console. The upper limit is specified when you purchase the instance. You can set the upper limit to 5 QPS or 10 QPS.  
   * ## SDK release notes
   * The Image Search SDK has been upgraded to version 3.1.1, which supports multi-subject recognition and similarity scores. For more information, see [Image Search SDK for Java](/help/en/image-search/latest/version-v3-java-sdk).
   * 
   * @param request - SearchImageByPicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchImageByPicResponse
   */
  async searchImageByPicWithOptions(request: SearchImageByPicRequest, runtime: $dara.RuntimeOptions): Promise<SearchImageByPicResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.distinctProductId)) {
      body["DistinctProductId"] = request.distinctProductId;
    }

    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.num)) {
      body["Num"] = request.num;
    }

    if (!$dara.isNull(request.picContent)) {
      body["PicContent"] = request.picContent;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.start)) {
      body["Start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchImageByPic",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SearchImageByPicResponse>(await this.callApi(params, req, runtime), new SearchImageByPicResponse({}));
    } else {
      return $dara.cast<SearchImageByPicResponse>(await this.execute(params, req, runtime), new SearchImageByPicResponse({}));
    }

  }

  /**
   * This topic describes the syntax of the SearchByPic operation and provides examples of this operation. You can call this operation to search for images by image on an Image Search Instance.
   * 
   * @remarks
   * This operation searches for images by image name on an Image Search instance.
   * ## QPS limits
   * The maximum number of queries per second is displayed in the Image Search console. The upper limit is specified when you purchase the instance. You can set the upper limit to 5 QPS or 10 QPS.  
   * ## SDK release notes
   * The Image Search SDK has been upgraded to version 3.1.1, which supports multi-subject recognition and similarity scores. For more information, see [Image Search SDK for Java](/help/en/image-search/latest/version-v3-java-sdk).
   * 
   * @param request - SearchImageByPicRequest
   * @returns SearchImageByPicResponse
   */
  async searchImageByPic(request: SearchImageByPicRequest): Promise<SearchImageByPicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchImageByPicWithOptions(request, runtime);
  }

  async searchImageByPicAdvance(request: SearchImageByPicAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<SearchImageByPicResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ImageSearch",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let searchImageByPicReq = new SearchImageByPicRequest({ });
    OpenApiUtil.convert(request, searchImageByPicReq);
    if (!$dara.isNull(request.picContentObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.picContentObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      searchImageByPicReq.picContent = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let searchImageByPicResp = await this.searchImageByPicWithOptions(searchImageByPicReq, runtime);
    return searchImageByPicResp;
  }

  /**
   * SearchImageByText
   * 
   * @param request - SearchImageByTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchImageByTextResponse
   */
  async searchImageByTextWithOptions(request: SearchImageByTextRequest, runtime: $dara.RuntimeOptions): Promise<SearchImageByTextResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.distinctProductId)) {
      body["DistinctProductId"] = request.distinctProductId;
    }

    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.num)) {
      body["Num"] = request.num;
    }

    if (!$dara.isNull(request.start)) {
      body["Start"] = request.start;
    }

    if (!$dara.isNull(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchImageByText",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SearchImageByTextResponse>(await this.callApi(params, req, runtime), new SearchImageByTextResponse({}));
    } else {
      return $dara.cast<SearchImageByTextResponse>(await this.execute(params, req, runtime), new SearchImageByTextResponse({}));
    }

  }

  /**
   * SearchImageByText
   * 
   * @param request - SearchImageByTextRequest
   * @returns SearchImageByTextResponse
   */
  async searchImageByText(request: SearchImageByTextRequest): Promise<SearchImageByTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchImageByTextWithOptions(request, runtime);
  }

  /**
   * This topic describes the syntax of the UpdateImage operation and provides examples of this operation. You can call this operation to update image information on an Image Search instance.
   * 
   * @remarks
   * This operation updates image information on an Image Search instance.
   * > *   Limits are imposed on the instance creation time.
   * >*   This operation is supported by instances that are created in the Singapore (Singapore) region after December 2021. This operation is not supported in other regions.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 20. In this case, the system can process at most 20 requests every second.
   * 
   * @param request - UpdateImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateImageResponse
   */
  async updateImageWithOptions(request: UpdateImageRequest, runtime: $dara.RuntimeOptions): Promise<UpdateImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.intAttr3)) {
      query["IntAttr3"] = request.intAttr3;
    }

    if (!$dara.isNull(request.intAttr4)) {
      query["IntAttr4"] = request.intAttr4;
    }

    if (!$dara.isNull(request.strAttr3)) {
      query["StrAttr3"] = request.strAttr3;
    }

    if (!$dara.isNull(request.strAttr4)) {
      query["StrAttr4"] = request.strAttr4;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customContent)) {
      body["CustomContent"] = request.customContent;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.intAttr)) {
      body["IntAttr"] = request.intAttr;
    }

    if (!$dara.isNull(request.intAttr2)) {
      body["IntAttr2"] = request.intAttr2;
    }

    if (!$dara.isNull(request.picName)) {
      body["PicName"] = request.picName;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.strAttr)) {
      body["StrAttr"] = request.strAttr;
    }

    if (!$dara.isNull(request.strAttr2)) {
      body["StrAttr2"] = request.strAttr2;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateImage",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateImageResponse>(await this.callApi(params, req, runtime), new UpdateImageResponse({}));
    } else {
      return $dara.cast<UpdateImageResponse>(await this.execute(params, req, runtime), new UpdateImageResponse({}));
    }

  }

  /**
   * This topic describes the syntax of the UpdateImage operation and provides examples of this operation. You can call this operation to update image information on an Image Search instance.
   * 
   * @remarks
   * This operation updates image information on an Image Search instance.
   * > *   Limits are imposed on the instance creation time.
   * >*   This operation is supported by instances that are created in the Singapore (Singapore) region after December 2021. This operation is not supported in other regions.
   * ## QPS limits
   * By default, the maximum number of queries supported by this operation is 20. In this case, the system can process at most 20 requests every second.
   * 
   * @param request - UpdateImageRequest
   * @returns UpdateImageResponse
   */
  async updateImage(request: UpdateImageRequest): Promise<UpdateImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateImageWithOptions(request, runtime);
  }

}
