// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaxComputeExportConfiguration } from "./MaxComputeExportConfiguration";


export class MaxComputeExport extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: MaxComputeExportConfiguration;
  /**
   * @example
   * 1714284115
   */
  createTime?: number;
  /**
   * @example
   * odpsexport-demo
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * odpsexport-test
   */
  displayName?: string;
  /**
   * @example
   * 1714284589
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * export-general-1714033191-584993-hcl
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

