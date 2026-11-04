// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPictureSearchAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Minimum value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * You can view the **ID** of the current instance on the **Instance Overview** page in the IoT Platform console. If the instance has an ID, you must specify the ID. Otherwise, the call fails.
   * 
   * > If a public instance does not have an ID, refer to [How to obtain an instance ID](https://help.aliyun.com/document_detail/267533.html).
   * 
   * @example
   * iot_instc_pu****_c*-v64********
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 50. Default value: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      iotInstanceId: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

