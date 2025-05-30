// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the marker after which the returned list begins.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
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
   * the name of schema.
   * 
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      prefix: 'prefix',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      prefix: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

