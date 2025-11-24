// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CCMVersionsValue extends $dara.Model {
  /**
   * @remarks
   * The status of the query. Valid values:
   * 
   * *   `time_out`: The query times out.
   * *   `failed`: The query fails.
   * *   `Empty string`: The query is successful.
   * 
   * @example
   * time_out
   */
  queryState?: string;
  /**
   * @remarks
   * The CCM version.
   * 
   * @example
   * v2.0.1
   */
  version?: string;
  /**
   * @remarks
   * Indicates whether Classic Load Balancer (CLB) graceful shutdown is supported.
   * 
   * @example
   * true
   */
  SLBGracefulDrainSupported?: boolean;
  /**
   * @remarks
   * The ID of the cluster instance on the data plane.
   * 
   * @example
   * cfbb81b9b51a44b299349xxxxxxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The additional information that is returned when the query fails. This parameter is empty if the query is successful.
   * 
   * @example
   * timeout error
   */
  message?: string;
  /**
   * @deprecated
   */
  SLBGracefulDrainSupport?: boolean;
  static names(): { [key: string]: string } {
    return {
      queryState: 'QueryState',
      version: 'Version',
      SLBGracefulDrainSupported: 'SLBGracefulDrainSupported',
      clusterId: 'ClusterId',
      message: 'Message',
      SLBGracefulDrainSupport: 'SLBGracefulDrainSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryState: 'string',
      version: 'string',
      SLBGracefulDrainSupported: 'boolean',
      clusterId: 'string',
      message: 'string',
      SLBGracefulDrainSupport: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

