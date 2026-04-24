// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsQuotaRequest extends $dara.Model {
  /**
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @example
   * /data
   */
  path?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  /**
   * @example
   * quotaPolicy
   */
  quotaType?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      path: 'Path',
      polarFsInstanceId: 'PolarFsInstanceId',
      quotaType: 'QuotaType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      path: 'string',
      polarFsInstanceId: 'string',
      quotaType: 'string',
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

