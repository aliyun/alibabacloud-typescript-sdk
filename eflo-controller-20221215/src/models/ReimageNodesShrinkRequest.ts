// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReimageNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i15dfa12e8f27c44f4a006c2c8bb
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to allow skipping failed nodes. Default value: False.
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * The nodes.
   */
  nodesShrink?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * #!/bin/sh
   * echo "Hello World. The time is now $(date -R)!" | tee /root/userdata_test.txt
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodesShrink: 'Nodes',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      nodesShrink: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

