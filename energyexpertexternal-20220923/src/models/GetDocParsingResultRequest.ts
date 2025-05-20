// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocParsingResultRequest extends $dara.Model {
  /**
   * @remarks
   * - The document parsing result supports two formats: markdown and json.
   * - By default, the result is returned in markdown format.
   * 
   * @example
   * md
   */
  returnFormat?: string;
  /**
   * @remarks
   * - Task ID.
   * - The taskId is obtained from the SubmitDocParsingTaskAdvance or SubmitDocParsingTask interfaces.
   * 
   * This parameter is required.
   * 
   * @example
   * 2c22388d-e2ed-44fe-99e6-99922f15e7bb
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      returnFormat: 'returnFormat',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      returnFormat: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

