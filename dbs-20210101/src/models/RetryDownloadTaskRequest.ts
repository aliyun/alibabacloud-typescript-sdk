// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryDownloadTaskRequest extends $dara.Model {
  /**
   * @example
   * dds-example
   */
  clusterName?: string;
  /**
   * @example
   * rm-example
   */
  instanceName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionCode?: string;
  /**
   * @example
   * dt-example
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      instanceName: 'InstanceName',
      regionCode: 'RegionCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      instanceName: 'string',
      regionCode: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

