// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskFlowConstantsRequestDagConstants extends $dara.Model {
  /**
   * @remarks
   * The key name of a constant for the task flow.
   * 
   * @example
   * poc_test
   */
  key?: string;
  /**
   * @remarks
   * The key value of a constant for the task flow.
   * 
   * @example
   * poc_test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

