// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddOrQuitLaneCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  laneIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * add
   */
  operateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      laneIds: 'laneIds',
      operateType: 'operateType',
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      laneIds: 'string',
      operateType: 'string',
      serviceGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

