// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectRequest extends $dara.Model {
  /**
   * @example
   * 5432****
   */
  businessId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234****
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
      id: 'string',
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

