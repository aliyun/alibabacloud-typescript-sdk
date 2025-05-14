// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineMessageLogResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100****2077
   */
  acid?: string;
  content?: string;
  /**
   * @example
   * 1623738027480
   */
  endTime?: number;
  /**
   * @example
   * 11deca999****
   */
  mid?: string;
  /**
   * @example
   * 1
   */
  senderType?: number;
  /**
   * @example
   * 1623738026460
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      content: 'Content',
      endTime: 'EndTime',
      mid: 'Mid',
      senderType: 'SenderType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      content: 'string',
      endTime: 'number',
      mid: 'string',
      senderType: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

