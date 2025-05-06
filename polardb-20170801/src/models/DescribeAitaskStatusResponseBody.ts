// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAITaskStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the database account that is used to connect to the AI nodes in the cluster.
   * 
   * @example
   * testacc
   */
  accountName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-xxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B7BFB11-C077-4FE3-B051-F69CEB******
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the PolarDB for AI feature. Valid values:
   * 
   * *   **1**: enabled.
   * *   **2**: disabled.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The description of the status of the PolarDB for AI feature.
   * 
   * @example
   * Closed State
   */
  statusName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      status: 'Status',
      statusName: 'StatusName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      requestId: 'string',
      status: 'string',
      statusName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

