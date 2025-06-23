// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortRequest extends $dara.Model {
  /**
   * @remarks
   * The forwarding port to query. Valid values: **0** to **65535**.
   * 
   * @example
   * 55
   */
  frontendPort?: number;
  /**
   * @remarks
   * The type of the forwarding protocol to query. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * @example
   * tcp
   */
  frontendProtocol?: string;
  /**
   * @remarks
   * The ID of the instance to query.
   * 
   * > You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-7e225i41****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. For example, if you want to obtain results on the first page, set the value to **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      frontendPort: 'FrontendPort',
      frontendProtocol: 'FrontendProtocol',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendPort: 'number',
      frontendProtocol: 'string',
      instanceId: 'string',
      pageNumber: 'number',
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

