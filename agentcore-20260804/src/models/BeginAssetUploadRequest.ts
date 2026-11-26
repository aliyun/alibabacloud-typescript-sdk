// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeginAssetUploadRequestBodyChunkConfigurationPreprocessRules extends $dara.Model {
  /**
   * @remarks
   * 是否在解析时删除 URL 和邮箱地址。
   * 
   * @example
   * false
   */
  removeUrlsAndEmails?: boolean;
  /**
   * @remarks
   * 是否将连续空格、换行、制表符替换为单个空格。
   * 
   * @example
   * true
   */
  replaceConsecutiveWhitespace?: boolean;
  static names(): { [key: string]: string } {
    return {
      removeUrlsAndEmails: 'removeUrlsAndEmails',
      replaceConsecutiveWhitespace: 'replaceConsecutiveWhitespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removeUrlsAndEmails: 'boolean',
      replaceConsecutiveWhitespace: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginAssetUploadRequestBodyChunkConfiguration extends $dara.Model {
  /**
   * @remarks
   * BY_HEADING 下必填且范围为 1 至 6。小于等于此级数的标题均作为边界；更深标题保留在正文，超长节按段落或句子回退，无标题文档退化为智能切分。其他策略忽略，由后端按策略校验。
   * 
   * @example
   * 2
   */
  headingLevel?: number;
  /**
   * @remarks
   * 1 至 6000 字符，沿用 EB 的字符长度口径，不是 Token 数；省略使用服务端默认值。
   * 
   * @example
   * 512
   */
  maxChunkSize?: number;
  /**
   * @remarks
   * 仅 BY_LENGTH 生效，单位为字符，缺省为 0；有效值须大于等于 0 且小于有效 maxChunkSize，重叠后仍不超过最大分块长度。其他策略忽略，由后端按策略校验。
   * 
   * @example
   * 40
   */
  overlapSize?: number;
  /**
   * @remarks
   * 切分前的文本预处理规则。
   */
  preprocessRules?: BeginAssetUploadRequestBodyChunkConfigurationPreprocessRules;
  /**
   * @remarks
   * BY_SEPARATOR 下必填且非空，按字面字符串整体匹配，不使用正则；其他策略忽略。
   * 
   * @example
   * \n\n
   */
  separator?: string;
  /**
   * @remarks
   * 返回已保存的分块策略。AUTO 为自动分块，BY_SEPARATOR 为分隔符分块；BY_LENGTH 和 BY_HEADING 仅为历史配置兼容返回，新建或更新配置时一期仅接受 AUTO 和 BY_SEPARATOR。
   * 
   * This parameter is required.
   * 
   * @example
   * AUTO
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      headingLevel: 'headingLevel',
      maxChunkSize: 'maxChunkSize',
      overlapSize: 'overlapSize',
      preprocessRules: 'preprocessRules',
      separator: 'separator',
      strategy: 'strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headingLevel: 'number',
      maxChunkSize: 'number',
      overlapSize: 'number',
      preprocessRules: BeginAssetUploadRequestBodyChunkConfigurationPreprocessRules,
      separator: 'string',
      strategy: 'string',
    };
  }

  validate() {
    if(this.preprocessRules && typeof (this.preprocessRules as any).validate === 'function') {
      (this.preprocessRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginAssetUploadRequestBodyMetadata extends $dara.Model {
  /**
   * @remarks
   * metadataSchema 中声明的字段名；同一请求中不得重复。固定值及系统变量字段由服务端生成，不接受客户覆盖。
   * 
   * This parameter is required.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * 按 schema 类型解析的字符串。上传时省略或空值表示未赋值，由 schema 填充；UpdateAsset 中省略、null 或空串表示删除该 key，未提交的 key 保持不变。DATETIME 接受 ISO 8601 含时区、yyyy-MM-dd HH:mm:ss 或 yyyy-MM-dd。
   * 
   * @example
   * engineering
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginAssetUploadRequestBody extends $dara.Model {
  /**
   * @remarks
   * 可选的稳定资产标识，限定在当前租户、工作空间和知识库内。未指定 assetId 但提供 clientToken 时，按完整资源范围和 clientToken 稳定派生；两者均未提供时，每次请求创建新资产。指定已有资产且开始新会话时必须设置 overwrite=true；来源版本去重也要求指定稳定 assetId 和 overwrite=true。
   * 
   * @example
   * asset-001
   */
  assetId?: string;
  /**
   * @remarks
   * 仅对本次资产内容生效的分块策略快照；省略时使用知识库默认配置。maxChunkSize 以字符计，范围 1 至 6000，一期仅支持 AUTO 和 BY_SEPARATOR，其他限制见 KnowledgeBaseChunkConfigurationInput。
   * 
   * @example
   * {"strategy":"AUTO","maxChunkSize":1000}
   */
  chunkConfiguration?: BeginAssetUploadRequestBodyChunkConfiguration;
  /**
   * @remarks
   * 可选的原件 MIME 类型；省略时平台根据 fileName 推导。有效类型通过响应 contentType 和签名 headers 返回，上传时必须原样携带 Content-Type；CompleteAssetUpload 再与 OSS 对象核验。
   * 
   * @example
   * application/pdf
   */
  contentType?: string;
  /**
   * @remarks
   * 原件文件名，最长 255 个字符；不得包含由客户端控制的 OSS 路径。
   * 
   * This parameter is required.
   * 
   * @example
   * guide.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * 资产级元数据键值对，仅允许 metadataSchema 声明的字段，value 使用字符串表示并按字段类型校验。value 省略、为 null 或空字符串时视为未提供，按 schema 中的固定值或系统变量自动填充；客户端显式覆盖固定值或系统变量字段时由后端拒绝。
   * 
   * @example
   * [{"key":"category","value":"manual"}]
   */
  metadata?: BeginAssetUploadRequestBodyMetadata[];
  /**
   * @remarks
   * 默认 false。true 授权覆盖同一 assetId，但不强制重新导入；满足 sourceETag 去重条件时复用当前会话，否则创建新的上传会话和加工代次。旧发布结果在新结果处理成功前保持可用，不会原地覆盖旧会话的 OSS 对象。
   * 
   * @example
   * false
   */
  overwrite?: boolean;
  /**
   * @remarks
   * 可选的上游来源不透明版本标记，最长 1024 个字符；非 null 时不得为空字符串或仅包含空白，由后端校验。OSS 来源使用源对象 ETag，飞书来源可使用毫秒更新时间字符串。仅用于来源版本相等判断，不与目标 OSS 对象 ETag 比较，也不用于版本排序。指定稳定 assetId、overwrite=true 且来源身份及版本、导入参数和有效处理配置均未变化时可复用当前会话，是否提供 clientToken 不影响此规则；显式提供且命中最近 clientToken 时仍要求完整规范化请求相同。未提供 sourceETag 时不启用来源版本去重。
   * 
   * @example
   * source-etag-v1
   */
  sourceETag?: string;
  /**
   * @remarks
   * 可选的上游源系统最后修改时间，epoch 毫秒，由客户声明、系统不核实；用于 SOURCE_MODIFIED_TIME 系统变量，不传时该变量为空，事件流导入时由系统维护。
   * 
   * @example
   * 1788000000000
   */
  sourceModifiedTime?: number;
  /**
   * @remarks
   * 可选的上游原件出处，最长 1024 个字符，由客户声明、系统不核实；用于 SOURCE_URI 系统变量，不传时该变量为空，事件流导入时由系统维护。
   * 
   * @example
   * oss://my-bucket/docs/guide.pdf
   */
  sourceUri?: string;
  static names(): { [key: string]: string } {
    return {
      assetId: 'assetId',
      chunkConfiguration: 'chunkConfiguration',
      contentType: 'contentType',
      fileName: 'fileName',
      metadata: 'metadata',
      overwrite: 'overwrite',
      sourceETag: 'sourceETag',
      sourceModifiedTime: 'sourceModifiedTime',
      sourceUri: 'sourceUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'string',
      chunkConfiguration: BeginAssetUploadRequestBodyChunkConfiguration,
      contentType: 'string',
      fileName: 'string',
      metadata: { 'type': 'array', 'itemType': BeginAssetUploadRequestBodyMetadata },
      overwrite: 'boolean',
      sourceETag: 'string',
      sourceModifiedTime: 'number',
      sourceUri: 'string',
    };
  }

  validate() {
    if(this.chunkConfiguration && typeof (this.chunkConfiguration as any).validate === 'function') {
      (this.chunkConfiguration as any).validate();
    }
    if(Array.isArray(this.metadata)) {
      $dara.Model.validateArray(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginAssetUploadRequest extends $dara.Model {
  /**
   * @remarks
   * 登记新资产，或为指定资产创建、复用上传会话。覆盖授权、最近 token 幂等检查、来源版本去重与加工代次分配由管控层原子完成。
   * 
   * This parameter is required.
   */
  body?: BeginAssetUploadRequestBody;
  /**
   * @remarks
   * 可选。提供时须为非空白字符串，最长 128 个字符；仅对该资产最近一次 Begin 保存的 token 幂等，后续 Begin（包括省略 clientToken 的请求）会替换最近请求标识。命中时必须使用相同规范化请求，包括 sourceETag，否则返回幂等冲突。未提供时按新的上传意图处理，不保证跨请求重试幂等；同时未指定 assetId 时每次请求创建新资产。与来源版本去重独立：被后续 Begin 替换的旧 token 再次到来时按新意图处理；覆盖已有资产仍须 overwrite=true，并可在指定稳定 assetId 时按 sourceETag 规则复用当前会话。
   * 
   * @example
   * asset-upload-001
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: BeginAssetUploadRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

