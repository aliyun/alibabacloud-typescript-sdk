// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * my app
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

