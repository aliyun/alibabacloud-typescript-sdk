// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskStepRequest extends $dara.Model {
  /**
   * @remarks
   * The task type to which the step belongs. Valid values:
   * - **ADAPTOR**: application adaptation steps
   * - **IMAGE**: image creation steps
   * 
   * This parameter is required.
   * 
   * @example
   * IMAGE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

