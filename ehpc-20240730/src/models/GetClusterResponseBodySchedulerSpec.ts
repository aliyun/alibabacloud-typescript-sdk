// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterResponseBodySchedulerSpec extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the topology awareness feature is enabled for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableTopologyAwareness?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableTopologyAwareness: 'EnableTopologyAwareness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTopologyAwareness: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

