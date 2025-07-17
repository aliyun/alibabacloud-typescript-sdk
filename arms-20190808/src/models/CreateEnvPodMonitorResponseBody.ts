// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnvPodMonitorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether targets are matched.
   * 
   * @example
   * Match successful.
   */
  matchedMsg?: string;
  /**
   * @remarks
   * The number of matched targets.
   * 
   * @example
   * 1
   */
  matchedTargetCount?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * arms-prom
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the created PodMonitor.
   * 
   * @example
   * arms-admin-pm1
   */
  podMonitorName?: string;
  static names(): { [key: string]: string } {
    return {
      matchedMsg: 'MatchedMsg',
      matchedTargetCount: 'MatchedTargetCount',
      namespace: 'Namespace',
      podMonitorName: 'PodMonitorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchedMsg: 'string',
      matchedTargetCount: 'string',
      namespace: 'string',
      podMonitorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvPodMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned result, which indicates whether the operation was successful.
   */
  data?: CreateEnvPodMonitorResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 78901766-3806-4E96-8E47-CFEF59E4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateEnvPodMonitorResponseBodyData,
      message: 'string',
      requestId: 'string',
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

