// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelFeaturesResponseBodyModelFeatures extends $dara.Model {
  /**
   * @example
   * 2023-07-04T14:46:22.227+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-04T14:46:22.227+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * label_table_1
   */
  labelTableName?: string;
  /**
   * @example
   * 3
   */
  modelFeatureId?: string;
  /**
   * @example
   * model_feature1
   */
  name?: string;
  /**
   * @example
   * 1231243253****
   */
  owner?: string;
  /**
   * @example
   * 5
   */
  projectId?: string;
  /**
   * @example
   * project1
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labelTableName: 'LabelTableName',
      modelFeatureId: 'ModelFeatureId',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labelTableName: 'string',
      modelFeatureId: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

