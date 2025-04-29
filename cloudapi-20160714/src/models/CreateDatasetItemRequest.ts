// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetItemRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a25a6589b2584ff490e891cc********
   */
  datasetId?: string;
  description?: string;
  /**
   * @example
   * 2022-09-22T12:00:00Z
   */
  expiredTime?: string;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 106.43.XXX.XXX
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      securityToken: 'SecurityToken',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      description: 'string',
      expiredTime: 'string',
      securityToken: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

