// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import RPC, * as $RPC from '@alicloud/rpc-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class AddIntlImageProductVersionRequest extends $tea.Model {
  accessDetail?: AddIntlImageProductVersionRequestAccessDetail;
  ak?: string;
  commodityCode?: string;
  imageConstraint?: AddIntlImageProductVersionRequestImageConstraint;
  releaseRegion?: string;
  requestId?: string;
  secret?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      accessDetail: 'AccessDetail',
      ak: 'Ak',
      commodityCode: 'CommodityCode',
      imageConstraint: 'ImageConstraint',
      releaseRegion: 'ReleaseRegion',
      requestId: 'RequestId',
      secret: 'Secret',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDetail: AddIntlImageProductVersionRequestAccessDetail,
      ak: 'string',
      commodityCode: 'string',
      imageConstraint: AddIntlImageProductVersionRequestImageConstraint,
      releaseRegion: 'string',
      requestId: 'string',
      secret: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIntlImageProductVersionResponseBody extends $tea.Model {
  code?: number;
  data?: AddIntlImageProductVersionResponseBodyData;
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AddIntlImageProductVersionResponseBodyData,
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIntlImageProductVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddIntlImageProductVersionResponseBody;
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
      body: AddIntlImageProductVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageRequest extends $tea.Model {
  accessInfo?: CreateOrUpdateIntlImageRequestAccessInfo;
  ak?: string;
  basicInfo?: CreateOrUpdateIntlImageRequestBasicInfo;
  bussinessInfo?: CreateOrUpdateIntlImageRequestBussinessInfo;
  callBackUrl?: string;
  commodityCode?: string;
  protocolInfo?: CreateOrUpdateIntlImageRequestProtocolInfo;
  requestId?: string;
  saleInfo?: CreateOrUpdateIntlImageRequestSaleInfo;
  secret?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      accessInfo: 'AccessInfo',
      ak: 'Ak',
      basicInfo: 'BasicInfo',
      bussinessInfo: 'BussinessInfo',
      callBackUrl: 'CallBackUrl',
      commodityCode: 'CommodityCode',
      protocolInfo: 'ProtocolInfo',
      requestId: 'RequestId',
      saleInfo: 'SaleInfo',
      secret: 'Secret',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInfo: CreateOrUpdateIntlImageRequestAccessInfo,
      ak: 'string',
      basicInfo: CreateOrUpdateIntlImageRequestBasicInfo,
      bussinessInfo: CreateOrUpdateIntlImageRequestBussinessInfo,
      callBackUrl: 'string',
      commodityCode: 'string',
      protocolInfo: CreateOrUpdateIntlImageRequestProtocolInfo,
      requestId: 'string',
      saleInfo: CreateOrUpdateIntlImageRequestSaleInfo,
      secret: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageResponseBody extends $tea.Model {
  code?: number;
  data?: CreateOrUpdateIntlImageResponseBodyData;
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateOrUpdateIntlImageResponseBodyData,
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrUpdateIntlImageResponseBody;
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
      body: CreateOrUpdateIntlImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageByTemplateRequest extends $tea.Model {
  ak?: string;
  createOrUpdateIntlImageJson?: string;
  requestId?: string;
  secret?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      createOrUpdateIntlImageJson: 'CreateOrUpdateIntlImageJson',
      requestId: 'RequestId',
      secret: 'Secret',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      createOrUpdateIntlImageJson: 'string',
      requestId: 'string',
      secret: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageByTemplateResponseBody extends $tea.Model {
  code?: number;
  data?: CreateOrUpdateIntlImageByTemplateResponseBodyData;
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateOrUpdateIntlImageByTemplateResponseBodyData,
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageByTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrUpdateIntlImageByTemplateResponseBody;
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
      body: CreateOrUpdateIntlImageByTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessibleRegionsRequest extends $tea.Model {
  ak?: string;
  requestId?: string;
  secret?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      requestId: 'RequestId',
      secret: 'Secret',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      requestId: 'string',
      secret: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessibleRegionsResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeAccessibleRegionsResponseBodyData[];
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAccessibleRegionsResponseBodyData },
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessibleRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAccessibleRegionsResponseBody;
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
      body: DescribeAccessibleRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoriesRequest extends $tea.Model {
  ak?: string;
  requestId?: string;
  secret?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      requestId: 'RequestId',
      secret: 'Secret',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      requestId: 'string',
      secret: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoriesResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeCategoriesResponseBodyData[];
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeCategoriesResponseBodyData },
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCategoriesResponseBody;
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
      body: DescribeCategoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCountriesRequest extends $tea.Model {
  ak?: string;
  requestId?: string;
  secret?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      requestId: 'RequestId',
      secret: 'Secret',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      requestId: 'string',
      secret: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCountriesResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeCountriesResponseBodyData;
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeCountriesResponseBodyData,
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCountriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCountriesResponseBody;
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
      body: DescribeCountriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomImagesRequest extends $tea.Model {
  ak?: string;
  regionNo?: string;
  requestId?: string;
  secret?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      regionNo: 'RegionNo',
      requestId: 'RequestId',
      secret: 'Secret',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      regionNo: 'string',
      requestId: 'string',
      secret: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomImagesResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeCustomImagesResponseBodyData[];
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeCustomImagesResponseBodyData },
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCustomImagesResponseBody;
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
      body: DescribeCustomImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoRequest extends $tea.Model {
  ak?: string;
  commodityCode?: string;
  requestId?: string;
  secret?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      commodityCode: 'CommodityCode',
      requestId: 'RequestId',
      secret: 'Secret',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      commodityCode: 'string',
      requestId: 'string',
      secret: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeImageCommodityInfoResponseBodyData;
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeImageCommodityInfoResponseBodyData,
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeImageCommodityInfoResponseBody;
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
      body: DescribeImageCommodityInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityStatusRequest extends $tea.Model {
  ak?: string;
  commodityCode?: string;
  requestId?: string;
  secret?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      commodityCode: 'CommodityCode',
      requestId: 'RequestId',
      secret: 'Secret',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      commodityCode: 'string',
      requestId: 'string',
      secret: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityStatusResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeImageCommodityStatusResponseBodyData;
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeImageCommodityStatusResponseBodyData,
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeImageCommodityStatusResponseBody;
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
      body: DescribeImageCommodityStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageConstraintsRequest extends $tea.Model {
  ak?: string;
  imageId?: string;
  regionNo?: string;
  requestId?: string;
  secret?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      imageId: 'ImageId',
      regionNo: 'RegionNo',
      requestId: 'RequestId',
      secret: 'Secret',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      imageId: 'string',
      regionNo: 'string',
      requestId: 'string',
      secret: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageConstraintsResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeImageConstraintsResponseBodyData;
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeImageConstraintsResponseBodyData,
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageConstraintsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeImageConstraintsResponseBody;
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
      body: DescribeImageConstraintsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesRequest extends $tea.Model {
  ak?: string;
  requestId?: string;
  secret?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      requestId: 'RequestId',
      secret: 'Secret',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      requestId: 'string',
      secret: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeInstanceTypesResponseBodyData;
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeInstanceTypesResponseBodyData,
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceTypesResponseBody;
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
      body: DescribeInstanceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListResourcesRequest extends $tea.Model {
  ak?: string;
  requestId?: string;
  secret?: string;
  type?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      requestId: 'RequestId',
      secret: 'Secret',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      requestId: 'string',
      secret: 'string',
      type: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListResourcesResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeListResourcesResponseBodyData;
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeListResourcesResponseBodyData,
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeListResourcesResponseBody;
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
      body: DescribeListResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReleasableRegionListRequest extends $tea.Model {
  ak?: string;
  requestId?: string;
  secret?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      requestId: 'RequestId',
      secret: 'Secret',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      requestId: 'string',
      secret: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReleasableRegionListResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeReleasableRegionListResponseBodyData[];
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeReleasableRegionListResponseBodyData },
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReleasableRegionListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeReleasableRegionListResponseBody;
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
      body: DescribeReleasableRegionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImageCommodityReviewRequest extends $tea.Model {
  ak?: string;
  commodityCode?: string;
  requestId?: string;
  secret?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      commodityCode: 'CommodityCode',
      requestId: 'RequestId',
      secret: 'Secret',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      commodityCode: 'string',
      requestId: 'string',
      secret: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImageCommodityReviewResponseBody extends $tea.Model {
  code?: number;
  data?: SubmitImageCommodityReviewResponseBodyData;
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: SubmitImageCommodityReviewResponseBodyData,
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImageCommodityReviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitImageCommodityReviewResponseBody;
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
      body: SubmitImageCommodityReviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileRequest extends $tea.Model {
  ak?: string;
  fileName?: string;
  fileUrl?: string;
  requestId?: string;
  secret?: string;
  type?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      requestId: 'RequestId',
      secret: 'Secret',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      fileName: 'string',
      fileUrl: 'string',
      requestId: 'string',
      secret: 'string',
      type: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileAdvanceRequest extends $tea.Model {
  ak?: string;
  fileName?: string;
  fileUrlObject?: Readable;
  requestId?: string;
  secret?: string;
  type?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
      requestId: 'RequestId',
      secret: 'Secret',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      fileName: 'string',
      fileUrlObject: 'Readable',
      requestId: 'string',
      secret: 'string',
      type: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileResponseBody extends $tea.Model {
  code?: number;
  data?: UploadFileResponseBodyData;
  errorCode?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: UploadFileResponseBodyData,
      errorCode: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadFileResponseBody;
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
      body: UploadFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIntlImageProductVersionRequestAccessDetail extends $tea.Model {
  ak?: string;
  autoPublish?: boolean;
  imageId?: string;
  imageName?: string;
  imageVersion?: string;
  region?: string;
  releaseNote?: string;
  releaseRegionOption?: string;
  secret?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      autoPublish: 'AutoPublish',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageVersion: 'ImageVersion',
      region: 'Region',
      releaseNote: 'ReleaseNote',
      releaseRegionOption: 'ReleaseRegionOption',
      secret: 'Secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      autoPublish: 'boolean',
      imageId: 'string',
      imageName: 'string',
      imageVersion: 'string',
      region: 'string',
      releaseNote: 'string',
      releaseRegionOption: 'string',
      secret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIntlImageProductVersionRequestImageConstraintBaseConfig extends $tea.Model {
  maxCpu?: number;
  maxMemory?: number;
  minBandwidth?: number;
  minCpu?: number;
  minDataDiskSize?: number;
  minMemory?: number;
  minSystemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      maxCpu: 'MaxCpu',
      maxMemory: 'MaxMemory',
      minBandwidth: 'MinBandwidth',
      minCpu: 'MinCpu',
      minDataDiskSize: 'MinDataDiskSize',
      minMemory: 'MinMemory',
      minSystemDiskSize: 'MinSystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCpu: 'number',
      maxMemory: 'number',
      minBandwidth: 'number',
      minCpu: 'number',
      minDataDiskSize: 'number',
      minMemory: 'number',
      minSystemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIntlImageProductVersionRequestImageConstraint extends $tea.Model {
  baseConfig?: AddIntlImageProductVersionRequestImageConstraintBaseConfig;
  customizeFamilyConstraints?: { [key: string]: any };
  supportMoreNetworkCards?: boolean;
  tcpPortRange?: string[];
  udpPortRange?: string[];
  static names(): { [key: string]: string } {
    return {
      baseConfig: 'BaseConfig',
      customizeFamilyConstraints: 'CustomizeFamilyConstraints',
      supportMoreNetworkCards: 'SupportMoreNetworkCards',
      tcpPortRange: 'TcpPortRange',
      udpPortRange: 'UdpPortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseConfig: AddIntlImageProductVersionRequestImageConstraintBaseConfig,
      customizeFamilyConstraints: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      supportMoreNetworkCards: 'boolean',
      tcpPortRange: { 'type': 'array', 'itemType': 'string' },
      udpPortRange: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIntlImageProductVersionResponseBodyData extends $tea.Model {
  commodityCode?: string;
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageRequestAccessInfoAccessDetail extends $tea.Model {
  ak?: string;
  autoPublish?: boolean;
  imageId?: string;
  imageName?: string;
  imageVersion?: string;
  region?: string;
  releaseNote?: string;
  releaseRegionOption?: string;
  secret?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      autoPublish: 'AutoPublish',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageVersion: 'ImageVersion',
      region: 'Region',
      releaseNote: 'ReleaseNote',
      releaseRegionOption: 'ReleaseRegionOption',
      secret: 'Secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      autoPublish: 'boolean',
      imageId: 'string',
      imageName: 'string',
      imageVersion: 'string',
      region: 'string',
      releaseNote: 'string',
      releaseRegionOption: 'string',
      secret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageRequestAccessInfoImageConstraintBaseConfig extends $tea.Model {
  maxCpu?: number;
  maxMemory?: number;
  minBandwidth?: number;
  minCpu?: number;
  minDataDiskSize?: number;
  minMemory?: number;
  minSystemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      maxCpu: 'MaxCpu',
      maxMemory: 'MaxMemory',
      minBandwidth: 'MinBandwidth',
      minCpu: 'MinCpu',
      minDataDiskSize: 'MinDataDiskSize',
      minMemory: 'MinMemory',
      minSystemDiskSize: 'MinSystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCpu: 'number',
      maxMemory: 'number',
      minBandwidth: 'number',
      minCpu: 'number',
      minDataDiskSize: 'number',
      minMemory: 'number',
      minSystemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageRequestAccessInfoImageConstraint extends $tea.Model {
  baseConfig?: CreateOrUpdateIntlImageRequestAccessInfoImageConstraintBaseConfig;
  customizeFamilyConstraints?: { [key: string]: any };
  supportMoreNetworkCards?: boolean;
  tcpPortRange?: string[];
  udpPortRange?: string[];
  static names(): { [key: string]: string } {
    return {
      baseConfig: 'BaseConfig',
      customizeFamilyConstraints: 'CustomizeFamilyConstraints',
      supportMoreNetworkCards: 'SupportMoreNetworkCards',
      tcpPortRange: 'TcpPortRange',
      udpPortRange: 'UdpPortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseConfig: CreateOrUpdateIntlImageRequestAccessInfoImageConstraintBaseConfig,
      customizeFamilyConstraints: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      supportMoreNetworkCards: 'boolean',
      tcpPortRange: { 'type': 'array', 'itemType': 'string' },
      udpPortRange: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageRequestAccessInfo extends $tea.Model {
  accessDetail?: CreateOrUpdateIntlImageRequestAccessInfoAccessDetail;
  autoPublish?: boolean;
  imageConstraint?: CreateOrUpdateIntlImageRequestAccessInfoImageConstraint;
  name?: string;
  releaseRegion?: string;
  releaseRegionOption?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      accessDetail: 'AccessDetail',
      autoPublish: 'AutoPublish',
      imageConstraint: 'ImageConstraint',
      name: 'Name',
      releaseRegion: 'ReleaseRegion',
      releaseRegionOption: 'ReleaseRegionOption',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDetail: CreateOrUpdateIntlImageRequestAccessInfoAccessDetail,
      autoPublish: 'boolean',
      imageConstraint: CreateOrUpdateIntlImageRequestAccessInfoImageConstraint,
      name: 'string',
      releaseRegion: 'string',
      releaseRegionOption: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageRequestBasicInfo extends $tea.Model {
  commodityAfterSale?: string;
  commodityDetail?: string;
  commodityFeature?: string;
  commodityIntroduction?: string;
  commodityPicture?: string;
  commodityPictureName?: string;
  commodityPictureStream?: string;
  commodityQualification?: string[];
  commodityRefundPolicy?: string;
  commodityUserGuide?: string;
  commodityVideoName?: string;
  commodityVideoStream?: string;
  commodityVideoUrl?: string;
  videoSelect?: string;
  static names(): { [key: string]: string } {
    return {
      commodityAfterSale: 'CommodityAfterSale',
      commodityDetail: 'CommodityDetail',
      commodityFeature: 'CommodityFeature',
      commodityIntroduction: 'CommodityIntroduction',
      commodityPicture: 'CommodityPicture',
      commodityPictureName: 'CommodityPictureName',
      commodityPictureStream: 'CommodityPictureStream',
      commodityQualification: 'CommodityQualification',
      commodityRefundPolicy: 'CommodityRefundPolicy',
      commodityUserGuide: 'CommodityUserGuide',
      commodityVideoName: 'CommodityVideoName',
      commodityVideoStream: 'CommodityVideoStream',
      commodityVideoUrl: 'CommodityVideoUrl',
      videoSelect: 'VideoSelect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityAfterSale: 'string',
      commodityDetail: 'string',
      commodityFeature: 'string',
      commodityIntroduction: 'string',
      commodityPicture: 'string',
      commodityPictureName: 'string',
      commodityPictureStream: 'string',
      commodityQualification: { 'type': 'array', 'itemType': 'string' },
      commodityRefundPolicy: 'string',
      commodityUserGuide: 'string',
      commodityVideoName: 'string',
      commodityVideoStream: 'string',
      commodityVideoUrl: 'string',
      videoSelect: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageRequestBussinessInfo extends $tea.Model {
  categoryId?: string;
  pipCode?: string;
  seoDescription?: string;
  seoKeywords?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      pipCode: 'PipCode',
      seoDescription: 'SeoDescription',
      seoKeywords: 'SeoKeywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      pipCode: 'string',
      seoDescription: 'string',
      seoKeywords: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageRequestProtocolInfo extends $tea.Model {
  agentName?: string;
  customsTarifNumber?: string;
  earControlled?: string;
  eccnCode?: string;
  finalUserProtocol?: string;
  identificationMethod?: string;
  license?: string;
  licenseException?: string;
  localExportControlClassificationNumber?: string;
  officialIdentificationNumber?: string;
  productCryType?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      customsTarifNumber: 'CustomsTarifNumber',
      earControlled: 'EarControlled',
      eccnCode: 'EccnCode',
      finalUserProtocol: 'FinalUserProtocol',
      identificationMethod: 'IdentificationMethod',
      license: 'License',
      licenseException: 'LicenseException',
      localExportControlClassificationNumber: 'LocalExportControlClassificationNumber',
      officialIdentificationNumber: 'OfficialIdentificationNumber',
      productCryType: 'ProductCryType',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      customsTarifNumber: 'string',
      earControlled: 'string',
      eccnCode: 'string',
      finalUserProtocol: 'string',
      identificationMethod: 'string',
      license: 'string',
      licenseException: 'string',
      localExportControlClassificationNumber: 'string',
      officialIdentificationNumber: 'string',
      productCryType: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageRequestSaleInfoPostpaidPricePostpaidPriceList extends $tea.Model {
  basePrice?: string;
  currency?: string;
  excelUrl?: string;
  instanceType?: string;
  priceType?: string;
  static names(): { [key: string]: string } {
    return {
      basePrice: 'BasePrice',
      currency: 'Currency',
      excelUrl: 'ExcelUrl',
      instanceType: 'InstanceType',
      priceType: 'PriceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePrice: 'string',
      currency: 'string',
      excelUrl: 'string',
      instanceType: 'string',
      priceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageRequestSaleInfoPostpaidPrice extends $tea.Model {
  hourPrice?: string;
  postpaidPriceList?: CreateOrUpdateIntlImageRequestSaleInfoPostpaidPricePostpaidPriceList[];
  unifiedPrice?: boolean;
  static names(): { [key: string]: string } {
    return {
      hourPrice: 'HourPrice',
      postpaidPriceList: 'PostpaidPriceList',
      unifiedPrice: 'UnifiedPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hourPrice: 'string',
      postpaidPriceList: { 'type': 'array', 'itemType': CreateOrUpdateIntlImageRequestSaleInfoPostpaidPricePostpaidPriceList },
      unifiedPrice: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageRequestSaleInfoPrepaymentPricePrepaymentPriceList extends $tea.Model {
  basePrice?: string;
  currency?: string;
  excelUrl?: string;
  instanceType?: string;
  priceType?: string;
  tradeType?: string;
  static names(): { [key: string]: string } {
    return {
      basePrice: 'BasePrice',
      currency: 'Currency',
      excelUrl: 'ExcelUrl',
      instanceType: 'InstanceType',
      priceType: 'PriceType',
      tradeType: 'TradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePrice: 'string',
      currency: 'string',
      excelUrl: 'string',
      instanceType: 'string',
      priceType: 'string',
      tradeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageRequestSaleInfoPrepaymentPrice extends $tea.Model {
  monthPrice?: string;
  monthRenewPrice?: string;
  prepaymentPriceList?: CreateOrUpdateIntlImageRequestSaleInfoPrepaymentPricePrepaymentPriceList[];
  unifiedPrice?: boolean;
  yearPrice?: string;
  yearRenewPrice?: string;
  static names(): { [key: string]: string } {
    return {
      monthPrice: 'MonthPrice',
      monthRenewPrice: 'MonthRenewPrice',
      prepaymentPriceList: 'PrepaymentPriceList',
      unifiedPrice: 'UnifiedPrice',
      yearPrice: 'YearPrice',
      yearRenewPrice: 'YearRenewPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monthPrice: 'string',
      monthRenewPrice: 'string',
      prepaymentPriceList: { 'type': 'array', 'itemType': CreateOrUpdateIntlImageRequestSaleInfoPrepaymentPricePrepaymentPriceList },
      unifiedPrice: 'boolean',
      yearPrice: 'string',
      yearRenewPrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageRequestSaleInfo extends $tea.Model {
  billingMethods?: number;
  commodityFrontShow?: string;
  postpaidPrice?: CreateOrUpdateIntlImageRequestSaleInfoPostpaidPrice;
  prepaymentPrice?: CreateOrUpdateIntlImageRequestSaleInfoPrepaymentPrice;
  pricingPlan?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethods: 'BillingMethods',
      commodityFrontShow: 'CommodityFrontShow',
      postpaidPrice: 'PostpaidPrice',
      prepaymentPrice: 'PrepaymentPrice',
      pricingPlan: 'PricingPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethods: 'number',
      commodityFrontShow: 'string',
      postpaidPrice: CreateOrUpdateIntlImageRequestSaleInfoPostpaidPrice,
      prepaymentPrice: CreateOrUpdateIntlImageRequestSaleInfoPrepaymentPrice,
      pricingPlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageResponseBodyData extends $tea.Model {
  code?: string;
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIntlImageByTemplateResponseBodyData extends $tea.Model {
  code?: string;
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessibleRegionsResponseBodyData extends $tea.Model {
  regionName?: string;
  regionNo?: string;
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      regionName: 'RegionName',
      regionNo: 'RegionNo',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionName: 'string',
      regionNo: 'string',
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoriesResponseBodyDataSubCategories extends $tea.Model {
  categoryId?: string;
  categoryName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoriesResponseBodyData extends $tea.Model {
  categoryId?: string;
  categoryName?: string;
  subCategories?: DescribeCategoriesResponseBodyDataSubCategories[];
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      subCategories: 'SubCategories',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryName: 'string',
      subCategories: { 'type': 'array', 'itemType': DescribeCategoriesResponseBodyDataSubCategories },
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCountriesResponseBodyData extends $tea.Model {
  ak?: string;
  countries?: string[];
  requestId?: string;
  secret?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      countries: 'Countries',
      requestId: 'RequestId',
      secret: 'Secret',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      countries: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      secret: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomImagesResponseBodyData extends $tea.Model {
  createdOn?: number;
  imageId?: string;
  imageName?: string;
  imageSize?: number;
  osname?: string;
  platform?: string;
  platformBit?: string;
  platformType?: string;
  region?: string;
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      createdOn: 'CreatedOn',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageSize: 'ImageSize',
      osname: 'Osname',
      platform: 'Platform',
      platformBit: 'PlatformBit',
      platformType: 'PlatformType',
      region: 'Region',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdOn: 'number',
      imageId: 'string',
      imageName: 'string',
      imageSize: 'number',
      osname: 'string',
      platform: 'string',
      platformBit: 'string',
      platformType: 'string',
      region: 'string',
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoResponseBodyDataAccessInfoAccessDetail extends $tea.Model {
  ak?: string;
  autoPublish?: boolean;
  imageId?: string;
  imageName?: string;
  imageVersion?: string;
  region?: string;
  releaseNote?: string;
  releaseRegionOption?: string;
  secret?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      autoPublish: 'AutoPublish',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageVersion: 'ImageVersion',
      region: 'Region',
      releaseNote: 'ReleaseNote',
      releaseRegionOption: 'ReleaseRegionOption',
      secret: 'Secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      autoPublish: 'boolean',
      imageId: 'string',
      imageName: 'string',
      imageVersion: 'string',
      region: 'string',
      releaseNote: 'string',
      releaseRegionOption: 'string',
      secret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoResponseBodyDataAccessInfoImageConstraintBaseConfig extends $tea.Model {
  maxCpu?: number;
  maxMemory?: number;
  minBandwidth?: number;
  minCpu?: number;
  minDataDiskSize?: number;
  minMemory?: number;
  minSystemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      maxCpu: 'MaxCpu',
      maxMemory: 'MaxMemory',
      minBandwidth: 'MinBandwidth',
      minCpu: 'MinCpu',
      minDataDiskSize: 'MinDataDiskSize',
      minMemory: 'MinMemory',
      minSystemDiskSize: 'MinSystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCpu: 'number',
      maxMemory: 'number',
      minBandwidth: 'number',
      minCpu: 'number',
      minDataDiskSize: 'number',
      minMemory: 'number',
      minSystemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoResponseBodyDataAccessInfoImageConstraint extends $tea.Model {
  baseConfig?: DescribeImageCommodityInfoResponseBodyDataAccessInfoImageConstraintBaseConfig;
  customizeFamilyConstraints?: { [key: string]: any };
  supportMoreNetworkCards?: boolean;
  tcpPortRange?: string[];
  udpPortRange?: string[];
  static names(): { [key: string]: string } {
    return {
      baseConfig: 'BaseConfig',
      customizeFamilyConstraints: 'CustomizeFamilyConstraints',
      supportMoreNetworkCards: 'SupportMoreNetworkCards',
      tcpPortRange: 'TcpPortRange',
      udpPortRange: 'UdpPortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseConfig: DescribeImageCommodityInfoResponseBodyDataAccessInfoImageConstraintBaseConfig,
      customizeFamilyConstraints: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      supportMoreNetworkCards: 'boolean',
      tcpPortRange: { 'type': 'array', 'itemType': 'string' },
      udpPortRange: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoResponseBodyDataAccessInfo extends $tea.Model {
  accessDetail?: DescribeImageCommodityInfoResponseBodyDataAccessInfoAccessDetail;
  autoPublish?: boolean;
  imageConstraint?: DescribeImageCommodityInfoResponseBodyDataAccessInfoImageConstraint;
  name?: string;
  releaseRegion?: string;
  releaseRegionOption?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      accessDetail: 'AccessDetail',
      autoPublish: 'AutoPublish',
      imageConstraint: 'ImageConstraint',
      name: 'Name',
      releaseRegion: 'ReleaseRegion',
      releaseRegionOption: 'ReleaseRegionOption',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDetail: DescribeImageCommodityInfoResponseBodyDataAccessInfoAccessDetail,
      autoPublish: 'boolean',
      imageConstraint: DescribeImageCommodityInfoResponseBodyDataAccessInfoImageConstraint,
      name: 'string',
      releaseRegion: 'string',
      releaseRegionOption: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoResponseBodyDataBasicInfo extends $tea.Model {
  commodityAfterSale?: string;
  commodityDetail?: string;
  commodityFeature?: string;
  commodityIntroduction?: string;
  commodityPicture?: string;
  commodityPictureName?: string;
  commodityPictureStream?: string;
  commodityQualification?: string[];
  commodityRefundPolicy?: string;
  commodityUserGuide?: string;
  commodityVideoName?: string;
  commodityVideoStream?: string;
  commodityVideoUrl?: string;
  videoSelect?: string;
  static names(): { [key: string]: string } {
    return {
      commodityAfterSale: 'CommodityAfterSale',
      commodityDetail: 'CommodityDetail',
      commodityFeature: 'CommodityFeature',
      commodityIntroduction: 'CommodityIntroduction',
      commodityPicture: 'CommodityPicture',
      commodityPictureName: 'CommodityPictureName',
      commodityPictureStream: 'CommodityPictureStream',
      commodityQualification: 'CommodityQualification',
      commodityRefundPolicy: 'CommodityRefundPolicy',
      commodityUserGuide: 'CommodityUserGuide',
      commodityVideoName: 'CommodityVideoName',
      commodityVideoStream: 'CommodityVideoStream',
      commodityVideoUrl: 'CommodityVideoUrl',
      videoSelect: 'VideoSelect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityAfterSale: 'string',
      commodityDetail: 'string',
      commodityFeature: 'string',
      commodityIntroduction: 'string',
      commodityPicture: 'string',
      commodityPictureName: 'string',
      commodityPictureStream: 'string',
      commodityQualification: { 'type': 'array', 'itemType': 'string' },
      commodityRefundPolicy: 'string',
      commodityUserGuide: 'string',
      commodityVideoName: 'string',
      commodityVideoStream: 'string',
      commodityVideoUrl: 'string',
      videoSelect: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoResponseBodyDataBussinessInfo extends $tea.Model {
  categoryId?: string;
  pipCode?: string;
  seoDescription?: string;
  seoKeywords?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      pipCode: 'PipCode',
      seoDescription: 'SeoDescription',
      seoKeywords: 'SeoKeywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      pipCode: 'string',
      seoDescription: 'string',
      seoKeywords: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoResponseBodyDataProtocolInfo extends $tea.Model {
  agentName?: string;
  customsTarifNumber?: string;
  earControlled?: string;
  eccnCode?: string;
  finalUserProtocol?: string;
  identificationMethod?: string;
  license?: string;
  licenseException?: string;
  localExportControlClassificationNumber?: string;
  officialIdentificationNumber?: string;
  productCryType?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      customsTarifNumber: 'CustomsTarifNumber',
      earControlled: 'EarControlled',
      eccnCode: 'EccnCode',
      finalUserProtocol: 'FinalUserProtocol',
      identificationMethod: 'IdentificationMethod',
      license: 'License',
      licenseException: 'LicenseException',
      localExportControlClassificationNumber: 'LocalExportControlClassificationNumber',
      officialIdentificationNumber: 'OfficialIdentificationNumber',
      productCryType: 'ProductCryType',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      customsTarifNumber: 'string',
      earControlled: 'string',
      eccnCode: 'string',
      finalUserProtocol: 'string',
      identificationMethod: 'string',
      license: 'string',
      licenseException: 'string',
      localExportControlClassificationNumber: 'string',
      officialIdentificationNumber: 'string',
      productCryType: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoResponseBodyDataSaleInfoPostpaidPricePostpaidPriceList extends $tea.Model {
  basePrice?: string;
  currency?: string;
  excelUrl?: string;
  instanceType?: string;
  priceType?: string;
  static names(): { [key: string]: string } {
    return {
      basePrice: 'BasePrice',
      currency: 'Currency',
      excelUrl: 'ExcelUrl',
      instanceType: 'InstanceType',
      priceType: 'PriceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePrice: 'string',
      currency: 'string',
      excelUrl: 'string',
      instanceType: 'string',
      priceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoResponseBodyDataSaleInfoPostpaidPrice extends $tea.Model {
  hourPrice?: string;
  postpaidPriceList?: DescribeImageCommodityInfoResponseBodyDataSaleInfoPostpaidPricePostpaidPriceList[];
  unifiedPrice?: boolean;
  static names(): { [key: string]: string } {
    return {
      hourPrice: 'HourPrice',
      postpaidPriceList: 'PostpaidPriceList',
      unifiedPrice: 'UnifiedPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hourPrice: 'string',
      postpaidPriceList: { 'type': 'array', 'itemType': DescribeImageCommodityInfoResponseBodyDataSaleInfoPostpaidPricePostpaidPriceList },
      unifiedPrice: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoResponseBodyDataSaleInfoPrepaymentPricePrepaymentPriceList extends $tea.Model {
  basePrice?: string;
  currency?: string;
  excelUrl?: string;
  instanceType?: string;
  priceType?: string;
  tradeType?: string;
  static names(): { [key: string]: string } {
    return {
      basePrice: 'BasePrice',
      currency: 'Currency',
      excelUrl: 'ExcelUrl',
      instanceType: 'InstanceType',
      priceType: 'PriceType',
      tradeType: 'TradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePrice: 'string',
      currency: 'string',
      excelUrl: 'string',
      instanceType: 'string',
      priceType: 'string',
      tradeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoResponseBodyDataSaleInfoPrepaymentPrice extends $tea.Model {
  monthPrice?: string;
  monthRenewPrice?: string;
  prepaymentPriceList?: DescribeImageCommodityInfoResponseBodyDataSaleInfoPrepaymentPricePrepaymentPriceList[];
  unifiedPrice?: boolean;
  yearPrice?: string;
  yearRenewPrice?: string;
  static names(): { [key: string]: string } {
    return {
      monthPrice: 'MonthPrice',
      monthRenewPrice: 'MonthRenewPrice',
      prepaymentPriceList: 'PrepaymentPriceList',
      unifiedPrice: 'UnifiedPrice',
      yearPrice: 'YearPrice',
      yearRenewPrice: 'YearRenewPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monthPrice: 'string',
      monthRenewPrice: 'string',
      prepaymentPriceList: { 'type': 'array', 'itemType': DescribeImageCommodityInfoResponseBodyDataSaleInfoPrepaymentPricePrepaymentPriceList },
      unifiedPrice: 'boolean',
      yearPrice: 'string',
      yearRenewPrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoResponseBodyDataSaleInfo extends $tea.Model {
  billingMethods?: number;
  commodityFrontShow?: string;
  postpaidPrice?: DescribeImageCommodityInfoResponseBodyDataSaleInfoPostpaidPrice;
  prepaymentPrice?: DescribeImageCommodityInfoResponseBodyDataSaleInfoPrepaymentPrice;
  pricingPlan?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethods: 'BillingMethods',
      commodityFrontShow: 'CommodityFrontShow',
      postpaidPrice: 'PostpaidPrice',
      prepaymentPrice: 'PrepaymentPrice',
      pricingPlan: 'PricingPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethods: 'number',
      commodityFrontShow: 'string',
      postpaidPrice: DescribeImageCommodityInfoResponseBodyDataSaleInfoPostpaidPrice,
      prepaymentPrice: DescribeImageCommodityInfoResponseBodyDataSaleInfoPrepaymentPrice,
      pricingPlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityInfoResponseBodyData extends $tea.Model {
  accessInfo?: DescribeImageCommodityInfoResponseBodyDataAccessInfo;
  basicInfo?: DescribeImageCommodityInfoResponseBodyDataBasicInfo;
  bussinessInfo?: DescribeImageCommodityInfoResponseBodyDataBussinessInfo;
  commodityCode?: string;
  protocolInfo?: DescribeImageCommodityInfoResponseBodyDataProtocolInfo;
  saleInfo?: DescribeImageCommodityInfoResponseBodyDataSaleInfo;
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      accessInfo: 'AccessInfo',
      basicInfo: 'BasicInfo',
      bussinessInfo: 'BussinessInfo',
      commodityCode: 'CommodityCode',
      protocolInfo: 'ProtocolInfo',
      saleInfo: 'SaleInfo',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInfo: DescribeImageCommodityInfoResponseBodyDataAccessInfo,
      basicInfo: DescribeImageCommodityInfoResponseBodyDataBasicInfo,
      bussinessInfo: DescribeImageCommodityInfoResponseBodyDataBussinessInfo,
      commodityCode: 'string',
      protocolInfo: DescribeImageCommodityInfoResponseBodyDataProtocolInfo,
      saleInfo: DescribeImageCommodityInfoResponseBodyDataSaleInfo,
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCommodityStatusResponseBodyData extends $tea.Model {
  auditStatus?: number;
  commodityCode?: string;
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      commodityCode: 'CommodityCode',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      commodityCode: 'string',
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageConstraintsResponseBodyDataBandwidth extends $tea.Model {
  max?: number;
  min?: number;
  step?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      step: 'Step',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      step: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageConstraintsResponseBodyDataCpuMemoryRange extends $tea.Model {
  cpuCoreCount?: number;
  memorySizeList?: number[];
  static names(): { [key: string]: string } {
    return {
      cpuCoreCount: 'CpuCoreCount',
      memorySizeList: 'MemorySizeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreCount: 'number',
      memorySizeList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageConstraintsResponseBodyDataDataDisk extends $tea.Model {
  max?: number;
  min?: number;
  step?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      step: 'Step',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      step: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageConstraintsResponseBodyDataSystemDisk extends $tea.Model {
  max?: number;
  min?: number;
  step?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      step: 'Step',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      step: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageConstraintsResponseBodyData extends $tea.Model {
  bandwidth?: DescribeImageConstraintsResponseBodyDataBandwidth;
  cpuMemoryRange?: DescribeImageConstraintsResponseBodyDataCpuMemoryRange[];
  dataDisk?: DescribeImageConstraintsResponseBodyDataDataDisk;
  systemDisk?: DescribeImageConstraintsResponseBodyDataSystemDisk;
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cpuMemoryRange: 'CpuMemoryRange',
      dataDisk: 'DataDisk',
      systemDisk: 'SystemDisk',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: DescribeImageConstraintsResponseBodyDataBandwidth,
      cpuMemoryRange: { 'type': 'array', 'itemType': DescribeImageConstraintsResponseBodyDataCpuMemoryRange },
      dataDisk: DescribeImageConstraintsResponseBodyDataDataDisk,
      systemDisk: DescribeImageConstraintsResponseBodyDataSystemDisk,
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyDataCustomizeFamily extends $tea.Model {
  globalKey?: string;
  text?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      globalKey: 'GlobalKey',
      text: 'Text',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalKey: 'string',
      text: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyDataInstanceTypes extends $tea.Model {
  text?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyData extends $tea.Model {
  customizeFamily?: DescribeInstanceTypesResponseBodyDataCustomizeFamily[];
  instanceTypes?: DescribeInstanceTypesResponseBodyDataInstanceTypes[];
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      customizeFamily: 'CustomizeFamily',
      instanceTypes: 'InstanceTypes',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizeFamily: { 'type': 'array', 'itemType': DescribeInstanceTypesResponseBodyDataCustomizeFamily },
      instanceTypes: { 'type': 'array', 'itemType': DescribeInstanceTypesResponseBodyDataInstanceTypes },
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListResourcesResponseBodyData extends $tea.Model {
  ossLink?: string[];
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      ossLink: 'OssLink',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossLink: { 'type': 'array', 'itemType': 'string' },
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReleasableRegionListResponseBodyData extends $tea.Model {
  regionName?: string;
  regionNo?: string;
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      regionName: 'RegionName',
      regionNo: 'RegionNo',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionName: 'string',
      regionNo: 'string',
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImageCommodityReviewResponseBodyData extends $tea.Model {
  commodityCode?: string;
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileResponseBodyData extends $tea.Model {
  trackId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      trackId: 'TrackId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trackId: 'string',
      url: 'string',
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
    this._endpoint = this.getEndpoint("marketplaceintl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addIntlImageProductVersionWithOptions(request: AddIntlImageProductVersionRequest, runtime: $Util.RuntimeOptions): Promise<AddIntlImageProductVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.accessDetail))) {
      bodyFlat["AccessDetail"] = request.accessDetail;
    }

    if (!Util.isUnset(request.ak)) {
      body["Ak"] = request.ak;
    }

    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset($tea.toMap(request.imageConstraint))) {
      bodyFlat["ImageConstraint"] = request.imageConstraint;
    }

    if (!Util.isUnset(request.releaseRegion)) {
      body["ReleaseRegion"] = request.releaseRegion;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddIntlImageProductVersion",
      version: "2022-07-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddIntlImageProductVersionResponse>(await this.callApi(params, req, runtime), new AddIntlImageProductVersionResponse({}));
  }

  async addIntlImageProductVersion(request: AddIntlImageProductVersionRequest): Promise<AddIntlImageProductVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIntlImageProductVersionWithOptions(request, runtime);
  }

  async createOrUpdateIntlImageWithOptions(request: CreateOrUpdateIntlImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateIntlImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.accessInfo))) {
      bodyFlat["AccessInfo"] = request.accessInfo;
    }

    if (!Util.isUnset(request.ak)) {
      body["Ak"] = request.ak;
    }

    if (!Util.isUnset($tea.toMap(request.basicInfo))) {
      bodyFlat["BasicInfo"] = request.basicInfo;
    }

    if (!Util.isUnset($tea.toMap(request.bussinessInfo))) {
      bodyFlat["BussinessInfo"] = request.bussinessInfo;
    }

    if (!Util.isUnset(request.callBackUrl)) {
      body["CallBackUrl"] = request.callBackUrl;
    }

    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset($tea.toMap(request.protocolInfo))) {
      bodyFlat["ProtocolInfo"] = request.protocolInfo;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset($tea.toMap(request.saleInfo))) {
      bodyFlat["SaleInfo"] = request.saleInfo;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrUpdateIntlImage",
      version: "2022-07-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrUpdateIntlImageResponse>(await this.callApi(params, req, runtime), new CreateOrUpdateIntlImageResponse({}));
  }

  async createOrUpdateIntlImage(request: CreateOrUpdateIntlImageRequest): Promise<CreateOrUpdateIntlImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateIntlImageWithOptions(request, runtime);
  }

  async createOrUpdateIntlImageByTemplateWithOptions(request: CreateOrUpdateIntlImageByTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateIntlImageByTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ak)) {
      body["Ak"] = request.ak;
    }

    if (!Util.isUnset(request.createOrUpdateIntlImageJson)) {
      body["CreateOrUpdateIntlImageJson"] = request.createOrUpdateIntlImageJson;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrUpdateIntlImageByTemplate",
      version: "2022-07-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrUpdateIntlImageByTemplateResponse>(await this.callApi(params, req, runtime), new CreateOrUpdateIntlImageByTemplateResponse({}));
  }

  async createOrUpdateIntlImageByTemplate(request: CreateOrUpdateIntlImageByTemplateRequest): Promise<CreateOrUpdateIntlImageByTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateIntlImageByTemplateWithOptions(request, runtime);
  }

  async describeAccessibleRegionsWithOptions(request: DescribeAccessibleRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessibleRegionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ak)) {
      body["Ak"] = request.ak;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccessibleRegions",
      version: "2022-07-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccessibleRegionsResponse>(await this.callApi(params, req, runtime), new DescribeAccessibleRegionsResponse({}));
  }

  async describeAccessibleRegions(request: DescribeAccessibleRegionsRequest): Promise<DescribeAccessibleRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessibleRegionsWithOptions(request, runtime);
  }

  async describeCategoriesWithOptions(request: DescribeCategoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCategoriesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ak)) {
      body["Ak"] = request.ak;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCategories",
      version: "2022-07-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCategoriesResponse>(await this.callApi(params, req, runtime), new DescribeCategoriesResponse({}));
  }

  async describeCategories(request: DescribeCategoriesRequest): Promise<DescribeCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCategoriesWithOptions(request, runtime);
  }

  async describeCountriesWithOptions(request: DescribeCountriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCountriesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ak)) {
      body["Ak"] = request.ak;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCountries",
      version: "2022-07-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCountriesResponse>(await this.callApi(params, req, runtime), new DescribeCountriesResponse({}));
  }

  async describeCountries(request: DescribeCountriesRequest): Promise<DescribeCountriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCountriesWithOptions(request, runtime);
  }

  async describeCustomImagesWithOptions(request: DescribeCustomImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomImagesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ak)) {
      body["Ak"] = request.ak;
    }

    if (!Util.isUnset(request.regionNo)) {
      body["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomImages",
      version: "2022-07-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomImagesResponse>(await this.callApi(params, req, runtime), new DescribeCustomImagesResponse({}));
  }

  async describeCustomImages(request: DescribeCustomImagesRequest): Promise<DescribeCustomImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomImagesWithOptions(request, runtime);
  }

  async describeImageCommodityInfoWithOptions(request: DescribeImageCommodityInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageCommodityInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ak)) {
      body["Ak"] = request.ak;
    }

    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageCommodityInfo",
      version: "2022-07-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageCommodityInfoResponse>(await this.callApi(params, req, runtime), new DescribeImageCommodityInfoResponse({}));
  }

  async describeImageCommodityInfo(request: DescribeImageCommodityInfoRequest): Promise<DescribeImageCommodityInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageCommodityInfoWithOptions(request, runtime);
  }

  async describeImageCommodityStatusWithOptions(request: DescribeImageCommodityStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageCommodityStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ak)) {
      body["Ak"] = request.ak;
    }

    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageCommodityStatus",
      version: "2022-07-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageCommodityStatusResponse>(await this.callApi(params, req, runtime), new DescribeImageCommodityStatusResponse({}));
  }

  async describeImageCommodityStatus(request: DescribeImageCommodityStatusRequest): Promise<DescribeImageCommodityStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageCommodityStatusWithOptions(request, runtime);
  }

  async describeImageConstraintsWithOptions(request: DescribeImageConstraintsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageConstraintsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ak)) {
      body["Ak"] = request.ak;
    }

    if (!Util.isUnset(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.regionNo)) {
      body["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageConstraints",
      version: "2022-07-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageConstraintsResponse>(await this.callApi(params, req, runtime), new DescribeImageConstraintsResponse({}));
  }

  async describeImageConstraints(request: DescribeImageConstraintsRequest): Promise<DescribeImageConstraintsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageConstraintsWithOptions(request, runtime);
  }

  async describeInstanceTypesWithOptions(request: DescribeInstanceTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTypesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ak)) {
      body["Ak"] = request.ak;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceTypes",
      version: "2022-07-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceTypesResponse>(await this.callApi(params, req, runtime), new DescribeInstanceTypesResponse({}));
  }

  async describeInstanceTypes(request: DescribeInstanceTypesRequest): Promise<DescribeInstanceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTypesWithOptions(request, runtime);
  }

  async describeListResourcesWithOptions(request: DescribeListResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeListResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ak)) {
      body["Ak"] = request.ak;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeListResources",
      version: "2022-07-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeListResourcesResponse>(await this.callApi(params, req, runtime), new DescribeListResourcesResponse({}));
  }

  async describeListResources(request: DescribeListResourcesRequest): Promise<DescribeListResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeListResourcesWithOptions(request, runtime);
  }

  async describeReleasableRegionListWithOptions(request: DescribeReleasableRegionListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReleasableRegionListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ak)) {
      body["Ak"] = request.ak;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeReleasableRegionList",
      version: "2022-07-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeReleasableRegionListResponse>(await this.callApi(params, req, runtime), new DescribeReleasableRegionListResponse({}));
  }

  async describeReleasableRegionList(request: DescribeReleasableRegionListRequest): Promise<DescribeReleasableRegionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReleasableRegionListWithOptions(request, runtime);
  }

  async submitImageCommodityReviewWithOptions(request: SubmitImageCommodityReviewRequest, runtime: $Util.RuntimeOptions): Promise<SubmitImageCommodityReviewResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ak)) {
      body["Ak"] = request.ak;
    }

    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitImageCommodityReview",
      version: "2022-07-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitImageCommodityReviewResponse>(await this.callApi(params, req, runtime), new SubmitImageCommodityReviewResponse({}));
  }

  async submitImageCommodityReview(request: SubmitImageCommodityReviewRequest): Promise<SubmitImageCommodityReviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitImageCommodityReviewWithOptions(request, runtime);
  }

  async uploadFileWithOptions(request: UploadFileRequest, runtime: $Util.RuntimeOptions): Promise<UploadFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ak)) {
      body["Ak"] = request.ak;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UploadFile",
      version: "2022-07-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadFileResponse>(await this.callApi(params, req, runtime), new UploadFileResponse({}));
  }

  async uploadFile(request: UploadFileRequest): Promise<UploadFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadFileWithOptions(request, runtime);
  }

  async uploadFileAdvance(request: UploadFileAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<UploadFileResponse> {
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

    let authConfig = new $RPC.Config({
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
      product: "marketplaceIntl",
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
    let uploadFileReq = new UploadFileRequest({ });
    OpenApiUtil.convert(request, uploadFileReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      uploadFileReq.fileUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let uploadFileResp = await this.uploadFileWithOptions(uploadFileReq, runtime);
    return uploadFileResp;
  }

}
