// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a395011f-a247-400f-bc69-28796749fd52
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  /**
   * @example
   * 10
   */
  concurrency?: number;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
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

