// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSiteDeliveryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456******
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
      siteId: 'SiteId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

