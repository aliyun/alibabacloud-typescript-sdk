// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAnnualDocSummaryTaskRequestDocInfos extends $dara.Model {
  /**
   * @remarks
   * Document ID
   * 
   * This parameter is required.
   * 
   * @example
   * 198386463432
   */
  docId?: string;
  /**
   * @remarks
   * Document year
   * 
   * This parameter is required.
   * 
   * @example
   * 2023
   */
  docYear?: number;
  /**
   * @remarks
   * End page number
   * 
   * @example
   * 2
   */
  endPage?: number;
  /**
   * @remarks
   * Document library ID
   * 
   * This parameter is required.
   * 
   * @example
   * rdxrmo6amk
   */
  libraryId?: string;
  /**
   * @remarks
   * Start page number
   * 
   * @example
   * 1
   */
  startPage?: number;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      docYear: 'docYear',
      endPage: 'endPage',
      libraryId: 'libraryId',
      startPage: 'startPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docYear: 'number',
      endPage: 'number',
      libraryId: 'string',
      startPage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAnnualDocSummaryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * List of years to analyze
   * 
   * This parameter is required.
   */
  anaYears?: number[];
  /**
   * @remarks
   * List of document information
   * 
   * This parameter is required.
   */
  docInfos?: CreateAnnualDocSummaryTaskRequestDocInfos[];
  /**
   * @remarks
   * Enable table extraction. Default is true.
   * 
   * @example
   * true
   */
  enableTable?: boolean;
  /**
   * @remarks
   * Instruction
   * 
   * @example
   * 你是资深的证券研究员，对xx年上市公司进行业绩分析。根据参考信息从如下方面详细分析：
   * 1. 整体业绩变化情况，包括营收，利润等详细指标变化情况
   * 2. 业绩变化情况具体原因，包括各个业务变化情况
   * 严格只输出xx年情况。
   */
  instruction?: string;
  /**
   * @remarks
   * Model ID
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      anaYears: 'anaYears',
      docInfos: 'docInfos',
      enableTable: 'enableTable',
      instruction: 'instruction',
      modelId: 'modelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anaYears: { 'type': 'array', 'itemType': 'number' },
      docInfos: { 'type': 'array', 'itemType': CreateAnnualDocSummaryTaskRequestDocInfos },
      enableTable: 'boolean',
      instruction: 'string',
      modelId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.anaYears)) {
      $dara.Model.validateArray(this.anaYears);
    }
    if(Array.isArray(this.docInfos)) {
      $dara.Model.validateArray(this.docInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

