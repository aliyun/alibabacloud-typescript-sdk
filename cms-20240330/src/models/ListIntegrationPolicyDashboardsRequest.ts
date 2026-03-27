// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyDashboardsRequest extends $dara.Model {
  /**
   * @remarks
   * Addon Name.
   * 
   * @example
   * cs-default
   */
  addonName?: string;
  /**
   * @remarks
   * Query Language
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * Component Scenario.
   * 
   * @example
   * databse
   */
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'addonName',
      language: 'language',
      scene: 'scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      language: 'string',
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

