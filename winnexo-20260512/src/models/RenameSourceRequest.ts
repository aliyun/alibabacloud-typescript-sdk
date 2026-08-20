// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenameSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The new name of the data source.
   * 
   * @example
   * string_value
   */
  newName?: string;
  /**
   * @remarks
   * The data source ID, which is unique within the tenant.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. You can pass this parameter explicitly by using --tenant-id in winnexo-cli.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      newName: 'newName',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newName: 'string',
      sourceId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

