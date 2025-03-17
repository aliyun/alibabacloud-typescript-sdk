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

export class GetDocumentConvertResultResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPageNumResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocParserStatusResponseBodyData extends $dara.Model {
  imageCount?: number;
  numberOfSuccessfulParsing?: number;
  pageCountEstimate?: number;
  paragraphCount?: number;
  status?: string;
  tableCount?: number;
  tokens?: number;
  static names(): { [key: string]: string } {
    return {
      imageCount: 'ImageCount',
      numberOfSuccessfulParsing: 'NumberOfSuccessfulParsing',
      pageCountEstimate: 'PageCountEstimate',
      paragraphCount: 'ParagraphCount',
      status: 'Status',
      tableCount: 'TableCount',
      tokens: 'Tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCount: 'number',
      numberOfSuccessfulParsing: 'number',
      pageCountEstimate: 'number',
      paragraphCount: 'number',
      status: 'string',
      tableCount: 'number',
      tokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToExcelJobResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToMarkdownJobResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToPdfJobResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToWordJobResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToExcelJobResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToImageJobResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToMarkdownJobResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToWordJobResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocParserJobResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocStructureJobResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentExtractJobResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTableUnderstandingJobResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AyncTradeDocumentPackageExtractSmartAppRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.customExtractionRange)) {
      $dara.Model.validateArray(this.customExtractionRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AyncTradeDocumentPackageExtractSmartAppShrinkRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AyncTradeDocumentPackageExtractSmartAppResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AyncTradeDocumentPackageExtractSmartAppResponse extends $dara.Model {
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

export class GetDocParserResultRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocParserResultResponseBody extends $dara.Model {
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

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocParserResultResponse extends $dara.Model {
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

export class GetDocStructureResultRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocStructureResultResponseBody extends $dara.Model {
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

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocStructureResultResponse extends $dara.Model {
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

export class GetDocumentCompareResultRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentCompareResultResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentCompareResultResponse extends $dara.Model {
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

export class GetDocumentConvertResultRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentConvertResultResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentConvertResultResponse extends $dara.Model {
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

export class GetDocumentExtractResultRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentExtractResultResponseBody extends $dara.Model {
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

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentExtractResultResponse extends $dara.Model {
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

export class GetPageNumRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPageNumResponseBody extends $dara.Model {
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

export class GetPageNumResponse extends $dara.Model {
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

export class GetTableUnderstandingResultRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableUnderstandingResultResponseBody extends $dara.Model {
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

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableUnderstandingResultResponse extends $dara.Model {
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

export class QueryDocParserStatusRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocParserStatusResponseBody extends $dara.Model {
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

export class QueryDocParserStatusResponse extends $dara.Model {
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

export class SubmitConvertImageToExcelJobRequest extends $dara.Model {
  forceMergeExcel?: boolean;
  /**
   * @example
   * jpg
   */
  imageNameExtension?: string;
  imageNames?: string[];
  imageUrls?: string[];
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      forceMergeExcel: 'ForceMergeExcel',
      imageNameExtension: 'ImageNameExtension',
      imageNames: 'ImageNames',
      imageUrls: 'ImageUrls',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceMergeExcel: 'boolean',
      imageNameExtension: 'string',
      imageNames: { 'type': 'array', 'itemType': 'string' },
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageNames)) {
      $dara.Model.validateArray(this.imageNames);
    }
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToExcelJobShrinkRequest extends $dara.Model {
  forceMergeExcel?: boolean;
  /**
   * @example
   * jpg
   */
  imageNameExtension?: string;
  imageNamesShrink?: string;
  imageUrlsShrink?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      forceMergeExcel: 'ForceMergeExcel',
      imageNameExtension: 'ImageNameExtension',
      imageNamesShrink: 'ImageNames',
      imageUrlsShrink: 'ImageUrls',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceMergeExcel: 'boolean',
      imageNameExtension: 'string',
      imageNamesShrink: 'string',
      imageUrlsShrink: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToExcelJobResponseBody extends $dara.Model {
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

export class SubmitConvertImageToExcelJobResponse extends $dara.Model {
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

export class SubmitConvertImageToMarkdownJobRequest extends $dara.Model {
  /**
   * @example
   * jpg
   */
  imageNameExtension?: string;
  imageNames?: string[];
  imageUrls?: string[];
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      imageNameExtension: 'ImageNameExtension',
      imageNames: 'ImageNames',
      imageUrls: 'ImageUrls',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNameExtension: 'string',
      imageNames: { 'type': 'array', 'itemType': 'string' },
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageNames)) {
      $dara.Model.validateArray(this.imageNames);
    }
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToMarkdownJobShrinkRequest extends $dara.Model {
  /**
   * @example
   * jpg
   */
  imageNameExtension?: string;
  imageNamesShrink?: string;
  imageUrlsShrink?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      imageNameExtension: 'ImageNameExtension',
      imageNamesShrink: 'ImageNames',
      imageUrlsShrink: 'ImageUrls',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNameExtension: 'string',
      imageNamesShrink: 'string',
      imageUrlsShrink: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToMarkdownJobResponseBody extends $dara.Model {
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

export class SubmitConvertImageToMarkdownJobResponse extends $dara.Model {
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

export class SubmitConvertImageToPdfJobRequest extends $dara.Model {
  /**
   * @example
   * JPG
   */
  imageNameExtension?: string;
  imageNames?: string[];
  imageUrls?: string[];
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      imageNameExtension: 'ImageNameExtension',
      imageNames: 'ImageNames',
      imageUrls: 'ImageUrls',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNameExtension: 'string',
      imageNames: { 'type': 'array', 'itemType': 'string' },
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageNames)) {
      $dara.Model.validateArray(this.imageNames);
    }
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToPdfJobShrinkRequest extends $dara.Model {
  /**
   * @example
   * JPG
   */
  imageNameExtension?: string;
  imageNamesShrink?: string;
  imageUrlsShrink?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      imageNameExtension: 'ImageNameExtension',
      imageNamesShrink: 'ImageNames',
      imageUrlsShrink: 'ImageUrls',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNameExtension: 'string',
      imageNamesShrink: 'string',
      imageUrlsShrink: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToPdfJobResponseBody extends $dara.Model {
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

export class SubmitConvertImageToPdfJobResponse extends $dara.Model {
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

export class SubmitConvertImageToWordJobRequest extends $dara.Model {
  /**
   * @example
   * jpg
   */
  imageNameExtension?: string;
  imageNames?: string[];
  imageUrls?: string[];
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      imageNameExtension: 'ImageNameExtension',
      imageNames: 'ImageNames',
      imageUrls: 'ImageUrls',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNameExtension: 'string',
      imageNames: { 'type': 'array', 'itemType': 'string' },
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageNames)) {
      $dara.Model.validateArray(this.imageNames);
    }
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToWordJobShrinkRequest extends $dara.Model {
  /**
   * @example
   * jpg
   */
  imageNameExtension?: string;
  imageNamesShrink?: string;
  imageUrlsShrink?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      imageNameExtension: 'ImageNameExtension',
      imageNamesShrink: 'ImageNames',
      imageUrlsShrink: 'ImageUrls',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNameExtension: 'string',
      imageNamesShrink: 'string',
      imageUrlsShrink: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertImageToWordJobResponseBody extends $dara.Model {
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

export class SubmitConvertImageToWordJobResponse extends $dara.Model {
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

export class SubmitConvertPdfToExcelJobRequest extends $dara.Model {
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
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      forceExportInnerImage: 'ForceExportInnerImage',
      forceMergeExcel: 'ForceMergeExcel',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
      forceExportInnerImage: 'boolean',
      forceMergeExcel: 'boolean',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToExcelJobAdvanceRequest extends $dara.Model {
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
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
      forceExportInnerImage: 'ForceExportInnerImage',
      forceMergeExcel: 'ForceMergeExcel',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrlObject: 'Readable',
      forceExportInnerImage: 'boolean',
      forceMergeExcel: 'boolean',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToExcelJobResponseBody extends $dara.Model {
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

export class SubmitConvertPdfToExcelJobResponse extends $dara.Model {
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

export class SubmitConvertPdfToImageJobRequest extends $dara.Model {
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
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToImageJobAdvanceRequest extends $dara.Model {
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
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrlObject: 'Readable',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToImageJobResponseBody extends $dara.Model {
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

export class SubmitConvertPdfToImageJobResponse extends $dara.Model {
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

export class SubmitConvertPdfToMarkdownJobRequest extends $dara.Model {
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
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToMarkdownJobAdvanceRequest extends $dara.Model {
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
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrlObject: 'Readable',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToMarkdownJobResponseBody extends $dara.Model {
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

export class SubmitConvertPdfToMarkdownJobResponse extends $dara.Model {
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

export class SubmitConvertPdfToWordJobRequest extends $dara.Model {
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
  formulaEnhancement?: boolean;
  option?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      forceExportInnerImage: 'ForceExportInnerImage',
      formulaEnhancement: 'FormulaEnhancement',
      option: 'Option',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
      forceExportInnerImage: 'boolean',
      formulaEnhancement: 'boolean',
      option: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToWordJobAdvanceRequest extends $dara.Model {
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
  formulaEnhancement?: boolean;
  option?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
      forceExportInnerImage: 'ForceExportInnerImage',
      formulaEnhancement: 'FormulaEnhancement',
      option: 'Option',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrlObject: 'Readable',
      forceExportInnerImage: 'boolean',
      formulaEnhancement: 'boolean',
      option: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitConvertPdfToWordJobResponseBody extends $dara.Model {
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

export class SubmitConvertPdfToWordJobResponse extends $dara.Model {
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

export class SubmitDigitalDocStructureJobRequest extends $dara.Model {
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
  ossBucket?: string;
  ossEndpoint?: string;
  revealMarkdown?: boolean;
  useUrlResponseBody?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      imageStrategy: 'ImageStrategy',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
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
      ossBucket: 'string',
      ossEndpoint: 'string',
      revealMarkdown: 'boolean',
      useUrlResponseBody: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDigitalDocStructureJobAdvanceRequest extends $dara.Model {
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
  ossBucket?: string;
  ossEndpoint?: string;
  revealMarkdown?: boolean;
  useUrlResponseBody?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      imageStrategy: 'ImageStrategy',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
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
      ossBucket: 'string',
      ossEndpoint: 'string',
      revealMarkdown: 'boolean',
      useUrlResponseBody: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDigitalDocStructureJobResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDigitalDocStructureJobResponse extends $dara.Model {
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

export class SubmitDocParserJobRequest extends $dara.Model {
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
  llmEnhancement?: boolean;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      formulaEnhancement: 'FormulaEnhancement',
      llmEnhancement: 'LlmEnhancement',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      formulaEnhancement: 'boolean',
      llmEnhancement: 'boolean',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocParserJobAdvanceRequest extends $dara.Model {
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
  llmEnhancement?: boolean;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      formulaEnhancement: 'FormulaEnhancement',
      llmEnhancement: 'LlmEnhancement',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      formulaEnhancement: 'boolean',
      llmEnhancement: 'boolean',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocParserJobResponseBody extends $dara.Model {
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

export class SubmitDocParserJobResponse extends $dara.Model {
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

export class SubmitDocStructureJobRequest extends $dara.Model {
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
  ossBucket?: string;
  ossEndpoint?: string;
  structureType?: string;
  static names(): { [key: string]: string } {
    return {
      allowPptFormat: 'AllowPptFormat',
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      formulaEnhancement: 'FormulaEnhancement',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
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
      ossBucket: 'string',
      ossEndpoint: 'string',
      structureType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocStructureJobAdvanceRequest extends $dara.Model {
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
  ossBucket?: string;
  ossEndpoint?: string;
  structureType?: string;
  static names(): { [key: string]: string } {
    return {
      allowPptFormat: 'AllowPptFormat',
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      formulaEnhancement: 'FormulaEnhancement',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
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
      ossBucket: 'string',
      ossEndpoint: 'string',
      structureType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocStructureJobResponseBody extends $dara.Model {
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

export class SubmitDocStructureJobResponse extends $dara.Model {
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

export class SubmitDocumentExtractJobRequest extends $dara.Model {
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
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentExtractJobAdvanceRequest extends $dara.Model {
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
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentExtractJobResponseBody extends $dara.Model {
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

export class SubmitDocumentExtractJobResponse extends $dara.Model {
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

export class SubmitTableUnderstandingJobRequest extends $dara.Model {
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
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTableUnderstandingJobAdvanceRequest extends $dara.Model {
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
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTableUnderstandingJobResponseBody extends $dara.Model {
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

export class SubmitTableUnderstandingJobResponse extends $dara.Model {
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
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 整票识别
   * 
   * @param tmpReq - AyncTradeDocumentPackageExtractSmartAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AyncTradeDocumentPackageExtractSmartAppResponse
   */
  async ayncTradeDocumentPackageExtractSmartAppWithOptions(tmpReq: AyncTradeDocumentPackageExtractSmartAppRequest, runtime: $dara.RuntimeOptions): Promise<AyncTradeDocumentPackageExtractSmartAppResponse> {
    tmpReq.validate();
    let request = new AyncTradeDocumentPackageExtractSmartAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customExtractionRange)) {
      request.customExtractionRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customExtractionRange, "CustomExtractionRange", "json");
    }

    let query = { };
    if (!$dara.isNull(request.customExtractionRangeShrink)) {
      query["CustomExtractionRange"] = request.customExtractionRangeShrink;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AyncTradeDocumentPackageExtractSmartAppResponse>(await this.callApi(params, req, runtime), new AyncTradeDocumentPackageExtractSmartAppResponse({}));
    } else {
      return $dara.cast<AyncTradeDocumentPackageExtractSmartAppResponse>(await this.execute(params, req, runtime), new AyncTradeDocumentPackageExtractSmartAppResponse({}));
    }

  }

  /**
   * 整票识别
   * 
   * @param request - AyncTradeDocumentPackageExtractSmartAppRequest
   * @returns AyncTradeDocumentPackageExtractSmartAppResponse
   */
  async ayncTradeDocumentPackageExtractSmartApp(request: AyncTradeDocumentPackageExtractSmartAppRequest): Promise<AyncTradeDocumentPackageExtractSmartAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.ayncTradeDocumentPackageExtractSmartAppWithOptions(request, runtime);
  }

  /**
   * 文档结构化流式接口
   * 
   * @param request - GetDocParserResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocParserResultResponse
   */
  async getDocParserResultWithOptions(request: GetDocParserResultRequest, runtime: $dara.RuntimeOptions): Promise<GetDocParserResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.layoutNum)) {
      query["LayoutNum"] = request.layoutNum;
    }

    if (!$dara.isNull(request.layoutStepSize)) {
      query["LayoutStepSize"] = request.layoutStepSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDocParserResultResponse>(await this.callApi(params, req, runtime), new GetDocParserResultResponse({}));
    } else {
      return $dara.cast<GetDocParserResultResponse>(await this.execute(params, req, runtime), new GetDocParserResultResponse({}));
    }

  }

  /**
   * 文档结构化流式接口
   * 
   * @param request - GetDocParserResultRequest
   * @returns GetDocParserResultResponse
   */
  async getDocParserResult(request: GetDocParserResultRequest): Promise<GetDocParserResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocParserResultWithOptions(request, runtime);
  }

  /**
   * 文档智能解析结果查询
   * 
   * @param request - GetDocStructureResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocStructureResultResponse
   */
  async getDocStructureResultWithOptions(request: GetDocStructureResultRequest, runtime: $dara.RuntimeOptions): Promise<GetDocStructureResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.imageStrategy)) {
      query["ImageStrategy"] = request.imageStrategy;
    }

    if (!$dara.isNull(request.revealMarkdown)) {
      query["RevealMarkdown"] = request.revealMarkdown;
    }

    if (!$dara.isNull(request.useUrlResponseBody)) {
      query["UseUrlResponseBody"] = request.useUrlResponseBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDocStructureResultResponse>(await this.callApi(params, req, runtime), new GetDocStructureResultResponse({}));
    } else {
      return $dara.cast<GetDocStructureResultResponse>(await this.execute(params, req, runtime), new GetDocStructureResultResponse({}));
    }

  }

  /**
   * 文档智能解析结果查询
   * 
   * @param request - GetDocStructureResultRequest
   * @returns GetDocStructureResultResponse
   */
  async getDocStructureResult(request: GetDocStructureResultRequest): Promise<GetDocStructureResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocStructureResultWithOptions(request, runtime);
  }

  /**
   * 文档对比结果查询
   * 
   * @param request - GetDocumentCompareResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentCompareResultResponse
   */
  async getDocumentCompareResultWithOptions(request: GetDocumentCompareResultRequest, runtime: $dara.RuntimeOptions): Promise<GetDocumentCompareResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDocumentCompareResultResponse>(await this.callApi(params, req, runtime), new GetDocumentCompareResultResponse({}));
    } else {
      return $dara.cast<GetDocumentCompareResultResponse>(await this.execute(params, req, runtime), new GetDocumentCompareResultResponse({}));
    }

  }

  /**
   * 文档对比结果查询
   * 
   * @param request - GetDocumentCompareResultRequest
   * @returns GetDocumentCompareResultResponse
   */
  async getDocumentCompareResult(request: GetDocumentCompareResultRequest): Promise<GetDocumentCompareResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocumentCompareResultWithOptions(request, runtime);
  }

  /**
   * 文档转换结果查询
   * 
   * @param request - GetDocumentConvertResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentConvertResultResponse
   */
  async getDocumentConvertResultWithOptions(request: GetDocumentConvertResultRequest, runtime: $dara.RuntimeOptions): Promise<GetDocumentConvertResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDocumentConvertResultResponse>(await this.callApi(params, req, runtime), new GetDocumentConvertResultResponse({}));
    } else {
      return $dara.cast<GetDocumentConvertResultResponse>(await this.execute(params, req, runtime), new GetDocumentConvertResultResponse({}));
    }

  }

  /**
   * 文档转换结果查询
   * 
   * @param request - GetDocumentConvertResultRequest
   * @returns GetDocumentConvertResultResponse
   */
  async getDocumentConvertResult(request: GetDocumentConvertResultRequest): Promise<GetDocumentConvertResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocumentConvertResultWithOptions(request, runtime);
  }

  /**
   * 文档抽取结果查询
   * 
   * @param request - GetDocumentExtractResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentExtractResultResponse
   */
  async getDocumentExtractResultWithOptions(request: GetDocumentExtractResultRequest, runtime: $dara.RuntimeOptions): Promise<GetDocumentExtractResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDocumentExtractResultResponse>(await this.callApi(params, req, runtime), new GetDocumentExtractResultResponse({}));
    } else {
      return $dara.cast<GetDocumentExtractResultResponse>(await this.execute(params, req, runtime), new GetDocumentExtractResultResponse({}));
    }

  }

  /**
   * 文档抽取结果查询
   * 
   * @param request - GetDocumentExtractResultRequest
   * @returns GetDocumentExtractResultResponse
   */
  async getDocumentExtractResult(request: GetDocumentExtractResultRequest): Promise<GetDocumentExtractResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocumentExtractResultWithOptions(request, runtime);
  }

  /**
   * openmind
   * 
   * @param request - GetPageNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPageNumResponse
   */
  async getPageNumWithOptions(request: GetPageNumRequest, runtime: $dara.RuntimeOptions): Promise<GetPageNumResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPageNumResponse>(await this.callApi(params, req, runtime), new GetPageNumResponse({}));
    } else {
      return $dara.cast<GetPageNumResponse>(await this.execute(params, req, runtime), new GetPageNumResponse({}));
    }

  }

  /**
   * openmind
   * 
   * @param request - GetPageNumRequest
   * @returns GetPageNumResponse
   */
  async getPageNum(request: GetPageNumRequest): Promise<GetPageNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPageNumWithOptions(request, runtime);
  }

  /**
   * 表格智能解析结果查询
   * 
   * @param request - GetTableUnderstandingResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableUnderstandingResultResponse
   */
  async getTableUnderstandingResultWithOptions(request: GetTableUnderstandingResultRequest, runtime: $dara.RuntimeOptions): Promise<GetTableUnderstandingResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTableUnderstandingResultResponse>(await this.callApi(params, req, runtime), new GetTableUnderstandingResultResponse({}));
    } else {
      return $dara.cast<GetTableUnderstandingResultResponse>(await this.execute(params, req, runtime), new GetTableUnderstandingResultResponse({}));
    }

  }

  /**
   * 表格智能解析结果查询
   * 
   * @param request - GetTableUnderstandingResultRequest
   * @returns GetTableUnderstandingResultResponse
   */
  async getTableUnderstandingResult(request: GetTableUnderstandingResultRequest): Promise<GetTableUnderstandingResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableUnderstandingResultWithOptions(request, runtime);
  }

  /**
   * 获取文档智能解析处理状态
   * 
   * @param request - QueryDocParserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDocParserStatusResponse
   */
  async queryDocParserStatusWithOptions(request: QueryDocParserStatusRequest, runtime: $dara.RuntimeOptions): Promise<QueryDocParserStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDocParserStatusResponse>(await this.callApi(params, req, runtime), new QueryDocParserStatusResponse({}));
    } else {
      return $dara.cast<QueryDocParserStatusResponse>(await this.execute(params, req, runtime), new QueryDocParserStatusResponse({}));
    }

  }

  /**
   * 获取文档智能解析处理状态
   * 
   * @param request - QueryDocParserStatusRequest
   * @returns QueryDocParserStatusResponse
   */
  async queryDocParserStatus(request: QueryDocParserStatusRequest): Promise<QueryDocParserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDocParserStatusWithOptions(request, runtime);
  }

  /**
   * 图片转excel
   * 
   * @param tmpReq - SubmitConvertImageToExcelJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertImageToExcelJobResponse
   */
  async submitConvertImageToExcelJobWithOptions(tmpReq: SubmitConvertImageToExcelJobRequest, runtime: $dara.RuntimeOptions): Promise<SubmitConvertImageToExcelJobResponse> {
    tmpReq.validate();
    let request = new SubmitConvertImageToExcelJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.imageNames)) {
      request.imageNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageNames, "ImageNames", "simple");
    }

    if (!$dara.isNull(tmpReq.imageUrls)) {
      request.imageUrlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageUrls, "ImageUrls", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.forceMergeExcel)) {
      query["ForceMergeExcel"] = request.forceMergeExcel;
    }

    if (!$dara.isNull(request.imageNameExtension)) {
      query["ImageNameExtension"] = request.imageNameExtension;
    }

    if (!$dara.isNull(request.imageNamesShrink)) {
      query["ImageNames"] = request.imageNamesShrink;
    }

    if (!$dara.isNull(request.imageUrlsShrink)) {
      query["ImageUrls"] = request.imageUrlsShrink;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitConvertImageToExcelJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertImageToExcelJobResponse({}));
    } else {
      return $dara.cast<SubmitConvertImageToExcelJobResponse>(await this.execute(params, req, runtime), new SubmitConvertImageToExcelJobResponse({}));
    }

  }

  /**
   * 图片转excel
   * 
   * @param request - SubmitConvertImageToExcelJobRequest
   * @returns SubmitConvertImageToExcelJobResponse
   */
  async submitConvertImageToExcelJob(request: SubmitConvertImageToExcelJobRequest): Promise<SubmitConvertImageToExcelJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertImageToExcelJobWithOptions(request, runtime);
  }

  /**
   * 图片转markdown
   * 
   * @param tmpReq - SubmitConvertImageToMarkdownJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertImageToMarkdownJobResponse
   */
  async submitConvertImageToMarkdownJobWithOptions(tmpReq: SubmitConvertImageToMarkdownJobRequest, runtime: $dara.RuntimeOptions): Promise<SubmitConvertImageToMarkdownJobResponse> {
    tmpReq.validate();
    let request = new SubmitConvertImageToMarkdownJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.imageNames)) {
      request.imageNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageNames, "ImageNames", "simple");
    }

    if (!$dara.isNull(tmpReq.imageUrls)) {
      request.imageUrlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageUrls, "ImageUrls", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.imageNameExtension)) {
      query["ImageNameExtension"] = request.imageNameExtension;
    }

    if (!$dara.isNull(request.imageNamesShrink)) {
      query["ImageNames"] = request.imageNamesShrink;
    }

    if (!$dara.isNull(request.imageUrlsShrink)) {
      query["ImageUrls"] = request.imageUrlsShrink;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitConvertImageToMarkdownJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertImageToMarkdownJobResponse({}));
    } else {
      return $dara.cast<SubmitConvertImageToMarkdownJobResponse>(await this.execute(params, req, runtime), new SubmitConvertImageToMarkdownJobResponse({}));
    }

  }

  /**
   * 图片转markdown
   * 
   * @param request - SubmitConvertImageToMarkdownJobRequest
   * @returns SubmitConvertImageToMarkdownJobResponse
   */
  async submitConvertImageToMarkdownJob(request: SubmitConvertImageToMarkdownJobRequest): Promise<SubmitConvertImageToMarkdownJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertImageToMarkdownJobWithOptions(request, runtime);
  }

  /**
   * 图片转pdf
   * 
   * @param tmpReq - SubmitConvertImageToPdfJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertImageToPdfJobResponse
   */
  async submitConvertImageToPdfJobWithOptions(tmpReq: SubmitConvertImageToPdfJobRequest, runtime: $dara.RuntimeOptions): Promise<SubmitConvertImageToPdfJobResponse> {
    tmpReq.validate();
    let request = new SubmitConvertImageToPdfJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.imageNames)) {
      request.imageNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageNames, "ImageNames", "simple");
    }

    if (!$dara.isNull(tmpReq.imageUrls)) {
      request.imageUrlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageUrls, "ImageUrls", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.imageNameExtension)) {
      query["ImageNameExtension"] = request.imageNameExtension;
    }

    if (!$dara.isNull(request.imageNamesShrink)) {
      query["ImageNames"] = request.imageNamesShrink;
    }

    if (!$dara.isNull(request.imageUrlsShrink)) {
      query["ImageUrls"] = request.imageUrlsShrink;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitConvertImageToPdfJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertImageToPdfJobResponse({}));
    } else {
      return $dara.cast<SubmitConvertImageToPdfJobResponse>(await this.execute(params, req, runtime), new SubmitConvertImageToPdfJobResponse({}));
    }

  }

  /**
   * 图片转pdf
   * 
   * @param request - SubmitConvertImageToPdfJobRequest
   * @returns SubmitConvertImageToPdfJobResponse
   */
  async submitConvertImageToPdfJob(request: SubmitConvertImageToPdfJobRequest): Promise<SubmitConvertImageToPdfJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertImageToPdfJobWithOptions(request, runtime);
  }

  /**
   * 图片转word
   * 
   * @param tmpReq - SubmitConvertImageToWordJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertImageToWordJobResponse
   */
  async submitConvertImageToWordJobWithOptions(tmpReq: SubmitConvertImageToWordJobRequest, runtime: $dara.RuntimeOptions): Promise<SubmitConvertImageToWordJobResponse> {
    tmpReq.validate();
    let request = new SubmitConvertImageToWordJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.imageNames)) {
      request.imageNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageNames, "ImageNames", "simple");
    }

    if (!$dara.isNull(tmpReq.imageUrls)) {
      request.imageUrlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageUrls, "ImageUrls", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.imageNameExtension)) {
      query["ImageNameExtension"] = request.imageNameExtension;
    }

    if (!$dara.isNull(request.imageNamesShrink)) {
      query["ImageNames"] = request.imageNamesShrink;
    }

    if (!$dara.isNull(request.imageUrlsShrink)) {
      query["ImageUrls"] = request.imageUrlsShrink;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitConvertImageToWordJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertImageToWordJobResponse({}));
    } else {
      return $dara.cast<SubmitConvertImageToWordJobResponse>(await this.execute(params, req, runtime), new SubmitConvertImageToWordJobResponse({}));
    }

  }

  /**
   * 图片转word
   * 
   * @param request - SubmitConvertImageToWordJobRequest
   * @returns SubmitConvertImageToWordJobResponse
   */
  async submitConvertImageToWordJob(request: SubmitConvertImageToWordJobRequest): Promise<SubmitConvertImageToWordJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertImageToWordJobWithOptions(request, runtime);
  }

  /**
   * pdf转excel
   * 
   * @param request - SubmitConvertPdfToExcelJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertPdfToExcelJobResponse
   */
  async submitConvertPdfToExcelJobWithOptions(request: SubmitConvertPdfToExcelJobRequest, runtime: $dara.RuntimeOptions): Promise<SubmitConvertPdfToExcelJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.forceExportInnerImage)) {
      query["ForceExportInnerImage"] = request.forceExportInnerImage;
    }

    if (!$dara.isNull(request.forceMergeExcel)) {
      query["ForceMergeExcel"] = request.forceMergeExcel;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitConvertPdfToExcelJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertPdfToExcelJobResponse({}));
    } else {
      return $dara.cast<SubmitConvertPdfToExcelJobResponse>(await this.execute(params, req, runtime), new SubmitConvertPdfToExcelJobResponse({}));
    }

  }

  /**
   * pdf转excel
   * 
   * @param request - SubmitConvertPdfToExcelJobRequest
   * @returns SubmitConvertPdfToExcelJobResponse
   */
  async submitConvertPdfToExcelJob(request: SubmitConvertPdfToExcelJobRequest): Promise<SubmitConvertPdfToExcelJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertPdfToExcelJobWithOptions(request, runtime);
  }

  async submitConvertPdfToExcelJobAdvance(request: SubmitConvertPdfToExcelJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<SubmitConvertPdfToExcelJobResponse> {
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
    if (!$dara.isNull(request.fileUrlObject)) {
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
  async submitConvertPdfToImageJobWithOptions(request: SubmitConvertPdfToImageJobRequest, runtime: $dara.RuntimeOptions): Promise<SubmitConvertPdfToImageJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitConvertPdfToImageJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertPdfToImageJobResponse({}));
    } else {
      return $dara.cast<SubmitConvertPdfToImageJobResponse>(await this.execute(params, req, runtime), new SubmitConvertPdfToImageJobResponse({}));
    }

  }

  /**
   * pdf转图片
   * 
   * @param request - SubmitConvertPdfToImageJobRequest
   * @returns SubmitConvertPdfToImageJobResponse
   */
  async submitConvertPdfToImageJob(request: SubmitConvertPdfToImageJobRequest): Promise<SubmitConvertPdfToImageJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertPdfToImageJobWithOptions(request, runtime);
  }

  async submitConvertPdfToImageJobAdvance(request: SubmitConvertPdfToImageJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<SubmitConvertPdfToImageJobResponse> {
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
    if (!$dara.isNull(request.fileUrlObject)) {
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
  async submitConvertPdfToMarkdownJobWithOptions(request: SubmitConvertPdfToMarkdownJobRequest, runtime: $dara.RuntimeOptions): Promise<SubmitConvertPdfToMarkdownJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitConvertPdfToMarkdownJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertPdfToMarkdownJobResponse({}));
    } else {
      return $dara.cast<SubmitConvertPdfToMarkdownJobResponse>(await this.execute(params, req, runtime), new SubmitConvertPdfToMarkdownJobResponse({}));
    }

  }

  /**
   * pdf转markdown
   * 
   * @param request - SubmitConvertPdfToMarkdownJobRequest
   * @returns SubmitConvertPdfToMarkdownJobResponse
   */
  async submitConvertPdfToMarkdownJob(request: SubmitConvertPdfToMarkdownJobRequest): Promise<SubmitConvertPdfToMarkdownJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertPdfToMarkdownJobWithOptions(request, runtime);
  }

  async submitConvertPdfToMarkdownJobAdvance(request: SubmitConvertPdfToMarkdownJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<SubmitConvertPdfToMarkdownJobResponse> {
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
    if (!$dara.isNull(request.fileUrlObject)) {
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
  async submitConvertPdfToWordJobWithOptions(request: SubmitConvertPdfToWordJobRequest, runtime: $dara.RuntimeOptions): Promise<SubmitConvertPdfToWordJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.forceExportInnerImage)) {
      query["ForceExportInnerImage"] = request.forceExportInnerImage;
    }

    if (!$dara.isNull(request.formulaEnhancement)) {
      query["FormulaEnhancement"] = request.formulaEnhancement;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitConvertPdfToWordJobResponse>(await this.callApi(params, req, runtime), new SubmitConvertPdfToWordJobResponse({}));
    } else {
      return $dara.cast<SubmitConvertPdfToWordJobResponse>(await this.execute(params, req, runtime), new SubmitConvertPdfToWordJobResponse({}));
    }

  }

  /**
   * pdf转word
   * 
   * @param request - SubmitConvertPdfToWordJobRequest
   * @returns SubmitConvertPdfToWordJobResponse
   */
  async submitConvertPdfToWordJob(request: SubmitConvertPdfToWordJobRequest): Promise<SubmitConvertPdfToWordJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertPdfToWordJobWithOptions(request, runtime);
  }

  async submitConvertPdfToWordJobAdvance(request: SubmitConvertPdfToWordJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<SubmitConvertPdfToWordJobResponse> {
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
    if (!$dara.isNull(request.fileUrlObject)) {
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
  async submitDigitalDocStructureJobWithOptions(request: SubmitDigitalDocStructureJobRequest, runtime: $dara.RuntimeOptions): Promise<SubmitDigitalDocStructureJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.imageStrategy)) {
      query["ImageStrategy"] = request.imageStrategy;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!$dara.isNull(request.revealMarkdown)) {
      query["RevealMarkdown"] = request.revealMarkdown;
    }

    if (!$dara.isNull(request.useUrlResponseBody)) {
      query["UseUrlResponseBody"] = request.useUrlResponseBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitDigitalDocStructureJobResponse>(await this.callApi(params, req, runtime), new SubmitDigitalDocStructureJobResponse({}));
    } else {
      return $dara.cast<SubmitDigitalDocStructureJobResponse>(await this.execute(params, req, runtime), new SubmitDigitalDocStructureJobResponse({}));
    }

  }

  /**
   * 电子解析
   * 
   * @param request - SubmitDigitalDocStructureJobRequest
   * @returns SubmitDigitalDocStructureJobResponse
   */
  async submitDigitalDocStructureJob(request: SubmitDigitalDocStructureJobRequest): Promise<SubmitDigitalDocStructureJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDigitalDocStructureJobWithOptions(request, runtime);
  }

  async submitDigitalDocStructureJobAdvance(request: SubmitDigitalDocStructureJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<SubmitDigitalDocStructureJobResponse> {
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
    if (!$dara.isNull(request.fileUrlObject)) {
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
  async submitDocParserJobWithOptions(request: SubmitDocParserJobRequest, runtime: $dara.RuntimeOptions): Promise<SubmitDocParserJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.formulaEnhancement)) {
      query["FormulaEnhancement"] = request.formulaEnhancement;
    }

    if (!$dara.isNull(request.llmEnhancement)) {
      query["LlmEnhancement"] = request.llmEnhancement;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitDocParserJobResponse>(await this.callApi(params, req, runtime), new SubmitDocParserJobResponse({}));
    } else {
      return $dara.cast<SubmitDocParserJobResponse>(await this.execute(params, req, runtime), new SubmitDocParserJobResponse({}));
    }

  }

  /**
   * 文档智能解析流式输出
   * 
   * @param request - SubmitDocParserJobRequest
   * @returns SubmitDocParserJobResponse
   */
  async submitDocParserJob(request: SubmitDocParserJobRequest): Promise<SubmitDocParserJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDocParserJobWithOptions(request, runtime);
  }

