// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataCheckConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. You can obtain this ID by calling the GetDataCheckConfig operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

