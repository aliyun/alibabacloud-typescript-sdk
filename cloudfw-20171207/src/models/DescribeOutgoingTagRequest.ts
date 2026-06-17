// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingTagRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the destination. Valid values:
   * 
   * - **Domain**: domain name.
   * 
   * - **DstIP**: IP address.
   * 
   * @example
   * Domain
   */
  dstType?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1749003483
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the content. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
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
   * 60.179.226.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1743646544
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the tag.
   * 
   * @example
   * 103208
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      dstType: 'DstType',
      endTime: 'EndTime',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstType: 'string',
      endTime: 'string',
      lang: 'string',
      sourceIp: 'string',
      startTime: 'string',
      tagId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

