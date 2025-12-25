// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddProjectRequest extends $dara.Model {
  /**
   * @example
   * 5432****
   */
  businessId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
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

