// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SuspendApsJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aps-bj1xxxxxx
   */
  apsJobId?: string;
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
      apsJobId: 'ApsJobId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsJobId: 'string',
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

