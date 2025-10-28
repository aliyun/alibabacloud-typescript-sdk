// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppInstanceListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the ListApplication operation to query the ID of the application. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 93fdd228-*****-ed2ae98de18d
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether to return the information about the node in which the pod resides.
   * 
   * *   `true`: returns the information about the node in which the pod resides
   * *   `false`: does not return the information about the node in which the pod resides
   * 
   * @example
   * true
   */
  withNodeInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      withNodeInfo: 'WithNodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      withNodeInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

