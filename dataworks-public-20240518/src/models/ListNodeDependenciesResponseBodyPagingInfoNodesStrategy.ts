// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeDependenciesResponseBodyPagingInfoNodesStrategy extends $dara.Model {
  /**
   * @remarks
   * The instance generation mode. Valid values:
   * 
   * *   T+1
   * *   Immediately
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * The rerun interval after a failure. Unit: milliseconds.
   * 
   * @example
   * 180000
   */
  rerunInterval?: number;
  /**
   * @remarks
   * The rerun mode. Valid values:
   * 
   * *   Allowed
   * *   Denied
   * *   FailureAllowed
   * 
   * @example
   * Allowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of reruns after a failure.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      instanceMode: 'InstanceMode',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMode: 'string',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

