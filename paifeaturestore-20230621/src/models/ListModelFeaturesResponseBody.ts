// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelFeaturesResponseBodyModelFeatures extends $dara.Model {
  /**
   * @remarks
   * The time the model feature was created.
   * 
   * @example
   * 2023-07-04T14:46:22.227+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time the model feature was last updated.
   * 
   * @example
   * 2023-07-04T14:46:22.227+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The label table name.
   * 
   * @example
   * label_table_1
   */
  labelTableName?: string;
  /**
   * @remarks
   * The model feature ID.
   * 
   * @example
   * 3
   */
  modelFeatureId?: string;
  /**
   * @remarks
   * The model feature name.
   * 
   * @example
   * model_feature1
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the owner.
   * 
   * @example
   * 1231243253****
   */
  owner?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 5
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
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

export class ListModelFeaturesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of model features.
   */
  modelFeatures?: ListModelFeaturesResponseBodyModelFeatures[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2CA11923-2A3D-5E5A-8314-E699D2DD15DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of model features.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      modelFeatures: 'ModelFeatures',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelFeatures: { 'type': 'array', 'itemType': ListModelFeaturesResponseBodyModelFeatures },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.modelFeatures)) {
      $dara.Model.validateArray(this.modelFeatures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

