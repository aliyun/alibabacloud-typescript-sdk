// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSiteDeliveryTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the delivery task.
   * 
   * This parameter is required.
   * 
   * @example
   * online
   */
  method?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The name of the delivery task.
   * 
   * This parameter is required.
   * 
   * @example
   * cdn-test-task
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

