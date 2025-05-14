// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMeetingRoomResponseBodyResultRoomLabels extends $dara.Model {
  /**
   * @example
   * 1
   */
  labelId?: number;
  /**
   * @example
   * 电视
   */
  labelName?: string;
  static names(): { [key: string]: string } {
    return {
      labelId: 'LabelId',
      labelName: 'LabelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelId: 'number',
      labelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

