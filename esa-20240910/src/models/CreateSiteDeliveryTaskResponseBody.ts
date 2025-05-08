// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteDeliveryTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data center. Valid values:
   * 
   * *   cn: the Chinese mainland.
   * *   oversea: outside the Chinese mainland.
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
   * The website ID.[](~~2850189~~)
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The name of the delivery task.
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

