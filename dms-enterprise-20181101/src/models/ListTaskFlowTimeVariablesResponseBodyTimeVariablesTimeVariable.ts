// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskFlowTimeVariablesResponseBodyTimeVariablesTimeVariable extends $dara.Model {
  /**
   * @remarks
   * The name of the time variable.
   * 
   * @example
   * time_test
   */
  name?: string;
  /**
   * @remarks
   * The format of the time variable.
   * 
   * @example
   * 2018-09-26|+7h
   */
  pattern?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pattern: 'Pattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

