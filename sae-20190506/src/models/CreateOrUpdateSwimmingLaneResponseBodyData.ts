// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneResponseBodyData extends $dara.Model {
  /**
   * @example
   * 22318
   */
  laneId?: number;
  static names(): { [key: string]: string } {
    return {
      laneId: 'LaneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      laneId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

