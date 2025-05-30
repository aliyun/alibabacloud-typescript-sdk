// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesResponseBodyDataTables extends $dara.Model {
  /**
   * @remarks
   * The time when the table was created.
   * 
   * @example
   * 2022-01-17T07:07:47Z
   */
  creationTime?: number;
  /**
   * @remarks
   * The display name of the table.
   * 
   * @example
   * sale_detail
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * dim_odps
   */
  name?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * @example
   * 1887853961230110
   */
  owner?: string;
  /**
   * @remarks
   * The schema to which the table belongs.
   * 
   * @example
   * default
   */
  schema?: string;
  /**
   * @remarks
   * The type of the table.
   * 
   * @example
   * internal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'creationTime',
      displayName: 'displayName',
      name: 'name',
      owner: 'owner',
      schema: 'schema',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      displayName: 'string',
      name: 'string',
      owner: 'string',
      schema: 'string',
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

