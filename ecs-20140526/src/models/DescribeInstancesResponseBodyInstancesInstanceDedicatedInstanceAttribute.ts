// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceDedicatedInstanceAttribute extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance on the dedicated host is associated with the dedicated host. Valid values:
   * 
   * *   default: The instance is not associated with the dedicated host. When the instance is restarted from economical mode, the instance may be automatically deployed on another dedicated host in the automatic deployment resource pool.
   * *   host: The instance is associated with the dedicated host. When the instance is restarted from economical mode, the instance is still deployed on the original dedicated host.
   * 
   * @example
   * default
   */
  affinity?: string;
  /**
   * @remarks
   * Indicates whether the instance is hosted on a dedicated host. Valid values:
   * 
   * *   default: The instance is not hosted on a dedicated host.
   * *   host: The instance is hosted on a dedicated host.
   * 
   * @example
   * default
   */
  tenancy?: string;
  static names(): { [key: string]: string } {
    return {
      affinity: 'Affinity',
      tenancy: 'Tenancy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affinity: 'string',
      tenancy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

