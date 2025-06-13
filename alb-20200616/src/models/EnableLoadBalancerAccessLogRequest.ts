// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableLoadBalancerAccessLogRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ALB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-bd6oylbckp6k9x****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The project to which the access log is shipped.
   * 
   * This parameter is required.
   * 
   * @example
   * sls-setter
   */
  logProject?: string;
  /**
   * @remarks
   * The Logstore to which the access log is shipped.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  logStore?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      logProject: 'LogProject',
      logStore: 'LogStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      logProject: 'string',
      logStore: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

