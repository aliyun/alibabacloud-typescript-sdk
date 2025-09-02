// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClusterConfig } from "./ClusterConfig";


export class ListClusterConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of configurations of cluster modules.
   */
  clusterConfigs?: ClusterConfig[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 101011005
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid.Cluster.ClusterNotFound
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 0000-ABCD-E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterConfigs: 'ClusterConfigs',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfigs: { 'type': 'array', 'itemType': ClusterConfig },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.clusterConfigs)) {
      $dara.Model.validateArray(this.clusterConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

