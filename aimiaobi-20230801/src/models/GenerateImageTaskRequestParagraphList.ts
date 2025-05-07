// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateImageTaskRequestParagraphList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 一直忧伤的猫
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  taskId?: string;
  /**
   * @example
   * SUCCESSED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

