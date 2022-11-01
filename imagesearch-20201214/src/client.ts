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

export class AddImageRequest extends $tea.Model {
  categoryId?: number;
  crop?: boolean;
  customContent?: string;
  instanceName?: string;
  intAttr?: number;
  picContent?: string;
  picName?: string;
  productId?: string;
  region?: string;
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      crop: 'Crop',
      customContent: 'CustomContent',
      instanceName: 'InstanceName',
      intAttr: 'IntAttr',
      picContent: 'PicContent',
      picName: 'PicName',
      productId: 'ProductId',
      region: 'Region',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      crop: 'boolean',
      customContent: 'string',
      instanceName: 'string',
      intAttr: 'number',
      picContent: 'string',
      picName: 'string',
      productId: 'string',
      region: 'string',
      strAttr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageAdvanceRequest extends $tea.Model {
  categoryId?: number;
  crop?: boolean;
  customContent?: string;
  instanceName?: string;
  intAttr?: number;
  picContentObject?: Readable;
  picName?: string;
  productId?: string;
  region?: string;
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      crop: 'Crop',
      customContent: 'CustomContent',
      instanceName: 'InstanceName',
      intAttr: 'IntAttr',
      picContentObject: 'PicContent',
      picName: 'PicName',
      productId: 'ProductId',
      region: 'Region',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      crop: 'boolean',
      customContent: 'string',
      instanceName: 'string',
      intAttr: 'number',
      picContentObject: 'Readable',
      picName: 'string',
      productId: 'string',
      region: 'string',
      strAttr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  picInfo?: AddImageResponseBodyPicInfo;
  requestId?: string;
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

export class DeleteImageRequest extends $tea.Model {
  instanceName?: string;
  picName?: string;
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      picName: 'PicName',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      picName: 'string',
      productId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponseBody extends $tea.Model {
  code?: number;
  data?: DeleteImageResponseBodyData;
  message?: string;
  requestId?: string;
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

export class DetailRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailResponseBody extends $tea.Model {
  instance?: DetailResponseBodyInstance;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetailResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaResponseBody extends $tea.Model {
  data?: DumpMetaResponseBodyData;
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
      data: DumpMetaResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DumpMetaResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaListRequest extends $tea.Model {
  id?: number;
  instanceName?: string;
  pageNumber?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaListResponseBody extends $tea.Model {
  data?: DumpMetaListResponseBodyData;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DumpMetaListResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseInstanceRequest extends $tea.Model {
  bucketName?: string;
  callbackAddress?: string;
  instanceName?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseInstanceResponseBody extends $tea.Model {
  data?: IncreaseInstanceResponseBodyData;
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
      data: IncreaseInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: IncreaseInstanceResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListRequest extends $tea.Model {
  bucketName?: string;
  id?: number;
  instanceName?: string;
  pageNumber?: number;
  pageSize?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListResponseBody extends $tea.Model {
  data?: IncreaseListResponseBodyData;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: IncreaseListResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameRequest extends $tea.Model {
  categoryId?: number;
  filter?: string;
  instanceName?: string;
  num?: number;
  picName?: string;
  productId?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
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
      filter: 'string',
      instanceName: 'string',
      num: 'number',
      picName: 'string',
      productId: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBody extends $tea.Model {
  auctions?: SearchImageByNameResponseBodyAuctions[];
  code?: number;
  head?: SearchImageByNameResponseBodyHead;
  msg?: string;
  picInfo?: SearchImageByNameResponseBodyPicInfo;
  requestId?: string;
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
  categoryId?: number;
  crop?: boolean;
  filter?: string;
  instanceName?: string;
  num?: number;
  picContent?: string;
  region?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      crop: 'Crop',
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
      filter: 'string',
      instanceName: 'string',
      num: 'number',
      picContent: 'string',
      region: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicAdvanceRequest extends $tea.Model {
  categoryId?: number;
  crop?: boolean;
  filter?: string;
  instanceName?: string;
  num?: number;
  picContentObject?: Readable;
  region?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      crop: 'Crop',
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
      filter: 'string',
      instanceName: 'string',
      num: 'number',
      picContentObject: 'Readable',
      region: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBody extends $tea.Model {
  auctions?: SearchImageByPicResponseBodyAuctions[];
  code?: number;
  head?: SearchImageByPicResponseBodyHead;
  msg?: string;
  picInfo?: SearchImageByPicResponseBodyPicInfo;
  requestId?: string;
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

export class UpdateImageRequest extends $tea.Model {
  customContent?: string;
  instanceName?: string;
  intAttr?: number;
  picName?: string;
  productId?: string;
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      customContent: 'CustomContent',
      instanceName: 'InstanceName',
      intAttr: 'IntAttr',
      picName: 'PicName',
      productId: 'ProductId',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customContent: 'string',
      instanceName: 'string',
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

export class UpdateImageResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
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

export class AddImageResponseBodyPicInfo extends $tea.Model {
  categoryId?: number;
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

export class DetailResponseBodyInstance extends $tea.Model {
  capacity?: number;
  name?: string;
  qps?: number;
  region?: string;
  serviceType?: number;
  totalCount?: number;
  utcCreate?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaResponseBodyData extends $tea.Model {
  dumpMetaStatus?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaListResponseBodyDataDumpMetaList extends $tea.Model {
  code?: string;
  id?: number;
  metaUrl?: string;
  msg?: string;
  status?: string;
  utcCreate?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaListResponseBodyData extends $tea.Model {
  dumpMetaList?: DumpMetaListResponseBodyDataDumpMetaList[];
  pageNumber?: number;
  pageSize?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseInstanceResponseBodyData extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListResponseBodyDataIncrementsInstance extends $tea.Model {
  bucketName?: string;
  callbackAddress?: string;
  code?: string;
  errorUrl?: string;
  id?: number;
  msg?: string;
  path?: string;
  status?: string;
  utcCreate?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListResponseBodyDataIncrements extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListResponseBodyData extends $tea.Model {
  increments?: IncreaseListResponseBodyDataIncrements;
  pageNumber?: number;
  pageSize?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyAuctions extends $tea.Model {
  categoryId?: number;
  customContent?: string;
  intAttr?: number;
  picName?: string;
  productId?: string;
  score?: number;
  sortExprValues?: string;
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      customContent: 'CustomContent',
      intAttr: 'IntAttr',
      picName: 'PicName',
      productId: 'ProductId',
      score: 'Score',
      sortExprValues: 'SortExprValues',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      customContent: 'string',
      intAttr: 'number',
      picName: 'string',
      productId: 'string',
      score: 'number',
      sortExprValues: 'string',
      strAttr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyHead extends $tea.Model {
  docsFound?: number;
  docsReturn?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyPicInfoAllCategories extends $tea.Model {
  id?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyPicInfoMultiRegion extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyPicInfo extends $tea.Model {
  allCategories?: SearchImageByNameResponseBodyPicInfoAllCategories[];
  categoryId?: number;
  multiRegion?: SearchImageByNameResponseBodyPicInfoMultiRegion[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyAuctions extends $tea.Model {
  categoryId?: number;
  customContent?: string;
  intAttr?: number;
  picName?: string;
  productId?: string;
  score?: number;
  sortExprValues?: string;
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      customContent: 'CustomContent',
      intAttr: 'IntAttr',
      picName: 'PicName',
      productId: 'ProductId',
      score: 'Score',
      sortExprValues: 'SortExprValues',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      customContent: 'string',
      intAttr: 'number',
      picName: 'string',
      productId: 'string',
      score: 'number',
      sortExprValues: 'string',
      strAttr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyHead extends $tea.Model {
  docsFound?: number;
  docsReturn?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyPicInfoAllCategories extends $tea.Model {
  id?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyPicInfoMultiRegion extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyPicInfo extends $tea.Model {
  allCategories?: SearchImageByPicResponseBodyPicInfoAllCategories[];
  categoryId?: number;
  multiRegion?: SearchImageByPicResponseBodyPicInfoMultiRegion[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("imagesearch", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addImageWithOptions(request: AddImageRequest, runtime: $Util.RuntimeOptions): Promise<AddImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!Util.isUnset(request.customContent)) {
      body["CustomContent"] = request.customContent;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.intAttr)) {
      body["IntAttr"] = request.intAttr;
    }

    if (!Util.isUnset(request.picContent)) {
      body["PicContent"] = request.picContent;
    }

    if (!Util.isUnset(request.picName)) {
      body["PicName"] = request.picName;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.strAttr)) {
      body["StrAttr"] = request.strAttr;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddImageResponse>(await this.callApi(params, req, runtime), new AddImageResponse({}));
  }

  async addImage(request: AddImageRequest): Promise<AddImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addImageWithOptions(request, runtime);
  }

  async addImageAdvance(request: AddImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AddImageResponse> {
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
      product: "ImageSearch",
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

    let addImageResp = await this.addImageWithOptions(addImageReq, runtime);
    return addImageResp;
  }

  async deleteImageWithOptions(request: DeleteImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.picName)) {
      body["PicName"] = request.picName;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteImageResponse>(await this.callApi(params, req, runtime), new DeleteImageResponse({}));
  }

  async deleteImage(request: DeleteImageRequest): Promise<DeleteImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  async detailWithOptions(request: DetailRequest, runtime: $Util.RuntimeOptions): Promise<DetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DetailResponse>(await this.callApi(params, req, runtime), new DetailResponse({}));
  }

  async detail(request: DetailRequest): Promise<DetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detailWithOptions(request, runtime);
  }

  async dumpMetaWithOptions(request: DumpMetaRequest, runtime: $Util.RuntimeOptions): Promise<DumpMetaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DumpMetaResponse>(await this.callApi(params, req, runtime), new DumpMetaResponse({}));
  }

  async dumpMeta(request: DumpMetaRequest): Promise<DumpMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dumpMetaWithOptions(request, runtime);
  }

  async dumpMetaListWithOptions(request: DumpMetaListRequest, runtime: $Util.RuntimeOptions): Promise<DumpMetaListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DumpMetaListResponse>(await this.callApi(params, req, runtime), new DumpMetaListResponse({}));
  }

  async dumpMetaList(request: DumpMetaListRequest): Promise<DumpMetaListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dumpMetaListWithOptions(request, runtime);
  }

  async increaseInstanceWithOptions(request: IncreaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<IncreaseInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.callbackAddress)) {
      query["CallbackAddress"] = request.callbackAddress;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<IncreaseInstanceResponse>(await this.callApi(params, req, runtime), new IncreaseInstanceResponse({}));
  }

  async increaseInstance(request: IncreaseInstanceRequest): Promise<IncreaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.increaseInstanceWithOptions(request, runtime);
  }

  async increaseListWithOptions(request: IncreaseListRequest, runtime: $Util.RuntimeOptions): Promise<IncreaseListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<IncreaseListResponse>(await this.callApi(params, req, runtime), new IncreaseListResponse({}));
  }

  async increaseList(request: IncreaseListRequest): Promise<IncreaseListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.increaseListWithOptions(request, runtime);
  }

  async searchImageByNameWithOptions(request: SearchImageByNameRequest, runtime: $Util.RuntimeOptions): Promise<SearchImageByNameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.num)) {
      body["Num"] = request.num;
    }

    if (!Util.isUnset(request.picName)) {
      body["PicName"] = request.picName;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.start)) {
      body["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SearchImageByNameResponse>(await this.callApi(params, req, runtime), new SearchImageByNameResponse({}));
  }

  async searchImageByName(request: SearchImageByNameRequest): Promise<SearchImageByNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchImageByNameWithOptions(request, runtime);
  }

  async searchImageByPicWithOptions(request: SearchImageByPicRequest, runtime: $Util.RuntimeOptions): Promise<SearchImageByPicResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!Util.isUnset(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.num)) {
      body["Num"] = request.num;
    }

    if (!Util.isUnset(request.picContent)) {
      body["PicContent"] = request.picContent;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.start)) {
      body["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SearchImageByPicResponse>(await this.callApi(params, req, runtime), new SearchImageByPicResponse({}));
  }

  async searchImageByPic(request: SearchImageByPicRequest): Promise<SearchImageByPicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchImageByPicWithOptions(request, runtime);
  }

  async searchImageByPicAdvance(request: SearchImageByPicAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SearchImageByPicResponse> {
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
      product: "ImageSearch",
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

    let searchImageByPicResp = await this.searchImageByPicWithOptions(searchImageByPicReq, runtime);
    return searchImageByPicResp;
  }

  async updateImageWithOptions(request: UpdateImageRequest, runtime: $Util.RuntimeOptions): Promise<UpdateImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customContent)) {
      body["CustomContent"] = request.customContent;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.intAttr)) {
      body["IntAttr"] = request.intAttr;
    }

    if (!Util.isUnset(request.picName)) {
      body["PicName"] = request.picName;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.strAttr)) {
      body["StrAttr"] = request.strAttr;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateImageResponse>(await this.callApi(params, req, runtime), new UpdateImageResponse({}));
  }

  async updateImage(request: UpdateImageRequest): Promise<UpdateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateImageWithOptions(request, runtime);
  }

}
