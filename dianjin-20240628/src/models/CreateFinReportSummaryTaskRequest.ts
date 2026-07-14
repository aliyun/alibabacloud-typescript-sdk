// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFinReportSummaryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Document ID
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  docId?: string;
  /**
   * @remarks
   * Enable table
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableTable?: boolean;
  /**
   * @remarks
   * End page
   * 
   * @example
   * 10
   */
  endPage?: number;
  /**
   * @remarks
   * Instruction
   * 
   * @example
   * 请帮我总结一下。
   */
  instruction?: string;
  /**
   * @remarks
   * Document library ID
   * 
   * This parameter is required.
   * 
   * @example
   * 3akzl28vap
   */
  libraryId?: string;
  /**
   * @remarks
   * Model ID
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @remarks
   * Start page
   * 
   * @example
   * 1
   */
  startPage?: number;
  /**
   * @remarks
   * Task type. Optional. Defaults to finance_report. If you set this to custom, provide an instruction.
   * 
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

