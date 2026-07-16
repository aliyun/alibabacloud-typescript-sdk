// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WorkflowParameter extends $dara.Model {
  /**
   * @remarks
   * The invalid parameter.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The invalid parameter.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

