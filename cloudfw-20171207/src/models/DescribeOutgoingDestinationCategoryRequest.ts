// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationCategoryRequest extends $dara.Model {
  /**
   * @example
   * All
   */
  categoryId?: string;
  /**
   * @example
   * domain
   */
  dstType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1750818370
   */
  endTime?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 59.82.45.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1749657600
   */
  startTime?: string;
  /**
   * @example
   * All
   */
  typeId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      dstType: 'DstType',
      endTime: 'EndTime',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
      typeId: 'TypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      dstType: 'string',
      endTime: 'string',
      lang: 'string',
      sourceIp: 'string',
      startTime: 'string',
      typeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

