// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the marker after which the returned list begins.
   * 
   * @example
   * Y29tbWlzc2lvbl9leHRlcm5hbF91cmdlXzFfd3Ih
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The names of the returned resources. The names must start with the value specified by the prefix parameter. If the prefix parameter is set to a, the names of the returned resources must start with a.
   * 
   * @example
   * a
   */
  prefix?: string;
  /**
   * @remarks
   * The name of the schema.
   * 
   * @example
   * default
   */
  schemaName?: string;
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
      marker: 'marker',
      maxItem: 'maxItem',
      prefix: 'prefix',
      schemaName: 'schemaName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      prefix: 'string',
      schemaName: 'string',
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

