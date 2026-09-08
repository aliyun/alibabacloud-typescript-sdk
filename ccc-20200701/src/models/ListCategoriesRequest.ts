// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCategoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ticket category. Specify this parameter to return information about the subcategories of the specified category. If you leave this parameter empty, information about all categories in the instance is returned.
   * 
   * @example
   * 43c2671b-***-***-86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The category type.
   * 
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

