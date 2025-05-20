// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushDeviceDataRequestDevices extends $dara.Model {
  /**
   * @remarks
   * Measuring point information To avoid accuracy problems, the measurement point data is uniformly transmitted to the string. The function of missing required fields cannot be used normally. Some functions may be affected due to the lack of recommend fields. For details, please refer to the notes of equipment measuring points in the appendix. [Reference Point Definition](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/Deviceappendixes-en.pdf
   * )
   * 
   * This parameter is required.
   * 
   * @example
   * {
   * 			"dp_imp": "329.0",
   * 			"F": "148.0",
   * 			"eq_imp": "363.0",
   * 			"Ep_imp_1": "128.0",
   * 			"Ep_imp_2": "157.0",
   * 			"Ua": "226.0",
   * 			"Ub": "285.0",
   * 			"Ep_imp": "325.0",
   * 			"Uc": "342.0",
   * 			"Ep_imp_3": "109.0",
   * 			"Ep_imp_4": "94.0",
   * 			"P": "514.0",
   * 			"Pa": "443.0",
   * 			"Q": "265.0",
   * 			"dp_exp": "261.0",
   * 			"eq_exp": "399.0",
   * 			"COSQ": "223.0",
   * 			"Ia": "240.0",
   * 			"Ib": "216.0",
   * 			"Ic": "229.0",
   * 			"Ep_exp": "115.0",
   * 			"VdisPer": "120.0"
   * 		}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * If the deviceType parameter is set to 12, 13, or 17, you must set the system_id parameter. The field name is still device_id. If the deviceType parameter is set to 15 or 16, no Other situations will be transmitted.
   * 
   * This parameter is required.
   * 
   * @example
   * device_code_xxx
   */
  deviceId?: string;
  /**
   * @remarks
   * Data generation time of measuring point.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-08 18:40:00
   */
  recordTime?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      deviceId: 'deviceId',
      recordTime: 'recordTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      deviceId: 'string',
      recordTime: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

