// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDocsSummaryTaskRequestDocInfos extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 198386463432
   */
  docId?: string;
  /**
   * @example
   * 2
   */
  endPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rdxrmo6amk
   */
  libraryId?: string;
  /**
   * @example
   * 1
   */
  startPage?: number;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      endPage: 'endPage',
      libraryId: 'libraryId',
      startPage: 'startPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
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

export class CreateDocsSummaryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docInfos?: CreateDocsSummaryTaskRequestDocInfos[];
  /**
   * @example
   * true
   */
  enableTable?: boolean;
  instruction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      docInfos: 'docInfos',
      enableTable: 'enableTable',
      instruction: 'instruction',
      modelId: 'modelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docInfos: { 'type': 'array', 'itemType': CreateDocsSummaryTaskRequestDocInfos },
      enableTable: 'boolean',
      instruction: 'string',
      modelId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docInfos)) {
      $dara.Model.validateArray(this.docInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

