// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelRequest extends $dara.Model {
  /**
   * @remarks
   * Customer model ID
   * 
   * @example
   * 1
   */
  customerModuleId?: number;
  static names(): { [key: string]: string } {
    return {
      customerModuleId: 'CustomerModuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerModuleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

