// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWafRulesetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
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
      id: 'Id',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

