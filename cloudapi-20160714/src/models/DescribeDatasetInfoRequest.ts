// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatasetInfoRequest extends $dara.Model {
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
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
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

