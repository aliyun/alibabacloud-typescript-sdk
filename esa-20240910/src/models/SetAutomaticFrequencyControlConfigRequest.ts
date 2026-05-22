// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAutomaticFrequencyControlConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  actionType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enable?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  level?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      enable: 'Enable',
      level: 'Level',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      enable: 'string',
      level: 'string',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

