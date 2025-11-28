// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStorageDomainRoutingRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
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

