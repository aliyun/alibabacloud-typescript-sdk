// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaxComputeExportConfiguration } from "./MaxComputeExportConfiguration";


export class MaxComputeExport extends $dara.Model {
  /**
   * @remarks
   * The setting of the MaxCompute data shipping job.
   * 
   * This parameter is required.
   */
  configuration?: MaxComputeExportConfiguration;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1718787534
   */
  createTime?: number;
  /**
   * @remarks
   * job description
   * 
   * @example
   * MaxComputeExport
   */
  description?: string;
  /**
   * @remarks
   * job displayName
   * 
   * This parameter is required.
   * 
   * @example
   * MaxComputeExport
   */
  displayName?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 1718787681
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * job name
   * 
   * This parameter is required.
   * 
   * @example
   * MaxComputeExport
   */
  name?: string;
  /**
   * @remarks
   * The ID of the MaxCompute data shipping job.
   * 
   * @example
   * c7f01719d9feb105fc9d8df92af62010
   */
  scheduleId?: string;
  /**
   * @remarks
   * The status of the MaxCompute data shipping job.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      lastModifiedTime: 'lastModifiedTime',
      name: 'name',
      scheduleId: 'scheduleId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: MaxComputeExportConfiguration,
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      lastModifiedTime: 'number',
      name: 'string',
      scheduleId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

