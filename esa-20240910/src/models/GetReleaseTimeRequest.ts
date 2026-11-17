// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReleaseTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The security instance ID. It must be a DDoS security instance ID in the format of esa-ddos- and can be obtained by calling the ListDDoSInstances operation. Site instance IDs in the format of esa-site- are not supported.
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

