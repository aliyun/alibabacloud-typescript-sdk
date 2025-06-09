// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OSSExportConfiguration } from "./OssexportConfiguration";


export class OSSExport extends $dara.Model {
  configuration?: OSSExportConfiguration;
  /**
   * @example
   * 1714284025
   */
  createTime?: number;
  /**
   * @example
   * job-test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-demo
   */
  displayName?: string;
  /**
   * @example
   * 1714284115
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-1714109458-123456
   */
  name?: string;
  /**
   * @example
   * c7f01719d9feb105fc9d8df92af62010
   */
  scheduleId?: string;
  /**
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
      configuration: OSSExportConfiguration,
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

