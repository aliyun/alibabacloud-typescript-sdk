// This file is auto-generated, don't edit it
/**
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

export class AyncTradeDocumentPackageExtractSmartAppRequest extends $tea.Model {
  customExtractionRange?: string[];
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileUrl?: string;
  option?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      customExtractionRange: 'CustomExtractionRange',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      option: 'Option',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customExtractionRange: { 'type': 'array', 'itemType': 'string' },
      fileName: 'string',
      fileUrl: 'string',
      option: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AyncTradeDocumentPackageExtractSmartAppShrinkRequest extends $tea.Model {
  customExtractionRangeShrink?: string;
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileUrl?: string;
  option?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      customExtractionRangeShrink: 'CustomExtractionRange',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      option: 'Option',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customExtractionRangeShrink: 'string',
      fileName: 'string',
      fileUrl: 'string',
      option: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AyncTradeDocumentPackageExtractSmartAppResponseBody extends $tea.Model {
  completed?: boolean;
  createTime?: string;
  data?: any;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      data: 'Data',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      data: 'any',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AyncTradeDocumentPackageExtractSmartAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AyncTradeDocumentPackageExtractSmartAppResponseBody;
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
      body: AyncTradeDocumentPackageExtractSmartAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocParserResultRequest extends $tea.Model {
  /**
   * @example
   * docmind-20220816-1e89d65c
   */
  id?: string;
  layoutNum?: number;
  layoutStepSize?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      layoutNum: 'LayoutNum',
      layoutStepSize: 'LayoutStepSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      layoutNum: 'number',
      layoutStepSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocParserResultResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocParserResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocParserResultResponseBody;
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
      body: GetDocParserResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocStructureResultRequest extends $tea.Model {
  /**
   * @example
   * docmind-20220816-1e89d65c
   */
  id?: string;
  imageStrategy?: string;
  revealMarkdown?: boolean;
  useUrlResponseBody?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      imageStrategy: 'ImageStrategy',
      revealMarkdown: 'RevealMarkdown',
      useUrlResponseBody: 'UseUrlResponseBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      imageStrategy: 'string',
      revealMarkdown: 'boolean',
      useUrlResponseBody: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocStructureResultResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  completed?: boolean;
  data?: { [key: string]: any };
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completed: 'Completed',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completed: 'boolean',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocStructureResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocStructureResultResponseBody;
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
      body: GetDocStructureResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentCompareResultRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentCompareResultResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  completed?: boolean;
  data?: any;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completed: 'Completed',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completed: 'boolean',
      data: 'any',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentCompareResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentCompareResultResponseBody;
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
      body: GetDocumentCompareResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentConvertResultRequest extends $tea.Model {
  /**
   * @example
   * docmind-20220816-1e89d65c
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentConvertResultResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  completed?: boolean;
  data?: GetDocumentConvertResultResponseBodyData[];
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completed: 'Completed',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completed: 'boolean',
      data: { 'type': 'array', 'itemType': GetDocumentConvertResultResponseBodyData },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentConvertResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentConvertResultResponseBody;
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
      body: GetDocumentConvertResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentExtractResultRequest extends $tea.Model {
  /**
   * @example
   * docmind-20220816-1e89d65c
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentExtractResultResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  completed?: boolean;
  data?: { [key: string]: any };
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completed: 'Completed',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completed: 'boolean',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentExtractResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentExtractResultResponseBody;
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
      body: GetDocumentExtractResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPageNumRequest extends $tea.Model {
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPageNumResponseBody extends $tea.Model {
  data?: GetPageNumResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: string;
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
      data: GetPageNumResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPageNumResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPageNumResponseBody;
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
      body: GetPageNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableUnderstandingResultRequest extends $tea.Model {
  /**
   * @example
   * docmind-20220816-1e89d65c
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableUnderstandingResultResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  completed?: boolean;
  data?: { [key: string]: any };
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completed: 'Completed',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completed: 'boolean',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableUnderstandingResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTableUnderstandingResultResponseBody;
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
      body: GetTableUnderstandingResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocParserStatusRequest extends $tea.Model {
  /**
   * @example
   * docmind-20220816-1e89d65c
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocParserStatusResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  data?: QueryDocParserStatusResponseBodyData;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
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
      data: QueryDocParserStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocParserStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDocParserStatusResponseBody;
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
      body: QueryDocParserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToExcelJobRequest extends $tea.Model {
  forceMergeExcel?: boolean;
  /**
   * @example
   * jpg
   */
  imageNameExtension?: string;
  imageNames?: string[];
  imageUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      forceMergeExcel: 'ForceMergeExcel',
      imageNameExtension: 'ImageNameExtension',
      imageNames: 'ImageNames',
      imageUrls: 'ImageUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceMergeExcel: 'boolean',
      imageNameExtension: 'string',
      imageNames: { 'type': 'array', 'itemType': 'string' },
      imageUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToExcelJobShrinkRequest extends $tea.Model {
  forceMergeExcel?: boolean;
  /**
   * @example
   * jpg
   */
  imageNameExtension?: string;
  imageNamesShrink?: string;
  imageUrlsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      forceMergeExcel: 'ForceMergeExcel',
      imageNameExtension: 'ImageNameExtension',
      imageNamesShrink: 'ImageNames',
      imageUrlsShrink: 'ImageUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceMergeExcel: 'boolean',
      imageNameExtension: 'string',
      imageNamesShrink: 'string',
      imageUrlsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToExcelJobResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  data?: SubmitConvertImageToExcelJobResponseBodyData;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
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
      data: SubmitConvertImageToExcelJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToExcelJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitConvertImageToExcelJobResponseBody;
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
      body: SubmitConvertImageToExcelJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToMarkdownJobRequest extends $tea.Model {
  /**
   * @example
   * jpg
   */
  imageNameExtension?: string;
  imageNames?: string[];
  imageUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      imageNameExtension: 'ImageNameExtension',
      imageNames: 'ImageNames',
      imageUrls: 'ImageUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNameExtension: 'string',
      imageNames: { 'type': 'array', 'itemType': 'string' },
      imageUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToMarkdownJobShrinkRequest extends $tea.Model {
  /**
   * @example
   * jpg
   */
  imageNameExtension?: string;
  imageNamesShrink?: string;
  imageUrlsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      imageNameExtension: 'ImageNameExtension',
      imageNamesShrink: 'ImageNames',
      imageUrlsShrink: 'ImageUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNameExtension: 'string',
      imageNamesShrink: 'string',
      imageUrlsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToMarkdownJobResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  data?: SubmitConvertImageToMarkdownJobResponseBodyData;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
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
      data: SubmitConvertImageToMarkdownJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToMarkdownJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitConvertImageToMarkdownJobResponseBody;
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
      body: SubmitConvertImageToMarkdownJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToPdfJobRequest extends $tea.Model {
  /**
   * @example
   * JPG
   */
  imageNameExtension?: string;
  imageNames?: string[];
  imageUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      imageNameExtension: 'ImageNameExtension',
      imageNames: 'ImageNames',
      imageUrls: 'ImageUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNameExtension: 'string',
      imageNames: { 'type': 'array', 'itemType': 'string' },
      imageUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToPdfJobShrinkRequest extends $tea.Model {
  /**
   * @example
   * JPG
   */
  imageNameExtension?: string;
  imageNamesShrink?: string;
  imageUrlsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      imageNameExtension: 'ImageNameExtension',
      imageNamesShrink: 'ImageNames',
      imageUrlsShrink: 'ImageUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNameExtension: 'string',
      imageNamesShrink: 'string',
      imageUrlsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToPdfJobResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  data?: SubmitConvertImageToPdfJobResponseBodyData;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
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
      data: SubmitConvertImageToPdfJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToPdfJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitConvertImageToPdfJobResponseBody;
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
      body: SubmitConvertImageToPdfJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToWordJobRequest extends $tea.Model {
  /**
   * @example
   * jpg
   */
  imageNameExtension?: string;
  imageNames?: string[];
  imageUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      imageNameExtension: 'ImageNameExtension',
      imageNames: 'ImageNames',
      imageUrls: 'ImageUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNameExtension: 'string',
      imageNames: { 'type': 'array', 'itemType': 'string' },
      imageUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToWordJobShrinkRequest extends $tea.Model {
  /**
   * @example
   * jpg
   */
  imageNameExtension?: string;
  imageNamesShrink?: string;
  imageUrlsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      imageNameExtension: 'ImageNameExtension',
      imageNamesShrink: 'ImageNames',
      imageUrlsShrink: 'ImageUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNameExtension: 'string',
      imageNamesShrink: 'string',
      imageUrlsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToWordJobResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  data?: SubmitConvertImageToWordJobResponseBodyData;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
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
      data: SubmitConvertImageToWordJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToWordJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitConvertImageToWordJobResponseBody;
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
      body: SubmitConvertImageToWordJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToExcelJobRequest extends $tea.Model {
  /**
   * @example
   * convertPdfToExcel.pdf
   */
  fileName?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrl?: string;
  forceExportInnerImage?: boolean;
  forceMergeExcel?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      forceExportInnerImage: 'ForceExportInnerImage',
      forceMergeExcel: 'ForceMergeExcel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
      forceExportInnerImage: 'boolean',
      forceMergeExcel: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToExcelJobAdvanceRequest extends $tea.Model {
  /**
   * @example
   * convertPdfToExcel.pdf
   */
  fileName?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrlObject?: Readable;
  forceExportInnerImage?: boolean;
  forceMergeExcel?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
      forceExportInnerImage: 'ForceExportInnerImage',
      forceMergeExcel: 'ForceMergeExcel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrlObject: 'Readable',
      forceExportInnerImage: 'boolean',
      forceMergeExcel: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToExcelJobResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  data?: SubmitConvertPdfToExcelJobResponseBodyData;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
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
      data: SubmitConvertPdfToExcelJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToExcelJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitConvertPdfToExcelJobResponseBody;
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
      body: SubmitConvertPdfToExcelJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToImageJobRequest extends $tea.Model {
  /**
   * @example
   * convertPdfToImage.pdf
   */
  fileName?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToImageJobAdvanceRequest extends $tea.Model {
  /**
   * @example
   * convertPdfToImage.pdf
   */
  fileName?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToImageJobResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  data?: SubmitConvertPdfToImageJobResponseBodyData;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
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
      data: SubmitConvertPdfToImageJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToImageJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitConvertPdfToImageJobResponseBody;
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
      body: SubmitConvertPdfToImageJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToMarkdownJobRequest extends $tea.Model {
  /**
   * @example
   * convertPdfToExcel.pdf
   */
  fileName?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToMarkdownJobAdvanceRequest extends $tea.Model {
  /**
   * @example
   * convertPdfToExcel.pdf
   */
  fileName?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToMarkdownJobResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  data?: SubmitConvertPdfToMarkdownJobResponseBodyData;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
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
      data: SubmitConvertPdfToMarkdownJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToMarkdownJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitConvertPdfToMarkdownJobResponseBody;
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
      body: SubmitConvertPdfToMarkdownJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToWordJobRequest extends $tea.Model {
  /**
   * @example
   * covertPdfToWord.pdf
   */
  fileName?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrl?: string;
  forceExportInnerImage?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      forceExportInnerImage: 'ForceExportInnerImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
      forceExportInnerImage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToWordJobAdvanceRequest extends $tea.Model {
  /**
   * @example
   * covertPdfToWord.pdf
   */
  fileName?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrlObject?: Readable;
  forceExportInnerImage?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
      forceExportInnerImage: 'ForceExportInnerImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrlObject: 'Readable',
      forceExportInnerImage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToWordJobResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  data?: SubmitConvertPdfToWordJobResponseBodyData;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
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
      data: SubmitConvertPdfToWordJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToWordJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitConvertPdfToWordJobResponseBody;
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
      body: SubmitConvertPdfToWordJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDigitalDocStructureJobRequest extends $tea.Model {
  /**
   * @example
   * docStructure.pdf
   */
  fileName?: string;
  /**
   * @example
   * pdf
   */
  fileNameExtension?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrl?: string;
  imageStrategy?: string;
  revealMarkdown?: boolean;
  useUrlResponseBody?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      imageStrategy: 'ImageStrategy',
      revealMarkdown: 'RevealMarkdown',
      useUrlResponseBody: 'UseUrlResponseBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      imageStrategy: 'string',
      revealMarkdown: 'boolean',
      useUrlResponseBody: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDigitalDocStructureJobAdvanceRequest extends $tea.Model {
  /**
   * @example
   * docStructure.pdf
   */
  fileName?: string;
  /**
   * @example
   * pdf
   */
  fileNameExtension?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrlObject?: Readable;
  imageStrategy?: string;
  revealMarkdown?: boolean;
  useUrlResponseBody?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      imageStrategy: 'ImageStrategy',
      revealMarkdown: 'RevealMarkdown',
      useUrlResponseBody: 'UseUrlResponseBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      imageStrategy: 'string',
      revealMarkdown: 'boolean',
      useUrlResponseBody: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDigitalDocStructureJobResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  data?: any;
  id?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      id: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDigitalDocStructureJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitDigitalDocStructureJobResponseBody;
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
      body: SubmitDigitalDocStructureJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocParserJobRequest extends $tea.Model {
  /**
   * @example
   * docStructure.pdf
   */
  fileName?: string;
  /**
   * @example
   * pdf
   */
  fileNameExtension?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrl?: string;
  formulaEnhancement?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      formulaEnhancement: 'FormulaEnhancement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      formulaEnhancement: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocParserJobAdvanceRequest extends $tea.Model {
  /**
   * @example
   * docStructure.pdf
   */
  fileName?: string;
  /**
   * @example
   * pdf
   */
  fileNameExtension?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrlObject?: Readable;
  formulaEnhancement?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      formulaEnhancement: 'FormulaEnhancement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      formulaEnhancement: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocParserJobResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  data?: SubmitDocParserJobResponseBodyData;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
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
      data: SubmitDocParserJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocParserJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitDocParserJobResponseBody;
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
      body: SubmitDocParserJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocStructureJobRequest extends $tea.Model {
  allowPptFormat?: boolean;
  /**
   * @example
   * docStructure.pdf
   */
  fileName?: string;
  /**
   * @example
   * pdf
   */
  fileNameExtension?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrl?: string;
  formulaEnhancement?: boolean;
  structureType?: string;
  static names(): { [key: string]: string } {
    return {
      allowPptFormat: 'AllowPptFormat',
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      formulaEnhancement: 'FormulaEnhancement',
      structureType: 'StructureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPptFormat: 'boolean',
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      formulaEnhancement: 'boolean',
      structureType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocStructureJobAdvanceRequest extends $tea.Model {
  allowPptFormat?: boolean;
  /**
   * @example
   * docStructure.pdf
   */
  fileName?: string;
  /**
   * @example
   * pdf
   */
  fileNameExtension?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrlObject?: Readable;
  formulaEnhancement?: boolean;
  structureType?: string;
  static names(): { [key: string]: string } {
    return {
      allowPptFormat: 'AllowPptFormat',
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      formulaEnhancement: 'FormulaEnhancement',
      structureType: 'StructureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPptFormat: 'boolean',
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      formulaEnhancement: 'boolean',
      structureType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocStructureJobResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  data?: SubmitDocStructureJobResponseBodyData;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
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
      data: SubmitDocStructureJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocStructureJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitDocStructureJobResponseBody;
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
      body: SubmitDocStructureJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentExtractJobRequest extends $tea.Model {
  fileName?: string;
  /**
   * @example
   * pdf
   */
  fileNameExtension?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentExtractJobAdvanceRequest extends $tea.Model {
  fileName?: string;
  /**
   * @example
   * pdf
   */
  fileNameExtension?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentExtractJobResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  data?: SubmitDocumentExtractJobResponseBodyData;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
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
      data: SubmitDocumentExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentExtractJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitDocumentExtractJobResponseBody;
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
      body: SubmitDocumentExtractJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTableUnderstandingJobRequest extends $tea.Model {
  fileName?: string;
  /**
   * @example
   * pdf
   */
  fileNameExtension?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTableUnderstandingJobAdvanceRequest extends $tea.Model {
  fileName?: string;
  /**
   * @example
   * pdf
   */
  fileNameExtension?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTableUnderstandingJobResponseBody extends $tea.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  data?: SubmitTableUnderstandingJobResponseBodyData;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
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
      data: SubmitTableUnderstandingJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTableUnderstandingJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitTableUnderstandingJobResponseBody;
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
      body: SubmitTableUnderstandingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentConvertResultResponseBodyData extends $tea.Model {
  /**
   * @example
   * e6d83e55df218650b9a296bfbc300076
   */
  md5?: string;
  /**
   * @example
   * 2355965
   */
  size?: number;
  /**
   * @example
   * pdf
   */
  type?: string;
  /**
   * @example
   * http://docmind-api-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/convert/docmind-20220816-15bc7965/0.pdf?Expires=1660722412&OSSAccessKeyId=LTAI5tFEK2uEApeeYzxNMEci&Signature=f%2FKluINWMuuVyA5w22Z1wkoRjEg%3D
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      md5: 'Md5',
      size: 'Size',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      md5: 'string',
      size: 'number',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPageNumResponseBodyData extends $tea.Model {
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocParserStatusResponseBodyData extends $tea.Model {
  numberOfSuccessfulParsing?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      numberOfSuccessfulParsing: 'NumberOfSuccessfulParsing',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numberOfSuccessfulParsing: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToExcelJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * docmind-20220810-7c5f9dd4
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToMarkdownJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * docmind-20220810-7c5f9dd4
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToPdfJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * docmind-20220810-7c5f9dd4
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToWordJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * docmind-20220810-7c5f9dd4
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToExcelJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * docmind-20220816-15bc7965
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToImageJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * docmind-20220810-7c5f9dd4
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToMarkdownJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * docmind-20220816-15bc7965
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToWordJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * docmind-20220816-15bc7965
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocParserJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * docmind-20220816-15bc7965
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocStructureJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * docmind-20220816-15bc7965
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentExtractJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * docmind-20220816-15bc7965
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTableUnderstandingJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * docmind-20220816-15bc7965
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "docmind-api.aliyuncs.com",
      'ap-northeast-2-pop': "docmind-api.aliyuncs.com",
      'ap-south-1': "docmind-api.aliyuncs.com",
      'ap-southeast-1': "docmind-api.aliyuncs.com",
      'ap-southeast-2': "docmind-api.aliyuncs.com",
      'ap-southeast-3': "docmind-api.aliyuncs.com",
      'ap-southeast-5': "docmind-api.aliyuncs.com",
      'cn-beijing': "docmind-api.aliyuncs.com",
      'cn-beijing-finance-1': "docmind-api.aliyuncs.com",
      'cn-beijing-finance-pop': "docmind-api.aliyuncs.com",
      'cn-beijing-gov-1': "docmind-api.aliyuncs.com",
      'cn-beijing-nu16-b01': "docmind-api.aliyuncs.com",
      'cn-chengdu': "docmind-api.aliyuncs.com",
      'cn-edge-1': "docmind-api.aliyuncs.com",
      'cn-fujian': "docmind-api.aliyuncs.com",
      'cn-haidian-cm12-c01': "docmind-api.aliyuncs.com",
      'cn-hangzhou-bj-b01': "docmind-api.aliyuncs.com",
      'cn-hangzhou-finance': "docmind-api.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "docmind-api.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "docmind-api.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "docmind-api.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "docmind-api.aliyuncs.com",
      'cn-hangzhou-test-306': "docmind-api.aliyuncs.com",
      'cn-hongkong': "docmind-api.aliyuncs.com",
      'cn-hongkong-finance-pop': "docmind-api.aliyuncs.com",
      'cn-huhehaote': "docmind-api.aliyuncs.com",
      'cn-huhehaote-nebula-1': "docmind-api.aliyuncs.com",
      'cn-north-2-gov-1': "docmind-api.aliyuncs.com",
      'cn-qingdao': "docmind-api.aliyuncs.com",
      'cn-qingdao-nebula': "docmind-api.aliyuncs.com",
      'cn-shanghai': "docmind-api.aliyuncs.com",
      'cn-shanghai-et15-b01': "docmind-api.aliyuncs.com",
      'cn-shanghai-et2-b01': "docmind-api.aliyuncs.com",
      'cn-shanghai-finance-1': "docmind-api.aliyuncs.com",
      'cn-shanghai-inner': "docmind-api.aliyuncs.com",
      'cn-shanghai-internal-test-1': "docmind-api.aliyuncs.com",
      'cn-shenzhen': "docmind-api.aliyuncs.com",
      'cn-shenzhen-finance-1': "docmind-api.aliyuncs.com",
      'cn-shenzhen-inner': "docmind-api.aliyuncs.com",
      'cn-shenzhen-st4-d01': "docmind-api.aliyuncs.com",
      'cn-shenzhen-su18-b01': "docmind-api.aliyuncs.com",
      'cn-wuhan': "docmind-api.aliyuncs.com",
      'cn-wulanchabu': "docmind-api.aliyuncs.com",
      'cn-yushanfang': "docmind-api.aliyuncs.com",
      'cn-zhangbei': "docmind-api.aliyuncs.com",
      'cn-zhangbei-na61-b01': "docmind-api.aliyuncs.com",
      'cn-zhangjiakou': "docmind-api.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "docmind-api.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "docmind-api.aliyuncs.com",
      'eu-central-1': "docmind-api.aliyuncs.com",
      'eu-west-1': "docmind-api.aliyuncs.com",
      'eu-west-1-oxs': "docmind-api.aliyuncs.com",
      'me-east-1': "docmind-api.aliyuncs.com",
      'rus-west-1-pop': "docmind-api.aliyuncs.com",
      'us-east-1': "docmind-api.aliyuncs.com",
      'us-west-1': "docmind-api.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("docmind-api", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 整票识别
   * 
   * @param tmpReq - AyncTradeDocumentPackageExtractSmartAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AyncTradeDocumentPackageExtractSmartAppResponse
   */
  async ayncTradeDocumentPackageExtractSmartAppWithOptions(tmpReq: AyncTradeDocumentPackageExtractSmartAppRequest, runtime: $Util.RuntimeOptions): Promise<AyncTradeDocumentPackageExtractSmartAppResponse> {
    Util.validateModel(tmpReq);
    let request = new AyncTradeDocumentPackageExtractSmartAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.customExtractionRange)) {
      request.customExtractionRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customExtractionRange, "CustomExtractionRange", "json");
    }

    let query = { };
    if (!Util.isUnset(request.customExtractionRangeShrink)) {
      query["CustomExtractionRange"] = request.customExtractionRangeShrink;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.option)) {
      query["Option"] = request.option;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AyncTradeDocumentPackageExtractSmartApp",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AyncTradeDocumentPackageExtractSmartAppResponse>(await this.callApi(params, req, runtime), new AyncTradeDocumentPackageExtractSmartAppResponse({}));
  }

  /**
   * 整票识别
   * 
   * @param request - AyncTradeDocumentPackageExtractSmartAppRequest
   * @returns AyncTradeDocumentPackageExtractSmartAppResponse
   */
  async ayncTradeDocumentPackageExtractSmartApp(request: AyncTradeDocumentPackageExtractSmartAppRequest): Promise<AyncTradeDocumentPackageExtractSmartAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ayncTradeDocumentPackageExtractSmartAppWithOptions(request, runtime);
  }

  /**
   * 文档结构化流式接口
   * 
   * @param request - GetDocParserResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocParserResultResponse
   */
  async getDocParserResultWithOptions(request: GetDocParserResultRequest, runtime: $Util.RuntimeOptions): Promise<GetDocParserResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.layoutNum)) {
      query["LayoutNum"] = request.layoutNum;
    }

    if (!Util.isUnset(request.layoutStepSize)) {
      query["LayoutStepSize"] = request.layoutStepSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDocParserResult",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDocParserResultResponse>(await this.callApi(params, req, runtime), new GetDocParserResultResponse({}));
  }

  /**
   * 文档结构化流式接口
   * 
   * @param request - GetDocParserResultRequest
   * @returns GetDocParserResultResponse
   */
  async getDocParserResult(request: GetDocParserResultRequest): Promise<GetDocParserResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDocParserResultWithOptions(request, runtime);
  }

  /**
   * 文档智能解析结果查询
   * 
   * @param request - GetDocStructureResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocStructureResultResponse
   */
  async getDocStructureResultWithOptions(request: GetDocStructureResultRequest, runtime: $Util.RuntimeOptions): Promise<GetDocStructureResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.imageStrategy)) {
      query["ImageStrategy"] = request.imageStrategy;
    }

    if (!Util.isUnset(request.revealMarkdown)) {
      query["RevealMarkdown"] = request.revealMarkdown;
    }

    if (!Util.isUnset(request.useUrlResponseBody)) {
      query["UseUrlResponseBody"] = request.useUrlResponseBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDocStructureResult",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDocStructureResultResponse>(await this.callApi(params, req, runtime), new GetDocStructureResultResponse({}));
  }

  /**
   * 文档智能解析结果查询
   * 
   * @param request - GetDocStructureResultRequest
   * @returns GetDocStructureResultResponse
   */
  async getDocStructureResult(request: GetDocStructureResultRequest): Promise<GetDocStructureResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDocStructureResultWithOptions(request, runtime);
  }

  /**
   * 文档对比结果查询
   * 
   * @param request - GetDocumentCompareResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentCompareResultResponse
   */
  async getDocumentCompareResultWithOptions(request: GetDocumentCompareResultRequest, runtime: $Util.RuntimeOptions): Promise<GetDocumentCompareResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDocumentCompareResult",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDocumentCompareResultResponse>(await this.callApi(params, req, runtime), new GetDocumentCompareResultResponse({}));
  }

  /**
   * 文档对比结果查询
   * 
   * @param request - GetDocumentCompareResultRequest
   * @returns GetDocumentCompareResultResponse
   */
  async getDocumentCompareResult(request: GetDocumentCompareResultRequest): Promise<GetDocumentCompareResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDocumentCompareResultWithOptions(request, runtime);
  }

  /**
   * 文档转换结果查询
   * 
   * @param request - GetDocumentConvertResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentConvertResultResponse
   */
  async getDocumentConvertResultWithOptions(request: GetDocumentConvertResultRequest, runtime: $Util.RuntimeOptions): Promise<GetDocumentConvertResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDocumentConvertResult",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDocumentConvertResultResponse>(await this.callApi(params, req, runtime), new GetDocumentConvertResultResponse({}));
  }

  /**
   * 文档转换结果查询
   * 
   * @param request - GetDocumentConvertResultRequest
   * @returns GetDocumentConvertResultResponse
   */
  async getDocumentConvertResult(request: GetDocumentConvertResultRequest): Promise<GetDocumentConvertResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDocumentConvertResultWithOptions(request, runtime);
  }

  /**
   * 文档抽取结果查询
   * 
   * @param request - GetDocumentExtractResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentExtractResultResponse
   */
  async getDocumentExtractResultWithOptions(request: GetDocumentExtractResultRequest, runtime: $Util.RuntimeOptions): Promise<GetDocumentExtractResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDocumentExtractResult",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDocumentExtractResultResponse>(await this.callApi(params, req, runtime), new GetDocumentExtractResultResponse({}));
  }

  /**
   * 文档抽取结果查询
   * 
   * @param request - GetDocumentExtractResultRequest
   * @returns GetDocumentExtractResultResponse
   */
  async getDocumentExtractResult(request: GetDocumentExtractResultRequest): Promise<GetDocumentExtractResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDocumentExtractResultWithOptions(request, runtime);
  }

  /**
   * openmind
   * 
   * @param request - GetPageNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPageNumResponse
   */
  async getPageNumWithOptions(request: GetPageNumRequest, runtime: $Util.RuntimeOptions): Promise<GetPageNumResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPageNum",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPageNumResponse>(await this.callApi(params, req, runtime), new GetPageNumResponse({}));
  }

  /**
   * openmind
   * 
   * @param request - GetPageNumRequest
   * @returns GetPageNumResponse
   */
  async getPageNum(request: GetPageNumRequest): Promise<GetPageNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPageNumWithOptions(request, runtime);
  }

  /**
   * 表格智能解析结果查询
   * 
   * @param request - GetTableUnderstandingResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableUnderstandingResultResponse
   */
  async getTableUnderstandingResultWithOptions(request: GetTableUnderstandingResultRequest, runtime: $Util.RuntimeOptions): Promise<GetTableUnderstandingResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTableUnderstandingResult",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTableUnderstandingResultResponse>(await this.callApi(params, req, runtime), new GetTableUnderstandingResultResponse({}));
  }

  /**
   * 表格智能解析结果查询
   * 
   * @param request - GetTableUnderstandingResultRequest
   * @returns GetTableUnderstandingResultResponse
   */
  async getTableUnderstandingResult(request: GetTableUnderstandingResultRequest): Promise<GetTableUnderstandingResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTableUnderstandingResultWithOptions(request, runtime);
  }

  /**
   * 获取文档智能解析处理状态
   * 
   * @param request - QueryDocParserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDocParserStatusResponse
   */
  async queryDocParserStatusWithOptions(request: QueryDocParserStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDocParserStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDocParserStatus",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDocParserStatusResponse>(await this.callApi(params, req, runtime), new QueryDocParserStatusResponse({}));
  }

  /**
   * 获取文档智能解析处理状态
   * 
   * @param request - QueryDocParserStatusRequest
   * @returns QueryDocParserStatusResponse
   */
  async queryDocParserStatus(request: QueryDocParserStatusRequest): Promise<QueryDocParserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDocParserStatusWithOptions(request, runtime);
  }

  /**
   * 图片转excel
   * 
   * @param tmpReq - SubmitConvertImageToExcelJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertImageToExcelJobResponse
   */
  async submitConvertImageToExcelJobWithOptions(tmpReq: SubmitConvertImageToExcelJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitConvertImageToExcelJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitConvertImageToExcelJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.imageNames)) {
      request.imageNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageNames, "ImageNames", "simple");
    }

    if (!Util.isUnset(tmpReq.imageUrls)) {
      request.imageUrlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageUrls, "ImageUrls", "simple");
    }

    let query = { };
    if (!Util.isUnset(request.forceMergeExcel)) {
      query["ForceMergeExcel"] = request.forceMergeExcel;
    }

    if (!Util.isUnset(request.imageNameExtension)) {
      query["ImageNameExtension"] = request.imageNameExtension;
    }

    if (!Util.isUnset(request.imageNamesShrink)) {
      query["ImageNames"] = request.imageNamesShrink;
    }

    if (!Util.isUnset(request.imageUrlsShrink)) {
      query["ImageUrls"] = request.imageUrlsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitConvertImageToExcelJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitConvertImageToExcelJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertImageToExcelJobResponse({}));
  }

  /**
   * 图片转excel
   * 
   * @param request - SubmitConvertImageToExcelJobRequest
   * @returns SubmitConvertImageToExcelJobResponse
   */
  async submitConvertImageToExcelJob(request: SubmitConvertImageToExcelJobRequest): Promise<SubmitConvertImageToExcelJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitConvertImageToExcelJobWithOptions(request, runtime);
  }

  /**
   * 图片转markdown
   * 
   * @param tmpReq - SubmitConvertImageToMarkdownJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertImageToMarkdownJobResponse
   */
  async submitConvertImageToMarkdownJobWithOptions(tmpReq: SubmitConvertImageToMarkdownJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitConvertImageToMarkdownJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitConvertImageToMarkdownJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.imageNames)) {
      request.imageNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageNames, "ImageNames", "simple");
    }

    if (!Util.isUnset(tmpReq.imageUrls)) {
      request.imageUrlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageUrls, "ImageUrls", "simple");
    }

    let query = { };
    if (!Util.isUnset(request.imageNameExtension)) {
      query["ImageNameExtension"] = request.imageNameExtension;
    }

    if (!Util.isUnset(request.imageNamesShrink)) {
      query["ImageNames"] = request.imageNamesShrink;
    }

    if (!Util.isUnset(request.imageUrlsShrink)) {
      query["ImageUrls"] = request.imageUrlsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitConvertImageToMarkdownJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitConvertImageToMarkdownJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertImageToMarkdownJobResponse({}));
  }

  /**
   * 图片转markdown
   * 
   * @param request - SubmitConvertImageToMarkdownJobRequest
   * @returns SubmitConvertImageToMarkdownJobResponse
   */
  async submitConvertImageToMarkdownJob(request: SubmitConvertImageToMarkdownJobRequest): Promise<SubmitConvertImageToMarkdownJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitConvertImageToMarkdownJobWithOptions(request, runtime);
  }

  /**
   * 图片转pdf
   * 
   * @param tmpReq - SubmitConvertImageToPdfJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertImageToPdfJobResponse
   */
  async submitConvertImageToPdfJobWithOptions(tmpReq: SubmitConvertImageToPdfJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitConvertImageToPdfJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitConvertImageToPdfJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.imageNames)) {
      request.imageNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageNames, "ImageNames", "simple");
    }

    if (!Util.isUnset(tmpReq.imageUrls)) {
      request.imageUrlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageUrls, "ImageUrls", "simple");
    }

    let query = { };
    if (!Util.isUnset(request.imageNameExtension)) {
      query["ImageNameExtension"] = request.imageNameExtension;
    }

    if (!Util.isUnset(request.imageNamesShrink)) {
      query["ImageNames"] = request.imageNamesShrink;
    }

    if (!Util.isUnset(request.imageUrlsShrink)) {
      query["ImageUrls"] = request.imageUrlsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitConvertImageToPdfJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitConvertImageToPdfJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertImageToPdfJobResponse({}));
  }

  /**
   * 图片转pdf
   * 
   * @param request - SubmitConvertImageToPdfJobRequest
   * @returns SubmitConvertImageToPdfJobResponse
   */
  async submitConvertImageToPdfJob(request: SubmitConvertImageToPdfJobRequest): Promise<SubmitConvertImageToPdfJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitConvertImageToPdfJobWithOptions(request, runtime);
  }

  /**
   * 图片转word
   * 
   * @param tmpReq - SubmitConvertImageToWordJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertImageToWordJobResponse
   */
  async submitConvertImageToWordJobWithOptions(tmpReq: SubmitConvertImageToWordJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitConvertImageToWordJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitConvertImageToWordJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.imageNames)) {
      request.imageNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageNames, "ImageNames", "simple");
    }

    if (!Util.isUnset(tmpReq.imageUrls)) {
      request.imageUrlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageUrls, "ImageUrls", "simple");
    }

    let query = { };
    if (!Util.isUnset(request.imageNameExtension)) {
      query["ImageNameExtension"] = request.imageNameExtension;
    }

    if (!Util.isUnset(request.imageNamesShrink)) {
      query["ImageNames"] = request.imageNamesShrink;
    }

    if (!Util.isUnset(request.imageUrlsShrink)) {
      query["ImageUrls"] = request.imageUrlsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitConvertImageToWordJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitConvertImageToWordJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertImageToWordJobResponse({}));
  }

  /**
   * 图片转word
   * 
   * @param request - SubmitConvertImageToWordJobRequest
   * @returns SubmitConvertImageToWordJobResponse
   */
  async submitConvertImageToWordJob(request: SubmitConvertImageToWordJobRequest): Promise<SubmitConvertImageToWordJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitConvertImageToWordJobWithOptions(request, runtime);
  }

  /**
   * pdf转excel
   * 
   * @param request - SubmitConvertPdfToExcelJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertPdfToExcelJobResponse
   */
  async submitConvertPdfToExcelJobWithOptions(request: SubmitConvertPdfToExcelJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitConvertPdfToExcelJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.forceExportInnerImage)) {
      query["ForceExportInnerImage"] = request.forceExportInnerImage;
    }

    if (!Util.isUnset(request.forceMergeExcel)) {
      query["ForceMergeExcel"] = request.forceMergeExcel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitConvertPdfToExcelJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitConvertPdfToExcelJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertPdfToExcelJobResponse({}));
  }

  /**
   * pdf转excel
   * 
   * @param request - SubmitConvertPdfToExcelJobRequest
   * @returns SubmitConvertPdfToExcelJobResponse
   */
  async submitConvertPdfToExcelJob(request: SubmitConvertPdfToExcelJobRequest): Promise<SubmitConvertPdfToExcelJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitConvertPdfToExcelJobWithOptions(request, runtime);
  }

  async submitConvertPdfToExcelJobAdvance(request: SubmitConvertPdfToExcelJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitConvertPdfToExcelJobResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
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
      product: "docmind-api",
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
    let submitConvertPdfToExcelJobReq = new SubmitConvertPdfToExcelJobRequest({ });
    OpenApiUtil.convert(request, submitConvertPdfToExcelJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitConvertPdfToExcelJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitConvertPdfToExcelJobResp = await this.submitConvertPdfToExcelJobWithOptions(submitConvertPdfToExcelJobReq, runtime);
    return submitConvertPdfToExcelJobResp;
  }

  /**
   * pdf转图片
   * 
   * @param request - SubmitConvertPdfToImageJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertPdfToImageJobResponse
   */
  async submitConvertPdfToImageJobWithOptions(request: SubmitConvertPdfToImageJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitConvertPdfToImageJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitConvertPdfToImageJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitConvertPdfToImageJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertPdfToImageJobResponse({}));
  }

  /**
   * pdf转图片
   * 
   * @param request - SubmitConvertPdfToImageJobRequest
   * @returns SubmitConvertPdfToImageJobResponse
   */
  async submitConvertPdfToImageJob(request: SubmitConvertPdfToImageJobRequest): Promise<SubmitConvertPdfToImageJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitConvertPdfToImageJobWithOptions(request, runtime);
  }

  async submitConvertPdfToImageJobAdvance(request: SubmitConvertPdfToImageJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitConvertPdfToImageJobResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
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
      product: "docmind-api",
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
    let submitConvertPdfToImageJobReq = new SubmitConvertPdfToImageJobRequest({ });
    OpenApiUtil.convert(request, submitConvertPdfToImageJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitConvertPdfToImageJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitConvertPdfToImageJobResp = await this.submitConvertPdfToImageJobWithOptions(submitConvertPdfToImageJobReq, runtime);
    return submitConvertPdfToImageJobResp;
  }

  /**
   * pdf转markdown
   * 
   * @param request - SubmitConvertPdfToMarkdownJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertPdfToMarkdownJobResponse
   */
  async submitConvertPdfToMarkdownJobWithOptions(request: SubmitConvertPdfToMarkdownJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitConvertPdfToMarkdownJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitConvertPdfToMarkdownJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitConvertPdfToMarkdownJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertPdfToMarkdownJobResponse({}));
  }

  /**
   * pdf转markdown
   * 
   * @param request - SubmitConvertPdfToMarkdownJobRequest
   * @returns SubmitConvertPdfToMarkdownJobResponse
   */
  async submitConvertPdfToMarkdownJob(request: SubmitConvertPdfToMarkdownJobRequest): Promise<SubmitConvertPdfToMarkdownJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitConvertPdfToMarkdownJobWithOptions(request, runtime);
  }

  async submitConvertPdfToMarkdownJobAdvance(request: SubmitConvertPdfToMarkdownJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitConvertPdfToMarkdownJobResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
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
      product: "docmind-api",
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
    let submitConvertPdfToMarkdownJobReq = new SubmitConvertPdfToMarkdownJobRequest({ });
    OpenApiUtil.convert(request, submitConvertPdfToMarkdownJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitConvertPdfToMarkdownJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitConvertPdfToMarkdownJobResp = await this.submitConvertPdfToMarkdownJobWithOptions(submitConvertPdfToMarkdownJobReq, runtime);
    return submitConvertPdfToMarkdownJobResp;
  }

  /**
   * pdf转word
   * 
   * @param request - SubmitConvertPdfToWordJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertPdfToWordJobResponse
   */
  async submitConvertPdfToWordJobWithOptions(request: SubmitConvertPdfToWordJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitConvertPdfToWordJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.forceExportInnerImage)) {
      query["ForceExportInnerImage"] = request.forceExportInnerImage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitConvertPdfToWordJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitConvertPdfToWordJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertPdfToWordJobResponse({}));
  }

  /**
   * pdf转word
   * 
   * @param request - SubmitConvertPdfToWordJobRequest
   * @returns SubmitConvertPdfToWordJobResponse
   */
  async submitConvertPdfToWordJob(request: SubmitConvertPdfToWordJobRequest): Promise<SubmitConvertPdfToWordJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitConvertPdfToWordJobWithOptions(request, runtime);
  }

  async submitConvertPdfToWordJobAdvance(request: SubmitConvertPdfToWordJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitConvertPdfToWordJobResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
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
      product: "docmind-api",
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
    let submitConvertPdfToWordJobReq = new SubmitConvertPdfToWordJobRequest({ });
    OpenApiUtil.convert(request, submitConvertPdfToWordJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitConvertPdfToWordJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitConvertPdfToWordJobResp = await this.submitConvertPdfToWordJobWithOptions(submitConvertPdfToWordJobReq, runtime);
    return submitConvertPdfToWordJobResp;
  }

  /**
   * 电子解析
   * 
   * @param request - SubmitDigitalDocStructureJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDigitalDocStructureJobResponse
   */
  async submitDigitalDocStructureJobWithOptions(request: SubmitDigitalDocStructureJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDigitalDocStructureJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.imageStrategy)) {
      query["ImageStrategy"] = request.imageStrategy;
    }

    if (!Util.isUnset(request.revealMarkdown)) {
      query["RevealMarkdown"] = request.revealMarkdown;
    }

    if (!Util.isUnset(request.useUrlResponseBody)) {
      query["UseUrlResponseBody"] = request.useUrlResponseBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitDigitalDocStructureJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitDigitalDocStructureJobResponse>(await this.callApi(params, req, runtime), new SubmitDigitalDocStructureJobResponse({}));
  }

  /**
   * 电子解析
   * 
   * @param request - SubmitDigitalDocStructureJobRequest
   * @returns SubmitDigitalDocStructureJobResponse
   */
  async submitDigitalDocStructureJob(request: SubmitDigitalDocStructureJobRequest): Promise<SubmitDigitalDocStructureJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDigitalDocStructureJobWithOptions(request, runtime);
  }

  async submitDigitalDocStructureJobAdvance(request: SubmitDigitalDocStructureJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDigitalDocStructureJobResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
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
      product: "docmind-api",
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
    let submitDigitalDocStructureJobReq = new SubmitDigitalDocStructureJobRequest({ });
    OpenApiUtil.convert(request, submitDigitalDocStructureJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitDigitalDocStructureJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitDigitalDocStructureJobResp = await this.submitDigitalDocStructureJobWithOptions(submitDigitalDocStructureJobReq, runtime);
    return submitDigitalDocStructureJobResp;
  }

  /**
   * 文档智能解析流式输出
   * 
   * @param request - SubmitDocParserJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDocParserJobResponse
   */
  async submitDocParserJobWithOptions(request: SubmitDocParserJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDocParserJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.formulaEnhancement)) {
      query["FormulaEnhancement"] = request.formulaEnhancement;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitDocParserJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitDocParserJobResponse>(await this.callApi(params, req, runtime), new SubmitDocParserJobResponse({}));
  }

  /**
   * 文档智能解析流式输出
   * 
   * @param request - SubmitDocParserJobRequest
   * @returns SubmitDocParserJobResponse
   */
  async submitDocParserJob(request: SubmitDocParserJobRequest): Promise<SubmitDocParserJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDocParserJobWithOptions(request, runtime);
  }

  async submitDocParserJobAdvance(request: SubmitDocParserJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDocParserJobResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
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
      product: "docmind-api",
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
    let submitDocParserJobReq = new SubmitDocParserJobRequest({ });
    OpenApiUtil.convert(request, submitDocParserJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitDocParserJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitDocParserJobResp = await this.submitDocParserJobWithOptions(submitDocParserJobReq, runtime);
    return submitDocParserJobResp;
  }

  /**
   * 文档智能解析
   * 
   * @param request - SubmitDocStructureJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDocStructureJobResponse
   */
  async submitDocStructureJobWithOptions(request: SubmitDocStructureJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDocStructureJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowPptFormat)) {
      query["AllowPptFormat"] = request.allowPptFormat;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.formulaEnhancement)) {
      query["FormulaEnhancement"] = request.formulaEnhancement;
    }

    if (!Util.isUnset(request.structureType)) {
      query["StructureType"] = request.structureType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitDocStructureJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitDocStructureJobResponse>(await this.callApi(params, req, runtime), new SubmitDocStructureJobResponse({}));
  }

  /**
   * 文档智能解析
   * 
   * @param request - SubmitDocStructureJobRequest
   * @returns SubmitDocStructureJobResponse
   */
  async submitDocStructureJob(request: SubmitDocStructureJobRequest): Promise<SubmitDocStructureJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDocStructureJobWithOptions(request, runtime);
  }

  async submitDocStructureJobAdvance(request: SubmitDocStructureJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDocStructureJobResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
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
      product: "docmind-api",
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
    let submitDocStructureJobReq = new SubmitDocStructureJobRequest({ });
    OpenApiUtil.convert(request, submitDocStructureJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitDocStructureJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitDocStructureJobResp = await this.submitDocStructureJobWithOptions(submitDocStructureJobReq, runtime);
    return submitDocStructureJobResp;
  }

  /**
   * 文档抽取
   * 
   * @param request - SubmitDocumentExtractJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDocumentExtractJobResponse
   */
  async submitDocumentExtractJobWithOptions(request: SubmitDocumentExtractJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDocumentExtractJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitDocumentExtractJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitDocumentExtractJobResponse>(await this.callApi(params, req, runtime), new SubmitDocumentExtractJobResponse({}));
  }

  /**
   * 文档抽取
   * 
   * @param request - SubmitDocumentExtractJobRequest
   * @returns SubmitDocumentExtractJobResponse
   */
  async submitDocumentExtractJob(request: SubmitDocumentExtractJobRequest): Promise<SubmitDocumentExtractJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDocumentExtractJobWithOptions(request, runtime);
  }

  async submitDocumentExtractJobAdvance(request: SubmitDocumentExtractJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDocumentExtractJobResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
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
      product: "docmind-api",
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
    let submitDocumentExtractJobReq = new SubmitDocumentExtractJobRequest({ });
    OpenApiUtil.convert(request, submitDocumentExtractJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitDocumentExtractJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitDocumentExtractJobResp = await this.submitDocumentExtractJobWithOptions(submitDocumentExtractJobReq, runtime);
    return submitDocumentExtractJobResp;
  }

  /**
   * 表格智能解析
   * 
   * @param request - SubmitTableUnderstandingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTableUnderstandingJobResponse
   */
  async submitTableUnderstandingJobWithOptions(request: SubmitTableUnderstandingJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitTableUnderstandingJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitTableUnderstandingJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitTableUnderstandingJobResponse>(await this.callApi(params, req, runtime), new SubmitTableUnderstandingJobResponse({}));
  }

  /**
   * 表格智能解析
   * 
   * @param request - SubmitTableUnderstandingJobRequest
   * @returns SubmitTableUnderstandingJobResponse
   */
  async submitTableUnderstandingJob(request: SubmitTableUnderstandingJobRequest): Promise<SubmitTableUnderstandingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitTableUnderstandingJobWithOptions(request, runtime);
  }

  async submitTableUnderstandingJobAdvance(request: SubmitTableUnderstandingJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitTableUnderstandingJobResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
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
      product: "docmind-api",
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
    let submitTableUnderstandingJobReq = new SubmitTableUnderstandingJobRequest({ });
    OpenApiUtil.convert(request, submitTableUnderstandingJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitTableUnderstandingJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitTableUnderstandingJobResp = await this.submitTableUnderstandingJobWithOptions(submitTableUnderstandingJobReq, runtime);
    return submitTableUnderstandingJobResp;
  }

}
