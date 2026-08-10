// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOpenedAccessLogInstancesResponseBodySlsConfigStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether log analysis is enabled for the instance. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The instance ID of Anti-DDoS Origin.
   * 
   * @example
   * ddosbgp-cn-m7r1zce2****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenedAccessLogInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4DB64811-70A1-41C9-A0CE-CD8B260ED551
   */
  requestId?: string;
  /**
   * @remarks
   * The log analysis configurations of Anti-DDoS Origin instances.
   */
  slsConfigStatus?: ListOpenedAccessLogInstancesResponseBodySlsConfigStatus[];
  /**
   * @remarks
   * The number of results returned, which is the number of Anti-DDoS Origin instances that have log analysis enabled.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsConfigStatus: 'SlsConfigStatus',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsConfigStatus: { 'type': 'array', 'itemType': ListOpenedAccessLogInstancesResponseBodySlsConfigStatus },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.slsConfigStatus)) {
      $dara.Model.validateArray(this.slsConfigStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

