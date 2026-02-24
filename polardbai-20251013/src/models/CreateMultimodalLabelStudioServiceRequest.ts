// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultimodalLabelStudioServiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  datasetIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * *****
   */
  password?: string;
  /**
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * service-admin@db4ai.com
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      datasetIds: 'DatasetIds',
      password: 'Password',
      sourceRegionId: 'SourceRegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasetIds: { 'type': 'array', 'itemType': 'string' },
      password: 'string',
      sourceRegionId: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasetIds)) {
      $dara.Model.validateArray(this.datasetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

