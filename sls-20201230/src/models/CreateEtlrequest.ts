// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ETLConfiguration } from "./Etlconfiguration";


export class CreateETLRequest extends $dara.Model {
  /**
   * @remarks
   * The detailed configuration of the data transformation job.
   * 
   * This parameter is required.
   */
  configuration?: ETLConfiguration;
  /**
   * @remarks
   * The description of the data transformation job.
   * 
   * @example
   * this is ETL
   */
  description?: string;
  /**
   * @remarks
   * The display name of the data transformation job.
   * 
   * This parameter is required.
   * 
   * @example
   * sls-test-etl
   */
  displayName?: string;
  /**
   * @remarks
   * The job name. The naming convention is as follows:
   * 
   * The job name must be unique within the project.
   * 
   * - The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * - The name must start and end with a lowercase letter or a digit.
   * 
   * - The length must be 2 to 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * etl-123456
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
      configuration: ETLConfiguration,
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

