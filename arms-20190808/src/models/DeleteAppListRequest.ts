// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppListRequest extends $dara.Model {
  /**
   * @remarks
   * The list of PIDs for the applications monitored by Application Monitoring.
   */
  pids?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pids: 'Pids',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pids: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pids)) {
      $dara.Model.validateArray(this.pids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

