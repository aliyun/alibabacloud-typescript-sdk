// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultimodalLabelStudioServiceShrinkRequest extends $dara.Model {
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
  datasetIdsShrink?: string;
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
      datasetIdsShrink: 'DatasetIds',
      password: 'Password',
      sourceRegionId: 'SourceRegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasetIdsShrink: 'string',
      password: 'string',
      sourceRegionId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

