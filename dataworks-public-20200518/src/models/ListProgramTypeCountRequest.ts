// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProgramTypeCountRequest extends $dara.Model {
  /**
   * @remarks
   * The environment of the workspace. Valid values: PROD and DEV.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
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

