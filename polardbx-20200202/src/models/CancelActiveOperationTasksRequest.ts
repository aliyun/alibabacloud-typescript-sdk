// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The event IDs, separated by commas.
   * 
   * This parameter is required.
   * 
   * @example
   * 111
   */
  ids?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

