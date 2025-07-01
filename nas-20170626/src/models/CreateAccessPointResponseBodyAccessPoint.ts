// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessPointResponseBodyAccessPoint extends $dara.Model {
  /**
   * @remarks
   * The domain name of the access point.
   * 
   * @example
   * ap-ie15ydanoz.001014****-w****.cn-hangzhou.nas.aliyuncs.com
   */
  accessPointDomain?: string;
  /**
   * @remarks
   * The ID of the access point.
   * 
   * @example
   * ap-ie15yd****
   */
  accessPointId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointDomain: 'AccessPointDomain',
      accessPointId: 'AccessPointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointDomain: 'string',
      accessPointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

