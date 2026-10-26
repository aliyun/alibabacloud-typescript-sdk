// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCalculationJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The scene ID. You can call the [ListScenes](https://help.aliyun.com/document_detail/2402581.html) operation to query the scene ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - Success: Succeeded.
   * - Failure: Failed.
   * - Initializing: Initializing.
   * - Running: Running.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sceneId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

