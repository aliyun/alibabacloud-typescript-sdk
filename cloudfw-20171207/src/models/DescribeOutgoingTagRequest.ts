// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingTagRequest extends $dara.Model {
  /**
   * @example
   * Domain
   */
  dstType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1749003483
   */
  endTime?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 60.179.226.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1743646544
   */
  startTime?: string;
  /**
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

