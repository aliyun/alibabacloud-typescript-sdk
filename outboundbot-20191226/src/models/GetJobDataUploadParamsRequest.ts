// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobDataUploadParamsRequest extends $dara.Model {
  /**
   * @example
   * SCRIPT_RECORDING
   */
  busiType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4eee9bf8-1319-468f-ac82-83c50ae389f8
   */
  instanceId?: string;
  /**
   * @example
   * //airwaybill/1237185904146124802
   */
  path?: string;
  /**
   * @example
   * sas_siema_1477832102462645_siem_f07e90c2c147cf8cf1549ccb974e1956
   */
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      busiType: 'BusiType',
      fileName: 'FileName',
      instanceId: 'InstanceId',
      path: 'Path',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      busiType: 'string',
      fileName: 'string',
      instanceId: 'string',
      path: 'string',
      uniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

