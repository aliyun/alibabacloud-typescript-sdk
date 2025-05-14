// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFinReportSummaryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableTable?: boolean;
  /**
   * @example
   * 10
   */
  endPage?: number;
  instruction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3akzl28vap
   */
  libraryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 1
   */
  startPage?: number;
  /**
   * @example
   * custom
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      enableTable: 'enableTable',
      endPage: 'endPage',
      instruction: 'instruction',
      libraryId: 'libraryId',
      modelId: 'modelId',
      startPage: 'startPage',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      enableTable: 'boolean',
      endPage: 'number',
      instruction: 'string',
      libraryId: 'string',
      modelId: 'string',
      startPage: 'number',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

