// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * All
   */
  categoryId?: string;
  /**
   * @remarks
   * The destination type.
   * 
   * @example
   * domain
   */
  dstType?: string;
  /**
   * @remarks
   * The end time of the query. This is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1750818370
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the response message.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 59.82.45.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time of the query. This is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1749657600
   */
  startTime?: string;
  /**
   * @remarks
   * The fixed category ID.
   * 
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

