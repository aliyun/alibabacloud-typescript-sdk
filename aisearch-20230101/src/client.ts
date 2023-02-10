// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class Box extends $tea.Model {
  height?: number;
  left?: number;
  top?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageRequest extends $tea.Model {
  boxes?: Box[];
  customContent?: string;
  detectLimit?: number;
  intAttr?: number;
  picContent?: string;
  picName?: string;
  picUrl?: string;
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      customContent: 'CustomContent',
      detectLimit: 'DetectLimit',
      intAttr: 'IntAttr',
      picContent: 'PicContent',
      picName: 'PicName',
      picUrl: 'PicUrl',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': Box },
      customContent: 'string',
      detectLimit: 'number',
      intAttr: 'number',
      picContent: 'string',
      picName: 'string',
      picUrl: 'string',
      strAttr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageAdvanceRequest extends $tea.Model {
  boxes?: Box[];
  customContent?: string;
  detectLimit?: number;
  intAttr?: number;
  picContentObject?: Readable;
  picName?: string;
  picUrl?: string;
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      customContent: 'CustomContent',
      detectLimit: 'DetectLimit',
      intAttr: 'IntAttr',
      picContentObject: 'PicContent',
      picName: 'PicName',
      picUrl: 'PicUrl',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': Box },
      customContent: 'string',
      detectLimit: 'number',
      intAttr: 'number',
      picContentObject: 'Readable',
      picName: 'string',
      picUrl: 'string',
      strAttr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageShrinkRequest extends $tea.Model {
  boxesShrink?: string;
  customContent?: string;
  detectLimit?: number;
  intAttr?: number;
  picContent?: string;
  picName?: string;
  picUrl?: string;
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      boxesShrink: 'Boxes',
      customContent: 'CustomContent',
      detectLimit: 'DetectLimit',
      intAttr: 'IntAttr',
      picContent: 'PicContent',
      picName: 'PicName',
      picUrl: 'PicUrl',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxesShrink: 'string',
      customContent: 'string',
      detectLimit: 'number',
      intAttr: 'number',
      picContent: 'string',
      picName: 'string',
      picUrl: 'string',
      strAttr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddImageResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckOssIncrementMetaExistRequest extends $tea.Model {
  bucketName?: string;
  key?: string;
  ossPath?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      key: 'Key',
      ossPath: 'OssPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      key: 'string',
      ossPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckOssIncrementMetaExistResponseBody extends $tea.Model {
  data?: CheckOssIncrementMetaExistResponseBodyData;
  requestId?: string;
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
      data: CheckOssIncrementMetaExistResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckOssIncrementMetaExistResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckOssIncrementMetaExistResponseBody;
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
      body: CheckOssIncrementMetaExistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTasksRequest extends $tea.Model {
  bucketName?: string;
  callbackAddress?: string;
  ossPath?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      callbackAddress: 'CallbackAddress',
      ossPath: 'OssPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      callbackAddress: 'string',
      ossPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTasksResponseBody extends $tea.Model {
  data?: CreateBatchTasksResponseBodyData;
  requestId?: string;
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
      data: CreateBatchTasksResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBatchTasksResponseBody;
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
      body: CreateBatchTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDumpMetaResponseBody extends $tea.Model {
  data?: CreateDumpMetaResponseBodyData;
  requestId?: string;
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
      data: CreateDumpMetaResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDumpMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDumpMetaResponseBody;
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
      body: CreateDumpMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageRequest extends $tea.Model {
  picName?: string;
  static names(): { [key: string]: string } {
    return {
      picName: 'PicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponseBody extends $tea.Model {
  data?: DeleteImageResponseBodyData;
  requestId?: string;
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
      data: DeleteImageResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteImageResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageRequest extends $tea.Model {
  picName?: string;
  static names(): { [key: string]: string } {
    return {
      picName: 'PicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBody extends $tea.Model {
  data?: GetImageResponseBodyData;
  requestId?: string;
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
      data: GetImageResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetImageResponseBody;
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
      body: GetImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  data?: GetInstanceResponseBodyData;
  requestId?: string;
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
      data: GetInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceResponseBody;
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
      body: GetInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchTasksRequest extends $tea.Model {
  bucketName?: string;
  id?: number;
  ossPath?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      id: 'Id',
      ossPath: 'OssPath',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      id: 'number',
      ossPath: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchTasksResponseBody extends $tea.Model {
  data?: ListBatchTasksResponseBodyData;
  requestId?: string;
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
      data: ListBatchTasksResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListBatchTasksResponseBody;
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
      body: ListBatchTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDumpMetaRequest extends $tea.Model {
  id?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDumpMetaResponseBody extends $tea.Model {
  data?: ListDumpMetaResponseBodyData;
  requestId?: string;
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
      data: ListDumpMetaResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDumpMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDumpMetaResponseBody;
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
      body: ListDumpMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRequest extends $tea.Model {
  instanceName?: string;
  pageNumber?: number;
  pageSize?: number;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $tea.Model {
  data?: ListInstanceResponseBodyData;
  requestId?: string;
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
      data: ListInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstanceResponseBody;
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
      body: ListInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssBucketAndPathRequest extends $tea.Model {
  bucketName?: string;
  ossPath?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      ossPath: 'OssPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      ossPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssBucketAndPathResponseBody extends $tea.Model {
  data?: ListOssBucketAndPathResponseBodyData;
  requestId?: string;
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
      data: ListOssBucketAndPathResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssBucketAndPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOssBucketAndPathResponseBody;
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
      body: ListOssBucketAndPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetInstanceResponseBody extends $tea.Model {
  data?: ResetInstanceResponseBodyData;
  requestId?: string;
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
      data: ResetInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetInstanceResponseBody;
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
      body: ResetInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameRequest extends $tea.Model {
  filter?: string;
  num?: number;
  picName?: string;
  productId?: string;
  start?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      num: 'Num',
      picName: 'PicName',
      productId: 'ProductId',
      start: 'Start',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      num: 'number',
      picName: 'string',
      productId: 'string',
      start: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBody extends $tea.Model {
  data?: SearchImageByNameResponseBodyData;
  requestId?: string;
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
      data: SearchImageByNameResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchImageByNameResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicRequest extends $tea.Model {
  box?: Box;
  detectLimit?: number;
  filter?: string;
  num?: number;
  picContent?: string;
  picUrl?: string;
  start?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      box: 'Box',
      detectLimit: 'DetectLimit',
      filter: 'Filter',
      num: 'Num',
      picContent: 'PicContent',
      picUrl: 'PicUrl',
      start: 'Start',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      box: Box,
      detectLimit: 'number',
      filter: 'string',
      num: 'number',
      picContent: 'string',
      picUrl: 'string',
      start: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicAdvanceRequest extends $tea.Model {
  box?: Box;
  detectLimit?: number;
  filter?: string;
  num?: number;
  picContentObject?: Readable;
  picUrl?: string;
  start?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      box: 'Box',
      detectLimit: 'DetectLimit',
      filter: 'Filter',
      num: 'Num',
      picContentObject: 'PicContent',
      picUrl: 'PicUrl',
      start: 'Start',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      box: Box,
      detectLimit: 'number',
      filter: 'string',
      num: 'number',
      picContentObject: 'Readable',
      picUrl: 'string',
      start: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicShrinkRequest extends $tea.Model {
  boxShrink?: string;
  detectLimit?: number;
  filter?: string;
  num?: number;
  picContent?: string;
  picUrl?: string;
  start?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      boxShrink: 'Box',
      detectLimit: 'DetectLimit',
      filter: 'Filter',
      num: 'Num',
      picContent: 'PicContent',
      picUrl: 'PicUrl',
      start: 'Start',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxShrink: 'string',
      detectLimit: 'number',
      filter: 'string',
      num: 'number',
      picContent: 'string',
      picUrl: 'string',
      start: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBody extends $tea.Model {
  data?: SearchImageByPicResponseBodyData;
  requestId?: string;
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
      data: SearchImageByPicResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchImageByPicResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBatchTasksResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBatchTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopBatchTasksResponseBody;
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
      body: StopBatchTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDumpMetaResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDumpMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopDumpMetaResponseBody;
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
      body: StopDumpMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageRequest extends $tea.Model {
  customContent?: string;
  intAttr?: number;
  picName?: string;
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      customContent: 'CustomContent',
      intAttr: 'IntAttr',
      picName: 'PicName',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customContent: 'string',
      intAttr: 'number',
      picName: 'string',
      strAttr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateImageResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckOssIncrementMetaExistResponseBodyData extends $tea.Model {
  exist?: boolean;
  static names(): { [key: string]: string } {
    return {
      exist: 'Exist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exist: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTasksResponseBodyData extends $tea.Model {
  id?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDumpMetaResponseBodyData extends $tea.Model {
  id?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponseBodyData extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyDataBoxes extends $tea.Model {
  bbox?: number[];
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      bbox: 'Bbox',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bbox: { 'type': 'array', 'itemType': 'number' },
      confidence: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyData extends $tea.Model {
  boxes?: GetImageResponseBodyDataBoxes[];
  customContent?: string;
  intAttr?: number;
  picName?: string;
  productId?: string;
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      customContent: 'CustomContent',
      intAttr: 'IntAttr',
      picName: 'PicName',
      productId: 'ProductId',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': GetImageResponseBodyDataBoxes },
      customContent: 'string',
      intAttr: 'number',
      picName: 'string',
      productId: 'string',
      strAttr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyData extends $tea.Model {
  capacity?: number;
  instanceId?: string;
  instanceName?: string;
  qps?: string;
  region?: string;
  serviceType?: string;
  status?: string;
  totalCount?: number;
  utcCreateTime?: number;
  utcExpireTime?: number;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      qps: 'Qps',
      region: 'Region',
      serviceType: 'ServiceType',
      status: 'Status',
      totalCount: 'TotalCount',
      utcCreateTime: 'UtcCreateTime',
      utcExpireTime: 'UtcExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      instanceId: 'string',
      instanceName: 'string',
      qps: 'string',
      region: 'string',
      serviceType: 'string',
      status: 'string',
      totalCount: 'number',
      utcCreateTime: 'number',
      utcExpireTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchTasksResponseBodyDataIncrements extends $tea.Model {
  bucketName?: string;
  callbackAddress?: string;
  callbackTaskStatus?: string;
  errorUrl?: string;
  id?: number;
  msg?: string;
  ossPath?: string;
  status?: string;
  utcCreateTime?: string;
  utcUpdateTime?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      callbackAddress: 'CallbackAddress',
      callbackTaskStatus: 'CallbackTaskStatus',
      errorUrl: 'ErrorUrl',
      id: 'Id',
      msg: 'Msg',
      ossPath: 'OssPath',
      status: 'Status',
      utcCreateTime: 'UtcCreateTime',
      utcUpdateTime: 'UtcUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      callbackAddress: 'string',
      callbackTaskStatus: 'string',
      errorUrl: 'string',
      id: 'number',
      msg: 'string',
      ossPath: 'string',
      status: 'string',
      utcCreateTime: 'string',
      utcUpdateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchTasksResponseBodyData extends $tea.Model {
  increments?: ListBatchTasksResponseBodyDataIncrements[];
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      increments: 'Increments',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      increments: { 'type': 'array', 'itemType': ListBatchTasksResponseBodyDataIncrements },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDumpMetaResponseBodyDataDumpMetaList extends $tea.Model {
  id?: number;
  metaUrl?: string;
  msg?: string;
  status?: string;
  utcCreateTime?: string;
  utcUpdateTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      metaUrl: 'MetaUrl',
      msg: 'Msg',
      status: 'Status',
      utcCreateTime: 'UtcCreateTime',
      utcUpdateTime: 'UtcUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      metaUrl: 'string',
      msg: 'string',
      status: 'string',
      utcCreateTime: 'string',
      utcUpdateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDumpMetaResponseBodyData extends $tea.Model {
  dumpMetaList?: ListDumpMetaResponseBodyDataDumpMetaList[];
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dumpMetaList: 'DumpMetaList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dumpMetaList: { 'type': 'array', 'itemType': ListDumpMetaResponseBodyDataDumpMetaList },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyDataInstances extends $tea.Model {
  capacity?: number;
  instanceId?: string;
  instanceName?: string;
  qps?: string;
  region?: string;
  serviceType?: string;
  status?: string;
  utcCreateTime?: number;
  utcExpireTime?: number;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      qps: 'Qps',
      region: 'Region',
      serviceType: 'ServiceType',
      status: 'Status',
      utcCreateTime: 'UtcCreateTime',
      utcExpireTime: 'UtcExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      instanceId: 'string',
      instanceName: 'string',
      qps: 'string',
      region: 'string',
      serviceType: 'string',
      status: 'string',
      utcCreateTime: 'number',
      utcExpireTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyData extends $tea.Model {
  instances?: ListInstanceResponseBodyDataInstances[];
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstanceResponseBodyDataInstances },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssBucketAndPathResponseBodyData extends $tea.Model {
  bucketList?: string[];
  pathList?: string[];
  static names(): { [key: string]: string } {
    return {
      bucketList: 'BucketList',
      pathList: 'PathList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketList: { 'type': 'array', 'itemType': 'string' },
      pathList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetInstanceResponseBodyData extends $tea.Model {
  capacity?: number;
  instanceId?: string;
  instanceName?: string;
  serviceType?: string;
  status?: string;
  utcCreateTime?: number;
  utcExpireTime?: number;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      serviceType: 'ServiceType',
      status: 'Status',
      utcCreateTime: 'UtcCreateTime',
      utcExpireTime: 'UtcExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      instanceId: 'string',
      instanceName: 'string',
      serviceType: 'string',
      status: 'string',
      utcCreateTime: 'number',
      utcExpireTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyDataPicInfos extends $tea.Model {
  bbox?: number[];
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      bbox: 'Bbox',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bbox: { 'type': 'array', 'itemType': 'number' },
      confidence: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyDataPicListOtherBoxes extends $tea.Model {
  bbox?: number[];
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      bbox: 'Bbox',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bbox: { 'type': 'array', 'itemType': 'number' },
      confidence: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyDataPicListSimilarBoxes extends $tea.Model {
  bbox?: number[];
  confidence?: number;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      bbox: 'Bbox',
      confidence: 'Confidence',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bbox: { 'type': 'array', 'itemType': 'number' },
      confidence: 'number',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyDataPicList extends $tea.Model {
  customContent?: string;
  intAttr?: number;
  otherBoxes?: SearchImageByNameResponseBodyDataPicListOtherBoxes[];
  picName?: string;
  productId?: string;
  score?: number;
  similarBoxes?: SearchImageByNameResponseBodyDataPicListSimilarBoxes[];
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      customContent: 'CustomContent',
      intAttr: 'IntAttr',
      otherBoxes: 'OtherBoxes',
      picName: 'PicName',
      productId: 'ProductId',
      score: 'Score',
      similarBoxes: 'SimilarBoxes',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customContent: 'string',
      intAttr: 'number',
      otherBoxes: { 'type': 'array', 'itemType': SearchImageByNameResponseBodyDataPicListOtherBoxes },
      picName: 'string',
      productId: 'string',
      score: 'number',
      similarBoxes: { 'type': 'array', 'itemType': SearchImageByNameResponseBodyDataPicListSimilarBoxes },
      strAttr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyData extends $tea.Model {
  picInfos?: SearchImageByNameResponseBodyDataPicInfos[];
  picList?: SearchImageByNameResponseBodyDataPicList[];
  static names(): { [key: string]: string } {
    return {
      picInfos: 'PicInfos',
      picList: 'PicList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picInfos: { 'type': 'array', 'itemType': SearchImageByNameResponseBodyDataPicInfos },
      picList: { 'type': 'array', 'itemType': SearchImageByNameResponseBodyDataPicList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyDataPicInfos extends $tea.Model {
  bbox?: number[];
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      bbox: 'Bbox',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bbox: { 'type': 'array', 'itemType': 'number' },
      confidence: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyDataPicListOtherBoxes extends $tea.Model {
  bbox?: number[];
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      bbox: 'Bbox',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bbox: { 'type': 'array', 'itemType': 'number' },
      confidence: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyDataPicListSimilarBoxes extends $tea.Model {
  bbox?: number[];
  confidence?: number;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      bbox: 'Bbox',
      confidence: 'Confidence',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bbox: { 'type': 'array', 'itemType': 'number' },
      confidence: 'number',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyDataPicList extends $tea.Model {
  customContent?: string;
  intAttr?: number;
  otherBoxes?: SearchImageByPicResponseBodyDataPicListOtherBoxes[];
  picName?: string;
  productId?: string;
  score?: number;
  similarBoxes?: SearchImageByPicResponseBodyDataPicListSimilarBoxes[];
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      customContent: 'CustomContent',
      intAttr: 'IntAttr',
      otherBoxes: 'OtherBoxes',
      picName: 'PicName',
      productId: 'ProductId',
      score: 'Score',
      similarBoxes: 'SimilarBoxes',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customContent: 'string',
      intAttr: 'number',
      otherBoxes: { 'type': 'array', 'itemType': SearchImageByPicResponseBodyDataPicListOtherBoxes },
      picName: 'string',
      productId: 'string',
      score: 'number',
      similarBoxes: { 'type': 'array', 'itemType': SearchImageByPicResponseBodyDataPicListSimilarBoxes },
      strAttr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyData extends $tea.Model {
  picInfos?: SearchImageByPicResponseBodyDataPicInfos[];
  picList?: SearchImageByPicResponseBodyDataPicList[];
  static names(): { [key: string]: string } {
    return {
      picInfos: 'PicInfos',
      picList: 'PicList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picInfos: { 'type': 'array', 'itemType': SearchImageByPicResponseBodyDataPicInfos },
      picList: { 'type': 'array', 'itemType': SearchImageByPicResponseBodyDataPicList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aisearch", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async addImageWithOptions(InstanceName: string, ProductId: string, tmpReq: AddImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddImageResponse> {
    Util.validateModel(tmpReq);
    let request = new AddImageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.boxes)) {
      request.boxesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.boxes, "Boxes", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customContent)) {
      query["CustomContent"] = request.customContent;
    }

    if (!Util.isUnset(request.detectLimit)) {
      query["DetectLimit"] = request.detectLimit;
    }

    if (!Util.isUnset(request.intAttr)) {
      query["IntAttr"] = request.intAttr;
    }

    if (!Util.isUnset(request.picContent)) {
      query["PicContent"] = request.picContent;
    }

    if (!Util.isUnset(request.picName)) {
      query["PicName"] = request.picName;
    }

    if (!Util.isUnset(request.picUrl)) {
      query["PicUrl"] = request.picUrl;
    }

    if (!Util.isUnset(request.strAttr)) {
      query["StrAttr"] = request.strAttr;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.boxesShrink)) {
      body["Boxes"] = request.boxesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddImage",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/instance/${OpenApiUtil.getEncodeParam(InstanceName)}/entity/${OpenApiUtil.getEncodeParam(ProductId)}/image`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddImageResponse>(await this.callApi(params, req, runtime), new AddImageResponse({}));
  }

  async addImage(InstanceName: string, ProductId: string, request: AddImageRequest): Promise<AddImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addImageWithOptions(InstanceName, ProductId, request, headers, runtime);
  }

  async addImageAdvance(InstanceName: string, ProductId: string, request: AddImageAdvanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddImageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
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
      product: "aisearch",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let addImageReq = new AddImageRequest({ });
    OpenApiUtil.convert(request, addImageReq);
    if (!Util.isUnset(request.picContentObject)) {
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

    let addImageResp = await this.addImageWithOptions(InstanceName, ProductId, addImageReq, headers, runtime);
    return addImageResp;
  }

  async checkOssIncrementMetaExistWithOptions(request: CheckOssIncrementMetaExistRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckOssIncrementMetaExistResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.ossPath)) {
      query["OssPath"] = request.ossPath;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckOssIncrementMetaExist",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/oss/check-increment-metafile`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CheckOssIncrementMetaExistResponse>(await this.callApi(params, req, runtime), new CheckOssIncrementMetaExistResponse({}));
  }

  async checkOssIncrementMetaExist(request: CheckOssIncrementMetaExistRequest): Promise<CheckOssIncrementMetaExistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkOssIncrementMetaExistWithOptions(request, headers, runtime);
  }

  async createBatchTasksWithOptions(InstanceName: string, request: CreateBatchTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateBatchTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.callbackAddress)) {
      query["CallbackAddress"] = request.callbackAddress;
    }

    if (!Util.isUnset(request.ossPath)) {
      query["OssPath"] = request.ossPath;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBatchTasks",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/instance/${OpenApiUtil.getEncodeParam(InstanceName)}/batch-task`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateBatchTasksResponse>(await this.callApi(params, req, runtime), new CreateBatchTasksResponse({}));
  }

  async createBatchTasks(InstanceName: string, request: CreateBatchTasksRequest): Promise<CreateBatchTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createBatchTasksWithOptions(InstanceName, request, headers, runtime);
  }

  async createDumpMetaWithOptions(InstanceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDumpMetaResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreateDumpMeta",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/instance/${OpenApiUtil.getEncodeParam(InstanceName)}/dump-meta`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDumpMetaResponse>(await this.callApi(params, req, runtime), new CreateDumpMetaResponse({}));
  }

  async createDumpMeta(InstanceName: string): Promise<CreateDumpMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDumpMetaWithOptions(InstanceName, headers, runtime);
  }

  async deleteImageWithOptions(InstanceName: string, ProductId: string, request: DeleteImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteImageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.picName)) {
      query["PicName"] = request.picName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteImage",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/instance/${OpenApiUtil.getEncodeParam(InstanceName)}/entity/${OpenApiUtil.getEncodeParam(ProductId)}/image`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteImageResponse>(await this.callApi(params, req, runtime), new DeleteImageResponse({}));
  }

  async deleteImage(InstanceName: string, ProductId: string, request: DeleteImageRequest): Promise<DeleteImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteImageWithOptions(InstanceName, ProductId, request, headers, runtime);
  }

  async getImageWithOptions(InstanceName: string, ProductId: string, request: GetImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetImageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.picName)) {
      query["PicName"] = request.picName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetImage",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/instance/${OpenApiUtil.getEncodeParam(InstanceName)}/entity/${OpenApiUtil.getEncodeParam(ProductId)}/image`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetImageResponse>(await this.callApi(params, req, runtime), new GetImageResponse({}));
  }

  async getImage(InstanceName: string, ProductId: string, request: GetImageRequest): Promise<GetImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getImageWithOptions(InstanceName, ProductId, request, headers, runtime);
  }

  async getInstanceWithOptions(InstanceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/instance/${OpenApiUtil.getEncodeParam(InstanceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  async getInstance(InstanceName: string): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(InstanceName, headers, runtime);
  }

  async listBatchTasksWithOptions(InstanceName: string, request: ListBatchTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListBatchTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ossPath)) {
      query["OssPath"] = request.ossPath;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBatchTasks",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/instance/${OpenApiUtil.getEncodeParam(InstanceName)}/batch-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListBatchTasksResponse>(await this.callApi(params, req, runtime), new ListBatchTasksResponse({}));
  }

  async listBatchTasks(InstanceName: string, request: ListBatchTasksRequest): Promise<ListBatchTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBatchTasksWithOptions(InstanceName, request, headers, runtime);
  }

  async listDumpMetaWithOptions(InstanceName: string, request: ListDumpMetaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDumpMetaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDumpMeta",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/instance/${OpenApiUtil.getEncodeParam(InstanceName)}/dump-metas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDumpMetaResponse>(await this.callApi(params, req, runtime), new ListDumpMetaResponse({}));
  }

  async listDumpMeta(InstanceName: string, request: ListDumpMetaRequest): Promise<ListDumpMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDumpMetaWithOptions(InstanceName, request, headers, runtime);
  }

  async listInstanceWithOptions(request: ListInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstance",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceResponse>(await this.callApi(params, req, runtime), new ListInstanceResponse({}));
  }

  async listInstance(request: ListInstanceRequest): Promise<ListInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceWithOptions(request, headers, runtime);
  }

  async listOssBucketAndPathWithOptions(request: ListOssBucketAndPathRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOssBucketAndPathResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.ossPath)) {
      query["OssPath"] = request.ossPath;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOssBucketAndPath",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/oss/buckets-and-path`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListOssBucketAndPathResponse>(await this.callApi(params, req, runtime), new ListOssBucketAndPathResponse({}));
  }

  async listOssBucketAndPath(request: ListOssBucketAndPathRequest): Promise<ListOssBucketAndPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOssBucketAndPathWithOptions(request, headers, runtime);
  }

  async resetInstanceWithOptions(InstanceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResetInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ResetInstance",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/instance/${OpenApiUtil.getEncodeParam(InstanceName)}/reset`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ResetInstanceResponse>(await this.callApi(params, req, runtime), new ResetInstanceResponse({}));
  }

  async resetInstance(InstanceName: string): Promise<ResetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetInstanceWithOptions(InstanceName, headers, runtime);
  }

  async searchImageByNameWithOptions(InstanceName: string, request: SearchImageByNameRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchImageByNameResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.picName)) {
      query["PicName"] = request.picName;
    }

    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    if (!Util.isUnset(request.text)) {
      query["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchImageByName",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/instance/${OpenApiUtil.getEncodeParam(InstanceName)}/search-by-name`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchImageByNameResponse>(await this.callApi(params, req, runtime), new SearchImageByNameResponse({}));
  }

  async searchImageByName(InstanceName: string, request: SearchImageByNameRequest): Promise<SearchImageByNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchImageByNameWithOptions(InstanceName, request, headers, runtime);
  }

  async searchImageByPicWithOptions(InstanceName: string, tmpReq: SearchImageByPicRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchImageByPicResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchImageByPicShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.box)) {
      request.boxShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.box, "Box", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.boxShrink)) {
      query["Box"] = request.boxShrink;
    }

    if (!Util.isUnset(request.detectLimit)) {
      query["DetectLimit"] = request.detectLimit;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.picContent)) {
      query["PicContent"] = request.picContent;
    }

    if (!Util.isUnset(request.picUrl)) {
      query["PicUrl"] = request.picUrl;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    if (!Util.isUnset(request.text)) {
      query["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchImageByPic",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/instance/${OpenApiUtil.getEncodeParam(InstanceName)}/search-by-pic`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchImageByPicResponse>(await this.callApi(params, req, runtime), new SearchImageByPicResponse({}));
  }

  async searchImageByPic(InstanceName: string, request: SearchImageByPicRequest): Promise<SearchImageByPicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchImageByPicWithOptions(InstanceName, request, headers, runtime);
  }

  async searchImageByPicAdvance(InstanceName: string, request: SearchImageByPicAdvanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchImageByPicResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
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
      product: "aisearch",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let searchImageByPicReq = new SearchImageByPicRequest({ });
    OpenApiUtil.convert(request, searchImageByPicReq);
    if (!Util.isUnset(request.picContentObject)) {
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

    let searchImageByPicResp = await this.searchImageByPicWithOptions(InstanceName, searchImageByPicReq, headers, runtime);
    return searchImageByPicResp;
  }

  async stopBatchTasksWithOptions(InstanceName: string, Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopBatchTasksResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopBatchTasks",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/instance/${OpenApiUtil.getEncodeParam(InstanceName)}/batch-task/${OpenApiUtil.getEncodeParam(Id)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopBatchTasksResponse>(await this.callApi(params, req, runtime), new StopBatchTasksResponse({}));
  }

  async stopBatchTasks(InstanceName: string, Id: string): Promise<StopBatchTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopBatchTasksWithOptions(InstanceName, Id, headers, runtime);
  }

  async stopDumpMetaWithOptions(InstanceName: string, Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopDumpMetaResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopDumpMeta",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/instance/${OpenApiUtil.getEncodeParam(InstanceName)}/dump-meta/${OpenApiUtil.getEncodeParam(Id)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopDumpMetaResponse>(await this.callApi(params, req, runtime), new StopDumpMetaResponse({}));
  }

  async stopDumpMeta(InstanceName: string, Id: string): Promise<StopDumpMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopDumpMetaWithOptions(InstanceName, Id, headers, runtime);
  }

  async updateImageWithOptions(InstanceName: string, ProductId: string, request: UpdateImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateImageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customContent)) {
      query["CustomContent"] = request.customContent;
    }

    if (!Util.isUnset(request.intAttr)) {
      query["IntAttr"] = request.intAttr;
    }

    if (!Util.isUnset(request.picName)) {
      query["PicName"] = request.picName;
    }

    if (!Util.isUnset(request.strAttr)) {
      query["StrAttr"] = request.strAttr;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateImage",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: `/api/instance/${OpenApiUtil.getEncodeParam(InstanceName)}/entity/${OpenApiUtil.getEncodeParam(ProductId)}/image`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateImageResponse>(await this.callApi(params, req, runtime), new UpdateImageResponse({}));
  }

  async updateImage(InstanceName: string, ProductId: string, request: UpdateImageRequest): Promise<UpdateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateImageWithOptions(InstanceName, ProductId, request, headers, runtime);
  }

}
