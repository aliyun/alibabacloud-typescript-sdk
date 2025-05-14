// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StatisticsReportResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  commentNum?: number;
  /**
   * @example
   * 1
   */
  commentUserNum?: number;
  /**
   * @example
   * 2
   */
  likeNum?: number;
  /**
   * @example
   * 3
   */
  readNum?: number;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commentNum: 'commentNum',
      commentUserNum: 'commentUserNum',
      likeNum: 'likeNum',
      readNum: 'readNum',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentNum: 'number',
      commentUserNum: 'number',
      likeNum: 'number',
      readNum: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