  async submitDocParserJobAdvance(request: SubmitDocParserJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<SubmitDocParserJobResponse> {
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
    if (!$dara.isNull(request.fileUrlObject)) {
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
  async submitDocStructureJobWithOptions(request: SubmitDocStructureJobRequest, runtime: $dara.RuntimeOptions): Promise<SubmitDocStructureJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowPptFormat)) {
      query["AllowPptFormat"] = request.allowPptFormat;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.formulaEnhancement)) {
      query["FormulaEnhancement"] = request.formulaEnhancement;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!$dara.isNull(request.structureType)) {
      query["StructureType"] = request.structureType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitDocStructureJobResponse>(await this.callApi(params, req, runtime), new SubmitDocStructureJobResponse({}));
    } else {
      return $dara.cast<SubmitDocStructureJobResponse>(await this.execute(params, req, runtime), new SubmitDocStructureJobResponse({}));
    }

  }

  /**
   * 文档智能解析
   * 
   * @param request - SubmitDocStructureJobRequest
   * @returns SubmitDocStructureJobResponse
   */
  async submitDocStructureJob(request: SubmitDocStructureJobRequest): Promise<SubmitDocStructureJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDocStructureJobWithOptions(request, runtime);
  }

  async submitDocStructureJobAdvance(request: SubmitDocStructureJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<SubmitDocStructureJobResponse> {
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
    if (!$dara.isNull(request.fileUrlObject)) {
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
  async submitDocumentExtractJobWithOptions(request: SubmitDocumentExtractJobRequest, runtime: $dara.RuntimeOptions): Promise<SubmitDocumentExtractJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitDocumentExtractJobResponse>(await this.callApi(params, req, runtime), new SubmitDocumentExtractJobResponse({}));
    } else {
      return $dara.cast<SubmitDocumentExtractJobResponse>(await this.execute(params, req, runtime), new SubmitDocumentExtractJobResponse({}));
    }

  }

  /**
   * 文档抽取
   * 
   * @param request - SubmitDocumentExtractJobRequest
   * @returns SubmitDocumentExtractJobResponse
   */
  async submitDocumentExtractJob(request: SubmitDocumentExtractJobRequest): Promise<SubmitDocumentExtractJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDocumentExtractJobWithOptions(request, runtime);
  }

  async submitDocumentExtractJobAdvance(request: SubmitDocumentExtractJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<SubmitDocumentExtractJobResponse> {
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
    if (!$dara.isNull(request.fileUrlObject)) {
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
  async submitTableUnderstandingJobWithOptions(request: SubmitTableUnderstandingJobRequest, runtime: $dara.RuntimeOptions): Promise<SubmitTableUnderstandingJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitTableUnderstandingJobResponse>(await this.callApi(params, req, runtime), new SubmitTableUnderstandingJobResponse({}));
    } else {
      return $dara.cast<SubmitTableUnderstandingJobResponse>(await this.execute(params, req, runtime), new SubmitTableUnderstandingJobResponse({}));
    }

  }

  /**
   * 表格智能解析
   * 
   * @param request - SubmitTableUnderstandingJobRequest
   * @returns SubmitTableUnderstandingJobResponse
   */
  async submitTableUnderstandingJob(request: SubmitTableUnderstandingJobRequest): Promise<SubmitTableUnderstandingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitTableUnderstandingJobWithOptions(request, runtime);
  }

  async submitTableUnderstandingJobAdvance(request: SubmitTableUnderstandingJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<SubmitTableUnderstandingJobResponse> {
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
    if (!$dara.isNull(request.fileUrlObject)) {
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
