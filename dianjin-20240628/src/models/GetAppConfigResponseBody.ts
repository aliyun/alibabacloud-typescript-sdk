// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Embedding type list
   */
  embeddingTypeList?: { [key: string]: string }[];
  /**
   * @remarks
   * Frontend configuration
   */
  frontendConfig?: { [key: string]: boolean };
  /**
   * @remarks
   * Document library status list
   */
  libraryDocumentStatusList?: { [key: string]: string }[];
  /**
   * @remarks
   * Large Language Model (LLM) type list
   */
  llmHelperTypeList?: { [key: string]: string }[];
  /**
   * @remarks
   * Text index category list
   */
  textIndexCategoryList?: string[];
  /**
   * @remarks
   * Vector index category list
   */
  vectorIndexCategoryList?: string[];
  static names(): { [key: string]: string } {
    return {
      embeddingTypeList: 'embeddingTypeList',
      frontendConfig: 'frontendConfig',
      libraryDocumentStatusList: 'libraryDocumentStatusList',
      llmHelperTypeList: 'llmHelperTypeList',
      textIndexCategoryList: 'textIndexCategoryList',
      vectorIndexCategoryList: 'vectorIndexCategoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingTypeList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      frontendConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
      libraryDocumentStatusList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      llmHelperTypeList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      textIndexCategoryList: { 'type': 'array', 'itemType': 'string' },
      vectorIndexCategoryList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.embeddingTypeList)) {
      $dara.Model.validateArray(this.embeddingTypeList);
    }
    if(this.frontendConfig) {
      $dara.Model.validateMap(this.frontendConfig);
    }
    if(Array.isArray(this.libraryDocumentStatusList)) {
      $dara.Model.validateArray(this.libraryDocumentStatusList);
    }
    if(Array.isArray(this.llmHelperTypeList)) {
      $dara.Model.validateArray(this.llmHelperTypeList);
    }
    if(Array.isArray(this.textIndexCategoryList)) {
      $dara.Model.validateArray(this.textIndexCategoryList);
    }
    if(Array.isArray(this.vectorIndexCategoryList)) {
      $dara.Model.validateArray(this.vectorIndexCategoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Time consumed
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * Returned data
   */
  data?: GetAppConfigResponseBodyData;
  /**
   * @remarks
   * Data type
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * EF4B5C9B-3BC8-5171-A47B-4C5CF3DC3258
   */
  requestId?: string;
  /**
   * @remarks
   * Is successful
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Timestamp
   * 
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetAppConfigResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

