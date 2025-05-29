// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHealthStatusResponseBodyStatus } from "./DescribeHealthStatusResponseBodyStatus";


export class DescribeHealthStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of instance.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D97B4191-104D-10CE-8BC5-53**********
   */
  requestId?: string;
  /**
   * @remarks
   * The queried performance metrics. Each performance metric consists of the parameter name, status, and metric value. The metric information is returned only for the performance parameters specified by **Key**. For example, if you set **Key** to **adbpg_status**, only the metric information of **adbpg_status** is returned.
   * 
   * For more information about performance parameters, see [Performance parameters](https://help.aliyun.com/document_detail/86943.html).
   * 
   * @example
   * {"node_master_connection_status":{"Status":"healthy","Value":1.6}}
   */
  status?: DescribeHealthStatusResponseBodyStatus;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      status: DescribeHealthStatusResponseBodyStatus,
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

