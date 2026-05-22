// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSiteDeliveryTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  method?: string;
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      method: 'Method',
      siteId: 'SiteId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      siteId: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

