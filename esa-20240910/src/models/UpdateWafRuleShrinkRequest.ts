// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWafRuleShrinkRequest extends $dara.Model {
  configShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  siteVersion?: number;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configShrink: 'Config',
      id: 'Id',
      position: 'Position',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configShrink: 'string',
      id: 'number',
      position: 'number',
      siteId: 'number',
      siteVersion: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

