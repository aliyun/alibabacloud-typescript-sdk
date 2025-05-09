// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationResponseBodyApplication extends $dara.Model {
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2021-09-07T09:17:46Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * test application
   */
  description?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * My-Application
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The time when the application was updated.
   * 
   * @example
   * 2021-09-07T10:17:46Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdDate: 'CreatedDate',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdDate: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updatedDate: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

