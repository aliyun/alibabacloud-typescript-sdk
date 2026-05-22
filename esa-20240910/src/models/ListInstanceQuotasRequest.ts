// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceQuotasRequest extends $dara.Model {
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  quotaNames?: string;
  /**
   * **if can be null:**
   * false
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      quotaNames: 'QuotaNames',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      quotaNames: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

