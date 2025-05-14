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

