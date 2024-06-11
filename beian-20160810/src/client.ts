// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DeleteUnbeianIpCheckTypeRequest extends $tea.Model {
  caller?: string;
  checkType?: number;
  ip?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      checkType: 'CheckType',
      ip: 'Ip',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      checkType: 'number',
      ip: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUnbeianIpCheckTypeResponseBody extends $tea.Model {
  errorCode?: number;
  errorMessage?: string;
  huntressIpCheckTypeResultDO?: DeleteUnbeianIpCheckTypeResponseBodyHuntressIpCheckTypeResultDO;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      huntressIpCheckTypeResultDO: 'HuntressIpCheckTypeResultDO',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      huntressIpCheckTypeResultDO: DeleteUnbeianIpCheckTypeResponseBodyHuntressIpCheckTypeResultDO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUnbeianIpCheckTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUnbeianIpCheckTypeResponseBody;
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
      body: DeleteUnbeianIpCheckTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainDomainRequest extends $tea.Model {
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainDomainResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMainDomainResponseBody;
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
      body: GetMainDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertUnbeianIpCheckTypeRequest extends $tea.Model {
  caller?: string;
  checkType?: number;
  ip?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      checkType: 'CheckType',
      ip: 'Ip',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      checkType: 'number',
      ip: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertUnbeianIpCheckTypeResponseBody extends $tea.Model {
  errorCode?: number;
  errorMessage?: string;
  huntressIpCheckTypeResultDO?: InsertUnbeianIpCheckTypeResponseBodyHuntressIpCheckTypeResultDO;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      huntressIpCheckTypeResultDO: 'HuntressIpCheckTypeResultDO',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      huntressIpCheckTypeResultDO: InsertUnbeianIpCheckTypeResponseBodyHuntressIpCheckTypeResultDO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertUnbeianIpCheckTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertUnbeianIpCheckTypeResponseBody;
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
      body: InsertUnbeianIpCheckTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnbeianIpCheckTypeRequest extends $tea.Model {
  caller?: string;
  checkType?: number;
  ip?: string;
  limit?: number;
  page?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      checkType: 'CheckType',
      ip: 'Ip',
      limit: 'Limit',
      page: 'Page',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      checkType: 'number',
      ip: 'string',
      limit: 'number',
      page: 'number',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnbeianIpCheckTypeResponseBody extends $tea.Model {
  errorCode?: number;
  errorMessage?: string;
  huntressIpCheckTypeResultDO?: ListUnbeianIpCheckTypeResponseBodyHuntressIpCheckTypeResultDO;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      huntressIpCheckTypeResultDO: 'HuntressIpCheckTypeResultDO',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      huntressIpCheckTypeResultDO: ListUnbeianIpCheckTypeResponseBodyHuntressIpCheckTypeResultDO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnbeianIpCheckTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUnbeianIpCheckTypeResponseBody;
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
      body: ListUnbeianIpCheckTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageAccessorDomainRequest extends $tea.Model {
  caller?: string;
  domain?: string;
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      domain: 'Domain',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      domain: 'string',
      operation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageAccessorDomainResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageAccessorDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ManageAccessorDomainResponseBody;
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
      body: ManageAccessorDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageAccessorDomainWhiteListRequest extends $tea.Model {
  caller?: string;
  domains?: string[];
  endTime?: string;
  operation?: string;
  remark?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      domains: 'Domains',
      endTime: 'EndTime',
      operation: 'Operation',
      remark: 'Remark',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      operation: 'string',
      remark: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageAccessorDomainWhiteListResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageAccessorDomainWhiteListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ManageAccessorDomainWhiteListResponseBody;
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
      body: ManageAccessorDomainWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageAccessorIpRequest extends $tea.Model {
  caller?: string;
  ip?: string;
  ipVersion?: number;
  operation?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      ip: 'Ip',
      ipVersion: 'IpVersion',
      operation: 'Operation',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      ip: 'string',
      ipVersion: 'number',
      operation: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageAccessorIpResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageAccessorIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ManageAccessorIpResponseBody;
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
      body: ManageAccessorIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainRequest extends $tea.Model {
  caller?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAccessorDomainResponseBody;
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
      body: QueryAccessorDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainListRequest extends $tea.Model {
  caller?: string;
  domain?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      domain: 'Domain',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      domain: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainListResponseBody extends $tea.Model {
  code?: number;
  data?: QueryAccessorDomainListResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: QueryAccessorDomainListResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAccessorDomainListResponseBody;
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
      body: QueryAccessorDomainListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainStatusRequest extends $tea.Model {
  caller?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainStatusResponseBody extends $tea.Model {
  code?: number;
  data?: QueryAccessorDomainStatusResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: QueryAccessorDomainStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAccessorDomainStatusResponseBody;
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
      body: QueryAccessorDomainStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainWhiteListRequest extends $tea.Model {
  caller?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainWhiteListResponseBody extends $tea.Model {
  code?: number;
  data?: QueryAccessorDomainWhiteListResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: QueryAccessorDomainWhiteListResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainWhiteListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAccessorDomainWhiteListResponseBody;
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
      body: QueryAccessorDomainWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainsStatusRequest extends $tea.Model {
  caller?: string;
  domains?: string[];
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainsStatusResponseBody extends $tea.Model {
  code?: number;
  data?: QueryAccessorDomainsStatusResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': QueryAccessorDomainsStatusResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainsStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAccessorDomainsStatusResponseBody;
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
      body: QueryAccessorDomainsStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorIpRequest extends $tea.Model {
  caller?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorIpResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAccessorIpResponseBody;
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
      body: QueryAccessorIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAccessorFullDomainsOssListRequest extends $tea.Model {
  caller?: string;
  ossList?: string[];
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      ossList: 'OssList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      ossList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAccessorFullDomainsOssListResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAccessorFullDomainsOssListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitAccessorFullDomainsOssListResponseBody;
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
      body: SubmitAccessorFullDomainsOssListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUnbeianIpCheckTypeResponseBodyHuntressIpCheckTypeResultDO extends $tea.Model {
  msg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertUnbeianIpCheckTypeResponseBodyHuntressIpCheckTypeResultDO extends $tea.Model {
  msg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnbeianIpCheckTypeResponseBodyHuntressIpCheckTypeResultDOList extends $tea.Model {
  aliuid?: number;
  caller?: string;
  checkType?: number;
  ip?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      caller: 'Caller',
      checkType: 'CheckType',
      ip: 'Ip',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'number',
      caller: 'string',
      checkType: 'number',
      ip: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnbeianIpCheckTypeResponseBodyHuntressIpCheckTypeResultDO extends $tea.Model {
  list?: ListUnbeianIpCheckTypeResponseBodyHuntressIpCheckTypeResultDOList[];
  msg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      msg: 'Msg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListUnbeianIpCheckTypeResponseBodyHuntressIpCheckTypeResultDOList },
      msg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainListResponseBodyData extends $tea.Model {
  domains?: string[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainStatusResponseBodyData extends $tea.Model {
  domain?: string;
  reason?: string;
  reasonCode?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      reason: 'Reason',
      reasonCode: 'ReasonCode',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      reason: 'string',
      reasonCode: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainWhiteListResponseBodyDataItems extends $tea.Model {
  createTime?: string;
  endTime?: string;
  startTime?: string;
  type?: string;
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      startTime: 'StartTime',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      startTime: 'string',
      type: 'string',
      valid: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainWhiteListResponseBodyData extends $tea.Model {
  items?: QueryAccessorDomainWhiteListResponseBodyDataItems[];
  white?: boolean;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      white: 'White',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': QueryAccessorDomainWhiteListResponseBodyDataItems },
      white: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccessorDomainsStatusResponseBodyData extends $tea.Model {
  domain?: string;
  reason?: string;
  reasonCode?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      reason: 'Reason',
      reasonCode: 'ReasonCode',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      reason: 'string',
      reasonCode: 'number',
      status: 'string',
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
    this._endpoint = this.getEndpoint("beian", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * @param request DeleteUnbeianIpCheckTypeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteUnbeianIpCheckTypeResponse
   */
  async deleteUnbeianIpCheckTypeWithOptions(request: DeleteUnbeianIpCheckTypeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUnbeianIpCheckTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.checkType)) {
      query["CheckType"] = request.checkType;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUnbeianIpCheckType",
      version: "2016-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUnbeianIpCheckTypeResponse>(await this.callApi(params, req, runtime), new DeleteUnbeianIpCheckTypeResponse({}));
  }

  /**
   * @param request DeleteUnbeianIpCheckTypeRequest
   * @return DeleteUnbeianIpCheckTypeResponse
   */
  async deleteUnbeianIpCheckType(request: DeleteUnbeianIpCheckTypeRequest): Promise<DeleteUnbeianIpCheckTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUnbeianIpCheckTypeWithOptions(request, runtime);
  }

  /**
   * @summary 获取主域名接口
   *
   * @param request GetMainDomainRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetMainDomainResponse
   */
  async getMainDomainWithOptions(request: GetMainDomainRequest, runtime: $Util.RuntimeOptions): Promise<GetMainDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMainDomain",
      version: "2016-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMainDomainResponse>(await this.callApi(params, req, runtime), new GetMainDomainResponse({}));
  }

  /**
   * @summary 获取主域名接口
   *
   * @param request GetMainDomainRequest
   * @return GetMainDomainResponse
   */
  async getMainDomain(request: GetMainDomainRequest): Promise<GetMainDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMainDomainWithOptions(request, runtime);
  }

  /**
   * @param request InsertUnbeianIpCheckTypeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return InsertUnbeianIpCheckTypeResponse
   */
  async insertUnbeianIpCheckTypeWithOptions(request: InsertUnbeianIpCheckTypeRequest, runtime: $Util.RuntimeOptions): Promise<InsertUnbeianIpCheckTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.checkType)) {
      query["CheckType"] = request.checkType;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertUnbeianIpCheckType",
      version: "2016-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertUnbeianIpCheckTypeResponse>(await this.callApi(params, req, runtime), new InsertUnbeianIpCheckTypeResponse({}));
  }

  /**
   * @param request InsertUnbeianIpCheckTypeRequest
   * @return InsertUnbeianIpCheckTypeResponse
   */
  async insertUnbeianIpCheckType(request: InsertUnbeianIpCheckTypeRequest): Promise<InsertUnbeianIpCheckTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertUnbeianIpCheckTypeWithOptions(request, runtime);
  }

  /**
   * @param request ListUnbeianIpCheckTypeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListUnbeianIpCheckTypeResponse
   */
  async listUnbeianIpCheckTypeWithOptions(request: ListUnbeianIpCheckTypeRequest, runtime: $Util.RuntimeOptions): Promise<ListUnbeianIpCheckTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.checkType)) {
      query["CheckType"] = request.checkType;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUnbeianIpCheckType",
      version: "2016-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUnbeianIpCheckTypeResponse>(await this.callApi(params, req, runtime), new ListUnbeianIpCheckTypeResponse({}));
  }

  /**
   * @param request ListUnbeianIpCheckTypeRequest
   * @return ListUnbeianIpCheckTypeResponse
   */
  async listUnbeianIpCheckType(request: ListUnbeianIpCheckTypeRequest): Promise<ListUnbeianIpCheckTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUnbeianIpCheckTypeWithOptions(request, runtime);
  }

  /**
   * @summary 接入方服务域名上报接口
   *
   * @param request ManageAccessorDomainRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ManageAccessorDomainResponse
   */
  async manageAccessorDomainWithOptions(request: ManageAccessorDomainRequest, runtime: $Util.RuntimeOptions): Promise<ManageAccessorDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.operation)) {
      query["Operation"] = request.operation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ManageAccessorDomain",
      version: "2016-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ManageAccessorDomainResponse>(await this.callApi(params, req, runtime), new ManageAccessorDomainResponse({}));
  }

  /**
   * @summary 接入方服务域名上报接口
   *
   * @param request ManageAccessorDomainRequest
   * @return ManageAccessorDomainResponse
   */
  async manageAccessorDomain(request: ManageAccessorDomainRequest): Promise<ManageAccessorDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.manageAccessorDomainWithOptions(request, runtime);
  }

  /**
   * @summary 接入方域名白名单上报接口
   *
   * @param request ManageAccessorDomainWhiteListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ManageAccessorDomainWhiteListResponse
   */
  async manageAccessorDomainWhiteListWithOptions(request: ManageAccessorDomainWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ManageAccessorDomainWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ManageAccessorDomainWhiteList",
      version: "2016-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ManageAccessorDomainWhiteListResponse>(await this.callApi(params, req, runtime), new ManageAccessorDomainWhiteListResponse({}));
  }

  /**
   * @summary 接入方域名白名单上报接口
   *
   * @param request ManageAccessorDomainWhiteListRequest
   * @return ManageAccessorDomainWhiteListResponse
   */
  async manageAccessorDomainWhiteList(request: ManageAccessorDomainWhiteListRequest): Promise<ManageAccessorDomainWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.manageAccessorDomainWhiteListWithOptions(request, runtime);
  }

  /**
   * @summary 接入方管控IP上报接口
   *
   * @param request ManageAccessorIpRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ManageAccessorIpResponse
   */
  async manageAccessorIpWithOptions(request: ManageAccessorIpRequest, runtime: $Util.RuntimeOptions): Promise<ManageAccessorIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ManageAccessorIp",
      version: "2016-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ManageAccessorIpResponse>(await this.callApi(params, req, runtime), new ManageAccessorIpResponse({}));
  }

  /**
   * @summary 接入方管控IP上报接口
   *
   * @param request ManageAccessorIpRequest
   * @return ManageAccessorIpResponse
   */
  async manageAccessorIp(request: ManageAccessorIpRequest): Promise<ManageAccessorIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.manageAccessorIpWithOptions(request, runtime);
  }

  /**
   * @summary 接入方服务域名是否上报查询接口
   *
   * @param request QueryAccessorDomainRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryAccessorDomainResponse
   */
  async queryAccessorDomainWithOptions(request: QueryAccessorDomainRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccessorDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAccessorDomain",
      version: "2016-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAccessorDomainResponse>(await this.callApi(params, req, runtime), new QueryAccessorDomainResponse({}));
  }

  /**
   * @summary 接入方服务域名是否上报查询接口
   *
   * @param request QueryAccessorDomainRequest
   * @return QueryAccessorDomainResponse
   */
  async queryAccessorDomain(request: QueryAccessorDomainRequest): Promise<QueryAccessorDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccessorDomainWithOptions(request, runtime);
  }

  /**
   * @summary 接入方查询服务域名列表接口
   *
   * @param request QueryAccessorDomainListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryAccessorDomainListResponse
   */
  async queryAccessorDomainListWithOptions(request: QueryAccessorDomainListRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccessorDomainListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAccessorDomainList",
      version: "2016-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAccessorDomainListResponse>(await this.callApi(params, req, runtime), new QueryAccessorDomainListResponse({}));
  }

  /**
   * @summary 接入方查询服务域名列表接口
   *
   * @param request QueryAccessorDomainListRequest
   * @return QueryAccessorDomainListResponse
   */
  async queryAccessorDomainList(request: QueryAccessorDomainListRequest): Promise<QueryAccessorDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccessorDomainListWithOptions(request, runtime);
  }

  /**
   * @summary 接入方域名状态查询接口
   *
   * @param request QueryAccessorDomainStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryAccessorDomainStatusResponse
   */
  async queryAccessorDomainStatusWithOptions(request: QueryAccessorDomainStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccessorDomainStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAccessorDomainStatus",
      version: "2016-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAccessorDomainStatusResponse>(await this.callApi(params, req, runtime), new QueryAccessorDomainStatusResponse({}));
  }

  /**
   * @summary 接入方域名状态查询接口
   *
   * @param request QueryAccessorDomainStatusRequest
   * @return QueryAccessorDomainStatusResponse
   */
  async queryAccessorDomainStatus(request: QueryAccessorDomainStatusRequest): Promise<QueryAccessorDomainStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccessorDomainStatusWithOptions(request, runtime);
  }

  /**
   * @summary 接入方域名白名单上报查询接口
   *
   * @param request QueryAccessorDomainWhiteListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryAccessorDomainWhiteListResponse
   */
  async queryAccessorDomainWhiteListWithOptions(request: QueryAccessorDomainWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccessorDomainWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAccessorDomainWhiteList",
      version: "2016-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAccessorDomainWhiteListResponse>(await this.callApi(params, req, runtime), new QueryAccessorDomainWhiteListResponse({}));
  }

  /**
   * @summary 接入方域名白名单上报查询接口
   *
   * @param request QueryAccessorDomainWhiteListRequest
   * @return QueryAccessorDomainWhiteListResponse
   */
  async queryAccessorDomainWhiteList(request: QueryAccessorDomainWhiteListRequest): Promise<QueryAccessorDomainWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccessorDomainWhiteListWithOptions(request, runtime);
  }

  /**
   * @summary 接入方域名状态批量查询接口
   *
   * @param request QueryAccessorDomainsStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryAccessorDomainsStatusResponse
   */
  async queryAccessorDomainsStatusWithOptions(request: QueryAccessorDomainsStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccessorDomainsStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.domains)) {
      query["Domains"] = request.domains;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAccessorDomainsStatus",
      version: "2016-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAccessorDomainsStatusResponse>(await this.callApi(params, req, runtime), new QueryAccessorDomainsStatusResponse({}));
  }

  /**
   * @summary 接入方域名状态批量查询接口
   *
   * @param request QueryAccessorDomainsStatusRequest
   * @return QueryAccessorDomainsStatusResponse
   */
  async queryAccessorDomainsStatus(request: QueryAccessorDomainsStatusRequest): Promise<QueryAccessorDomainsStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccessorDomainsStatusWithOptions(request, runtime);
  }

  /**
   * @summary 接入方服务域名上报接口
   *
   * @param request QueryAccessorIpRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryAccessorIpResponse
   */
  async queryAccessorIpWithOptions(request: QueryAccessorIpRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccessorIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAccessorIp",
      version: "2016-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAccessorIpResponse>(await this.callApi(params, req, runtime), new QueryAccessorIpResponse({}));
  }

  /**
   * @summary 接入方服务域名上报接口
   *
   * @param request QueryAccessorIpRequest
   * @return QueryAccessorIpResponse
   */
  async queryAccessorIp(request: QueryAccessorIpRequest): Promise<QueryAccessorIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccessorIpWithOptions(request, runtime);
  }

  /**
   * @summary 接入方服务域名全量上报接口
   *
   * @param request SubmitAccessorFullDomainsOssListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitAccessorFullDomainsOssListResponse
   */
  async submitAccessorFullDomainsOssListWithOptions(request: SubmitAccessorFullDomainsOssListRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAccessorFullDomainsOssListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.ossList)) {
      query["OssList"] = request.ossList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitAccessorFullDomainsOssList",
      version: "2016-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitAccessorFullDomainsOssListResponse>(await this.callApi(params, req, runtime), new SubmitAccessorFullDomainsOssListResponse({}));
  }

  /**
   * @summary 接入方服务域名全量上报接口
   *
   * @param request SubmitAccessorFullDomainsOssListRequest
   * @return SubmitAccessorFullDomainsOssListResponse
   */
  async submitAccessorFullDomainsOssList(request: SubmitAccessorFullDomainsOssListRequest): Promise<SubmitAccessorFullDomainsOssListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAccessorFullDomainsOssListWithOptions(request, runtime);
  }

}
