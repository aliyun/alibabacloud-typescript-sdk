// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigNetworkRegionBlockRequest extends $dara.Model {
  /**
   * @remarks
   * The details of the configurations of blocked locations. This parameter is a JSON string. The value consists of the following fields:
   * 
   * *   **RegionBlockSwitch**: the status of the location blacklist feature. This field is required and must be of the string type. Valid values:
   * 
   *     *   **on**
   *     *   **off**
   * 
   * *   **Countries**: the codes of the countries and areas from which you want to block requests. This field is optional and must be of the array type.
   * 
   *     **
   * 
   *     **Note** For more information about the codes of countries and areas, see [Location parameters](https://help.aliyun.com/document_detail/167926.html).
   * 
   * *   **Provinces**: the codes of the administrative regions in China from which you want to block requests. This field is optional and must be of the array type.
   * 
   *     **
   * 
   *     **Note** For more information about the codes of administrative regions in China, see [Location parameters](https://help.aliyun.com/document_detail/167926.html).
   * 
   *     For example, `[11,12]` specifies Beijing and Tianjin.
   * 
   * This parameter is required.
   * 
   * @example
   * {"RegionBlockSwitch":"off","Countries":[],"Provinces":[11,12,13,14,15,21,22,23,31,32,33,34,35,36,37,41,42,43,44,45,46,50,51,52,53,54,61,62,63,64,65,71,81,82]}
   */
  config?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

