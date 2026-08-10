// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiAppScanStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The application IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 10d74f5b-6edf-4826-a989-de03463e479d
   */
  appIds?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - enable: enabled.
   * - disable: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

