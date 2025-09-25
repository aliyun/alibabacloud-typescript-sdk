// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppConfigResponseBodyData extends $dara.Model {
  embeddingTypeList?: { [key: string]: string }[];
  frontendConfig?: { [key: string]: boolean };
  libraryDocumentStatusList?: { [key: string]: string }[];
  llmHelperTypeList?: { [key: string]: string }[];
  textIndexCategoryList?: string[];
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
   * @example
   * null
   */
  cost?: number;
  data?: GetAppConfigResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * None
   */
  message?: string;
  /**
   * @example
   * EF4B5C9B-3BC8-5171-A47B-4C5CF3DC3258
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
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

