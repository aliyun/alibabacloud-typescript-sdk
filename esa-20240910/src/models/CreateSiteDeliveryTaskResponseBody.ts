// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteDeliveryTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data center. Valid values:
   * - **cn**: The Chinese mainland.
   * - **oversea**: Outside the Chinese mainland.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9358E852-992D-5BC7-8BD7-975CA02773A8
   */
  requestId?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to query the site ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * er-oss
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      dataCenter: 'DataCenter',
      requestId: 'RequestId',
      siteId: 'SiteId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCenter: 'string',
      requestId: 'string',
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

