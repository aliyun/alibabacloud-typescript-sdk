// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCommonLogDetailResponseBodyLogDetail } from "./GetCommonLogDetailResponseBodyLogDetail";


export class GetCommonLogDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The action name.
   * 
   * @example
   * CreateCluster
   */
  action?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-abc***
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the logs.
   */
  logDetail?: GetCommonLogDetailResponseBodyLogDetail[];
  /**
   * @remarks
   * The log type.
   * 
   * @example
   * operation
   */
  logType?: string;
  /**
   * @remarks
   * The account ID of the operator.
   * 
   * @example
   * 239***
   */
  operatorUid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 464E9919-D04F-4D1D-B375-15989492****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 137***
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      clusterId: 'ClusterId',
      logDetail: 'LogDetail',
      logType: 'LogType',
      operatorUid: 'OperatorUid',
      requestId: 'RequestId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clusterId: 'string',
      logDetail: { 'type': 'array', 'itemType': GetCommonLogDetailResponseBodyLogDetail },
      logType: 'string',
      operatorUid: 'string',
      requestId: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logDetail)) {
      $dara.Model.validateArray(this.logDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

