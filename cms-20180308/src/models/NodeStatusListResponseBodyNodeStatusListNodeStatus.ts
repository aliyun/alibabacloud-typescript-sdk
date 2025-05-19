// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeStatusListResponseBodyNodeStatusListNodeStatus extends $dara.Model {
  /**
   * @example
   * true
   */
  autoInstall?: boolean;
  /**
   * @example
   * i-abcdefgh123456
   */
  instanceId?: string;
  /**
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

