// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TurnOnZoneRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to drain traffic from the load balancer. Valid values:
   * - false: uses the default policy.
   * - true: drains traffic from the load balancer.
   * Default value: false.
   */
  hpAlbZoneDrained?: boolean;
  /**
   * @remarks
   * The zone of the instance.
   * 
   * @example
   * cn-hangzhou-i
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      hpAlbZoneDrained: 'hpAlbZoneDrained',
      zone: 'zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpAlbZoneDrained: 'boolean',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

