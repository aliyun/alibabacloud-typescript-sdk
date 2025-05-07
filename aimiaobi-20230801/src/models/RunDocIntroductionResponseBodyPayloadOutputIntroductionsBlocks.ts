// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocIntroductionResponseBodyPayloadOutputIntroductionsBlocks extends $dara.Model {
  /**
   * @example
   * 0
   */
  beginTime?: number;
  /**
   * @example
   * 1200
   */
  endTime?: number;
  /**
   * @example
   * 600
   */
  height?: number;
  /**
   * @example
   * 10
   */
  pageId?: number;
  /**
   * @example
   * 600
   */
  width?: number;
  /**
   * @example
   * 10
   */
  x?: number;
  /**
   * @example
   * 10
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      height: 'Height',
      pageId: 'PageId',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      height: 'number',
      pageId: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

