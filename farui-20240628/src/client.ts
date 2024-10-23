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

export class CreateTextFileRequest extends $tea.Model {
  /**
   * @example
   * e9a93201-7e96-4dc1-9678-2832fc132d08
   */
  clientToken?: string;
  /**
   * @example
   * 1714476549
   */
  createTime?: string;
  textFileName?: string;
  textFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      createTime: 'CreateTime',
      textFileName: 'TextFileName',
      textFileUrl: 'TextFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      createTime: 'string',
      textFileName: 'string',
      textFileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextFileAdvanceRequest extends $tea.Model {
  /**
   * @example
   * e9a93201-7e96-4dc1-9678-2832fc132d08
   */
  clientToken?: string;
  /**
   * @example
   * 1714476549
   */
  createTime?: string;
  textFileName?: string;
  textFileUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      createTime: 'CreateTime',
      textFileName: 'TextFileName',
      textFileUrlObject: 'TextFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      createTime: 'string',
      textFileName: 'string',
      textFileUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextFileResponseBody extends $tea.Model {
  /**
   * @example
   * Request.Signature.Error
   */
  code?: string;
  data?: CreateTextFileResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 81E6F6D2-8ACB-5BDA-9C7C-4D6268CD9652
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTextFileResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTextFileResponseBody;
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
      body: CreateTextFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationRequest extends $tea.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  assistant?: RunContractResultGenerationRequestAssistant;
  /**
   * @example
   * true
   */
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      assistant: 'assistant',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      assistant: RunContractResultGenerationRequestAssistant,
      stream: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationShrinkRequest extends $tea.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  assistantShrink?: string;
  /**
   * @example
   * true
   */
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      assistantShrink: 'assistant',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      assistantShrink: 'string',
      stream: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  message?: string;
  output?: RunContractResultGenerationResponseBodyOutput;
  /**
   * @example
   * 744419D0-671A-5997-9840-E8AE48356194
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  usage?: RunContractResultGenerationResponseBodyUsage;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      output: 'Output',
      requestId: 'RequestId',
      success: 'Success',
      usage: 'Usage',
      httpStatusCode: 'httpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      output: RunContractResultGenerationResponseBodyOutput,
      requestId: 'string',
      success: 'boolean',
      usage: RunContractResultGenerationResponseBodyUsage,
      httpStatusCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunContractResultGenerationResponseBody;
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
      body: RunContractResultGenerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractRuleGenerationRequest extends $tea.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  assistant?: RunContractRuleGenerationRequestAssistant;
  /**
   * @example
   * true
   */
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      assistant: 'assistant',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      assistant: RunContractRuleGenerationRequestAssistant,
      stream: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractRuleGenerationShrinkRequest extends $tea.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  assistantShrink?: string;
  /**
   * @example
   * true
   */
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      assistantShrink: 'assistant',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      assistantShrink: 'string',
      stream: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractRuleGenerationResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  message?: string;
  output?: RunContractRuleGenerationResponseBodyOutput;
  /**
   * @example
   * 744419D0-671A-5997-9840-E8AE48356194
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  usage?: RunContractRuleGenerationResponseBodyUsage;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      output: 'Output',
      requestId: 'RequestId',
      success: 'Success',
      usage: 'Usage',
      httpStatusCode: 'httpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      output: RunContractRuleGenerationResponseBodyOutput,
      requestId: 'string',
      success: 'boolean',
      usage: RunContractRuleGenerationResponseBodyUsage,
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractRuleGenerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunContractRuleGenerationResponseBody;
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
      body: RunContractRuleGenerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationRequest extends $tea.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  assistant?: RunLegalAdviceConsultationRequestAssistant;
  /**
   * @example
   * true
   */
  stream?: boolean;
  thread?: RunLegalAdviceConsultationRequestThread;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      assistant: 'assistant',
      stream: 'stream',
      thread: 'thread',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      assistant: RunLegalAdviceConsultationRequestAssistant,
      stream: 'boolean',
      thread: RunLegalAdviceConsultationRequestThread,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationShrinkRequest extends $tea.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  assistantShrink?: string;
  /**
   * @example
   * true
   */
  stream?: boolean;
  threadShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      assistantShrink: 'assistant',
      stream: 'stream',
      threadShrink: 'thread',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      assistantShrink: 'string',
      stream: 'boolean',
      threadShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationResponseBody extends $tea.Model {
  /**
   * @example
   * Request.Signature.Error
   */
  code?: string;
  message?: string;
  /**
   * @example
   * 744419D0-671A-5997-9840-E8AE48356194
   */
  requestId?: string;
  responseMarkdown?: string;
  /**
   * @example
   * 1
   */
  round?: number;
  status?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  usage?: RunLegalAdviceConsultationResponseBodyUsage;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      responseMarkdown: 'ResponseMarkdown',
      round: 'Round',
      status: 'Status',
      success: 'Success',
      usage: 'Usage',
      httpStatusCode: 'httpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      responseMarkdown: 'string',
      round: 'number',
      status: 'string',
      success: 'boolean',
      usage: RunLegalAdviceConsultationResponseBodyUsage,
      httpStatusCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunLegalAdviceConsultationResponseBody;
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
      body: RunLegalAdviceConsultationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextFileResponseBodyData extends $tea.Model {
  /**
   * @example
   * 36d6447d277c4a1c9fd0def1d16341f1
   */
  textFileId?: string;
  textFileName?: string;
  textFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      textFileId: 'TextFileId',
      textFileName: 'TextFileName',
      textFileUrl: 'TextFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textFileId: 'string',
      textFileName: 'string',
      textFileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfigCustomRules extends $tea.Model {
  /**
   * @example
   * high
   */
  riskLevel?: string;
  ruleDesc?: string;
  ruleTitle?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'riskLevel',
      ruleDesc: 'ruleDesc',
      ruleTitle: 'ruleTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      ruleDesc: 'string',
      ruleTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfig extends $tea.Model {
  customRules?: RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfigCustomRules[];
  static names(): { [key: string]: string } {
    return {
      customRules: 'customRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customRules: { 'type': 'array', 'itemType': RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfigCustomRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationRequestAssistantMetaDataRules extends $tea.Model {
  /**
   * @example
   * medium
   */
  riskLevel?: string;
  /**
   * @example
   * 2.1
   */
  ruleSequence?: string;
  ruleTag?: string;
  ruleTitle?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'riskLevel',
      ruleSequence: 'ruleSequence',
      ruleTag: 'ruleTag',
      ruleTitle: 'ruleTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      ruleSequence: 'string',
      ruleTag: 'string',
      ruleTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationRequestAssistantMetaData extends $tea.Model {
  customRuleConfig?: RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfig;
  /**
   * @example
   * 9a6b1ba60d9944249363ec3cc1529b7b
   */
  fileId?: string;
  /**
   * @example
   * 1
   */
  position?: string;
  /**
   * @example
   * b265b416-ca1f-425d-9340-c968f39624e1
   */
  ruleTaskId?: string;
  rules?: RunContractResultGenerationRequestAssistantMetaDataRules[];
  static names(): { [key: string]: string } {
    return {
      customRuleConfig: 'customRuleConfig',
      fileId: 'fileId',
      position: 'position',
      ruleTaskId: 'ruleTaskId',
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customRuleConfig: RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfig,
      fileId: 'string',
      position: 'string',
      ruleTaskId: 'string',
      rules: { 'type': 'array', 'itemType': RunContractResultGenerationRequestAssistantMetaDataRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationRequestAssistant extends $tea.Model {
  metaData?: RunContractResultGenerationRequestAssistantMetaData;
  /**
   * @example
   * contract_examime
   */
  type?: string;
  /**
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      metaData: 'metaData',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaData: RunContractResultGenerationRequestAssistantMetaData,
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationResponseBodyOutputResultSubRisks extends $tea.Model {
  originalContent?: string;
  resultContent?: string;
  resultType?: string;
  riskBrief?: string;
  riskClause?: string;
  riskExplain?: string;
  static names(): { [key: string]: string } {
    return {
      originalContent: 'originalContent',
      resultContent: 'resultContent',
      resultType: 'resultType',
      riskBrief: 'riskBrief',
      riskClause: 'riskClause',
      riskExplain: 'riskExplain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalContent: 'string',
      resultContent: 'string',
      resultType: 'string',
      riskBrief: 'string',
      riskClause: 'string',
      riskExplain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationResponseBodyOutputResult extends $tea.Model {
  examineBrief?: string;
  examineResult?: string;
  /**
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @example
   * 1.1
   */
  ruleSequence?: string;
  ruleTag?: string;
  ruleTitle?: string;
  subRisks?: RunContractResultGenerationResponseBodyOutputResultSubRisks[];
  static names(): { [key: string]: string } {
    return {
      examineBrief: 'examineBrief',
      examineResult: 'examineResult',
      riskLevel: 'riskLevel',
      ruleSequence: 'ruleSequence',
      ruleTag: 'ruleTag',
      ruleTitle: 'ruleTitle',
      subRisks: 'subRisks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      examineBrief: 'string',
      examineResult: 'string',
      riskLevel: 'string',
      ruleSequence: 'string',
      ruleTag: 'string',
      ruleTitle: 'string',
      subRisks: { 'type': 'array', 'itemType': RunContractResultGenerationResponseBodyOutputResultSubRisks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationResponseBodyOutput extends $tea.Model {
  result?: RunContractResultGenerationResponseBodyOutputResult;
  /**
   * @example
   * eaa56e1e-e205-4f5e-926e-5e2269ae7f68
   */
  resultTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      resultTaskId: 'resultTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: RunContractResultGenerationResponseBodyOutputResult,
      resultTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationResponseBodyUsage extends $tea.Model {
  /**
   * @example
   * 5
   */
  input?: number;
  /**
   * @example
   * page
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractRuleGenerationRequestAssistantMetaData extends $tea.Model {
  /**
   * @example
   * 9a6b1ba60d9944249363ec3cc1529b7b
   */
  fileId?: string;
  /**
   * @example
   * 1
   */
  position?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      position: 'position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      position: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractRuleGenerationRequestAssistant extends $tea.Model {
  metaData?: RunContractRuleGenerationRequestAssistantMetaData;
  /**
   * @example
   * contract_examime
   */
  type?: string;
  /**
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      metaData: 'metaData',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaData: RunContractRuleGenerationRequestAssistantMetaData,
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractRuleGenerationResponseBodyOutputRules extends $tea.Model {
  /**
   * @example
   * medium
   */
  riskLevel?: string;
  /**
   * @example
   * 1.1
   */
  ruleSequence?: string;
  ruleTag?: string;
  ruleTitle?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'riskLevel',
      ruleSequence: 'ruleSequence',
      ruleTag: 'ruleTag',
      ruleTitle: 'ruleTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      ruleSequence: 'string',
      ruleTag: 'string',
      ruleTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractRuleGenerationResponseBodyOutput extends $tea.Model {
  /**
   * @example
   * b265b416-ca1f-425d-9340-c968f39624e9
   */
  ruleTaskId?: string;
  rules?: RunContractRuleGenerationResponseBodyOutputRules[];
  static names(): { [key: string]: string } {
    return {
      ruleTaskId: 'ruleTaskId',
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleTaskId: 'string',
      rules: { 'type': 'array', 'itemType': RunContractRuleGenerationResponseBodyOutputRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractRuleGenerationResponseBodyUsage extends $tea.Model {
  /**
   * @example
   * 5
   */
  input?: number;
  /**
   * @example
   * page
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationRequestAssistant extends $tea.Model {
  /**
   * @example
   * assitant_abc_123
   */
  id?: string;
  metaData?: { [key: string]: string };
  /**
   * @example
   * legal_advice_consult
   */
  type?: string;
  /**
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      metaData: 'metaData',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationRequestThreadMessages extends $tea.Model {
  content?: string;
  /**
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationRequestThread extends $tea.Model {
  messages?: RunLegalAdviceConsultationRequestThreadMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': RunLegalAdviceConsultationRequestThreadMessages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationResponseBodyUsage extends $tea.Model {
  /**
   * @example
   * 500
   */
  inputTokens?: number;
  /**
   * @example
   * 700
   */
  outputTokens?: number;
  /**
   * @example
   * 1200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
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
    this._endpoint = this.getEndpoint("farui", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 上传合同文件
   * 
   * @param request - CreateTextFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTextFileResponse
   */
  async createTextFileWithOptions(WorkspaceId: string, request: CreateTextFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTextFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.createTime)) {
      body["CreateTime"] = request.createTime;
    }

    if (!Util.isUnset(request.textFileName)) {
      body["TextFileName"] = request.textFileName;
    }

    if (!Util.isUnset(request.textFileUrl)) {
      body["TextFileUrl"] = request.textFileUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTextFile",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/data/textFile`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTextFileResponse>(await this.callApi(params, req, runtime), new CreateTextFileResponse({}));
  }

  /**
   * 上传合同文件
   * 
   * @param request - CreateTextFileRequest
   * @returns CreateTextFileResponse
   */
  async createTextFile(WorkspaceId: string, request: CreateTextFileRequest): Promise<CreateTextFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTextFileWithOptions(WorkspaceId, request, headers, runtime);
  }

  async createTextFileAdvance(WorkspaceId: string, request: CreateTextFileAdvanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTextFileResponse> {
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
      product: "FaRui",
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
    let createTextFileReq = new CreateTextFileRequest({ });
    OpenApiUtil.convert(request, createTextFileReq);
    if (!Util.isUnset(request.textFileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.textFileUrlObject,
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
      createTextFileReq.textFileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let createTextFileResp = await this.createTextFileWithOptions(WorkspaceId, createTextFileReq, headers, runtime);
    return createTextFileResp;
  }

  /**
   * 生成合同审查结果
   * 
   * @param tmpReq - RunContractResultGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunContractResultGenerationResponse
   */
  async runContractResultGenerationWithOptions(workspaceId: string, tmpReq: RunContractResultGenerationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunContractResultGenerationResponse> {
    Util.validateModel(tmpReq);
    let request = new RunContractResultGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.assistant)) {
      request.assistantShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assistant, "assistant", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!Util.isUnset(request.assistantShrink)) {
      body["assistant"] = request.assistantShrink;
    }

    if (!Util.isUnset(request.stream)) {
      body["stream"] = request.stream;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunContractResultGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/farui/contract/result/genarate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunContractResultGenerationResponse>(await this.callApi(params, req, runtime), new RunContractResultGenerationResponse({}));
  }

  /**
   * 生成合同审查结果
   * 
   * @param request - RunContractResultGenerationRequest
   * @returns RunContractResultGenerationResponse
   */
  async runContractResultGeneration(workspaceId: string, request: RunContractResultGenerationRequest): Promise<RunContractResultGenerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runContractResultGenerationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 生成合同审查规则
   * 
   * @param tmpReq - RunContractRuleGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunContractRuleGenerationResponse
   */
  async runContractRuleGenerationWithOptions(workspaceId: string, tmpReq: RunContractRuleGenerationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunContractRuleGenerationResponse> {
    Util.validateModel(tmpReq);
    let request = new RunContractRuleGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.assistant)) {
      request.assistantShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assistant, "assistant", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!Util.isUnset(request.assistantShrink)) {
      body["assistant"] = request.assistantShrink;
    }

    if (!Util.isUnset(request.stream)) {
      body["stream"] = request.stream;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunContractRuleGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/farui/contract/rule/genarate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunContractRuleGenerationResponse>(await this.callApi(params, req, runtime), new RunContractRuleGenerationResponse({}));
  }

  /**
   * 生成合同审查规则
   * 
   * @param request - RunContractRuleGenerationRequest
   * @returns RunContractRuleGenerationResponse
   */
  async runContractRuleGeneration(workspaceId: string, request: RunContractRuleGenerationRequest): Promise<RunContractRuleGenerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runContractRuleGenerationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 法律咨询
   * 
   * @param tmpReq - RunLegalAdviceConsultationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunLegalAdviceConsultationResponse
   */
  async runLegalAdviceConsultationWithOptions(workspaceId: string, tmpReq: RunLegalAdviceConsultationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunLegalAdviceConsultationResponse> {
    Util.validateModel(tmpReq);
    let request = new RunLegalAdviceConsultationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.assistant)) {
      request.assistantShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assistant, "assistant", "json");
    }

    if (!Util.isUnset(tmpReq.thread)) {
      request.threadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thread, "thread", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!Util.isUnset(request.assistantShrink)) {
      body["assistant"] = request.assistantShrink;
    }

    if (!Util.isUnset(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!Util.isUnset(request.threadShrink)) {
      body["thread"] = request.threadShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunLegalAdviceConsultation",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/farui/legalAdvice/consult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunLegalAdviceConsultationResponse>(await this.callApi(params, req, runtime), new RunLegalAdviceConsultationResponse({}));
  }

  /**
   * 法律咨询
   * 
   * @param request - RunLegalAdviceConsultationRequest
   * @returns RunLegalAdviceConsultationResponse
   */
  async runLegalAdviceConsultation(workspaceId: string, request: RunLegalAdviceConsultationRequest): Promise<RunLegalAdviceConsultationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runLegalAdviceConsultationWithOptions(workspaceId, request, headers, runtime);
  }

}
