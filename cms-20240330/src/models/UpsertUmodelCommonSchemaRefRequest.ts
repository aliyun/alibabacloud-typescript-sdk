// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertUmodelCommonSchemaRefRequest extends $dara.Model {
  /**
   * @remarks
   * The group of the common Umodel schema.
   * 
   * This parameter is required.
   * 
   * @example
   * card-service-daily01
   */
  group?: string;
  /**
   * @remarks
   * The version number.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
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

