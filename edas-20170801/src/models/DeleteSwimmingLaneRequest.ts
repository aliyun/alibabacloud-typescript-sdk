// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSwimmingLaneRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the lane.
   * 
   * This parameter is required.
   * 
   * @example
   * 241
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

