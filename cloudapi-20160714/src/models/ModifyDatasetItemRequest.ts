// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDatasetItemRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * a25a6589b2584ff490e891cc********
   */
  datasetId?: string;
  /**
   * @remarks
   * The ID of the data entry.
   * 
   * This parameter is required.
   * 
   * @example
   * 5045****
   */
  datasetItemId?: string;
  /**
   * @remarks
   * The description of the data entry. The description cannot exceed 180 characters in length.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The time in UTC when the data entry expires. The time is in the **yyyy-MM-ddTHH:mm:ssZ** format.
   * 
   * @example
   * 2022-09-22T12:00:00Z
   */
  expiredTime?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetItemId: 'DatasetItemId',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      datasetItemId: 'string',
      description: 'string',
      expiredTime: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

