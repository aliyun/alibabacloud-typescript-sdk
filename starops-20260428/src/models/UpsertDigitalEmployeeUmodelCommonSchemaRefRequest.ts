// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertDigitalEmployeeUmodelCommonSchemaRefRequest extends $dara.Model {
  /**
   * @remarks
   * The version of the public schema.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

