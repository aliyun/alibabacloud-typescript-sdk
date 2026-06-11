// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyDashboardsRequest extends $dara.Model {
  /**
   * @remarks
   * The add-on name.
   * 
   * @example
   * cs-default
   */
  addonName?: string;
  /**
   * @remarks
   * The query language.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The component scenario.
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

