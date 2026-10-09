// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAnnualDocSummaryTaskRequestDocInfos extends $dara.Model {
  /**
   * @remarks
   * The document ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 198386463432
   */
  docId?: string;
  /**
   * @remarks
   * The document year.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023
   */
  docYear?: number;
  /**
   * @remarks
   * The end page.
   * 
   * @example
   * 2
   */
  endPage?: number;
  /**
   * @remarks
   * The document library ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rdxrmo6amk
   */
  libraryId?: string;
  /**
   * @remarks
   * The start page.
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
   * The list of analysis years.
   * 
   * This parameter is required.
   */
  anaYears?: number[];
  /**
   * @remarks
   * The list of document information.
   * 
   * This parameter is required.
   */
  docInfos?: CreateAnnualDocSummaryTaskRequestDocInfos[];
  /**
   * @remarks
   * Specifies whether to enable tables. Default value: true.
   * 
   * @example
   * true
   */
  enableTable?: boolean;
  /**
   * @remarks
   * The instruction.
   * 
   * @example
   * You are a senior securities researcher conducting performance analysis on listed companies for the year XX. Based on the reference information, provide a detailed analysis covering the following aspects:
   * 1. Overall performance changes, including detailed metrics such as revenue and profit.
   * 2. Specific reasons for performance changes, including changes in each business segment.
   * Strictly output only the information for the year XX
   */
  instruction?: string;
  /**
   * @remarks
   * The model ID.
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

