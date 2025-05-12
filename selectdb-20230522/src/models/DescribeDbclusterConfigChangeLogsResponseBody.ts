// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterConfigChangeLogsResponseBodyData } from "./DescribeDbclusterConfigChangeLogsResponseBodyData";


export class DescribeDBClusterConfigChangeLogsResponseBody extends $dara.Model {
  /**
   * @example
   * failed
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The information returned.
   */
  data?: DescribeDBClusterConfigChangeLogsResponseBodyData;
  /**
   * @remarks
   * The dynamic code. This parameter is not returned.
   * 
   * @example
   * 0
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic message. This parameter is not returned.
   * 
   * @example
   * An error occurred while processing your request.
   */
  dynamicMessage?: string;
  /**
   * @example
   * F8900A96-67F7-5274-A41B-7722E1ECF8C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: DescribeDBClusterConfigChangeLogsResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

