// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStorageDomainRoutingRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The route list
   * 
   * This parameter is required.
   */
  routesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      routesShrink: 'Routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      routesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

