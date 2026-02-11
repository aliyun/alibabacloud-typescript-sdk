// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelingProjectRequest extends $dara.Model {
  /**
   * @remarks
   * Instance specification.
   * 
   * This parameter is required.
   * 
   * @example
   * SECURE_ENV_LITE
   */
  instanceSpec?: string;
  /**
   * @remarks
   * Project name
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  projectName?: string;
  /**
   * @remarks
   * Remark.
   * 
   * @example
   * remark
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSpec: 'InstanceSpec',
      projectName: 'ProjectName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpec: 'string',
      projectName: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

