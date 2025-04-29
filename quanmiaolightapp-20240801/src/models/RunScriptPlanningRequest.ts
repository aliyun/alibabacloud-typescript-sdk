// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunScriptPlanningRequest extends $dara.Model {
  /**
   * @example
   * 故事尽可能狗血
   */
  additionalNote?: string;
  dialogueInScene?: boolean;
  plotConflict?: boolean;
  /**
   * @example
   * 都市战神
   */
  scriptName?: string;
  /**
   * @example
   * 3
   */
  scriptShotCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 在一个宁静的小镇上，每个家庭都在同一天收到一个神秘的、没有标记的包裹。
   */
  scriptSummary?: string;
  /**
   * @example
   * 现代，都市，爱情，玄幻
   */
  scriptTypeKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      additionalNote: 'additionalNote',
      dialogueInScene: 'dialogueInScene',
      plotConflict: 'plotConflict',
      scriptName: 'scriptName',
      scriptShotCount: 'scriptShotCount',
      scriptSummary: 'scriptSummary',
      scriptTypeKeyword: 'scriptTypeKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalNote: 'string',
      dialogueInScene: 'boolean',
      plotConflict: 'boolean',
      scriptName: 'string',
      scriptShotCount: 'number',
      scriptSummary: 'string',
      scriptTypeKeyword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

