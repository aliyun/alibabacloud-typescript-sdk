// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOpenedAccessLogInstancesResponseBodySlsConfigStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether log analysis was enabled for the Anti-DDoS Origin instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance.
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
   * The request ID.
   * 
   * @example
   * 4DB64811-70A1-41C9-A0CE-CD8B260ED551
   */
  requestId?: string;
  /**
   * @remarks
   * The configuration of log analysis for the Anti-DDoS Origin instances.
   */
  slsConfigStatus?: ListOpenedAccessLogInstancesResponseBodySlsConfigStatus[];
  /**
   * @remarks
   * The number of the Anti-DDoS Origin instances for which log analysis was enabled.
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

