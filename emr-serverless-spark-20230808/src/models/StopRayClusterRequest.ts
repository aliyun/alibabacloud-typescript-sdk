// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopRayClusterRequest extends $dara.Model {
  /**
   * @example
   * ray-k7nm8ahl5te4tg91-ey7blpbg
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
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

