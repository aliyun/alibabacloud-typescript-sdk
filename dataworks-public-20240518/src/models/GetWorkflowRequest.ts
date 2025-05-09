// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The environment of the workspace. Valid values:
   * 
   * *   Prod: production environment
   * *   Dev: development environment
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

