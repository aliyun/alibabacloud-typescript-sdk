// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataResultsValue extends $dara.Model {
  /**
   * @remarks
   * The route ID corresponding to the result, which is the same as the key in results.
   * 
   * @example
   * hr-example001
   */
  routeId?: string;
  /**
   * @remarks
   * For asynchronous publishing, Pending indicates that the request is accepted, and Rejected indicates that the request is rejected before submission. For synchronous publishing, Succeeded indicates that the route is successfully published, and Failed indicates that the publishing failed.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The cause of the route being rejected or failing to be published. This parameter is returned when the status is Rejected or Failed.
   * 
   * @example
   * ErrorType: Conflict, ErrorCode: DeployRouteForbidden, Message: the route  example-route is not allowed to deploy when it\\"s status is Deploying., Params: [example-route Deploying]
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      routeId: 'routeId',
      status: 'status',
      errorMessage: 'errorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeId: 'string',
      status: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

