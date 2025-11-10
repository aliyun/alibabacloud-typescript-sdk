// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUmodelCommonSchemaRefRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * apm-common
   */
  group?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

