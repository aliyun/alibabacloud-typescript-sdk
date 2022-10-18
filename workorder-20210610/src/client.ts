// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CloseTicketRequest extends $tea.Model {
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticketId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseTicketResponseBody extends $tea.Model {
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

export class CloseTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CloseTicketResponseBody;
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
      body: CloseTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketRequest extends $tea.Model {
  categoryId?: string;
  creatorId?: string;
  description?: string;
  email?: string;
  fileNameList?: string[];
  secretInfo?: CreateTicketRequestSecretInfo;
  severity?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      creatorId: 'CreatorId',
      description: 'Description',
      email: 'Email',
      fileNameList: 'FileNameList',
      secretInfo: 'SecretInfo',
      severity: 'Severity',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      creatorId: 'string',
      description: 'string',
      email: 'string',
      fileNameList: { 'type': 'array', 'itemType': 'string' },
      secretInfo: CreateTicketRequestSecretInfo,
      severity: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketShrinkRequest extends $tea.Model {
  categoryId?: string;
  creatorId?: string;
  description?: string;
  email?: string;
  fileNameListShrink?: string;
  secretInfoShrink?: string;
  severity?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      creatorId: 'CreatorId',
      description: 'Description',
      email: 'Email',
      fileNameListShrink: 'FileNameList',
      secretInfoShrink: 'SecretInfo',
      severity: 'Severity',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      creatorId: 'string',
      description: 'string',
      email: 'string',
      fileNameListShrink: 'string',
      secretInfoShrink: 'string',
      severity: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketResponseBody extends $tea.Model {
  code?: number;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTicketResponseBody;
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
      body: CreateTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateTicketRequest extends $tea.Model {
  content?: string;
  score?: string;
  solved?: boolean;
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      score: 'Score',
      solved: 'Solved',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      score: 'string',
      solved: 'boolean',
      ticketId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateTicketResponseBody extends $tea.Model {
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

export class EvaluateTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EvaluateTicketResponseBody;
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
      body: EvaluateTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachmentUploadUrlRequest extends $tea.Model {
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachmentUploadUrlResponseBody extends $tea.Model {
  code?: number;
  data?: GetAttachmentUploadUrlResponseBodyData;
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
      data: GetAttachmentUploadUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachmentUploadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAttachmentUploadUrlResponseBody;
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
      body: GetAttachmentUploadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMqConsumerTagResponseBody extends $tea.Model {
  code?: number;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMqConsumerTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMqConsumerTagResponseBody;
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
      body: GetMqConsumerTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketRequest extends $tea.Model {
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticketId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketResponseBody extends $tea.Model {
  code?: number;
  data?: GetTicketResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTicketResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTicketResponseBody;
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
      body: GetTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoriesRequest extends $tea.Model {
  language?: string;
  name?: string;
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      name: 'Name',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      name: 'string',
      productId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoriesResponseBody extends $tea.Model {
  code?: number;
  data?: ListCategoriesResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListCategoriesResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCategoriesResponseBody;
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
      body: ListCategoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsRequest extends $tea.Model {
  language?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $tea.Model {
  code?: number;
  data?: ListProductsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListProductsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProductsResponseBody;
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
      body: ListProductsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesRequest extends $tea.Model {
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticketId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesResponseBody extends $tea.Model {
  code?: number;
  data?: ListTicketNotesResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListTicketNotesResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTicketNotesResponseBody;
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
      body: ListTicketNotesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsRequest extends $tea.Model {
  endDate?: number;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: number;
  statusList?: string[];
  ticketId?: string;
  ticketIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      statusList: 'StatusList',
      ticketId: 'TicketId',
      ticketIdList: 'TicketIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
      ticketId: 'string',
      ticketIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsShrinkRequest extends $tea.Model {
  endDate?: number;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: number;
  statusList?: string[];
  ticketId?: string;
  ticketIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      statusList: 'StatusList',
      ticketId: 'TicketId',
      ticketIdListShrink: 'TicketIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
      ticketId: 'string',
      ticketIdListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBody extends $tea.Model {
  code?: number;
  data?: ListTicketsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListTicketsResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTicketsResponseBody;
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
      body: ListTicketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReopenTicketRequest extends $tea.Model {
  content?: string;
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      ticketId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReopenTicketResponseBody extends $tea.Model {
  code?: number;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReopenTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReopenTicketResponseBody;
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
      body: ReopenTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyTicketRequest extends $tea.Model {
  content?: string;
  encrypt?: boolean;
  fileNameList?: string[];
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      encrypt: 'Encrypt',
      fileNameList: 'FileNameList',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      encrypt: 'boolean',
      fileNameList: { 'type': 'array', 'itemType': 'string' },
      ticketId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyTicketShrinkRequest extends $tea.Model {
  content?: string;
  encrypt?: boolean;
  fileNameListShrink?: string;
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      encrypt: 'Encrypt',
      fileNameListShrink: 'FileNameList',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      encrypt: 'boolean',
      fileNameListShrink: 'string',
      ticketId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyTicketResponseBody extends $tea.Model {
  code?: number;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReplyTicketResponseBody;
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
      body: ReplyTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketRequestSecretInfo extends $tea.Model {
  content?: string;
  fileNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileNameList: 'FileNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachmentUploadUrlResponseBodyData extends $tea.Model {
  getSignedUrl?: string;
  objectKey?: string;
  putSignedUrl?: string;
  static names(): { [key: string]: string } {
    return {
      getSignedUrl: 'GetSignedUrl',
      objectKey: 'ObjectKey',
      putSignedUrl: 'PutSignedUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getSignedUrl: 'string',
      objectKey: 'string',
      putSignedUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketResponseBodyDataSeverity extends $tea.Model {
  label?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketResponseBodyDataStatus extends $tea.Model {
  label?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketResponseBodyData extends $tea.Model {
  categoryId?: string;
  createTime?: number;
  creatorId?: string;
  description?: string;
  severity?: GetTicketResponseBodyDataSeverity;
  status?: GetTicketResponseBodyDataStatus;
  ticketId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      description: 'Description',
      severity: 'Severity',
      status: 'Status',
      ticketId: 'TicketId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      createTime: 'number',
      creatorId: 'string',
      description: 'string',
      severity: GetTicketResponseBodyDataSeverity,
      status: GetTicketResponseBodyDataStatus,
      ticketId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoriesResponseBodyData extends $tea.Model {
  categoryId?: number;
  categoryName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      categoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyDataProductList extends $tea.Model {
  productId?: number;
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'number',
      productName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyData extends $tea.Model {
  directoryId?: number;
  directoryName?: string;
  productList?: ListProductsResponseBodyDataProductList[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      productList: 'ProductList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'number',
      directoryName: 'string',
      productList: { 'type': 'array', 'itemType': ListProductsResponseBodyDataProductList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesResponseBodyDataAttachments extends $tea.Model {
  name?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesResponseBodyDataDialog extends $tea.Model {
  content?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesResponseBodyDataUser extends $tea.Model {
  name?: string;
  role?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      role: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesResponseBodyData extends $tea.Model {
  attachments?: ListTicketNotesResponseBodyDataAttachments[];
  createTime?: number;
  dialog?: ListTicketNotesResponseBodyDataDialog;
  dialogId?: number;
  status?: number;
  tip?: string;
  type?: number;
  user?: ListTicketNotesResponseBodyDataUser;
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
      createTime: 'CreateTime',
      dialog: 'Dialog',
      dialogId: 'DialogId',
      status: 'Status',
      tip: 'Tip',
      type: 'Type',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': ListTicketNotesResponseBodyDataAttachments },
      createTime: 'number',
      dialog: ListTicketNotesResponseBodyDataDialog,
      dialogId: 'number',
      status: 'number',
      tip: 'string',
      type: 'number',
      user: ListTicketNotesResponseBodyDataUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBodyDataStatus extends $tea.Model {
  label?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBodyData extends $tea.Model {
  status?: ListTicketsResponseBodyDataStatus;
  ticketId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      ticketId: 'TicketId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: ListTicketsResponseBodyDataStatus,
      ticketId: 'string',
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
    this._endpointRule = "central";
    this._endpointMap = {
      'ap-northeast-1': "workorder.ap-northeast-1.aliyuncs.com",
      'ap-southeast-1': "workorder.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("workorder", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async closeTicketWithOptions(request: CloseTicketRequest, runtime: $Util.RuntimeOptions): Promise<CloseTicketResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ticketId)) {
      body["TicketId"] = request.ticketId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CloseTicket",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseTicketResponse>(await this.callApi(params, req, runtime), new CloseTicketResponse({}));
  }

  async closeTicket(request: CloseTicketRequest): Promise<CloseTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeTicketWithOptions(request, runtime);
  }

  async createTicketWithOptions(tmpReq: CreateTicketRequest, runtime: $Util.RuntimeOptions): Promise<CreateTicketResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTicketShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.fileNameList)) {
      request.fileNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileNameList, "FileNameList", "simple");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.secretInfo))) {
      request.secretInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.secretInfo), "SecretInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.secretInfoShrink)) {
      query["SecretInfo"] = request.secretInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.creatorId)) {
      body["CreatorId"] = request.creatorId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.email)) {
      body["Email"] = request.email;
    }

    if (!Util.isUnset(request.fileNameListShrink)) {
      body["FileNameList"] = request.fileNameListShrink;
    }

    if (!Util.isUnset(request.severity)) {
      body["Severity"] = request.severity;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTicket",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTicketResponse>(await this.callApi(params, req, runtime), new CreateTicketResponse({}));
  }

  async createTicket(request: CreateTicketRequest): Promise<CreateTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTicketWithOptions(request, runtime);
  }

  async evaluateTicketWithOptions(request: EvaluateTicketRequest, runtime: $Util.RuntimeOptions): Promise<EvaluateTicketResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.score)) {
      body["Score"] = request.score;
    }

    if (!Util.isUnset(request.solved)) {
      body["Solved"] = request.solved;
    }

    if (!Util.isUnset(request.ticketId)) {
      body["TicketId"] = request.ticketId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EvaluateTicket",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EvaluateTicketResponse>(await this.callApi(params, req, runtime), new EvaluateTicketResponse({}));
  }

  async evaluateTicket(request: EvaluateTicketRequest): Promise<EvaluateTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.evaluateTicketWithOptions(request, runtime);
  }

  async getAttachmentUploadUrlWithOptions(request: GetAttachmentUploadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetAttachmentUploadUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAttachmentUploadUrl",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAttachmentUploadUrlResponse>(await this.callApi(params, req, runtime), new GetAttachmentUploadUrlResponse({}));
  }

  async getAttachmentUploadUrl(request: GetAttachmentUploadUrlRequest): Promise<GetAttachmentUploadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAttachmentUploadUrlWithOptions(request, runtime);
  }

  async getMqConsumerTagWithOptions(runtime: $Util.RuntimeOptions): Promise<GetMqConsumerTagResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetMqConsumerTag",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMqConsumerTagResponse>(await this.callApi(params, req, runtime), new GetMqConsumerTagResponse({}));
  }

  async getMqConsumerTag(): Promise<GetMqConsumerTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMqConsumerTagWithOptions(runtime);
  }

  async getTicketWithOptions(request: GetTicketRequest, runtime: $Util.RuntimeOptions): Promise<GetTicketResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ticketId)) {
      body["TicketId"] = request.ticketId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTicket",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTicketResponse>(await this.callApi(params, req, runtime), new GetTicketResponse({}));
  }

  async getTicket(request: GetTicketRequest): Promise<GetTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTicketWithOptions(request, runtime);
  }

  async listCategoriesWithOptions(request: ListCategoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListCategoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCategories",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCategoriesResponse>(await this.callApi(params, req, runtime), new ListCategoriesResponse({}));
  }

  async listCategories(request: ListCategoriesRequest): Promise<ListCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCategoriesWithOptions(request, runtime);
  }

  async listProductsWithOptions(request: ListProductsRequest, runtime: $Util.RuntimeOptions): Promise<ListProductsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProducts",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProductsResponse>(await this.callApi(params, req, runtime), new ListProductsResponse({}));
  }

  async listProducts(request: ListProductsRequest): Promise<ListProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductsWithOptions(request, runtime);
  }

  async listTicketNotesWithOptions(request: ListTicketNotesRequest, runtime: $Util.RuntimeOptions): Promise<ListTicketNotesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTicketNotes",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTicketNotesResponse>(await this.callApi(params, req, runtime), new ListTicketNotesResponse({}));
  }

  async listTicketNotes(request: ListTicketNotesRequest): Promise<ListTicketNotesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTicketNotesWithOptions(request, runtime);
  }

  async listTicketsWithOptions(tmpReq: ListTicketsRequest, runtime: $Util.RuntimeOptions): Promise<ListTicketsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTicketsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ticketIdList)) {
      request.ticketIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ticketIdList, "TicketIdList", "simple");
    }

    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.statusList)) {
      body["StatusList"] = request.statusList;
    }

    if (!Util.isUnset(request.ticketId)) {
      body["TicketId"] = request.ticketId;
    }

    if (!Util.isUnset(request.ticketIdListShrink)) {
      body["TicketIdList"] = request.ticketIdListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTickets",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTicketsResponse>(await this.callApi(params, req, runtime), new ListTicketsResponse({}));
  }

  async listTickets(request: ListTicketsRequest): Promise<ListTicketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTicketsWithOptions(request, runtime);
  }

  async reopenTicketWithOptions(request: ReopenTicketRequest, runtime: $Util.RuntimeOptions): Promise<ReopenTicketResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.ticketId)) {
      body["TicketId"] = request.ticketId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReopenTicket",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReopenTicketResponse>(await this.callApi(params, req, runtime), new ReopenTicketResponse({}));
  }

  async reopenTicket(request: ReopenTicketRequest): Promise<ReopenTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reopenTicketWithOptions(request, runtime);
  }

  async replyTicketWithOptions(tmpReq: ReplyTicketRequest, runtime: $Util.RuntimeOptions): Promise<ReplyTicketResponse> {
    Util.validateModel(tmpReq);
    let request = new ReplyTicketShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.fileNameList)) {
      request.fileNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileNameList, "FileNameList", "simple");
    }

    let query = { };
    if (!Util.isUnset(request.fileNameListShrink)) {
      query["FileNameList"] = request.fileNameListShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.encrypt)) {
      body["Encrypt"] = request.encrypt;
    }

    if (!Util.isUnset(request.ticketId)) {
      body["TicketId"] = request.ticketId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReplyTicket",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReplyTicketResponse>(await this.callApi(params, req, runtime), new ReplyTicketResponse({}));
  }

  async replyTicket(request: ReplyTicketRequest): Promise<ReplyTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replyTicketWithOptions(request, runtime);
  }

}
