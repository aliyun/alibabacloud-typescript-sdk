// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVisitorLoginDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4c51c9116c36537cb850dc1081d745df
   */
  chatDeviceId?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 9XYGTGWtq2wFi_Bpg7aUnIoYi_vG_rO3b***YtsxbHRHrYHlz1LDBLJAyZcLxieRQR4h_6AnWvTjJeNU5jgxzO*****bHwej7WgWrmA
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fcd020fe-d8e4-40e5-8c77-1a272a174a7d
   */
  visitorId?: string;
  static names(): { [key: string]: string } {
    return {
      chatDeviceId: 'ChatDeviceId',
      instanceId: 'InstanceId',
      token: 'Token',
      visitorId: 'VisitorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatDeviceId: 'string',
      instanceId: 'string',
      token: 'string',
      visitorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

