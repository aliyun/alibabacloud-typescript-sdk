// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatasetItemInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * 62b91a790a693238********
   */
  datasetId?: string;
  /**
   * @remarks
   * The ID of the data entry.
   * 
   * @example
   * 5045****
   */
  datasetItemId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The value of the data entry.
   * 
   * @example
   * 106.43.XXX.XXX
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetItemId: 'DatasetItemId',
      securityToken: 'SecurityToken',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      datasetItemId: 'string',
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

