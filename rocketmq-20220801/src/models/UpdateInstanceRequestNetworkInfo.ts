// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateInstanceRequestNetworkInfoInternetInfo } from "./UpdateInstanceRequestNetworkInfoInternetInfo";


export class UpdateInstanceRequestNetworkInfo extends $dara.Model {
  /**
   * @remarks
   * The information about the Internet over which the instance is accessed. This parameter takes effect only if the Internet access feature is enabled for the instance.
   */
  internetInfo?: UpdateInstanceRequestNetworkInfoInternetInfo;
  static names(): { [key: string]: string } {
    return {
      internetInfo: 'internetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetInfo: UpdateInstanceRequestNetworkInfoInternetInfo,
    };
  }

  validate() {
    if(this.internetInfo && typeof (this.internetInfo as any).validate === 'function') {
      (this.internetInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

