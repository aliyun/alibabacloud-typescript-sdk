// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateDeviceRequest extends $tea.Model {
  channelId?: string;
  city?: string;
  deviceModelNumber?: string;
  deviceName?: string;
  deviceType?: string;
  district?: string;
  extraMap?: { [key: string]: any };
  firstScene?: string;
  floor?: string;
  locationName?: string;
  mediaId?: string;
  outerCode?: string;
  province?: string;
  secondScene?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      city: 'City',
      deviceModelNumber: 'DeviceModelNumber',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      district: 'District',
      extraMap: 'ExtraMap',
      firstScene: 'FirstScene',
      floor: 'Floor',
      locationName: 'LocationName',
      mediaId: 'MediaId',
      outerCode: 'OuterCode',
      province: 'Province',
      secondScene: 'SecondScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      city: 'string',
      deviceModelNumber: 'string',
      deviceName: 'string',
      deviceType: 'string',
      district: 'string',
      extraMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      firstScene: 'string',
      floor: 'string',
      locationName: 'string',
      mediaId: 'string',
      outerCode: 'string',
      province: 'string',
      secondScene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceShrinkRequest extends $tea.Model {
  channelId?: string;
  city?: string;
  deviceModelNumber?: string;
  deviceName?: string;
  deviceType?: string;
  district?: string;
  extraMapShrink?: string;
  firstScene?: string;
  floor?: string;
  locationName?: string;
  mediaId?: string;
  outerCode?: string;
  province?: string;
  secondScene?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      city: 'City',
      deviceModelNumber: 'DeviceModelNumber',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      district: 'District',
      extraMapShrink: 'ExtraMap',
      firstScene: 'FirstScene',
      floor: 'Floor',
      locationName: 'LocationName',
      mediaId: 'MediaId',
      outerCode: 'OuterCode',
      province: 'Province',
      secondScene: 'SecondScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      city: 'string',
      deviceModelNumber: 'string',
      deviceName: 'string',
      deviceType: 'string',
      district: 'string',
      extraMapShrink: 'string',
      firstScene: 'string',
      floor: 'string',
      locationName: 'string',
      mediaId: 'string',
      outerCode: 'string',
      province: 'string',
      secondScene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDeviceResponseBody;
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
      body: CreateDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCreativeInfoRequest extends $tea.Model {
  accountNo?: string;
  bizId?: string;
  id?: number;
  mainId?: number;
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      bizId: 'BizId',
      id: 'Id',
      mainId: 'MainId',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'string',
      bizId: 'string',
      id: 'number',
      mainId: 'number',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCreativeInfoResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
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
      code: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCreativeInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCreativeInfoResponseBody;
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
      body: DeleteCreativeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrandPageRequest extends $tea.Model {
  accountNo?: string;
  mainId?: number;
  mainName?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      mainId: 'MainId',
      mainName: 'MainName',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'string',
      mainId: 'number',
      mainName: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrandPageResponseBody extends $tea.Model {
  code?: number;
  data?: GetBrandPageResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetBrandPageResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrandPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBrandPageResponseBody;
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
      body: GetBrandPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessIdRequest extends $tea.Model {
  businessId?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessIdResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  errorMessage?: string;
  requestId?: string;
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
      code: 'number',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBusinessIdResponseBody;
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
      body: GetBusinessIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreativeInfoRequest extends $tea.Model {
  accountNo?: string;
  bizId?: string;
  id?: number;
  mainId?: number;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      bizId: 'BizId',
      id: 'Id',
      mainId: 'MainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'string',
      bizId: 'string',
      id: 'number',
      mainId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreativeInfoResponseBody extends $tea.Model {
  code?: number;
  data?: GetCreativeInfoResponseBodyData;
  errorMessage?: string;
  requestId?: string;
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
      code: 'number',
      data: GetCreativeInfoResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreativeInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCreativeInfoResponseBody;
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
      body: GetCreativeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLeadsListPageRequest extends $tea.Model {
  componentId?: number;
  contentId?: number;
  creativeId?: number;
  endTime?: number;
  mainId?: number;
  pageIndex?: number;
  pageSize?: number;
  startTime?: number;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      contentId: 'ContentId',
      creativeId: 'CreativeId',
      endTime: 'EndTime',
      mainId: 'MainId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'number',
      contentId: 'number',
      creativeId: 'number',
      endTime: 'number',
      mainId: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      startTime: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLeadsListPageResponseBody extends $tea.Model {
  code?: number;
  data?: GetLeadsListPageResponseBodyData;
  errorMessage?: string;
  requestId?: string;
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
      code: 'number',
      data: GetLeadsListPageResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLeadsListPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLeadsListPageResponseBody;
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
      body: GetLeadsListPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainPartPageRequest extends $tea.Model {
  mainId?: number;
  mainName?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      mainId: 'MainId',
      mainName: 'MainName',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainId: 'number',
      mainName: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainPartPageResponseBody extends $tea.Model {
  code?: number;
  data?: GetMainPartPageResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetMainPartPageResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainPartPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMainPartPageResponseBody;
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
      body: GetMainPartPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadSignatureRequest extends $tea.Model {
  fileName?: string;
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadSignatureResponseBody extends $tea.Model {
  data?: GetOssUploadSignatureResponseBodyData;
  errorCode?: number;
  httpCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetOssUploadSignatureResponseBodyData,
      errorCode: 'number',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadSignatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOssUploadSignatureResponseBody;
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
      body: GetOssUploadSignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelatedByCreativeIdRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelatedByCreativeIdResponseBody extends $tea.Model {
  code?: number;
  data?: GetRelatedByCreativeIdResponseBodyData[];
  errorMessage?: string;
  requestId?: string;
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
      code: 'number',
      data: { 'type': 'array', 'itemType': GetRelatedByCreativeIdResponseBodyData },
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelatedByCreativeIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRelatedByCreativeIdResponseBody;
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
      body: GetRelatedByCreativeIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserFinishedAdRequest extends $tea.Model {
  adid?: number;
  clicklink?: string;
  id?: string;
  mediaid?: string;
  tagid?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      adid: 'Adid',
      clicklink: 'Clicklink',
      id: 'Id',
      mediaid: 'Mediaid',
      tagid: 'Tagid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adid: 'number',
      clicklink: 'string',
      id: 'string',
      mediaid: 'string',
      tagid: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserFinishedAdResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  ext?: { [key: string]: string };
  header?: GetUserFinishedAdResponseBodyHeader;
  requestId?: string;
  result?: GetUserFinishedAdResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      ext: 'Ext',
      header: 'Header',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      header: GetUserFinishedAdResponseBodyHeader,
      requestId: 'string',
      result: GetUserFinishedAdResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserFinishedAdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserFinishedAdResponseBody;
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
      body: GetUserFinishedAdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingRequest extends $tea.Model {
  app?: ListAdvertisingRequestApp;
  dealtype?: number;
  device?: ListAdvertisingRequestDevice;
  ext?: { [key: string]: any };
  id?: string;
  imp?: ListAdvertisingRequestImp[];
  test?: number;
  user?: ListAdvertisingRequestUser;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      dealtype: 'Dealtype',
      device: 'Device',
      ext: 'Ext',
      id: 'Id',
      imp: 'Imp',
      test: 'Test',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: ListAdvertisingRequestApp,
      dealtype: 'number',
      device: ListAdvertisingRequestDevice,
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      imp: { 'type': 'array', 'itemType': ListAdvertisingRequestImp },
      test: 'number',
      user: ListAdvertisingRequestUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingShrinkRequest extends $tea.Model {
  appShrink?: string;
  dealtype?: number;
  deviceShrink?: string;
  extShrink?: string;
  id?: string;
  impShrink?: string;
  test?: number;
  userShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appShrink: 'App',
      dealtype: 'Dealtype',
      deviceShrink: 'Device',
      extShrink: 'Ext',
      id: 'Id',
      impShrink: 'Imp',
      test: 'Test',
      userShrink: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appShrink: 'string',
      dealtype: 'number',
      deviceShrink: 'string',
      extShrink: 'string',
      id: 'string',
      impShrink: 'string',
      test: 'number',
      userShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingResponseBody extends $tea.Model {
  errorcode?: string;
  errormsg?: string;
  ext?: { [key: string]: string };
  header?: ListAdvertisingResponseBodyHeader;
  requestId?: string;
  result?: ListAdvertisingResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorcode: 'Errorcode',
      errormsg: 'Errormsg',
      ext: 'Ext',
      header: 'Header',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorcode: 'string',
      errormsg: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      header: ListAdvertisingResponseBodyHeader,
      requestId: 'string',
      result: ListAdvertisingResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAdvertisingResponseBody;
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
      body: ListAdvertisingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuditResultRequest extends $tea.Model {
  dspId?: string;
  ids?: string[];
  static names(): { [key: string]: string } {
    return {
      dspId: 'DspId',
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dspId: 'string',
      ids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuditResultResponseBody extends $tea.Model {
  message?: string;
  records?: QueryAuditResultResponseBodyRecords[];
  requestId?: string;
  status?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      records: 'Records',
      requestId: 'RequestId',
      status: 'Status',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      records: { 'type': 'array', 'itemType': QueryAuditResultResponseBodyRecords },
      requestId: 'string',
      status: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuditResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAuditResultResponseBody;
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
      body: QueryAuditResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportImpressionRequest extends $tea.Model {
  impressionlink?: string;
  static names(): { [key: string]: string } {
    return {
      impressionlink: 'Impressionlink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      impressionlink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportImpressionResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  ext?: { [key: string]: string };
  header?: ReportImpressionResponseBodyHeader;
  requestId?: string;
  result?: ReportImpressionResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      ext: 'Ext',
      header: 'Header',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      header: ReportImpressionResponseBodyHeader,
      requestId: 'string',
      result: ReportImpressionResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportImpressionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReportImpressionResponseBody;
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
      body: ReportImpressionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsRequest extends $tea.Model {
  nowStamp?: number;
  phoneNumbers?: string;
  signKey?: string;
  static names(): { [key: string]: string } {
    return {
      nowStamp: 'NowStamp',
      phoneNumbers: 'PhoneNumbers',
      signKey: 'SignKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nowStamp: 'number',
      phoneNumbers: 'string',
      signKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: number;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpCode: 'HttpCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'number',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendSmsResponseBody;
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
      body: SendSmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncInfoRequest extends $tea.Model {
  accountNo?: string;
  bizId?: string;
  chainValue?: string;
  componentIdList?: string;
  createUser?: string;
  id?: number;
  mainId?: number;
  name?: string;
  nextChainValue?: string;
  ossFileUrl?: string;
  pageId?: string;
  status?: number;
  updateUser?: string;
  url?: string;
  urlType?: number;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      bizId: 'BizId',
      chainValue: 'ChainValue',
      componentIdList: 'ComponentIdList',
      createUser: 'CreateUser',
      id: 'Id',
      mainId: 'MainId',
      name: 'Name',
      nextChainValue: 'NextChainValue',
      ossFileUrl: 'OssFileUrl',
      pageId: 'PageId',
      status: 'Status',
      updateUser: 'UpdateUser',
      url: 'Url',
      urlType: 'UrlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'string',
      bizId: 'string',
      chainValue: 'string',
      componentIdList: 'string',
      createUser: 'string',
      id: 'number',
      mainId: 'number',
      name: 'string',
      nextChainValue: 'string',
      ossFileUrl: 'string',
      pageId: 'string',
      status: 'number',
      updateUser: 'string',
      url: 'string',
      urlType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncInfoResponseBody extends $tea.Model {
  code?: number;
  data?: SyncInfoResponseBodyData;
  errorMessage?: string;
  requestId?: string;
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
      code: 'number',
      data: SyncInfoResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SyncInfoResponseBody;
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
      body: SyncInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdxCreativeContentRequest extends $tea.Model {
  ad?: UpdateAdxCreativeContentRequestAd[];
  dspId?: string;
  static names(): { [key: string]: string } {
    return {
      ad: 'Ad',
      dspId: 'DspId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ad: { 'type': 'array', 'itemType': UpdateAdxCreativeContentRequestAd },
      dspId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdxCreativeContentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdxCreativeContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAdxCreativeContentResponseBody;
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
      body: UpdateAdxCreativeContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingRequest extends $tea.Model {
  app?: VerifyAdvertisingRequestApp;
  dealtype?: number;
  device?: VerifyAdvertisingRequestDevice;
  ext?: { [key: string]: any };
  id?: string;
  imp?: VerifyAdvertisingRequestImp[];
  test?: number;
  user?: VerifyAdvertisingRequestUser;
  verifyad?: VerifyAdvertisingRequestVerifyad[];
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      dealtype: 'Dealtype',
      device: 'Device',
      ext: 'Ext',
      id: 'Id',
      imp: 'Imp',
      test: 'Test',
      user: 'User',
      verifyad: 'Verifyad',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: VerifyAdvertisingRequestApp,
      dealtype: 'number',
      device: VerifyAdvertisingRequestDevice,
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      imp: { 'type': 'array', 'itemType': VerifyAdvertisingRequestImp },
      test: 'number',
      user: VerifyAdvertisingRequestUser,
      verifyad: { 'type': 'array', 'itemType': VerifyAdvertisingRequestVerifyad },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingShrinkRequest extends $tea.Model {
  appShrink?: string;
  dealtype?: number;
  deviceShrink?: string;
  extShrink?: string;
  id?: string;
  impShrink?: string;
  test?: number;
  userShrink?: string;
  verifyadShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appShrink: 'App',
      dealtype: 'Dealtype',
      deviceShrink: 'Device',
      extShrink: 'Ext',
      id: 'Id',
      impShrink: 'Imp',
      test: 'Test',
      userShrink: 'User',
      verifyadShrink: 'Verifyad',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appShrink: 'string',
      dealtype: 'number',
      deviceShrink: 'string',
      extShrink: 'string',
      id: 'string',
      impShrink: 'string',
      test: 'number',
      userShrink: 'string',
      verifyadShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingResponseBody extends $tea.Model {
  errorcode?: string;
  errormsg?: string;
  ext?: { [key: string]: string };
  header?: VerifyAdvertisingResponseBodyHeader;
  requestId?: string;
  result?: VerifyAdvertisingResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorcode: 'Errorcode',
      errormsg: 'Errormsg',
      ext: 'Ext',
      header: 'Header',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorcode: 'string',
      errormsg: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      header: VerifyAdvertisingResponseBodyHeader,
      requestId: 'string',
      result: VerifyAdvertisingResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyAdvertisingResponseBody;
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
      body: VerifyAdvertisingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySmsCodeRequest extends $tea.Model {
  code?: string;
  nowStamp?: number;
  phoneNumbers?: string;
  signKey?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      nowStamp: 'NowStamp',
      phoneNumbers: 'PhoneNumbers',
      signKey: 'SignKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      nowStamp: 'number',
      phoneNumbers: 'string',
      signKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySmsCodeResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
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
      code: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySmsCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifySmsCodeResponseBody;
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
      body: VerifySmsCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrandPageResponseBodyDataList extends $tea.Model {
  accountNo?: string;
  accountType?: string;
  company?: string;
  mainId?: number;
  mainName?: string;
  parentMainId?: number;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      accountType: 'AccountType',
      company: 'Company',
      mainId: 'MainId',
      mainName: 'MainName',
      parentMainId: 'ParentMainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'string',
      accountType: 'string',
      company: 'string',
      mainId: 'number',
      mainName: 'string',
      parentMainId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrandPageResponseBodyDataPageInfo extends $tea.Model {
  page?: number;
  pageSize?: number;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      totalNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrandPageResponseBodyData extends $tea.Model {
  list?: GetBrandPageResponseBodyDataList[];
  pageInfo?: GetBrandPageResponseBodyDataPageInfo;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetBrandPageResponseBodyDataList },
      pageInfo: GetBrandPageResponseBodyDataPageInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreativeInfoResponseBodyData extends $tea.Model {
  accountNo?: string;
  chainValue?: string;
  componentIdList?: string;
  id?: number;
  mainId?: number;
  name?: string;
  pageId?: string;
  status?: number;
  taskCount?: number;
  url?: string;
  urlType?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      chainValue: 'ChainValue',
      componentIdList: 'ComponentIdList',
      id: 'Id',
      mainId: 'MainId',
      name: 'Name',
      pageId: 'PageId',
      status: 'Status',
      taskCount: 'TaskCount',
      url: 'Url',
      urlType: 'UrlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'string',
      chainValue: 'string',
      componentIdList: 'string',
      id: 'number',
      mainId: 'number',
      name: 'string',
      pageId: 'string',
      status: 'number',
      taskCount: 'number',
      url: 'string',
      urlType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLeadsListPageResponseBodyDataList extends $tea.Model {
  componentId?: string;
  contentId?: number;
  creativeId?: number;
  creativeName?: string;
  leadsDetail?: string;
  serialId?: number;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      contentId: 'ContentId',
      creativeId: 'CreativeId',
      creativeName: 'CreativeName',
      leadsDetail: 'LeadsDetail',
      serialId: 'SerialId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      contentId: 'number',
      creativeId: 'number',
      creativeName: 'string',
      leadsDetail: 'string',
      serialId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLeadsListPageResponseBodyDataPageInfo extends $tea.Model {
  page?: number;
  pageSize?: number;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      totalNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLeadsListPageResponseBodyData extends $tea.Model {
  list?: GetLeadsListPageResponseBodyDataList[];
  pageInfo?: GetLeadsListPageResponseBodyDataPageInfo;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetLeadsListPageResponseBodyDataList },
      pageInfo: GetLeadsListPageResponseBodyDataPageInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainPartPageResponseBodyDataListAccountTypeList extends $tea.Model {
  accountType?: string;
  accountTypeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      accountTypeDesc: 'AccountTypeDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      accountTypeDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainPartPageResponseBodyDataList extends $tea.Model {
  accountTypeList?: GetMainPartPageResponseBodyDataListAccountTypeList[];
  company?: string;
  mainId?: number;
  mainName?: string;
  static names(): { [key: string]: string } {
    return {
      accountTypeList: 'AccountTypeList',
      company: 'Company',
      mainId: 'MainId',
      mainName: 'MainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountTypeList: { 'type': 'array', 'itemType': GetMainPartPageResponseBodyDataListAccountTypeList },
      company: 'string',
      mainId: 'number',
      mainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainPartPageResponseBodyDataPageInfo extends $tea.Model {
  page?: number;
  pageSize?: number;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      totalNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainPartPageResponseBodyData extends $tea.Model {
  list?: GetMainPartPageResponseBodyDataList[];
  pageInfo?: GetMainPartPageResponseBodyDataPageInfo;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetMainPartPageResponseBodyDataList },
      pageInfo: GetMainPartPageResponseBodyDataPageInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadSignatureResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  expire?: string;
  host?: string;
  ossKey?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      expire: 'Expire',
      host: 'Host',
      ossKey: 'OssKey',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expire: 'string',
      host: 'string',
      ossKey: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelatedByCreativeIdResponseBodyData extends $tea.Model {
  contentId?: number;
  contentName?: string;
  taskId?: number;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      contentId: 'ContentId',
      contentName: 'ContentName',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentId: 'number',
      contentName: 'string',
      taskId: 'number',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserFinishedAdResponseBodyHeader extends $tea.Model {
  costTime?: number;
  rpcId?: string;
  traceId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      rpcId: 'RpcId',
      traceId: 'TraceId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'number',
      rpcId: 'string',
      traceId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserFinishedAdResponseBodyResult extends $tea.Model {
  commission?: string;
  id?: string;
  marketingType?: string;
  objective?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      commission: 'Commission',
      id: 'Id',
      marketingType: 'MarketingType',
      objective: 'Objective',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commission: 'string',
      id: 'string',
      marketingType: 'string',
      objective: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingRequestApp extends $tea.Model {
  ext?: { [key: string]: any };
  mediaid?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      mediaid: 'Mediaid',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mediaid: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingRequestDeviceGeo extends $tea.Model {
  city?: string;
  district?: string;
  lat?: number;
  lon?: number;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      district: 'District',
      lat: 'Lat',
      lon: 'Lon',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      district: 'string',
      lat: 'number',
      lon: 'number',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingRequestDevice extends $tea.Model {
  androidid?: string;
  androidmd5?: string;
  caid?: string;
  carrier?: string;
  connectiontype?: number;
  devicetype?: number;
  geo?: ListAdvertisingRequestDeviceGeo;
  idfa?: string;
  imei?: string;
  imeimd5?: string;
  ip?: string;
  language?: string;
  mac?: string;
  macmd5?: string;
  make?: string;
  model?: string;
  oaid?: string;
  os?: string;
  osv?: string;
  ua?: string;
  utdid?: string;
  static names(): { [key: string]: string } {
    return {
      androidid: 'Androidid',
      androidmd5: 'Androidmd5',
      caid: 'Caid',
      carrier: 'Carrier',
      connectiontype: 'Connectiontype',
      devicetype: 'Devicetype',
      geo: 'Geo',
      idfa: 'Idfa',
      imei: 'Imei',
      imeimd5: 'Imeimd5',
      ip: 'Ip',
      language: 'Language',
      mac: 'Mac',
      macmd5: 'Macmd5',
      make: 'Make',
      model: 'Model',
      oaid: 'Oaid',
      os: 'Os',
      osv: 'Osv',
      ua: 'Ua',
      utdid: 'Utdid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidid: 'string',
      androidmd5: 'string',
      caid: 'string',
      carrier: 'string',
      connectiontype: 'number',
      devicetype: 'number',
      geo: ListAdvertisingRequestDeviceGeo,
      idfa: 'string',
      imei: 'string',
      imeimd5: 'string',
      ip: 'string',
      language: 'string',
      mac: 'string',
      macmd5: 'string',
      make: 'string',
      model: 'string',
      oaid: 'string',
      os: 'string',
      osv: 'string',
      ua: 'string',
      utdid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingRequestImp extends $tea.Model {
  id?: string;
  tagid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      tagid: 'Tagid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      tagid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingRequestUser extends $tea.Model {
  id?: string;
  usertype?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      usertype: 'Usertype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      usertype: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingResponseBodyHeader extends $tea.Model {
  costTime?: number;
  rpcId?: string;
  traceId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      rpcId: 'RpcId',
      traceId: 'TraceId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'number',
      rpcId: 'string',
      traceId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingResponseBodyResultSeatbidBidAdsIcon extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingResponseBodyResultSeatbidBidAdsImages extends $tea.Model {
  desc?: string;
  format?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      format: 'Format',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      format: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingResponseBodyResultSeatbidBidAdsTrackers extends $tea.Model {
  imps?: string[];
  static names(): { [key: string]: string } {
    return {
      imps: 'Imps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imps: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingResponseBodyResultSeatbidBidAds extends $tea.Model {
  crid?: string;
  crurl?: string;
  icon?: ListAdvertisingResponseBodyResultSeatbidBidAdsIcon;
  id?: string;
  images?: ListAdvertisingResponseBodyResultSeatbidBidAdsImages[];
  interacttype?: number;
  labeltype?: string;
  landingurls?: string[];
  marketingtype?: string;
  objective?: string;
  price?: string;
  seat?: string;
  style?: string;
  title?: string;
  trackers?: ListAdvertisingResponseBodyResultSeatbidBidAdsTrackers;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      crid: 'Crid',
      crurl: 'Crurl',
      icon: 'Icon',
      id: 'Id',
      images: 'Images',
      interacttype: 'Interacttype',
      labeltype: 'Labeltype',
      landingurls: 'Landingurls',
      marketingtype: 'Marketingtype',
      objective: 'Objective',
      price: 'Price',
      seat: 'Seat',
      style: 'Style',
      title: 'Title',
      trackers: 'Trackers',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crid: 'string',
      crurl: 'string',
      icon: ListAdvertisingResponseBodyResultSeatbidBidAdsIcon,
      id: 'string',
      images: { 'type': 'array', 'itemType': ListAdvertisingResponseBodyResultSeatbidBidAdsImages },
      interacttype: 'number',
      labeltype: 'string',
      landingurls: { 'type': 'array', 'itemType': 'string' },
      marketingtype: 'string',
      objective: 'string',
      price: 'string',
      seat: 'string',
      style: 'string',
      title: 'string',
      trackers: ListAdvertisingResponseBodyResultSeatbidBidAdsTrackers,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingResponseBodyResultSeatbidBid extends $tea.Model {
  ads?: ListAdvertisingResponseBodyResultSeatbidBidAds[];
  impid?: string;
  static names(): { [key: string]: string } {
    return {
      ads: 'Ads',
      impid: 'Impid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ads: { 'type': 'array', 'itemType': ListAdvertisingResponseBodyResultSeatbidBidAds },
      impid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingResponseBodyResultSeatbid extends $tea.Model {
  bid?: ListAdvertisingResponseBodyResultSeatbidBid[];
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: { 'type': 'array', 'itemType': ListAdvertisingResponseBodyResultSeatbidBid },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvertisingResponseBodyResult extends $tea.Model {
  bidid?: string;
  id?: string;
  seatbid?: ListAdvertisingResponseBodyResultSeatbid[];
  static names(): { [key: string]: string } {
    return {
      bidid: 'Bidid',
      id: 'Id',
      seatbid: 'Seatbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bidid: 'string',
      id: 'string',
      seatbid: { 'type': 'array', 'itemType': ListAdvertisingResponseBodyResultSeatbid },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuditResultResponseBodyRecords extends $tea.Model {
  crid?: string;
  reason?: string;
  state?: number;
  static names(): { [key: string]: string } {
    return {
      crid: 'Crid',
      reason: 'Reason',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crid: 'string',
      reason: 'string',
      state: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportImpressionResponseBodyHeader extends $tea.Model {
  costTime?: number;
  rpcId?: string;
  traceId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      rpcId: 'RpcId',
      traceId: 'TraceId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'number',
      rpcId: 'string',
      traceId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportImpressionResponseBodyResult extends $tea.Model {
  bidid?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      bidid: 'Bidid',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bidid: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncInfoResponseBodyData extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdxCreativeContentRequestAdNativead extends $tea.Model {
  attrname?: string;
  attrvalue?: string;
  h?: number;
  mime?: string;
  w?: number;
  static names(): { [key: string]: string } {
    return {
      attrname: 'Attrname',
      attrvalue: 'Attrvalue',
      h: 'H',
      mime: 'Mime',
      w: 'W',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attrname: 'string',
      attrvalue: 'string',
      h: 'number',
      mime: 'string',
      w: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdxCreativeContentRequestAd extends $tea.Model {
  bundle?: string[];
  clicks?: string[];
  crid?: string;
  enddate?: string;
  imps?: string[];
  interacttype?: number;
  mediaIdList?: string[];
  nativead?: UpdateAdxCreativeContentRequestAdNativead[];
  op?: number;
  ostype?: string;
  prereview?: boolean;
  seat?: string;
  startdate?: string;
  template?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      bundle: 'Bundle',
      clicks: 'Clicks',
      crid: 'Crid',
      enddate: 'Enddate',
      imps: 'Imps',
      interacttype: 'Interacttype',
      mediaIdList: 'MediaIdList',
      nativead: 'Nativead',
      op: 'Op',
      ostype: 'Ostype',
      prereview: 'Prereview',
      seat: 'Seat',
      startdate: 'Startdate',
      template: 'Template',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundle: { 'type': 'array', 'itemType': 'string' },
      clicks: { 'type': 'array', 'itemType': 'string' },
      crid: 'string',
      enddate: 'string',
      imps: { 'type': 'array', 'itemType': 'string' },
      interacttype: 'number',
      mediaIdList: { 'type': 'array', 'itemType': 'string' },
      nativead: { 'type': 'array', 'itemType': UpdateAdxCreativeContentRequestAdNativead },
      op: 'number',
      ostype: 'string',
      prereview: 'boolean',
      seat: 'string',
      startdate: 'string',
      template: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingRequestApp extends $tea.Model {
  ext?: { [key: string]: any };
  mediaid?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      mediaid: 'Mediaid',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mediaid: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingRequestDeviceGeo extends $tea.Model {
  city?: string;
  district?: string;
  lat?: number;
  lon?: number;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      district: 'District',
      lat: 'Lat',
      lon: 'Lon',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      district: 'string',
      lat: 'number',
      lon: 'number',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingRequestDevice extends $tea.Model {
  androidid?: string;
  androidmd5?: string;
  caid?: string;
  carrier?: string;
  connectiontype?: number;
  devicetype?: number;
  geo?: VerifyAdvertisingRequestDeviceGeo;
  idfa?: string;
  imei?: string;
  imeimd5?: string;
  ip?: string;
  language?: string;
  mac?: string;
  macmd5?: string;
  make?: string;
  model?: string;
  oaid?: string;
  os?: string;
  osv?: string;
  ua?: string;
  utdid?: string;
  static names(): { [key: string]: string } {
    return {
      androidid: 'Androidid',
      androidmd5: 'Androidmd5',
      caid: 'Caid',
      carrier: 'Carrier',
      connectiontype: 'Connectiontype',
      devicetype: 'Devicetype',
      geo: 'Geo',
      idfa: 'Idfa',
      imei: 'Imei',
      imeimd5: 'Imeimd5',
      ip: 'Ip',
      language: 'Language',
      mac: 'Mac',
      macmd5: 'Macmd5',
      make: 'Make',
      model: 'Model',
      oaid: 'Oaid',
      os: 'Os',
      osv: 'Osv',
      ua: 'Ua',
      utdid: 'Utdid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidid: 'string',
      androidmd5: 'string',
      caid: 'string',
      carrier: 'string',
      connectiontype: 'number',
      devicetype: 'number',
      geo: VerifyAdvertisingRequestDeviceGeo,
      idfa: 'string',
      imei: 'string',
      imeimd5: 'string',
      ip: 'string',
      language: 'string',
      mac: 'string',
      macmd5: 'string',
      make: 'string',
      model: 'string',
      oaid: 'string',
      os: 'string',
      osv: 'string',
      ua: 'string',
      utdid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingRequestImp extends $tea.Model {
  id?: string;
  tagid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      tagid: 'Tagid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      tagid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingRequestUser extends $tea.Model {
  id?: string;
  usertype?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      usertype: 'Usertype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      usertype: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingRequestVerifyad extends $tea.Model {
  id?: string;
  seat?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      seat: 'Seat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      seat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingResponseBodyHeader extends $tea.Model {
  costTime?: number;
  rpcId?: string;
  traceId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      rpcId: 'RpcId',
      traceId: 'TraceId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'number',
      rpcId: 'string',
      traceId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingResponseBodyResultSeatbidBidAdsIcon extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingResponseBodyResultSeatbidBidAdsImages extends $tea.Model {
  desc?: string;
  format?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      format: 'Format',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      format: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingResponseBodyResultSeatbidBidAdsTrackers extends $tea.Model {
  imps?: string[];
  static names(): { [key: string]: string } {
    return {
      imps: 'Imps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imps: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingResponseBodyResultSeatbidBidAds extends $tea.Model {
  crid?: string;
  crurl?: string;
  icon?: VerifyAdvertisingResponseBodyResultSeatbidBidAdsIcon;
  id?: string;
  images?: VerifyAdvertisingResponseBodyResultSeatbidBidAdsImages[];
  interacttype?: number;
  labeltype?: string;
  landingurls?: string[];
  marketingtype?: string;
  objective?: string;
  price?: string;
  seat?: string;
  style?: string;
  title?: string;
  trackers?: VerifyAdvertisingResponseBodyResultSeatbidBidAdsTrackers;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      crid: 'Crid',
      crurl: 'Crurl',
      icon: 'Icon',
      id: 'Id',
      images: 'Images',
      interacttype: 'Interacttype',
      labeltype: 'Labeltype',
      landingurls: 'Landingurls',
      marketingtype: 'Marketingtype',
      objective: 'Objective',
      price: 'Price',
      seat: 'Seat',
      style: 'Style',
      title: 'Title',
      trackers: 'Trackers',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crid: 'string',
      crurl: 'string',
      icon: VerifyAdvertisingResponseBodyResultSeatbidBidAdsIcon,
      id: 'string',
      images: { 'type': 'array', 'itemType': VerifyAdvertisingResponseBodyResultSeatbidBidAdsImages },
      interacttype: 'number',
      labeltype: 'string',
      landingurls: { 'type': 'array', 'itemType': 'string' },
      marketingtype: 'string',
      objective: 'string',
      price: 'string',
      seat: 'string',
      style: 'string',
      title: 'string',
      trackers: VerifyAdvertisingResponseBodyResultSeatbidBidAdsTrackers,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingResponseBodyResultSeatbidBid extends $tea.Model {
  ads?: VerifyAdvertisingResponseBodyResultSeatbidBidAds[];
  impid?: string;
  static names(): { [key: string]: string } {
    return {
      ads: 'Ads',
      impid: 'Impid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ads: { 'type': 'array', 'itemType': VerifyAdvertisingResponseBodyResultSeatbidBidAds },
      impid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingResponseBodyResultSeatbid extends $tea.Model {
  bid?: VerifyAdvertisingResponseBodyResultSeatbidBid[];
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: { 'type': 'array', 'itemType': VerifyAdvertisingResponseBodyResultSeatbidBid },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAdvertisingResponseBodyResult extends $tea.Model {
  bidid?: string;
  id?: string;
  seatbid?: VerifyAdvertisingResponseBodyResultSeatbid[];
  static names(): { [key: string]: string } {
    return {
      bidid: 'Bidid',
      id: 'Id',
      seatbid: 'Seatbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bidid: 'string',
      id: 'string',
      seatbid: { 'type': 'array', 'itemType': VerifyAdvertisingResponseBodyResultSeatbid },
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
    this._endpoint = this.getEndpoint("imarketing", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createDeviceWithOptions(tmpReq: CreateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extraMap)) {
      request.extraMapShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extraMap, "ExtraMap", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.city)) {
      body["City"] = request.city;
    }

    if (!Util.isUnset(request.deviceModelNumber)) {
      body["DeviceModelNumber"] = request.deviceModelNumber;
    }

    if (!Util.isUnset(request.deviceName)) {
      body["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.deviceType)) {
      body["DeviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.district)) {
      body["District"] = request.district;
    }

    if (!Util.isUnset(request.extraMapShrink)) {
      body["ExtraMap"] = request.extraMapShrink;
    }

    if (!Util.isUnset(request.firstScene)) {
      body["FirstScene"] = request.firstScene;
    }

    if (!Util.isUnset(request.floor)) {
      body["Floor"] = request.floor;
    }

    if (!Util.isUnset(request.locationName)) {
      body["LocationName"] = request.locationName;
    }

    if (!Util.isUnset(request.mediaId)) {
      body["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.outerCode)) {
      body["OuterCode"] = request.outerCode;
    }

    if (!Util.isUnset(request.province)) {
      body["Province"] = request.province;
    }

    if (!Util.isUnset(request.secondScene)) {
      body["SecondScene"] = request.secondScene;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDevice",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDeviceResponse>(await this.callApi(params, req, runtime), new CreateDeviceResponse({}));
  }

  async createDevice(request: CreateDeviceRequest): Promise<CreateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceWithOptions(request, runtime);
  }

  async deleteCreativeInfoWithOptions(request: DeleteCreativeInfoRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCreativeInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountNo)) {
      query["AccountNo"] = request.accountNo;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.mainId)) {
      query["MainId"] = request.mainId;
    }

    if (!Util.isUnset(request.updateUser)) {
      query["UpdateUser"] = request.updateUser;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCreativeInfo",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCreativeInfoResponse>(await this.callApi(params, req, runtime), new DeleteCreativeInfoResponse({}));
  }

  async deleteCreativeInfo(request: DeleteCreativeInfoRequest): Promise<DeleteCreativeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCreativeInfoWithOptions(request, runtime);
  }

  async getBrandPageWithOptions(request: GetBrandPageRequest, runtime: $Util.RuntimeOptions): Promise<GetBrandPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountNo)) {
      query["AccountNo"] = request.accountNo;
    }

    if (!Util.isUnset(request.mainId)) {
      query["MainId"] = request.mainId;
    }

    if (!Util.isUnset(request.mainName)) {
      query["MainName"] = request.mainName;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBrandPage",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBrandPageResponse>(await this.callApi(params, req, runtime), new GetBrandPageResponse({}));
  }

  async getBrandPage(request: GetBrandPageRequest): Promise<GetBrandPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBrandPageWithOptions(request, runtime);
  }

  async getBusinessIdWithOptions(request: GetBusinessIdRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessId)) {
      query["BusinessId"] = request.businessId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessId",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessIdResponse>(await this.callApi(params, req, runtime), new GetBusinessIdResponse({}));
  }

  async getBusinessId(request: GetBusinessIdRequest): Promise<GetBusinessIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessIdWithOptions(request, runtime);
  }

  async getCreativeInfoWithOptions(request: GetCreativeInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetCreativeInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountNo)) {
      query["AccountNo"] = request.accountNo;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.mainId)) {
      query["MainId"] = request.mainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCreativeInfo",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCreativeInfoResponse>(await this.callApi(params, req, runtime), new GetCreativeInfoResponse({}));
  }

  async getCreativeInfo(request: GetCreativeInfoRequest): Promise<GetCreativeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCreativeInfoWithOptions(request, runtime);
  }

  async getLeadsListPageWithOptions(request: GetLeadsListPageRequest, runtime: $Util.RuntimeOptions): Promise<GetLeadsListPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.componentId)) {
      query["ComponentId"] = request.componentId;
    }

    if (!Util.isUnset(request.contentId)) {
      query["ContentId"] = request.contentId;
    }

    if (!Util.isUnset(request.creativeId)) {
      query["CreativeId"] = request.creativeId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.mainId)) {
      query["MainId"] = request.mainId;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLeadsListPage",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLeadsListPageResponse>(await this.callApi(params, req, runtime), new GetLeadsListPageResponse({}));
  }

  async getLeadsListPage(request: GetLeadsListPageRequest): Promise<GetLeadsListPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLeadsListPageWithOptions(request, runtime);
  }

  async getMainPartPageWithOptions(request: GetMainPartPageRequest, runtime: $Util.RuntimeOptions): Promise<GetMainPartPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mainId)) {
      query["MainId"] = request.mainId;
    }

    if (!Util.isUnset(request.mainName)) {
      query["MainName"] = request.mainName;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMainPartPage",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMainPartPageResponse>(await this.callApi(params, req, runtime), new GetMainPartPageResponse({}));
  }

  async getMainPartPage(request: GetMainPartPageRequest): Promise<GetMainPartPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMainPartPageWithOptions(request, runtime);
  }

  async getOssUploadSignatureWithOptions(request: GetOssUploadSignatureRequest, runtime: $Util.RuntimeOptions): Promise<GetOssUploadSignatureResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOssUploadSignature",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOssUploadSignatureResponse>(await this.callApi(params, req, runtime), new GetOssUploadSignatureResponse({}));
  }

  async getOssUploadSignature(request: GetOssUploadSignatureRequest): Promise<GetOssUploadSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOssUploadSignatureWithOptions(request, runtime);
  }

  async getRelatedByCreativeIdWithOptions(request: GetRelatedByCreativeIdRequest, runtime: $Util.RuntimeOptions): Promise<GetRelatedByCreativeIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRelatedByCreativeId",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRelatedByCreativeIdResponse>(await this.callApi(params, req, runtime), new GetRelatedByCreativeIdResponse({}));
  }

  async getRelatedByCreativeId(request: GetRelatedByCreativeIdRequest): Promise<GetRelatedByCreativeIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRelatedByCreativeIdWithOptions(request, runtime);
  }

  async getUserFinishedAdWithOptions(request: GetUserFinishedAdRequest, runtime: $Util.RuntimeOptions): Promise<GetUserFinishedAdResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserFinishedAd",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserFinishedAdResponse>(await this.callApi(params, req, runtime), new GetUserFinishedAdResponse({}));
  }

  async getUserFinishedAd(request: GetUserFinishedAdRequest): Promise<GetUserFinishedAdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserFinishedAdWithOptions(request, runtime);
  }

  async listAdvertisingWithOptions(tmpReq: ListAdvertisingRequest, runtime: $Util.RuntimeOptions): Promise<ListAdvertisingResponse> {
    Util.validateModel(tmpReq);
    let request = new ListAdvertisingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.app)) {
      request.appShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.app, "App", "json");
    }

    if (!Util.isUnset(tmpReq.device)) {
      request.deviceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.device, "Device", "json");
    }

    if (!Util.isUnset(tmpReq.ext)) {
      request.extShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ext, "Ext", "json");
    }

    if (!Util.isUnset(tmpReq.imp)) {
      request.impShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imp, "Imp", "json");
    }

    if (!Util.isUnset(tmpReq.user)) {
      request.userShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.user, "User", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAdvertising",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAdvertisingResponse>(await this.callApi(params, req, runtime), new ListAdvertisingResponse({}));
  }

  async listAdvertising(request: ListAdvertisingRequest): Promise<ListAdvertisingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAdvertisingWithOptions(request, runtime);
  }

  async queryAuditResultWithOptions(request: QueryAuditResultRequest, runtime: $Util.RuntimeOptions): Promise<QueryAuditResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dspId)) {
      query["DspId"] = request.dspId;
    }

    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAuditResult",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAuditResultResponse>(await this.callApi(params, req, runtime), new QueryAuditResultResponse({}));
  }

  async queryAuditResult(request: QueryAuditResultRequest): Promise<QueryAuditResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAuditResultWithOptions(request, runtime);
  }

  async reportImpressionWithOptions(request: ReportImpressionRequest, runtime: $Util.RuntimeOptions): Promise<ReportImpressionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.impressionlink)) {
      query["Impressionlink"] = request.impressionlink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportImpression",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportImpressionResponse>(await this.callApi(params, req, runtime), new ReportImpressionResponse({}));
  }

  async reportImpression(request: ReportImpressionRequest): Promise<ReportImpressionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportImpressionWithOptions(request, runtime);
  }

  async sendSmsWithOptions(request: SendSmsRequest, runtime: $Util.RuntimeOptions): Promise<SendSmsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nowStamp)) {
      query["NowStamp"] = request.nowStamp;
    }

    if (!Util.isUnset(request.phoneNumbers)) {
      query["PhoneNumbers"] = request.phoneNumbers;
    }

    if (!Util.isUnset(request.signKey)) {
      query["SignKey"] = request.signKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendSms",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendSmsResponse>(await this.callApi(params, req, runtime), new SendSmsResponse({}));
  }

  async sendSms(request: SendSmsRequest): Promise<SendSmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendSmsWithOptions(request, runtime);
  }

  async syncInfoWithOptions(request: SyncInfoRequest, runtime: $Util.RuntimeOptions): Promise<SyncInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountNo)) {
      query["AccountNo"] = request.accountNo;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.chainValue)) {
      query["ChainValue"] = request.chainValue;
    }

    if (!Util.isUnset(request.componentIdList)) {
      query["ComponentIdList"] = request.componentIdList;
    }

    if (!Util.isUnset(request.createUser)) {
      query["CreateUser"] = request.createUser;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.mainId)) {
      query["MainId"] = request.mainId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextChainValue)) {
      query["NextChainValue"] = request.nextChainValue;
    }

    if (!Util.isUnset(request.ossFileUrl)) {
      query["OssFileUrl"] = request.ossFileUrl;
    }

    if (!Util.isUnset(request.pageId)) {
      query["PageId"] = request.pageId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.updateUser)) {
      query["UpdateUser"] = request.updateUser;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    if (!Util.isUnset(request.urlType)) {
      query["UrlType"] = request.urlType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SyncInfo",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncInfoResponse>(await this.callApi(params, req, runtime), new SyncInfoResponse({}));
  }

  async syncInfo(request: SyncInfoRequest): Promise<SyncInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncInfoWithOptions(request, runtime);
  }

  async updateAdxCreativeContentWithOptions(request: UpdateAdxCreativeContentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAdxCreativeContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ad)) {
      query["Ad"] = request.ad;
    }

    if (!Util.isUnset(request.dspId)) {
      query["DspId"] = request.dspId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAdxCreativeContent",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAdxCreativeContentResponse>(await this.callApi(params, req, runtime), new UpdateAdxCreativeContentResponse({}));
  }

  async updateAdxCreativeContent(request: UpdateAdxCreativeContentRequest): Promise<UpdateAdxCreativeContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAdxCreativeContentWithOptions(request, runtime);
  }

  async verifyAdvertisingWithOptions(tmpReq: VerifyAdvertisingRequest, runtime: $Util.RuntimeOptions): Promise<VerifyAdvertisingResponse> {
    Util.validateModel(tmpReq);
    let request = new VerifyAdvertisingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.app)) {
      request.appShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.app, "App", "json");
    }

    if (!Util.isUnset(tmpReq.device)) {
      request.deviceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.device, "Device", "json");
    }

    if (!Util.isUnset(tmpReq.ext)) {
      request.extShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ext, "Ext", "json");
    }

    if (!Util.isUnset(tmpReq.imp)) {
      request.impShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imp, "Imp", "json");
    }

    if (!Util.isUnset(tmpReq.user)) {
      request.userShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.user, "User", "json");
    }

    if (!Util.isUnset(tmpReq.verifyad)) {
      request.verifyadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.verifyad, "Verifyad", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyAdvertising",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyAdvertisingResponse>(await this.callApi(params, req, runtime), new VerifyAdvertisingResponse({}));
  }

  async verifyAdvertising(request: VerifyAdvertisingRequest): Promise<VerifyAdvertisingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyAdvertisingWithOptions(request, runtime);
  }

  async verifySmsCodeWithOptions(request: VerifySmsCodeRequest, runtime: $Util.RuntimeOptions): Promise<VerifySmsCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.nowStamp)) {
      query["NowStamp"] = request.nowStamp;
    }

    if (!Util.isUnset(request.phoneNumbers)) {
      query["PhoneNumbers"] = request.phoneNumbers;
    }

    if (!Util.isUnset(request.signKey)) {
      query["SignKey"] = request.signKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifySmsCode",
      version: "2022-07-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifySmsCodeResponse>(await this.callApi(params, req, runtime), new VerifySmsCodeResponse({}));
  }

  async verifySmsCode(request: VerifySmsCodeRequest): Promise<VerifySmsCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifySmsCodeWithOptions(request, runtime);
  }

}
