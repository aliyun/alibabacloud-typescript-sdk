// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportJobsShrinkRequest extends $dara.Model {
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
   * The type of jobs to export. The default value is 1.
   * 
   * @example
   * 1
   */
  exportJobType?: number;
  /**
   * @remarks
   * A list of job IDs.
   */
  jobIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      exportJobType: 'ExportJobType',
      jobIdsShrink: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      exportJobType: 'number',
      jobIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

