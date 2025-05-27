// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventCountByThreatLevelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of events.
   * 
   * @example
   * 100
   */
  eventNum?: number;
  /**
   * @remarks
   * The number of high-risk events.
   * 
   * @example
   * 20
   */
  highLevelEventNum?: number;
  /**
   * @remarks
   * The number of low-risk events.
   * 
   * @example
   * 52
   */
  lowLevelEventNum?: number;
  /**
   * @remarks
   * The number of medium-risk events.
   * 
   * @example
   * 3
   */
  mediumLevelEventNum?: number;
  /**
   * @remarks
   * The number of unhandled events.
   * 
   * @example
   * 75
   */
  undealEventNum?: number;
  static names(): { [key: string]: string } {
    return {
      eventNum: 'EventNum',
      highLevelEventNum: 'HighLevelEventNum',
      lowLevelEventNum: 'LowLevelEventNum',
      mediumLevelEventNum: 'MediumLevelEventNum',
      undealEventNum: 'UndealEventNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventNum: 'number',
      highLevelEventNum: 'number',
      lowLevelEventNum: 'number',
      mediumLevelEventNum: 'number',
      undealEventNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

