// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaxComputeExportConfiguration } from "./MaxComputeExportConfiguration";


export class CreateMaxComputeExportRequest extends $dara.Model {
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
  /**
   * @remarks
   * The unique identifier of the MaxCompute data shipping job.
   * 
   * This parameter is required.
   * 
   * @example
   * export-mc-1234567890-123456
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: MaxComputeExportConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
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

