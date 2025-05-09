// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * The type of the application.
   * 
   * @example
   * DingTalk
   */
  applicationType?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2021-09-07T09:09:59Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Application
   */
  description?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * MyApplication
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags added to the application.
   * 
   * @example
   * {"k1": "v1","k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The time when the application was updated.
   * 
   * @example
   * 2021-09-07T09:09:59Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      createDate: 'CreateDate',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      createDate: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateDate: 'string',
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

