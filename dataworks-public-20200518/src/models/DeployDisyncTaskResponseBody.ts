// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployDISyncTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason for the failure to publish a data integration synchronization task.
   * 
   * If the data integration synchronization task is published successfully, the return value of this parameter is empty.
   * 
   * @example
   * submit and deploy fail.
   */
  message?: string;
  /**
   * @remarks
   * The cause of the failure to deploy the real-time synchronization node or data synchronization solution.
   * 
   * If the real-time synchronization node or data synchronization solution is deployed, the value null is returned.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDISyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the real-time synchronization node or data synchronization solution is deployed. Valid values:
   * 
   * *   success: The real-time synchronization node or data synchronization solution is deployed.
   * *   fail: The real-time synchronization node or data synchronization solution fails to be deployed.
   */
  data?: DeployDISyncTaskResponseBodyData;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 0bc1411515937635973****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the request. You can query logs and troubleshoot issues based on the ID.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeployDISyncTaskResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

