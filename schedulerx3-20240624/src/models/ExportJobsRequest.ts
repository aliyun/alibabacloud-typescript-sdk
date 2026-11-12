// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportJobsRequest extends $dara.Model {
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
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The export task type. Default value: 1.
   * 
   * @example
   * 1
   */
  exportJobType?: number;
  /**
   * @remarks
   * The list of task IDs.
   */
  jobIds?: number[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      exportJobType: 'ExportJobType',
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      exportJobType: 'number',
      jobIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.jobIds)) {
      $dara.Model.validateArray(this.jobIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

