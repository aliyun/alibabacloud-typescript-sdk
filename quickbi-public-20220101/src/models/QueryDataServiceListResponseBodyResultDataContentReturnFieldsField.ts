// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataServiceListResponseBodyResultDataContentReturnFieldsField extends $dara.Model {
  /**
   * @remarks
   * Display name in the cube model (can be in Chinese or English).
   * 
   * @example
   * date(year)
   */
  caption?: string;
  /**
   * @remarks
   * The corresponding physical field name.
   * 
   * @example
   * shid_star
   */
  column?: string;
  /**
   * @remarks
   * Data type.
   * 
   * - number: numeric
   * - string: string
   * - date: date
   * - datetime: datetime
   * - time: time
   * - geographic: geographic
   * - boolean: boolean
   * - url: URL
   * 
   * @example
   * datetime
   */
  dataType?: string;
  /**
   * @remarks
   * Unique identifier for the original field.
   * 
   * @example
   * 1c1f88cb7d
   */
  fid?: string;
  /**
   * @remarks
   * This attribute is included for date and geographic dimensions, indicating the supported granularity.
   * 
   * @example
   * yearRegion
   */
  granularity?: string;
  /**
   * @remarks
   * Unique name of the cube field, mainly used for unique positioning in the returned result.
   * 
   * @example
   * sss
   */
  name?: string;
  /**
   * @remarks
   * Type.
   * 
   * - Dimension: Dimension
   * - Measure: Measure
   * 
   * @example
   * dimension
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      column: 'Column',
      dataType: 'DataType',
      fid: 'Fid',
      granularity: 'Granularity',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      column: 'string',
      dataType: 'string',
      fid: 'string',
      granularity: 'string',
      name: 'string',
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

