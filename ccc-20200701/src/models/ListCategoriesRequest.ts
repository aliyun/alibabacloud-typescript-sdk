// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCategoriesRequest extends $dara.Model {
  /**
   * @example
   * 43c2671b-***-***-86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * Ticket
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      instanceId: 'InstanceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      instanceId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

