// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReConfigApplicationRequest extends $dara.Model {
  /**
   * @example
   * Q2P4O9YSOKCT35L9
   */
  appId?: string;
  /**
   * @example
   * {"${instance_type}":"ecs.c6.3xlarge"}
   */
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      variables: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

