// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetOcCompetitorsRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcCompetitorsResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcCompetitorsResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcCompetitorsResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcCompetitorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcCompetitorsResponseBody;
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
      body: GetOcCompetitorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcCoreTeamsRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcCoreTeamsResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcCoreTeamsResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcCoreTeamsResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcCoreTeamsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcCoreTeamsResponseBody;
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
      body: GetOcCoreTeamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcFinancingRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcFinancingResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcFinancingResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcFinancingResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcFinancingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcFinancingResponseBody;
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
      body: GetOcFinancingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcFuzzSearchRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcFuzzSearchResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcFuzzSearchResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcFuzzSearchResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcFuzzSearchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcFuzzSearchResponseBody;
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
      body: GetOcFuzzSearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcAbnormalOperationRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcAbnormalOperationResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcAbnormalOperationResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcAbnormalOperationResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcAbnormalOperationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcAbnormalOperationResponseBody;
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
      body: GetOcIcAbnormalOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcAdminLicenseRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcAdminLicenseResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcAdminLicenseResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcAdminLicenseResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcAdminLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcAdminLicenseResponseBody;
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
      body: GetOcIcAdminLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcBasicRequest extends $tea.Model {
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcBasicResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcBasicResponseBodyData;
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetOcIcBasicResponseBodyData,
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcBasicResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcBasicResponseBody;
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
      body: GetOcIcBasicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcBranchRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcBranchResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcBranchResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcBranchResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcBranchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcBranchResponseBody;
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
      body: GetOcIcBranchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcChangeRecordRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcChangeRecordResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcChangeRecordResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcChangeRecordResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcChangeRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcChangeRecordResponseBody;
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
      body: GetOcIcChangeRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcCheckupRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcCheckupResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcCheckupResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcCheckupResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcCheckupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcCheckupResponseBody;
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
      body: GetOcIcCheckupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcClearAccountRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcClearAccountResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcClearAccountResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcClearAccountResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcClearAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcClearAccountResponseBody;
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
      body: GetOcIcClearAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcDoubleCheckupRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcDoubleCheckupResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcDoubleCheckupResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcDoubleCheckupResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcDoubleCheckupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcDoubleCheckupResponseBody;
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
      body: GetOcIcDoubleCheckupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcEmployeeRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcEmployeeResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcEmployeeResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcEmployeeResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcEmployeeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcEmployeeResponseBody;
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
      body: GetOcIcEmployeeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcEquityFrozenRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcEquityFrozenResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcEquityFrozenResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcEquityFrozenResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcEquityFrozenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcEquityFrozenResponseBody;
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
      body: GetOcIcEquityFrozenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcEquityPledgeRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcEquityPledgeResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcEquityPledgeResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcEquityPledgeResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcEquityPledgeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcEquityPledgeResponseBody;
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
      body: GetOcIcEquityPledgeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcInvestmentRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcInvestmentResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcInvestmentResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcInvestmentResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcInvestmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcInvestmentResponseBody;
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
      body: GetOcIcInvestmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcKnowledgePropertyPledgeRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcKnowledgePropertyPledgeResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcKnowledgePropertyPledgeResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcKnowledgePropertyPledgeResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcKnowledgePropertyPledgeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcKnowledgePropertyPledgeResponseBody;
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
      body: GetOcIcKnowledgePropertyPledgeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcMortgageRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcMortgageResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcMortgageResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcMortgageResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcMortgageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcMortgageResponseBody;
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
      body: GetOcIcMortgageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcSeriousOffenseRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcSeriousOffenseResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcSeriousOffenseResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcSeriousOffenseResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcSeriousOffenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcSeriousOffenseResponseBody;
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
      body: GetOcIcSeriousOffenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcShareholderRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcShareholderResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcShareholderResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcShareholderResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcShareholderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcShareholderResponseBody;
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
      body: GetOcIcShareholderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcSimpleCancelRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcSimpleCancelResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIcSimpleCancelResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIcSimpleCancelResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcSimpleCancelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIcSimpleCancelResponseBody;
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
      body: GetOcIcSimpleCancelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpCertificateRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpCertificateResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIpCertificateResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIpCertificateResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIpCertificateResponseBody;
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
      body: GetOcIpCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpDomainRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpDomainResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIpDomainResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIpDomainResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIpDomainResponseBody;
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
      body: GetOcIpDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpPatentRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpPatentResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIpPatentResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIpPatentResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpPatentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIpPatentResponseBody;
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
      body: GetOcIpPatentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpSoftwareCopyrightRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpSoftwareCopyrightResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIpSoftwareCopyrightResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIpSoftwareCopyrightResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpSoftwareCopyrightResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIpSoftwareCopyrightResponseBody;
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
      body: GetOcIpSoftwareCopyrightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpTrademarkRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpTrademarkResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIpTrademarkResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIpTrademarkResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpTrademarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIpTrademarkResponseBody;
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
      body: GetOcIpTrademarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpWorksCopyrightRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpWorksCopyrightResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcIpWorksCopyrightResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcIpWorksCopyrightResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpWorksCopyrightResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcIpWorksCopyrightResponseBody;
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
      body: GetOcIpWorksCopyrightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeAuctionRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeAuctionResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcJusticeAuctionResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcJusticeAuctionResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeAuctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcJusticeAuctionResponseBody;
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
      body: GetOcJusticeAuctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeCaseFilingRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeCaseFilingResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcJusticeCaseFilingResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcJusticeCaseFilingResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeCaseFilingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcJusticeCaseFilingResponseBody;
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
      body: GetOcJusticeCaseFilingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeCourtAnnouncementRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeCourtAnnouncementResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcJusticeCourtAnnouncementResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcJusticeCourtAnnouncementResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeCourtAnnouncementResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcJusticeCourtAnnouncementResponseBody;
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
      body: GetOcJusticeCourtAnnouncementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeCourtNoticeRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeCourtNoticeResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcJusticeCourtNoticeResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcJusticeCourtNoticeResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeCourtNoticeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcJusticeCourtNoticeResponseBody;
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
      body: GetOcJusticeCourtNoticeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeDishonestyRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeDishonestyResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcJusticeDishonestyResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcJusticeDishonestyResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeDishonestyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcJusticeDishonestyResponseBody;
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
      body: GetOcJusticeDishonestyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeExecutedRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeExecutedResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcJusticeExecutedResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcJusticeExecutedResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeExecutedResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcJusticeExecutedResponseBody;
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
      body: GetOcJusticeExecutedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeJudgementDocRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeJudgementDocResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcJusticeJudgementDocResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcJusticeJudgementDocResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeJudgementDocResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcJusticeJudgementDocResponseBody;
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
      body: GetOcJusticeJudgementDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeLimitHighConsumeRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeLimitHighConsumeResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcJusticeLimitHighConsumeResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcJusticeLimitHighConsumeResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeLimitHighConsumeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcJusticeLimitHighConsumeResponseBody;
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
      body: GetOcJusticeLimitHighConsumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeTerminalCaseRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeTerminalCaseResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcJusticeTerminalCaseResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcJusticeTerminalCaseResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeTerminalCaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcJusticeTerminalCaseResponseBody;
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
      body: GetOcJusticeTerminalCaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcListedCompanyRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcListedCompanyResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcListedCompanyResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcListedCompanyResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcListedCompanyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcListedCompanyResponseBody;
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
      body: GetOcListedCompanyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeAdminPunishmentRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeAdminPunishmentResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcNegativeAdminPunishmentResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcNegativeAdminPunishmentResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeAdminPunishmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcNegativeAdminPunishmentResponseBody;
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
      body: GetOcNegativeAdminPunishmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeCustomsPunishmentRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeCustomsPunishmentResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcNegativeCustomsPunishmentResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcNegativeCustomsPunishmentResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeCustomsPunishmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcNegativeCustomsPunishmentResponseBody;
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
      body: GetOcNegativeCustomsPunishmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeEnvironmentPunishmentRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeEnvironmentPunishmentResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcNegativeEnvironmentPunishmentResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcNegativeEnvironmentPunishmentResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeEnvironmentPunishmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcNegativeEnvironmentPunishmentResponseBody;
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
      body: GetOcNegativeEnvironmentPunishmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeFoodDrugPunishmentRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeFoodDrugPunishmentResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcNegativeFoodDrugPunishmentResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcNegativeFoodDrugPunishmentResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeFoodDrugPunishmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcNegativeFoodDrugPunishmentResponseBody;
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
      body: GetOcNegativeFoodDrugPunishmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeQualityPunishmentRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeQualityPunishmentResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcNegativeQualityPunishmentResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcNegativeQualityPunishmentResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeQualityPunishmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcNegativeQualityPunishmentResponseBody;
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
      body: GetOcNegativeQualityPunishmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationBiddingRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationBiddingResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcOperationBiddingResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcOperationBiddingResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationBiddingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcOperationBiddingResponseBody;
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
      body: GetOcOperationBiddingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationCustomsRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationCustomsResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcOperationCustomsResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcOperationCustomsResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationCustomsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcOperationCustomsResponseBody;
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
      body: GetOcOperationCustomsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationPurchaseLandRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationPurchaseLandResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcOperationPurchaseLandResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcOperationPurchaseLandResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationPurchaseLandResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcOperationPurchaseLandResponseBody;
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
      body: GetOcOperationPurchaseLandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationRecruitmentRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationRecruitmentResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcOperationRecruitmentResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcOperationRecruitmentResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationRecruitmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcOperationRecruitmentResponseBody;
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
      body: GetOcOperationRecruitmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcProductBandRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcProductBandResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcProductBandResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcProductBandResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcProductBandResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcProductBandResponseBody;
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
      body: GetOcProductBandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxAbnormalRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxAbnormalResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcTaxAbnormalResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcTaxAbnormalResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxAbnormalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcTaxAbnormalResponseBody;
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
      body: GetOcTaxAbnormalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxClassARequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxClassAResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcTaxClassAResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcTaxClassAResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxClassAResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcTaxClassAResponseBody;
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
      body: GetOcTaxClassAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxGeneralTaxpayerRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxGeneralTaxpayerResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcTaxGeneralTaxpayerResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcTaxGeneralTaxpayerResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxGeneralTaxpayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcTaxGeneralTaxpayerResponseBody;
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
      body: GetOcTaxGeneralTaxpayerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxIllegalRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxIllegalResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcTaxIllegalResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcTaxIllegalResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxIllegalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcTaxIllegalResponseBody;
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
      body: GetOcTaxIllegalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxOverdueRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxOverdueResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcTaxOverdueResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcTaxOverdueResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxOverdueResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcTaxOverdueResponseBody;
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
      body: GetOcTaxOverdueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxPunishmentRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxPunishmentResponseBody extends $tea.Model {
  code?: string;
  data?: GetOcTaxPunishmentResponseBodyData[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOcTaxPunishmentResponseBodyData },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxPunishmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOcTaxPunishmentResponseBody;
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
      body: GetOcTaxPunishmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQccCertificationDetailByIdRequest extends $tea.Model {
  certId?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQccCertificationDetailByIdResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQccCertificationDetailByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQccCertificationDetailByIdResponseBody;
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
      body: GetQccCertificationDetailByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQccSearchCertificationRequest extends $tea.Model {
  certCategory?: string;
  entName?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      certCategory: 'CertCategory',
      entName: 'EntName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCategory: 'string',
      entName: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQccSearchCertificationResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any }[];
  message?: string;
  pageIndex?: number;
  pageNum?: number;
  requestId?: string;
  success?: boolean;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      success: 'Success',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      pageIndex: 'number',
      pageNum: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQccSearchCertificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQccSearchCertificationResponseBody;
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
      body: GetQccSearchCertificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcCompetitorsResponseBodyData extends $tea.Model {
  competitionBrandIntroduction?: string;
  competitionEntAddress?: string;
  competitionEntEsDate?: string;
  competitionEntFinTurn?: string;
  competitionEntName?: string;
  competitionIntroduction?: string;
  competitionLogoUrl?: string;
  competitionProductName?: string;
  competitionTag?: string;
  competitionWebsite?: string;
  entName?: string;
  static names(): { [key: string]: string } {
    return {
      competitionBrandIntroduction: 'CompetitionBrandIntroduction',
      competitionEntAddress: 'CompetitionEntAddress',
      competitionEntEsDate: 'CompetitionEntEsDate',
      competitionEntFinTurn: 'CompetitionEntFinTurn',
      competitionEntName: 'CompetitionEntName',
      competitionIntroduction: 'CompetitionIntroduction',
      competitionLogoUrl: 'CompetitionLogoUrl',
      competitionProductName: 'CompetitionProductName',
      competitionTag: 'CompetitionTag',
      competitionWebsite: 'CompetitionWebsite',
      entName: 'EntName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      competitionBrandIntroduction: 'string',
      competitionEntAddress: 'string',
      competitionEntEsDate: 'string',
      competitionEntFinTurn: 'string',
      competitionEntName: 'string',
      competitionIntroduction: 'string',
      competitionLogoUrl: 'string',
      competitionProductName: 'string',
      competitionTag: 'string',
      competitionWebsite: 'string',
      entName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcCoreTeamsResponseBodyData extends $tea.Model {
  entName?: string;
  memberIntroduction?: string;
  memberName?: string;
  memberPosition?: string;
  static names(): { [key: string]: string } {
    return {
      entName: 'EntName',
      memberIntroduction: 'MemberIntroduction',
      memberName: 'MemberName',
      memberPosition: 'MemberPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entName: 'string',
      memberIntroduction: 'string',
      memberName: 'string',
      memberPosition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcFinancingResponseBodyData extends $tea.Model {
  entName?: string;
  finAmount?: string;
  finDate?: string;
  finTurn?: string;
  investors?: string;
  static names(): { [key: string]: string } {
    return {
      entName: 'EntName',
      finAmount: 'FinAmount',
      finDate: 'FinDate',
      finTurn: 'FinTurn',
      investors: 'Investors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entName: 'string',
      finAmount: 'string',
      finDate: 'string',
      finTurn: 'string',
      investors: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcFuzzSearchResponseBodyData extends $tea.Model {
  entName?: string;
  static names(): { [key: string]: string } {
    return {
      entName: 'EntName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcAbnormalOperationResponseBodyData extends $tea.Model {
  inDate?: string;
  inDepartment?: string;
  inReason?: string;
  outDate?: string;
  outDepartment?: string;
  outReason?: string;
  static names(): { [key: string]: string } {
    return {
      inDate: 'InDate',
      inDepartment: 'InDepartment',
      inReason: 'InReason',
      outDate: 'OutDate',
      outDepartment: 'OutDepartment',
      outReason: 'OutReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inDate: 'string',
      inDepartment: 'string',
      inReason: 'string',
      outDate: 'string',
      outDepartment: 'string',
      outReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcAdminLicenseResponseBodyData extends $tea.Model {
  content?: string;
  department?: string;
  endDate?: string;
  licenseName?: string;
  licenseNo?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      department: 'Department',
      endDate: 'EndDate',
      licenseName: 'LicenseName',
      licenseNo: 'LicenseNo',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      department: 'string',
      endDate: 'string',
      licenseName: 'string',
      licenseNo: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcBasicResponseBodyData extends $tea.Model {
  checkDate?: string;
  entAddress?: string;
  entBrief?: string;
  entName?: string;
  entNameEng?: string;
  entStatus?: string;
  entType?: string;
  esDate?: string;
  formerNames?: string;
  industryNameLv1?: string;
  industryNameLv2?: string;
  insuredNum?: string;
  legalName?: string;
  licenseNumber?: string;
  opFrom?: string;
  opScope?: string;
  opTo?: string;
  orgNo?: string;
  recCap?: string;
  regCap?: string;
  regOrg?: string;
  regOrgCity?: string;
  regOrgDistrict?: string;
  regOrgProvince?: string;
  socialCreditCode?: string;
  staffNum?: string;
  taxNum?: string;
  static names(): { [key: string]: string } {
    return {
      checkDate: 'CheckDate',
      entAddress: 'EntAddress',
      entBrief: 'EntBrief',
      entName: 'EntName',
      entNameEng: 'EntNameEng',
      entStatus: 'EntStatus',
      entType: 'EntType',
      esDate: 'EsDate',
      formerNames: 'FormerNames',
      industryNameLv1: 'IndustryNameLv1',
      industryNameLv2: 'IndustryNameLv2',
      insuredNum: 'InsuredNum',
      legalName: 'LegalName',
      licenseNumber: 'LicenseNumber',
      opFrom: 'OpFrom',
      opScope: 'OpScope',
      opTo: 'OpTo',
      orgNo: 'OrgNo',
      recCap: 'RecCap',
      regCap: 'RegCap',
      regOrg: 'RegOrg',
      regOrgCity: 'RegOrgCity',
      regOrgDistrict: 'RegOrgDistrict',
      regOrgProvince: 'RegOrgProvince',
      socialCreditCode: 'SocialCreditCode',
      staffNum: 'StaffNum',
      taxNum: 'TaxNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkDate: 'string',
      entAddress: 'string',
      entBrief: 'string',
      entName: 'string',
      entNameEng: 'string',
      entStatus: 'string',
      entType: 'string',
      esDate: 'string',
      formerNames: 'string',
      industryNameLv1: 'string',
      industryNameLv2: 'string',
      insuredNum: 'string',
      legalName: 'string',
      licenseNumber: 'string',
      opFrom: 'string',
      opScope: 'string',
      opTo: 'string',
      orgNo: 'string',
      recCap: 'string',
      regCap: 'string',
      regOrg: 'string',
      regOrgCity: 'string',
      regOrgDistrict: 'string',
      regOrgProvince: 'string',
      socialCreditCode: 'string',
      staffNum: 'string',
      taxNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcBranchResponseBodyData extends $tea.Model {
  entName?: string;
  entStatus?: string;
  esDate?: string;
  operName?: string;
  static names(): { [key: string]: string } {
    return {
      entName: 'EntName',
      entStatus: 'EntStatus',
      esDate: 'EsDate',
      operName: 'OperName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entName: 'string',
      entStatus: 'string',
      esDate: 'string',
      operName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcChangeRecordResponseBodyData extends $tea.Model {
  afterContent?: string;
  beforeContent?: string;
  changeDate?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      afterContent: 'AfterContent',
      beforeContent: 'BeforeContent',
      changeDate: 'ChangeDate',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterContent: 'string',
      beforeContent: 'string',
      changeDate: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcCheckupResponseBodyData extends $tea.Model {
  date?: string;
  department?: string;
  result?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      department: 'Department',
      result: 'Result',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      department: 'string',
      result: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcClearAccountResponseBodyData extends $tea.Model {
  leader?: string;
  member?: string;
  static names(): { [key: string]: string } {
    return {
      leader: 'Leader',
      member: 'Member',
    };
  }

  static types(): { [key: string]: any } {
    return {
      leader: 'string',
      member: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcDoubleCheckupResponseBodyData extends $tea.Model {
  inspectDate?: string;
  inspectDepartment?: string;
  inspectItem?: string;
  inspectPlanId?: string;
  inspectPlanName?: string;
  inspectResult?: string;
  inspectTaskId?: string;
  inspectTaskName?: string;
  inspectTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      inspectDate: 'InspectDate',
      inspectDepartment: 'InspectDepartment',
      inspectItem: 'InspectItem',
      inspectPlanId: 'InspectPlanId',
      inspectPlanName: 'InspectPlanName',
      inspectResult: 'InspectResult',
      inspectTaskId: 'InspectTaskId',
      inspectTaskName: 'InspectTaskName',
      inspectTypeName: 'InspectTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectDate: 'string',
      inspectDepartment: 'string',
      inspectItem: 'string',
      inspectPlanId: 'string',
      inspectPlanName: 'string',
      inspectResult: 'string',
      inspectTaskId: 'string',
      inspectTaskName: 'string',
      inspectTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcEmployeeResponseBodyData extends $tea.Model {
  jobTitle?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      jobTitle: 'JobTitle',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobTitle: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcEquityFrozenResponseBodyData extends $tea.Model {
  freezeAmount?: string;
  freezeCardNum?: string;
  freezeCardType?: string;
  freezeCourt?: string;
  freezeEndDate?: string;
  freezeExecItem?: string;
  freezeExecPerson?: string;
  freezeNoticeNum?: string;
  freezePublishDate?: string;
  freezeStartDate?: string;
  status?: string;
  unfreezeAdjustNum?: string;
  unfreezeCourt?: string;
  unfreezeDate?: string;
  unfreezeReason?: string;
  static names(): { [key: string]: string } {
    return {
      freezeAmount: 'FreezeAmount',
      freezeCardNum: 'FreezeCardNum',
      freezeCardType: 'FreezeCardType',
      freezeCourt: 'FreezeCourt',
      freezeEndDate: 'FreezeEndDate',
      freezeExecItem: 'FreezeExecItem',
      freezeExecPerson: 'FreezeExecPerson',
      freezeNoticeNum: 'FreezeNoticeNum',
      freezePublishDate: 'FreezePublishDate',
      freezeStartDate: 'FreezeStartDate',
      status: 'Status',
      unfreezeAdjustNum: 'UnfreezeAdjustNum',
      unfreezeCourt: 'UnfreezeCourt',
      unfreezeDate: 'UnfreezeDate',
      unfreezeReason: 'UnfreezeReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freezeAmount: 'string',
      freezeCardNum: 'string',
      freezeCardType: 'string',
      freezeCourt: 'string',
      freezeEndDate: 'string',
      freezeExecItem: 'string',
      freezeExecPerson: 'string',
      freezeNoticeNum: 'string',
      freezePublishDate: 'string',
      freezeStartDate: 'string',
      status: 'string',
      unfreezeAdjustNum: 'string',
      unfreezeCourt: 'string',
      unfreezeDate: 'string',
      unfreezeReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcEquityPledgeResponseBodyData extends $tea.Model {
  number?: string;
  pawnee?: string;
  pawneeIdentifyNo?: string;
  pledgor?: string;
  pledgorAmount?: string;
  pledgorIdentifyNo?: string;
  publicDate?: string;
  regDate?: string;
  relatedComp?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      pawnee: 'Pawnee',
      pawneeIdentifyNo: 'PawneeIdentifyNo',
      pledgor: 'Pledgor',
      pledgorAmount: 'PledgorAmount',
      pledgorIdentifyNo: 'PledgorIdentifyNo',
      publicDate: 'PublicDate',
      regDate: 'RegDate',
      relatedComp: 'RelatedComp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      pawnee: 'string',
      pawneeIdentifyNo: 'string',
      pledgor: 'string',
      pledgorAmount: 'string',
      pledgorIdentifyNo: 'string',
      publicDate: 'string',
      regDate: 'string',
      relatedComp: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcInvestmentResponseBodyData extends $tea.Model {
  entName?: string;
  investCreditCode?: string;
  investEsDate?: string;
  investLegalName?: string;
  investLicenseNo?: string;
  investName?: string;
  investRegCap?: string;
  investStatus?: string;
  shouldCap?: string;
  stockPercentage?: string;
  static names(): { [key: string]: string } {
    return {
      entName: 'EntName',
      investCreditCode: 'InvestCreditCode',
      investEsDate: 'InvestEsDate',
      investLegalName: 'InvestLegalName',
      investLicenseNo: 'InvestLicenseNo',
      investName: 'InvestName',
      investRegCap: 'InvestRegCap',
      investStatus: 'InvestStatus',
      shouldCap: 'ShouldCap',
      stockPercentage: 'StockPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entName: 'string',
      investCreditCode: 'string',
      investEsDate: 'string',
      investLegalName: 'string',
      investLicenseNo: 'string',
      investName: 'string',
      investRegCap: 'string',
      investStatus: 'string',
      shouldCap: 'string',
      stockPercentage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcKnowledgePropertyPledgeResponseBodyData extends $tea.Model {
  name?: string;
  number?: string;
  pawnee?: string;
  period?: string;
  pledgor?: string;
  publicDate?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      number: 'Number',
      pawnee: 'Pawnee',
      period: 'Period',
      pledgor: 'Pledgor',
      publicDate: 'PublicDate',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      number: 'string',
      pawnee: 'string',
      period: 'string',
      pledgor: 'string',
      publicDate: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcMortgageResponseBodyData extends $tea.Model {
  debitAmount?: string;
  debitPeriod?: string;
  debitScope?: string;
  debitType?: string;
  department?: string;
  guarantees?: string;
  identifyNo?: string;
  identifyType?: string;
  mortgageesName?: string;
  number?: string;
  onecompId?: string;
  publicDate?: string;
  regDate?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      debitAmount: 'DebitAmount',
      debitPeriod: 'DebitPeriod',
      debitScope: 'DebitScope',
      debitType: 'DebitType',
      department: 'Department',
      guarantees: 'Guarantees',
      identifyNo: 'IdentifyNo',
      identifyType: 'IdentifyType',
      mortgageesName: 'MortgageesName',
      number: 'Number',
      onecompId: 'OnecompId',
      publicDate: 'PublicDate',
      regDate: 'RegDate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debitAmount: 'string',
      debitPeriod: 'string',
      debitScope: 'string',
      debitType: 'string',
      department: 'string',
      guarantees: 'string',
      identifyNo: 'string',
      identifyType: 'string',
      mortgageesName: 'string',
      number: 'string',
      onecompId: 'string',
      publicDate: 'string',
      regDate: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcSeriousOffenseResponseBodyData extends $tea.Model {
  entName?: string;
  inDate?: string;
  inDepartment?: string;
  inReason?: string;
  outDate?: string;
  outDepartment?: string;
  outReason?: string;
  static names(): { [key: string]: string } {
    return {
      entName: 'EntName',
      inDate: 'InDate',
      inDepartment: 'InDepartment',
      inReason: 'InReason',
      outDate: 'OutDate',
      outDepartment: 'OutDepartment',
      outReason: 'OutReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entName: 'string',
      inDate: 'string',
      inDepartment: 'string',
      inReason: 'string',
      outDate: 'string',
      outDepartment: 'string',
      outReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcShareholderResponseBodyData extends $tea.Model {
  shouldCap?: string;
  shouldCapTime?: string;
  stockName?: string;
  stockPercent?: string;
  stockType?: string;
  static names(): { [key: string]: string } {
    return {
      shouldCap: 'ShouldCap',
      shouldCapTime: 'ShouldCapTime',
      stockName: 'StockName',
      stockPercent: 'StockPercent',
      stockType: 'StockType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shouldCap: 'string',
      shouldCapTime: 'string',
      stockName: 'string',
      stockPercent: 'string',
      stockType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIcSimpleCancelResponseBodyData extends $tea.Model {
  department?: string;
  entName?: string;
  noticePeriod?: string;
  scaContent?: string;
  scaDate?: string;
  scaProposer?: string;
  scaResult?: string;
  scaResultDate?: string;
  socialCreditCode?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      entName: 'EntName',
      noticePeriod: 'NoticePeriod',
      scaContent: 'ScaContent',
      scaDate: 'ScaDate',
      scaProposer: 'ScaProposer',
      scaResult: 'ScaResult',
      scaResultDate: 'ScaResultDate',
      socialCreditCode: 'SocialCreditCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      entName: 'string',
      noticePeriod: 'string',
      scaContent: 'string',
      scaDate: 'string',
      scaProposer: 'string',
      scaResult: 'string',
      scaResultDate: 'string',
      socialCreditCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpCertificateResponseBodyData extends $tea.Model {
  authorizeDate?: string;
  authorizeDepartment?: string;
  certNum?: string;
  certScope?: string;
  certType?: string;
  entName?: string;
  province?: string;
  pubDate?: string;
  validEndDate?: string;
  validStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      authorizeDate: 'AuthorizeDate',
      authorizeDepartment: 'AuthorizeDepartment',
      certNum: 'CertNum',
      certScope: 'CertScope',
      certType: 'CertType',
      entName: 'EntName',
      province: 'Province',
      pubDate: 'PubDate',
      validEndDate: 'ValidEndDate',
      validStartDate: 'ValidStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeDate: 'string',
      authorizeDepartment: 'string',
      certNum: 'string',
      certScope: 'string',
      certType: 'string',
      entName: 'string',
      province: 'string',
      pubDate: 'string',
      validEndDate: 'string',
      validStartDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpDomainResponseBodyData extends $tea.Model {
  checkDate?: string;
  domain?: string;
  entName?: string;
  homeUrl?: string;
  number?: string;
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      checkDate: 'CheckDate',
      domain: 'Domain',
      entName: 'EntName',
      homeUrl: 'HomeUrl',
      number: 'Number',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkDate: 'string',
      domain: 'string',
      entName: 'string',
      homeUrl: 'string',
      number: 'string',
      siteName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpPatentResponseBodyData extends $tea.Model {
  agency?: string;
  agent?: string;
  brief?: string;
  cateNum?: string;
  entName?: string;
  inventorList?: string;
  mainClaim?: string;
  patentName?: string;
  patentStatus?: string;
  patentType?: string;
  patenteeList?: string;
  prioDate?: string;
  prioNum?: string;
  publicDate?: string;
  publicNum?: string;
  requestDate?: string;
  requestNum?: string;
  static names(): { [key: string]: string } {
    return {
      agency: 'Agency',
      agent: 'Agent',
      brief: 'Brief',
      cateNum: 'CateNum',
      entName: 'EntName',
      inventorList: 'InventorList',
      mainClaim: 'MainClaim',
      patentName: 'PatentName',
      patentStatus: 'PatentStatus',
      patentType: 'PatentType',
      patenteeList: 'PatenteeList',
      prioDate: 'PrioDate',
      prioNum: 'PrioNum',
      publicDate: 'PublicDate',
      publicNum: 'PublicNum',
      requestDate: 'RequestDate',
      requestNum: 'RequestNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agency: 'string',
      agent: 'string',
      brief: 'string',
      cateNum: 'string',
      entName: 'string',
      inventorList: 'string',
      mainClaim: 'string',
      patentName: 'string',
      patentStatus: 'string',
      patentType: 'string',
      patenteeList: 'string',
      prioDate: 'string',
      prioNum: 'string',
      publicDate: 'string',
      publicNum: 'string',
      requestDate: 'string',
      requestNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpSoftwareCopyrightResponseBodyData extends $tea.Model {
  approvalDate?: string;
  copyName?: string;
  copyNum?: string;
  entName?: string;
  firstDate?: string;
  shortName?: string;
  successDate?: string;
  typeNum?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      approvalDate: 'ApprovalDate',
      copyName: 'CopyName',
      copyNum: 'CopyNum',
      entName: 'EntName',
      firstDate: 'FirstDate',
      shortName: 'ShortName',
      successDate: 'SuccessDate',
      typeNum: 'TypeNum',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalDate: 'string',
      copyName: 'string',
      copyNum: 'string',
      entName: 'string',
      firstDate: 'string',
      shortName: 'string',
      successDate: 'string',
      typeNum: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpTrademarkResponseBodyData extends $tea.Model {
  agent?: string;
  applyDate?: string;
  entName?: string;
  firstPubDate?: string;
  firstPubNo?: string;
  imageUrl?: string;
  period?: string;
  regNum?: string;
  regPubDate?: string;
  regPubNo?: string;
  trademarkForm?: string;
  trademarkName?: string;
  trademarkStatus?: string;
  trademarkType?: string;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      applyDate: 'ApplyDate',
      entName: 'EntName',
      firstPubDate: 'FirstPubDate',
      firstPubNo: 'FirstPubNo',
      imageUrl: 'ImageUrl',
      period: 'Period',
      regNum: 'RegNum',
      regPubDate: 'RegPubDate',
      regPubNo: 'RegPubNo',
      trademarkForm: 'TrademarkForm',
      trademarkName: 'TrademarkName',
      trademarkStatus: 'TrademarkStatus',
      trademarkType: 'TrademarkType',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: 'string',
      applyDate: 'string',
      entName: 'string',
      firstPubDate: 'string',
      firstPubNo: 'string',
      imageUrl: 'string',
      period: 'string',
      regNum: 'string',
      regPubDate: 'string',
      regPubNo: 'string',
      trademarkForm: 'string',
      trademarkName: 'string',
      trademarkStatus: 'string',
      trademarkType: 'string',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcIpWorksCopyrightResponseBodyData extends $tea.Model {
  approvalDate?: string;
  copyName?: string;
  copyNum?: string;
  entName?: string;
  firstDate?: string;
  successDate?: string;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      approvalDate: 'ApprovalDate',
      copyName: 'CopyName',
      copyNum: 'CopyNum',
      entName: 'EntName',
      firstDate: 'FirstDate',
      successDate: 'SuccessDate',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalDate: 'string',
      copyName: 'string',
      copyNum: 'string',
      entName: 'string',
      firstDate: 'string',
      successDate: 'string',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeAuctionResponseBodyData extends $tea.Model {
  auctionDate?: string;
  auctionName?: string;
  basis?: string;
  certificate?: string;
  court?: string;
  description?: string;
  document?: string;
  entName?: string;
  estPrice?: string;
  owner?: string;
  restrict?: string;
  startPrice?: string;
  static names(): { [key: string]: string } {
    return {
      auctionDate: 'AuctionDate',
      auctionName: 'AuctionName',
      basis: 'Basis',
      certificate: 'Certificate',
      court: 'Court',
      description: 'Description',
      document: 'Document',
      entName: 'EntName',
      estPrice: 'EstPrice',
      owner: 'Owner',
      restrict: 'Restrict',
      startPrice: 'StartPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionDate: 'string',
      auctionName: 'string',
      basis: 'string',
      certificate: 'string',
      court: 'string',
      description: 'string',
      document: 'string',
      entName: 'string',
      estPrice: 'string',
      owner: 'string',
      restrict: 'string',
      startPrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeCaseFilingResponseBodyData extends $tea.Model {
  assistant?: string;
  caseNum?: string;
  caseStatus?: string;
  causeAction?: string;
  endDate?: string;
  filingDate?: string;
  hearingDate?: string;
  judge?: string;
  party?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'Assistant',
      caseNum: 'CaseNum',
      caseStatus: 'CaseStatus',
      causeAction: 'CauseAction',
      endDate: 'EndDate',
      filingDate: 'FilingDate',
      hearingDate: 'HearingDate',
      judge: 'Judge',
      party: 'Party',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      caseNum: 'string',
      caseStatus: 'string',
      causeAction: 'string',
      endDate: 'string',
      filingDate: 'string',
      hearingDate: 'string',
      judge: 'string',
      party: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeCourtAnnouncementResponseBodyData extends $tea.Model {
  caseNum?: string;
  causeAction?: string;
  court?: string;
  department?: string;
  hearingDate?: string;
  judge?: string;
  party?: string;
  title?: string;
  tribunal?: string;
  static names(): { [key: string]: string } {
    return {
      caseNum: 'CaseNum',
      causeAction: 'CauseAction',
      court: 'Court',
      department: 'Department',
      hearingDate: 'HearingDate',
      judge: 'Judge',
      party: 'Party',
      title: 'Title',
      tribunal: 'Tribunal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseNum: 'string',
      causeAction: 'string',
      court: 'string',
      department: 'string',
      hearingDate: 'string',
      judge: 'string',
      party: 'string',
      title: 'string',
      tribunal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeCourtNoticeResponseBodyData extends $tea.Model {
  content?: string;
  court?: string;
  party?: string;
  publicDate?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      court: 'Court',
      party: 'Party',
      publicDate: 'PublicDate',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      court: 'string',
      party: 'string',
      publicDate: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeDishonestyResponseBodyData extends $tea.Model {
  amount?: string;
  caseNum?: string;
  court?: string;
  entName?: string;
  executeDepartment?: string;
  executionDesc?: string;
  executionStatus?: string;
  filingDate?: string;
  finalDuty?: string;
  fromCaseNum?: string;
  legalName?: string;
  province?: string;
  publishDate?: string;
  socialCreditCode?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      caseNum: 'CaseNum',
      court: 'Court',
      entName: 'EntName',
      executeDepartment: 'ExecuteDepartment',
      executionDesc: 'ExecutionDesc',
      executionStatus: 'ExecutionStatus',
      filingDate: 'FilingDate',
      finalDuty: 'FinalDuty',
      fromCaseNum: 'FromCaseNum',
      legalName: 'LegalName',
      province: 'Province',
      publishDate: 'PublishDate',
      socialCreditCode: 'SocialCreditCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      caseNum: 'string',
      court: 'string',
      entName: 'string',
      executeDepartment: 'string',
      executionDesc: 'string',
      executionStatus: 'string',
      filingDate: 'string',
      finalDuty: 'string',
      fromCaseNum: 'string',
      legalName: 'string',
      province: 'string',
      publishDate: 'string',
      socialCreditCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeExecutedResponseBodyData extends $tea.Model {
  amount?: string;
  caseNum?: string;
  court?: string;
  filingDate?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      caseNum: 'CaseNum',
      court: 'Court',
      filingDate: 'FilingDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      caseNum: 'string',
      court: 'string',
      filingDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeJudgementDocResponseBodyData extends $tea.Model {
  caseFlow?: string;
  caseNum?: string;
  caseType?: string;
  causeAction?: string;
  court?: string;
  defendant?: string;
  judgeDate?: string;
  judgeResult?: string;
  judgeType?: string;
  party?: string;
  plaintiff?: string;
  publicDate?: string;
  role?: string;
  subAmount?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      caseFlow: 'CaseFlow',
      caseNum: 'CaseNum',
      caseType: 'CaseType',
      causeAction: 'CauseAction',
      court: 'Court',
      defendant: 'Defendant',
      judgeDate: 'JudgeDate',
      judgeResult: 'JudgeResult',
      judgeType: 'JudgeType',
      party: 'Party',
      plaintiff: 'Plaintiff',
      publicDate: 'PublicDate',
      role: 'Role',
      subAmount: 'SubAmount',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseFlow: 'string',
      caseNum: 'string',
      caseType: 'string',
      causeAction: 'string',
      court: 'string',
      defendant: 'string',
      judgeDate: 'string',
      judgeResult: 'string',
      judgeType: 'string',
      party: 'string',
      plaintiff: 'string',
      publicDate: 'string',
      role: 'string',
      subAmount: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeLimitHighConsumeResponseBodyData extends $tea.Model {
  caseNum?: string;
  causeAction?: string;
  companyName?: string;
  court?: string;
  executionApplicant?: string;
  filingDate?: string;
  name?: string;
  publishDate?: string;
  static names(): { [key: string]: string } {
    return {
      caseNum: 'CaseNum',
      causeAction: 'CauseAction',
      companyName: 'CompanyName',
      court: 'Court',
      executionApplicant: 'ExecutionApplicant',
      filingDate: 'FilingDate',
      name: 'Name',
      publishDate: 'PublishDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseNum: 'string',
      causeAction: 'string',
      companyName: 'string',
      court: 'string',
      executionApplicant: 'string',
      filingDate: 'string',
      name: 'string',
      publishDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcJusticeTerminalCaseResponseBodyData extends $tea.Model {
  caseNum?: string;
  court?: string;
  entName?: string;
  execAmount?: string;
  failPerformAmount?: string;
  filingDate?: string;
  name?: string;
  terminalNum?: string;
  terminateDate?: string;
  static names(): { [key: string]: string } {
    return {
      caseNum: 'CaseNum',
      court: 'Court',
      entName: 'EntName',
      execAmount: 'ExecAmount',
      failPerformAmount: 'FailPerformAmount',
      filingDate: 'FilingDate',
      name: 'Name',
      terminalNum: 'TerminalNum',
      terminateDate: 'TerminateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseNum: 'string',
      court: 'string',
      entName: 'string',
      execAmount: 'string',
      failPerformAmount: 'string',
      filingDate: 'string',
      name: 'string',
      terminalNum: 'string',
      terminateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcListedCompanyResponseBodyData extends $tea.Model {
  circulationMarketValue?: string;
  entName?: string;
  entNameEng?: string;
  listDate?: string;
  securitiesCode?: string;
  securitiesMarket?: string;
  securitiesName?: string;
  totalFlowShares?: string;
  totalShares?: string;
  static names(): { [key: string]: string } {
    return {
      circulationMarketValue: 'CirculationMarketValue',
      entName: 'EntName',
      entNameEng: 'EntNameEng',
      listDate: 'ListDate',
      securitiesCode: 'SecuritiesCode',
      securitiesMarket: 'SecuritiesMarket',
      securitiesName: 'SecuritiesName',
      totalFlowShares: 'TotalFlowShares',
      totalShares: 'TotalShares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      circulationMarketValue: 'string',
      entName: 'string',
      entNameEng: 'string',
      listDate: 'string',
      securitiesCode: 'string',
      securitiesMarket: 'string',
      securitiesName: 'string',
      totalFlowShares: 'string',
      totalShares: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeAdminPunishmentResponseBodyData extends $tea.Model {
  department?: string;
  entName?: string;
  illegalType?: string;
  lawBasis?: string;
  publicDate?: string;
  punishDate?: string;
  punishNum?: string;
  punishResult?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      entName: 'EntName',
      illegalType: 'IllegalType',
      lawBasis: 'LawBasis',
      publicDate: 'PublicDate',
      punishDate: 'PunishDate',
      punishNum: 'PunishNum',
      punishResult: 'PunishResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      entName: 'string',
      illegalType: 'string',
      lawBasis: 'string',
      publicDate: 'string',
      punishDate: 'string',
      punishNum: 'string',
      punishResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeCustomsPunishmentResponseBodyData extends $tea.Model {
  basis?: string;
  caseNo?: string;
  customs?: string;
  customsNo?: string;
  legalName?: string;
  punishDate?: string;
  punishType?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      basis: 'Basis',
      caseNo: 'CaseNo',
      customs: 'Customs',
      customsNo: 'CustomsNo',
      legalName: 'LegalName',
      punishDate: 'PunishDate',
      punishType: 'PunishType',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basis: 'string',
      caseNo: 'string',
      customs: 'string',
      customsNo: 'string',
      legalName: 'string',
      punishDate: 'string',
      punishType: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeEnvironmentPunishmentResponseBodyData extends $tea.Model {
  department?: string;
  entName?: string;
  execStatus?: string;
  punishBasis?: string;
  punishContent?: string;
  punishDate?: string;
  punishLaw?: string;
  punishNum?: string;
  punishRes?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      entName: 'EntName',
      execStatus: 'ExecStatus',
      punishBasis: 'PunishBasis',
      punishContent: 'PunishContent',
      punishDate: 'PunishDate',
      punishLaw: 'PunishLaw',
      punishNum: 'PunishNum',
      punishRes: 'PunishRes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      entName: 'string',
      execStatus: 'string',
      punishBasis: 'string',
      punishContent: 'string',
      punishDate: 'string',
      punishLaw: 'string',
      punishNum: 'string',
      punishRes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeFoodDrugPunishmentResponseBodyData extends $tea.Model {
  department?: string;
  entName?: string;
  illegalType?: string;
  lawBasis?: string;
  publicDate?: string;
  punishDate?: string;
  punishNum?: string;
  punishResult?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      entName: 'EntName',
      illegalType: 'IllegalType',
      lawBasis: 'LawBasis',
      publicDate: 'PublicDate',
      punishDate: 'PunishDate',
      punishNum: 'PunishNum',
      punishResult: 'PunishResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      entName: 'string',
      illegalType: 'string',
      lawBasis: 'string',
      publicDate: 'string',
      punishDate: 'string',
      punishNum: 'string',
      punishResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcNegativeQualityPunishmentResponseBodyData extends $tea.Model {
  department?: string;
  entName?: string;
  eventDate?: string;
  eventResult?: string;
  pubDate?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      entName: 'EntName',
      eventDate: 'EventDate',
      eventResult: 'EventResult',
      pubDate: 'PubDate',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      entName: 'string',
      eventDate: 'string',
      eventResult: 'string',
      pubDate: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationBiddingResponseBodyData extends $tea.Model {
  agentEntName?: string;
  bidIndustry?: string;
  bidTitle?: string;
  bidType?: string;
  content?: string;
  entName?: string;
  infoType?: string;
  openingTime?: string;
  projectAmount?: string;
  projectName?: string;
  projectNum?: string;
  publicDate?: string;
  regionName?: string;
  subType?: string;
  tenderEntName?: string;
  winnerEntName?: string;
  static names(): { [key: string]: string } {
    return {
      agentEntName: 'AgentEntName',
      bidIndustry: 'BidIndustry',
      bidTitle: 'BidTitle',
      bidType: 'BidType',
      content: 'Content',
      entName: 'EntName',
      infoType: 'InfoType',
      openingTime: 'OpeningTime',
      projectAmount: 'ProjectAmount',
      projectName: 'ProjectName',
      projectNum: 'ProjectNum',
      publicDate: 'PublicDate',
      regionName: 'RegionName',
      subType: 'SubType',
      tenderEntName: 'TenderEntName',
      winnerEntName: 'WinnerEntName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentEntName: 'string',
      bidIndustry: 'string',
      bidTitle: 'string',
      bidType: 'string',
      content: 'string',
      entName: 'string',
      infoType: 'string',
      openingTime: 'string',
      projectAmount: 'string',
      projectName: 'string',
      projectNum: 'string',
      publicDate: 'string',
      regionName: 'string',
      subType: 'string',
      tenderEntName: 'string',
      winnerEntName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationCustomsResponseBodyData extends $tea.Model {
  adminRegionName?: string;
  annualReport?: string;
  businessCate?: string;
  cancelFlag?: string;
  creditLevelsNew?: string;
  customsNum?: string;
  customsReg?: string;
  ecoRegionName?: string;
  electType?: string;
  entName?: string;
  identCode?: string;
  identDate?: string;
  industryType?: string;
  regDate?: string;
  specialArea?: string;
  validDate?: string;
  static names(): { [key: string]: string } {
    return {
      adminRegionName: 'AdminRegionName',
      annualReport: 'AnnualReport',
      businessCate: 'BusinessCate',
      cancelFlag: 'CancelFlag',
      creditLevelsNew: 'CreditLevelsNew',
      customsNum: 'CustomsNum',
      customsReg: 'CustomsReg',
      ecoRegionName: 'EcoRegionName',
      electType: 'ElectType',
      entName: 'EntName',
      identCode: 'IdentCode',
      identDate: 'IdentDate',
      industryType: 'IndustryType',
      regDate: 'RegDate',
      specialArea: 'SpecialArea',
      validDate: 'ValidDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminRegionName: 'string',
      annualReport: 'string',
      businessCate: 'string',
      cancelFlag: 'string',
      creditLevelsNew: 'string',
      customsNum: 'string',
      customsReg: 'string',
      ecoRegionName: 'string',
      electType: 'string',
      entName: 'string',
      identCode: 'string',
      identDate: 'string',
      industryType: 'string',
      regDate: 'string',
      specialArea: 'string',
      validDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationPurchaseLandResponseBodyData extends $tea.Model {
  area?: string;
  department?: string;
  electronicNo?: string;
  entName?: string;
  industry?: string;
  landLevel?: string;
  landSource?: string;
  landUse?: string;
  location?: string;
  price?: string;
  projectName?: string;
  promiseDeliveryDate?: string;
  promiseEndDate?: string;
  promiseStartDate?: string;
  regionName?: string;
  releaseDate?: string;
  signingMode?: string;
  useYear?: string;
  volumeFractionLowerBound?: string;
  volumeFractionUpperBound?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      department: 'Department',
      electronicNo: 'ElectronicNo',
      entName: 'EntName',
      industry: 'Industry',
      landLevel: 'LandLevel',
      landSource: 'LandSource',
      landUse: 'LandUse',
      location: 'Location',
      price: 'Price',
      projectName: 'ProjectName',
      promiseDeliveryDate: 'PromiseDeliveryDate',
      promiseEndDate: 'PromiseEndDate',
      promiseStartDate: 'PromiseStartDate',
      regionName: 'RegionName',
      releaseDate: 'ReleaseDate',
      signingMode: 'SigningMode',
      useYear: 'UseYear',
      volumeFractionLowerBound: 'VolumeFractionLowerBound',
      volumeFractionUpperBound: 'VolumeFractionUpperBound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      department: 'string',
      electronicNo: 'string',
      entName: 'string',
      industry: 'string',
      landLevel: 'string',
      landSource: 'string',
      landUse: 'string',
      location: 'string',
      price: 'string',
      projectName: 'string',
      promiseDeliveryDate: 'string',
      promiseEndDate: 'string',
      promiseStartDate: 'string',
      regionName: 'string',
      releaseDate: 'string',
      signingMode: 'string',
      useYear: 'string',
      volumeFractionLowerBound: 'string',
      volumeFractionUpperBound: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcOperationRecruitmentResponseBodyData extends $tea.Model {
  benefitList?: string;
  description?: string;
  education?: string;
  endDate?: string;
  entName?: string;
  experience?: string;
  pageUrl?: string;
  publishDate?: string;
  recruitingAddress?: string;
  recruitingName?: string;
  salary?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      benefitList: 'BenefitList',
      description: 'Description',
      education: 'Education',
      endDate: 'EndDate',
      entName: 'EntName',
      experience: 'Experience',
      pageUrl: 'PageUrl',
      publishDate: 'PublishDate',
      recruitingAddress: 'RecruitingAddress',
      recruitingName: 'RecruitingName',
      salary: 'Salary',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitList: 'string',
      description: 'string',
      education: 'string',
      endDate: 'string',
      entName: 'string',
      experience: 'string',
      pageUrl: 'string',
      publishDate: 'string',
      recruitingAddress: 'string',
      recruitingName: 'string',
      salary: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcProductBandResponseBodyData extends $tea.Model {
  brandIntroduction?: string;
  device?: string;
  entName?: string;
  productIntroduction?: string;
  productLogo?: string;
  productName?: string;
  productTag?: string;
  productWebsite?: string;
  static names(): { [key: string]: string } {
    return {
      brandIntroduction: 'BrandIntroduction',
      device: 'Device',
      entName: 'EntName',
      productIntroduction: 'ProductIntroduction',
      productLogo: 'ProductLogo',
      productName: 'ProductName',
      productTag: 'ProductTag',
      productWebsite: 'ProductWebsite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandIntroduction: 'string',
      device: 'string',
      entName: 'string',
      productIntroduction: 'string',
      productLogo: 'string',
      productName: 'string',
      productTag: 'string',
      productWebsite: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxAbnormalResponseBodyData extends $tea.Model {
  cardNum?: string;
  cardType?: string;
  entName?: string;
  judgeDate?: string;
  judgeDepartment?: string;
  judgeReason?: string;
  legalName?: string;
  overdueAmount?: string;
  overdueType?: string;
  status?: string;
  taxpayerNum?: string;
  static names(): { [key: string]: string } {
    return {
      cardNum: 'CardNum',
      cardType: 'CardType',
      entName: 'EntName',
      judgeDate: 'JudgeDate',
      judgeDepartment: 'JudgeDepartment',
      judgeReason: 'JudgeReason',
      legalName: 'LegalName',
      overdueAmount: 'OverdueAmount',
      overdueType: 'OverdueType',
      status: 'Status',
      taxpayerNum: 'TaxpayerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardNum: 'string',
      cardType: 'string',
      entName: 'string',
      judgeDate: 'string',
      judgeDepartment: 'string',
      judgeReason: 'string',
      legalName: 'string',
      overdueAmount: 'string',
      overdueType: 'string',
      status: 'string',
      taxpayerNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxClassAResponseBodyData extends $tea.Model {
  entName?: string;
  taxLevel?: string;
  taxpayerNum?: string;
  year?: string;
  static names(): { [key: string]: string } {
    return {
      entName: 'EntName',
      taxLevel: 'TaxLevel',
      taxpayerNum: 'TaxpayerNum',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entName: 'string',
      taxLevel: 'string',
      taxpayerNum: 'string',
      year: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxGeneralTaxpayerResponseBodyData extends $tea.Model {
  department?: string;
  endDate?: string;
  entName?: string;
  judgeDate?: string;
  qualification?: string;
  startDate?: string;
  taxpayerNum?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      endDate: 'EndDate',
      entName: 'EntName',
      judgeDate: 'JudgeDate',
      qualification: 'Qualification',
      startDate: 'StartDate',
      taxpayerNum: 'TaxpayerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      endDate: 'string',
      entName: 'string',
      judgeDate: 'string',
      qualification: 'string',
      startDate: 'string',
      taxpayerNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxIllegalResponseBodyData extends $tea.Model {
  agencyCardNum?: string;
  agencyCardType?: string;
  agencyEnt?: string;
  agencyName?: string;
  agencySex?: string;
  caseType?: string;
  department?: string;
  entAddress?: string;
  entName?: string;
  financialCardNum?: string;
  financialCardType?: string;
  financialName?: string;
  financialSex?: string;
  illegalTruth?: string;
  lawBasis?: string;
  legalCardNum?: string;
  legalCardType?: string;
  legalName?: string;
  legalSex?: string;
  orgCode?: string;
  publishDate?: string;
  taxpayerNum?: string;
  static names(): { [key: string]: string } {
    return {
      agencyCardNum: 'AgencyCardNum',
      agencyCardType: 'AgencyCardType',
      agencyEnt: 'AgencyEnt',
      agencyName: 'AgencyName',
      agencySex: 'AgencySex',
      caseType: 'CaseType',
      department: 'Department',
      entAddress: 'EntAddress',
      entName: 'EntName',
      financialCardNum: 'FinancialCardNum',
      financialCardType: 'FinancialCardType',
      financialName: 'FinancialName',
      financialSex: 'FinancialSex',
      illegalTruth: 'IllegalTruth',
      lawBasis: 'LawBasis',
      legalCardNum: 'LegalCardNum',
      legalCardType: 'LegalCardType',
      legalName: 'LegalName',
      legalSex: 'LegalSex',
      orgCode: 'OrgCode',
      publishDate: 'PublishDate',
      taxpayerNum: 'TaxpayerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agencyCardNum: 'string',
      agencyCardType: 'string',
      agencyEnt: 'string',
      agencyName: 'string',
      agencySex: 'string',
      caseType: 'string',
      department: 'string',
      entAddress: 'string',
      entName: 'string',
      financialCardNum: 'string',
      financialCardType: 'string',
      financialName: 'string',
      financialSex: 'string',
      illegalTruth: 'string',
      lawBasis: 'string',
      legalCardNum: 'string',
      legalCardType: 'string',
      legalName: 'string',
      legalSex: 'string',
      orgCode: 'string',
      publishDate: 'string',
      taxpayerNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxOverdueResponseBodyData extends $tea.Model {
  currOverdueAmount?: string;
  department?: string;
  entAddress?: string;
  entName?: string;
  legalName?: string;
  overdueAmount?: string;
  overdueType?: string;
  publishDate?: string;
  taxpayerNum?: string;
  taxpayerType?: string;
  static names(): { [key: string]: string } {
    return {
      currOverdueAmount: 'CurrOverdueAmount',
      department: 'Department',
      entAddress: 'EntAddress',
      entName: 'EntName',
      legalName: 'LegalName',
      overdueAmount: 'OverdueAmount',
      overdueType: 'OverdueType',
      publishDate: 'PublishDate',
      taxpayerNum: 'TaxpayerNum',
      taxpayerType: 'TaxpayerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currOverdueAmount: 'string',
      department: 'string',
      entAddress: 'string',
      entName: 'string',
      legalName: 'string',
      overdueAmount: 'string',
      overdueType: 'string',
      publishDate: 'string',
      taxpayerNum: 'string',
      taxpayerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOcTaxPunishmentResponseBodyData extends $tea.Model {
  department?: string;
  entName?: string;
  eventName?: string;
  eventType?: string;
  legalName?: string;
  punishDate?: string;
  taxpayerNum?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      entName: 'EntName',
      eventName: 'EventName',
      eventType: 'EventType',
      legalName: 'LegalName',
      punishDate: 'PunishDate',
      taxpayerNum: 'TaxpayerNum',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      entName: 'string',
      eventName: 'string',
      eventType: 'string',
      legalName: 'string',
      punishDate: 'string',
      taxpayerNum: 'string',
      title: 'string',
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
    this._endpoint = this.getEndpoint("dt-oc-info", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getOcCompetitorsWithOptions(request: GetOcCompetitorsRequest, runtime: $Util.RuntimeOptions): Promise<GetOcCompetitorsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcCompetitors",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcCompetitorsResponse>(await this.callApi(params, req, runtime), new GetOcCompetitorsResponse({}));
  }

  async getOcCompetitors(request: GetOcCompetitorsRequest): Promise<GetOcCompetitorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcCompetitorsWithOptions(request, runtime);
  }

  async getOcCoreTeamsWithOptions(request: GetOcCoreTeamsRequest, runtime: $Util.RuntimeOptions): Promise<GetOcCoreTeamsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcCoreTeams",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcCoreTeamsResponse>(await this.callApi(params, req, runtime), new GetOcCoreTeamsResponse({}));
  }

  async getOcCoreTeams(request: GetOcCoreTeamsRequest): Promise<GetOcCoreTeamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcCoreTeamsWithOptions(request, runtime);
  }

  async getOcFinancingWithOptions(request: GetOcFinancingRequest, runtime: $Util.RuntimeOptions): Promise<GetOcFinancingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcFinancing",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcFinancingResponse>(await this.callApi(params, req, runtime), new GetOcFinancingResponse({}));
  }

  async getOcFinancing(request: GetOcFinancingRequest): Promise<GetOcFinancingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcFinancingWithOptions(request, runtime);
  }

  async getOcFuzzSearchWithOptions(request: GetOcFuzzSearchRequest, runtime: $Util.RuntimeOptions): Promise<GetOcFuzzSearchResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcFuzzSearch",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcFuzzSearchResponse>(await this.callApi(params, req, runtime), new GetOcFuzzSearchResponse({}));
  }

  async getOcFuzzSearch(request: GetOcFuzzSearchRequest): Promise<GetOcFuzzSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcFuzzSearchWithOptions(request, runtime);
  }

  async getOcIcAbnormalOperationWithOptions(request: GetOcIcAbnormalOperationRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcAbnormalOperationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcAbnormalOperation",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcAbnormalOperationResponse>(await this.callApi(params, req, runtime), new GetOcIcAbnormalOperationResponse({}));
  }

  async getOcIcAbnormalOperation(request: GetOcIcAbnormalOperationRequest): Promise<GetOcIcAbnormalOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcAbnormalOperationWithOptions(request, runtime);
  }

  async getOcIcAdminLicenseWithOptions(request: GetOcIcAdminLicenseRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcAdminLicenseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcAdminLicense",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcAdminLicenseResponse>(await this.callApi(params, req, runtime), new GetOcIcAdminLicenseResponse({}));
  }

  async getOcIcAdminLicense(request: GetOcIcAdminLicenseRequest): Promise<GetOcIcAdminLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcAdminLicenseWithOptions(request, runtime);
  }

  async getOcIcBasicWithOptions(request: GetOcIcBasicRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcBasicResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcBasic",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcBasicResponse>(await this.callApi(params, req, runtime), new GetOcIcBasicResponse({}));
  }

  async getOcIcBasic(request: GetOcIcBasicRequest): Promise<GetOcIcBasicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcBasicWithOptions(request, runtime);
  }

  async getOcIcBranchWithOptions(request: GetOcIcBranchRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcBranchResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcBranch",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcBranchResponse>(await this.callApi(params, req, runtime), new GetOcIcBranchResponse({}));
  }

  async getOcIcBranch(request: GetOcIcBranchRequest): Promise<GetOcIcBranchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcBranchWithOptions(request, runtime);
  }

  async getOcIcChangeRecordWithOptions(request: GetOcIcChangeRecordRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcChangeRecordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcChangeRecord",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcChangeRecordResponse>(await this.callApi(params, req, runtime), new GetOcIcChangeRecordResponse({}));
  }

  async getOcIcChangeRecord(request: GetOcIcChangeRecordRequest): Promise<GetOcIcChangeRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcChangeRecordWithOptions(request, runtime);
  }

  async getOcIcCheckupWithOptions(request: GetOcIcCheckupRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcCheckupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcCheckup",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcCheckupResponse>(await this.callApi(params, req, runtime), new GetOcIcCheckupResponse({}));
  }

  async getOcIcCheckup(request: GetOcIcCheckupRequest): Promise<GetOcIcCheckupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcCheckupWithOptions(request, runtime);
  }

  async getOcIcClearAccountWithOptions(request: GetOcIcClearAccountRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcClearAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcClearAccount",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcClearAccountResponse>(await this.callApi(params, req, runtime), new GetOcIcClearAccountResponse({}));
  }

  async getOcIcClearAccount(request: GetOcIcClearAccountRequest): Promise<GetOcIcClearAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcClearAccountWithOptions(request, runtime);
  }

  async getOcIcDoubleCheckupWithOptions(request: GetOcIcDoubleCheckupRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcDoubleCheckupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcDoubleCheckup",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcDoubleCheckupResponse>(await this.callApi(params, req, runtime), new GetOcIcDoubleCheckupResponse({}));
  }

  async getOcIcDoubleCheckup(request: GetOcIcDoubleCheckupRequest): Promise<GetOcIcDoubleCheckupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcDoubleCheckupWithOptions(request, runtime);
  }

  async getOcIcEmployeeWithOptions(request: GetOcIcEmployeeRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcEmployeeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcEmployee",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcEmployeeResponse>(await this.callApi(params, req, runtime), new GetOcIcEmployeeResponse({}));
  }

  async getOcIcEmployee(request: GetOcIcEmployeeRequest): Promise<GetOcIcEmployeeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcEmployeeWithOptions(request, runtime);
  }

  async getOcIcEquityFrozenWithOptions(request: GetOcIcEquityFrozenRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcEquityFrozenResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcEquityFrozen",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcEquityFrozenResponse>(await this.callApi(params, req, runtime), new GetOcIcEquityFrozenResponse({}));
  }

  async getOcIcEquityFrozen(request: GetOcIcEquityFrozenRequest): Promise<GetOcIcEquityFrozenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcEquityFrozenWithOptions(request, runtime);
  }

  async getOcIcEquityPledgeWithOptions(request: GetOcIcEquityPledgeRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcEquityPledgeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcEquityPledge",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcEquityPledgeResponse>(await this.callApi(params, req, runtime), new GetOcIcEquityPledgeResponse({}));
  }

  async getOcIcEquityPledge(request: GetOcIcEquityPledgeRequest): Promise<GetOcIcEquityPledgeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcEquityPledgeWithOptions(request, runtime);
  }

  async getOcIcInvestmentWithOptions(request: GetOcIcInvestmentRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcInvestmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcInvestment",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcInvestmentResponse>(await this.callApi(params, req, runtime), new GetOcIcInvestmentResponse({}));
  }

  async getOcIcInvestment(request: GetOcIcInvestmentRequest): Promise<GetOcIcInvestmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcInvestmentWithOptions(request, runtime);
  }

  async getOcIcKnowledgePropertyPledgeWithOptions(request: GetOcIcKnowledgePropertyPledgeRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcKnowledgePropertyPledgeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcKnowledgePropertyPledge",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcKnowledgePropertyPledgeResponse>(await this.callApi(params, req, runtime), new GetOcIcKnowledgePropertyPledgeResponse({}));
  }

  async getOcIcKnowledgePropertyPledge(request: GetOcIcKnowledgePropertyPledgeRequest): Promise<GetOcIcKnowledgePropertyPledgeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcKnowledgePropertyPledgeWithOptions(request, runtime);
  }

  async getOcIcMortgageWithOptions(request: GetOcIcMortgageRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcMortgageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcMortgage",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcMortgageResponse>(await this.callApi(params, req, runtime), new GetOcIcMortgageResponse({}));
  }

  async getOcIcMortgage(request: GetOcIcMortgageRequest): Promise<GetOcIcMortgageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcMortgageWithOptions(request, runtime);
  }

  async getOcIcSeriousOffenseWithOptions(request: GetOcIcSeriousOffenseRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcSeriousOffenseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcSeriousOffense",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcSeriousOffenseResponse>(await this.callApi(params, req, runtime), new GetOcIcSeriousOffenseResponse({}));
  }

  async getOcIcSeriousOffense(request: GetOcIcSeriousOffenseRequest): Promise<GetOcIcSeriousOffenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcSeriousOffenseWithOptions(request, runtime);
  }

  async getOcIcShareholderWithOptions(request: GetOcIcShareholderRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcShareholderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcShareholder",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcShareholderResponse>(await this.callApi(params, req, runtime), new GetOcIcShareholderResponse({}));
  }

  async getOcIcShareholder(request: GetOcIcShareholderRequest): Promise<GetOcIcShareholderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcShareholderWithOptions(request, runtime);
  }

  async getOcIcSimpleCancelWithOptions(request: GetOcIcSimpleCancelRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIcSimpleCancelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIcSimpleCancel",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIcSimpleCancelResponse>(await this.callApi(params, req, runtime), new GetOcIcSimpleCancelResponse({}));
  }

  async getOcIcSimpleCancel(request: GetOcIcSimpleCancelRequest): Promise<GetOcIcSimpleCancelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIcSimpleCancelWithOptions(request, runtime);
  }

  async getOcIpCertificateWithOptions(request: GetOcIpCertificateRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIpCertificateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIpCertificate",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIpCertificateResponse>(await this.callApi(params, req, runtime), new GetOcIpCertificateResponse({}));
  }

  async getOcIpCertificate(request: GetOcIpCertificateRequest): Promise<GetOcIpCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIpCertificateWithOptions(request, runtime);
  }

  async getOcIpDomainWithOptions(request: GetOcIpDomainRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIpDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIpDomain",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIpDomainResponse>(await this.callApi(params, req, runtime), new GetOcIpDomainResponse({}));
  }

  async getOcIpDomain(request: GetOcIpDomainRequest): Promise<GetOcIpDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIpDomainWithOptions(request, runtime);
  }

  async getOcIpPatentWithOptions(request: GetOcIpPatentRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIpPatentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIpPatent",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIpPatentResponse>(await this.callApi(params, req, runtime), new GetOcIpPatentResponse({}));
  }

  async getOcIpPatent(request: GetOcIpPatentRequest): Promise<GetOcIpPatentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIpPatentWithOptions(request, runtime);
  }

  async getOcIpSoftwareCopyrightWithOptions(request: GetOcIpSoftwareCopyrightRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIpSoftwareCopyrightResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIpSoftwareCopyright",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIpSoftwareCopyrightResponse>(await this.callApi(params, req, runtime), new GetOcIpSoftwareCopyrightResponse({}));
  }

  async getOcIpSoftwareCopyright(request: GetOcIpSoftwareCopyrightRequest): Promise<GetOcIpSoftwareCopyrightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIpSoftwareCopyrightWithOptions(request, runtime);
  }

  async getOcIpTrademarkWithOptions(request: GetOcIpTrademarkRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIpTrademarkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIpTrademark",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIpTrademarkResponse>(await this.callApi(params, req, runtime), new GetOcIpTrademarkResponse({}));
  }

  async getOcIpTrademark(request: GetOcIpTrademarkRequest): Promise<GetOcIpTrademarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIpTrademarkWithOptions(request, runtime);
  }

  async getOcIpWorksCopyrightWithOptions(request: GetOcIpWorksCopyrightRequest, runtime: $Util.RuntimeOptions): Promise<GetOcIpWorksCopyrightResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcIpWorksCopyright",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcIpWorksCopyrightResponse>(await this.callApi(params, req, runtime), new GetOcIpWorksCopyrightResponse({}));
  }

  async getOcIpWorksCopyright(request: GetOcIpWorksCopyrightRequest): Promise<GetOcIpWorksCopyrightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcIpWorksCopyrightWithOptions(request, runtime);
  }

  async getOcJusticeAuctionWithOptions(request: GetOcJusticeAuctionRequest, runtime: $Util.RuntimeOptions): Promise<GetOcJusticeAuctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcJusticeAuction",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcJusticeAuctionResponse>(await this.callApi(params, req, runtime), new GetOcJusticeAuctionResponse({}));
  }

  async getOcJusticeAuction(request: GetOcJusticeAuctionRequest): Promise<GetOcJusticeAuctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcJusticeAuctionWithOptions(request, runtime);
  }

  async getOcJusticeCaseFilingWithOptions(request: GetOcJusticeCaseFilingRequest, runtime: $Util.RuntimeOptions): Promise<GetOcJusticeCaseFilingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcJusticeCaseFiling",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcJusticeCaseFilingResponse>(await this.callApi(params, req, runtime), new GetOcJusticeCaseFilingResponse({}));
  }

  async getOcJusticeCaseFiling(request: GetOcJusticeCaseFilingRequest): Promise<GetOcJusticeCaseFilingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcJusticeCaseFilingWithOptions(request, runtime);
  }

  async getOcJusticeCourtAnnouncementWithOptions(request: GetOcJusticeCourtAnnouncementRequest, runtime: $Util.RuntimeOptions): Promise<GetOcJusticeCourtAnnouncementResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcJusticeCourtAnnouncement",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcJusticeCourtAnnouncementResponse>(await this.callApi(params, req, runtime), new GetOcJusticeCourtAnnouncementResponse({}));
  }

  async getOcJusticeCourtAnnouncement(request: GetOcJusticeCourtAnnouncementRequest): Promise<GetOcJusticeCourtAnnouncementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcJusticeCourtAnnouncementWithOptions(request, runtime);
  }

  async getOcJusticeCourtNoticeWithOptions(request: GetOcJusticeCourtNoticeRequest, runtime: $Util.RuntimeOptions): Promise<GetOcJusticeCourtNoticeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcJusticeCourtNotice",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcJusticeCourtNoticeResponse>(await this.callApi(params, req, runtime), new GetOcJusticeCourtNoticeResponse({}));
  }

  async getOcJusticeCourtNotice(request: GetOcJusticeCourtNoticeRequest): Promise<GetOcJusticeCourtNoticeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcJusticeCourtNoticeWithOptions(request, runtime);
  }

  async getOcJusticeDishonestyWithOptions(request: GetOcJusticeDishonestyRequest, runtime: $Util.RuntimeOptions): Promise<GetOcJusticeDishonestyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcJusticeDishonesty",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcJusticeDishonestyResponse>(await this.callApi(params, req, runtime), new GetOcJusticeDishonestyResponse({}));
  }

  async getOcJusticeDishonesty(request: GetOcJusticeDishonestyRequest): Promise<GetOcJusticeDishonestyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcJusticeDishonestyWithOptions(request, runtime);
  }

  async getOcJusticeExecutedWithOptions(request: GetOcJusticeExecutedRequest, runtime: $Util.RuntimeOptions): Promise<GetOcJusticeExecutedResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcJusticeExecuted",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcJusticeExecutedResponse>(await this.callApi(params, req, runtime), new GetOcJusticeExecutedResponse({}));
  }

  async getOcJusticeExecuted(request: GetOcJusticeExecutedRequest): Promise<GetOcJusticeExecutedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcJusticeExecutedWithOptions(request, runtime);
  }

  async getOcJusticeJudgementDocWithOptions(request: GetOcJusticeJudgementDocRequest, runtime: $Util.RuntimeOptions): Promise<GetOcJusticeJudgementDocResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcJusticeJudgementDoc",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcJusticeJudgementDocResponse>(await this.callApi(params, req, runtime), new GetOcJusticeJudgementDocResponse({}));
  }

  async getOcJusticeJudgementDoc(request: GetOcJusticeJudgementDocRequest): Promise<GetOcJusticeJudgementDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcJusticeJudgementDocWithOptions(request, runtime);
  }

  async getOcJusticeLimitHighConsumeWithOptions(request: GetOcJusticeLimitHighConsumeRequest, runtime: $Util.RuntimeOptions): Promise<GetOcJusticeLimitHighConsumeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcJusticeLimitHighConsume",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcJusticeLimitHighConsumeResponse>(await this.callApi(params, req, runtime), new GetOcJusticeLimitHighConsumeResponse({}));
  }

  async getOcJusticeLimitHighConsume(request: GetOcJusticeLimitHighConsumeRequest): Promise<GetOcJusticeLimitHighConsumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcJusticeLimitHighConsumeWithOptions(request, runtime);
  }

  async getOcJusticeTerminalCaseWithOptions(request: GetOcJusticeTerminalCaseRequest, runtime: $Util.RuntimeOptions): Promise<GetOcJusticeTerminalCaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcJusticeTerminalCase",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcJusticeTerminalCaseResponse>(await this.callApi(params, req, runtime), new GetOcJusticeTerminalCaseResponse({}));
  }

  async getOcJusticeTerminalCase(request: GetOcJusticeTerminalCaseRequest): Promise<GetOcJusticeTerminalCaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcJusticeTerminalCaseWithOptions(request, runtime);
  }

  async getOcListedCompanyWithOptions(request: GetOcListedCompanyRequest, runtime: $Util.RuntimeOptions): Promise<GetOcListedCompanyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcListedCompany",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcListedCompanyResponse>(await this.callApi(params, req, runtime), new GetOcListedCompanyResponse({}));
  }

  async getOcListedCompany(request: GetOcListedCompanyRequest): Promise<GetOcListedCompanyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcListedCompanyWithOptions(request, runtime);
  }

  async getOcNegativeAdminPunishmentWithOptions(request: GetOcNegativeAdminPunishmentRequest, runtime: $Util.RuntimeOptions): Promise<GetOcNegativeAdminPunishmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcNegativeAdminPunishment",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcNegativeAdminPunishmentResponse>(await this.callApi(params, req, runtime), new GetOcNegativeAdminPunishmentResponse({}));
  }

  async getOcNegativeAdminPunishment(request: GetOcNegativeAdminPunishmentRequest): Promise<GetOcNegativeAdminPunishmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcNegativeAdminPunishmentWithOptions(request, runtime);
  }

  async getOcNegativeCustomsPunishmentWithOptions(request: GetOcNegativeCustomsPunishmentRequest, runtime: $Util.RuntimeOptions): Promise<GetOcNegativeCustomsPunishmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcNegativeCustomsPunishment",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcNegativeCustomsPunishmentResponse>(await this.callApi(params, req, runtime), new GetOcNegativeCustomsPunishmentResponse({}));
  }

  async getOcNegativeCustomsPunishment(request: GetOcNegativeCustomsPunishmentRequest): Promise<GetOcNegativeCustomsPunishmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcNegativeCustomsPunishmentWithOptions(request, runtime);
  }

  async getOcNegativeEnvironmentPunishmentWithOptions(request: GetOcNegativeEnvironmentPunishmentRequest, runtime: $Util.RuntimeOptions): Promise<GetOcNegativeEnvironmentPunishmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcNegativeEnvironmentPunishment",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcNegativeEnvironmentPunishmentResponse>(await this.callApi(params, req, runtime), new GetOcNegativeEnvironmentPunishmentResponse({}));
  }

  async getOcNegativeEnvironmentPunishment(request: GetOcNegativeEnvironmentPunishmentRequest): Promise<GetOcNegativeEnvironmentPunishmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcNegativeEnvironmentPunishmentWithOptions(request, runtime);
  }

  async getOcNegativeFoodDrugPunishmentWithOptions(request: GetOcNegativeFoodDrugPunishmentRequest, runtime: $Util.RuntimeOptions): Promise<GetOcNegativeFoodDrugPunishmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcNegativeFoodDrugPunishment",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcNegativeFoodDrugPunishmentResponse>(await this.callApi(params, req, runtime), new GetOcNegativeFoodDrugPunishmentResponse({}));
  }

  async getOcNegativeFoodDrugPunishment(request: GetOcNegativeFoodDrugPunishmentRequest): Promise<GetOcNegativeFoodDrugPunishmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcNegativeFoodDrugPunishmentWithOptions(request, runtime);
  }

  async getOcNegativeQualityPunishmentWithOptions(request: GetOcNegativeQualityPunishmentRequest, runtime: $Util.RuntimeOptions): Promise<GetOcNegativeQualityPunishmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcNegativeQualityPunishment",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcNegativeQualityPunishmentResponse>(await this.callApi(params, req, runtime), new GetOcNegativeQualityPunishmentResponse({}));
  }

  async getOcNegativeQualityPunishment(request: GetOcNegativeQualityPunishmentRequest): Promise<GetOcNegativeQualityPunishmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcNegativeQualityPunishmentWithOptions(request, runtime);
  }

  async getOcOperationBiddingWithOptions(request: GetOcOperationBiddingRequest, runtime: $Util.RuntimeOptions): Promise<GetOcOperationBiddingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcOperationBidding",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcOperationBiddingResponse>(await this.callApi(params, req, runtime), new GetOcOperationBiddingResponse({}));
  }

  async getOcOperationBidding(request: GetOcOperationBiddingRequest): Promise<GetOcOperationBiddingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcOperationBiddingWithOptions(request, runtime);
  }

  async getOcOperationCustomsWithOptions(request: GetOcOperationCustomsRequest, runtime: $Util.RuntimeOptions): Promise<GetOcOperationCustomsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcOperationCustoms",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcOperationCustomsResponse>(await this.callApi(params, req, runtime), new GetOcOperationCustomsResponse({}));
  }

  async getOcOperationCustoms(request: GetOcOperationCustomsRequest): Promise<GetOcOperationCustomsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcOperationCustomsWithOptions(request, runtime);
  }

  async getOcOperationPurchaseLandWithOptions(request: GetOcOperationPurchaseLandRequest, runtime: $Util.RuntimeOptions): Promise<GetOcOperationPurchaseLandResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcOperationPurchaseLand",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcOperationPurchaseLandResponse>(await this.callApi(params, req, runtime), new GetOcOperationPurchaseLandResponse({}));
  }

  async getOcOperationPurchaseLand(request: GetOcOperationPurchaseLandRequest): Promise<GetOcOperationPurchaseLandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcOperationPurchaseLandWithOptions(request, runtime);
  }

  async getOcOperationRecruitmentWithOptions(request: GetOcOperationRecruitmentRequest, runtime: $Util.RuntimeOptions): Promise<GetOcOperationRecruitmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcOperationRecruitment",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcOperationRecruitmentResponse>(await this.callApi(params, req, runtime), new GetOcOperationRecruitmentResponse({}));
  }

  async getOcOperationRecruitment(request: GetOcOperationRecruitmentRequest): Promise<GetOcOperationRecruitmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcOperationRecruitmentWithOptions(request, runtime);
  }

  async getOcProductBandWithOptions(request: GetOcProductBandRequest, runtime: $Util.RuntimeOptions): Promise<GetOcProductBandResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcProductBand",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcProductBandResponse>(await this.callApi(params, req, runtime), new GetOcProductBandResponse({}));
  }

  async getOcProductBand(request: GetOcProductBandRequest): Promise<GetOcProductBandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcProductBandWithOptions(request, runtime);
  }

  async getOcTaxAbnormalWithOptions(request: GetOcTaxAbnormalRequest, runtime: $Util.RuntimeOptions): Promise<GetOcTaxAbnormalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcTaxAbnormal",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcTaxAbnormalResponse>(await this.callApi(params, req, runtime), new GetOcTaxAbnormalResponse({}));
  }

  async getOcTaxAbnormal(request: GetOcTaxAbnormalRequest): Promise<GetOcTaxAbnormalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcTaxAbnormalWithOptions(request, runtime);
  }

  async getOcTaxClassAWithOptions(request: GetOcTaxClassARequest, runtime: $Util.RuntimeOptions): Promise<GetOcTaxClassAResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcTaxClassA",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcTaxClassAResponse>(await this.callApi(params, req, runtime), new GetOcTaxClassAResponse({}));
  }

  async getOcTaxClassA(request: GetOcTaxClassARequest): Promise<GetOcTaxClassAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcTaxClassAWithOptions(request, runtime);
  }

  async getOcTaxGeneralTaxpayerWithOptions(request: GetOcTaxGeneralTaxpayerRequest, runtime: $Util.RuntimeOptions): Promise<GetOcTaxGeneralTaxpayerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcTaxGeneralTaxpayer",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcTaxGeneralTaxpayerResponse>(await this.callApi(params, req, runtime), new GetOcTaxGeneralTaxpayerResponse({}));
  }

  async getOcTaxGeneralTaxpayer(request: GetOcTaxGeneralTaxpayerRequest): Promise<GetOcTaxGeneralTaxpayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcTaxGeneralTaxpayerWithOptions(request, runtime);
  }

  async getOcTaxIllegalWithOptions(request: GetOcTaxIllegalRequest, runtime: $Util.RuntimeOptions): Promise<GetOcTaxIllegalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcTaxIllegal",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcTaxIllegalResponse>(await this.callApi(params, req, runtime), new GetOcTaxIllegalResponse({}));
  }

  async getOcTaxIllegal(request: GetOcTaxIllegalRequest): Promise<GetOcTaxIllegalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcTaxIllegalWithOptions(request, runtime);
  }

  async getOcTaxOverdueWithOptions(request: GetOcTaxOverdueRequest, runtime: $Util.RuntimeOptions): Promise<GetOcTaxOverdueResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcTaxOverdue",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcTaxOverdueResponse>(await this.callApi(params, req, runtime), new GetOcTaxOverdueResponse({}));
  }

  async getOcTaxOverdue(request: GetOcTaxOverdueRequest): Promise<GetOcTaxOverdueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcTaxOverdueWithOptions(request, runtime);
  }

  async getOcTaxPunishmentWithOptions(request: GetOcTaxPunishmentRequest, runtime: $Util.RuntimeOptions): Promise<GetOcTaxPunishmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOcTaxPunishment",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOcTaxPunishmentResponse>(await this.callApi(params, req, runtime), new GetOcTaxPunishmentResponse({}));
  }

  async getOcTaxPunishment(request: GetOcTaxPunishmentRequest): Promise<GetOcTaxPunishmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOcTaxPunishmentWithOptions(request, runtime);
  }

  async getQccCertificationDetailByIdWithOptions(request: GetQccCertificationDetailByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetQccCertificationDetailByIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certId)) {
      body["CertId"] = request.certId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetQccCertificationDetailById",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQccCertificationDetailByIdResponse>(await this.callApi(params, req, runtime), new GetQccCertificationDetailByIdResponse({}));
  }

  async getQccCertificationDetailById(request: GetQccCertificationDetailByIdRequest): Promise<GetQccCertificationDetailByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQccCertificationDetailByIdWithOptions(request, runtime);
  }

  async getQccSearchCertificationWithOptions(request: GetQccSearchCertificationRequest, runtime: $Util.RuntimeOptions): Promise<GetQccSearchCertificationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certCategory)) {
      body["CertCategory"] = request.certCategory;
    }

    if (!Util.isUnset(request.entName)) {
      body["EntName"] = request.entName;
    }

    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetQccSearchCertification",
      version: "2022-08-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQccSearchCertificationResponse>(await this.callApi(params, req, runtime), new GetQccSearchCertificationResponse({}));
  }

  async getQccSearchCertification(request: GetQccSearchCertificationRequest): Promise<GetQccSearchCertificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQccSearchCertificationWithOptions(request, runtime);
  }

}
