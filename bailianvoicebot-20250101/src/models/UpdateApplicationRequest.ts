// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a395011f-a247-400f-bc69-28796749fd52
   */
  applicationId?: string;
  /**
   * @remarks
   * The Model Studio workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  /**
   * @remarks
   * The concurrency setting.
   * 
   * @example
   * 10
   */
  concurrency?: number;
  /**
   * @remarks
   * The application\\"s new description.
   * 
   * @example
   * 描述一下这个应用
   */
  description?: string;
  /**
   * @remarks
   * The new name for the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试001
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      businessUnitId: 'BusinessUnitId',
      concurrency: 'Concurrency',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      businessUnitId: 'string',
      concurrency: 'number',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

