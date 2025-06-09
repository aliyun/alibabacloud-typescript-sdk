// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaxComputeExportConfiguration } from "./MaxComputeExportConfiguration";


export class UpdateMaxComputeExportRequest extends $dara.Model {
  /**
   * @remarks
   * The setting of the MaxCompute data shipping job.
   * 
   * This parameter is required.
   */
  configuration?: MaxComputeExportConfiguration;
  /**
   * @remarks
   * The description of the MaxCompute data shipping job.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the MaxCompute data shipping job.
   * 
   * This parameter is required.
   * 
   * @example
   * my-mc-job
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: MaxComputeExportConfiguration,
      description: 'string',
      displayName: 'string',
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

