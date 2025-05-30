// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesRequest extends $dara.Model {
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
   * The name of the resource.
   * 
   * @example
   * res
   */
  name?: string;
  /**
   * @remarks
   * The name of the schema.
   * 
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      name: 'string',
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

