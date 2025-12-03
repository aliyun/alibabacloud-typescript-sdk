// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTestResultRequest extends $dara.Model {
  /**
   * @example
   * 131xxx38624xxxx68
   */
  executor?: string;
  /**
   * @example
   * TO DO
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      executor: 'executor',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executor: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

