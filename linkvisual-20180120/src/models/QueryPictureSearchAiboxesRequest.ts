// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPictureSearchAiboxesRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the image search application instance. You can call the [QueryPictureSearchApps](https://help.aliyun.com/document_detail/206608.html) operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5a502d3fbab8410e8fd4be9037c7****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the instance. 
   * 
   * You can view the instance ID on the **Instance Overview** page in the IoT Platform console.
   * 
   * > If a public instance does not have an ID, see [How to obtain an instance ID](https://help.aliyun.com/document_detail/267533.html).
   * 
   * @example
   * iot_instc_pu****_c*-v64********
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 30. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      currentPage: 'CurrentPage',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
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

