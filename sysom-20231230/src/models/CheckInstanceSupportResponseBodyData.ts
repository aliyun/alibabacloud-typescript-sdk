// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceSupportResponseBodyData extends $dara.Model {
  /**
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @example
   * instance not found in ecs
   */
  reason?: string;
  /**
   * @example
   * true
   */
  support?: boolean;
  static names(): { [key: string]: string } {
    return {
      instance: 'instance',
      reason: 'reason',
      support: 'support',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      reason: 'string',
      support: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

