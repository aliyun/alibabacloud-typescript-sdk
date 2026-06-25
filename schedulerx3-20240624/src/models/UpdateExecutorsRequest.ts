// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExecutorsRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The Cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-a1804a3226d
   */
  clusterId?: string;
  /**
   * @remarks
   * The Worker type.
   * 
   * @example
   * k8s_service
   */
  workerType?: string;
  /**
   * @remarks
   * A JSON-formatted string that contains a list of Workers.
   * 
   * @example
   * [{"cluster":"xxxxx","namespace":"xxxxx","service":"xxxxx"}]
   */
  workers?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      workerType: 'WorkerType',
      workers: 'Workers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      workerType: 'string',
      workers: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

