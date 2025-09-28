// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyDashboardsRequest extends $dara.Model {
  /**
   * @example
   * cs-default
   */
  addonName?: string;
  /**
   * @example
   * databse
   */
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'addonName',
      scene: 'scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      scene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

