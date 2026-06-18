// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the security instance. This must be a DDoS security instance ID in the format of esa-ddos-*. You can call the ListDDoSInstances operation to obtain the ID. Site instance IDs in the format of esa-site-* are not supported.
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

