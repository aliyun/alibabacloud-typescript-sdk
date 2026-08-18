// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReleaseTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the security instance. This must be a DDoS security instance ID (in the format esa-ddos-), which you can obtain by calling the ListDDoSInstances operation. Site instance IDs (in the format esa-site-) are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * esa-ddos-2sdj**3s
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

