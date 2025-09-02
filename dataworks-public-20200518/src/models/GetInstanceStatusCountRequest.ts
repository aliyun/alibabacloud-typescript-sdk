// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceStatusCountRequest extends $dara.Model {
  /**
   * @remarks
   * The data timestamp of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-01-01
   */
  bizDate?: string;
  /**
   * @remarks
   * The runtime environment. Valid values: PROD and DEV.
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
      bizDate: 'BizDate',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
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

