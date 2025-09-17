// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the property. RegionId is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * RegionId
   */
  attributeName?: string;
  /**
   * @remarks
   * The filter conditions. JSON format:{"key1":"value1"}.
   */
  filterShrink?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'attributeName',
      filterShrink: 'filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      filterShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

