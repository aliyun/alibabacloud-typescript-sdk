// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileTypeStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The environment of the workspace. Valid values: PROD and DEV. The value PROD indicates the production environment. The value DEV indicates the development environment.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the DataWorks console and go to the Workspace Management page to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123465
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

