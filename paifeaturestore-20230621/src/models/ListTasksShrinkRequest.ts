// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the object. You can call the ListModelFeatures or ListFeatureViews operation to obtain the ID.
   * 
   * @example
   * 4
   */
  objectId?: string;
  /**
   * @remarks
   * The type of the object.
   * 
   * ● `ModelFeature`: a model feature.
   * 
   * ● `FeatureView`: a feature view.
   * 
   * @example
   * ModelFeature
   */
  objectType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the project. You can call the ListProjects operation to obtain the ID.
   * 
   * @example
   * 4
   */
  projectId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * ● `Initializing`: The task is being initialized.
   * 
   * ● `Running`: The task is running.
   * 
   * ● `Success`: The task is successful.
   * 
   * ● `Failure`: The task fails.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task IDs by which to filter tasks.
   */
  taskIdsShrink?: string;
  /**
   * @remarks
   * The task type by which to filter tasks.
   * 
   * @example
   * OfflineToOnline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      status: 'Status',
      taskIdsShrink: 'TaskIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectId: 'string',
      objectType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      status: 'string',
      taskIdsShrink: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

