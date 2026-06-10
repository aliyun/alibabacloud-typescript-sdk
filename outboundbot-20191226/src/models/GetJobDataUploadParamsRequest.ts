// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobDataUploadParamsRequest extends $dara.Model {
  /**
   * @remarks
   * Business type
   * 
   * @example
   * SCRIPT_RECORDING
   */
  busiType?: string;
  /**
   * @remarks
   * File name
   * 
   * This parameter is required.
   * 
   * @example
   * SHUKE_ZA_ol_2_开场白.wav
   */
  fileName?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * 4eee9bf8-1319-468f-ac82-83c50ae389f8
   */
  instanceId?: string;
  /**
   * @remarks
   * Relative path for file storage
   * 
   * @example
   * //airwaybill/1237185904146124802
   */
  path?: string;
  /**
   * @remarks
   * Unique business ID (prevents duplicate file names; the system automatically adds one if left blank)
   * 
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

