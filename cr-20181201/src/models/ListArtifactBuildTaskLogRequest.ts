// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactBuildTaskLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the artifact build task.
   * 
   * This parameter is required.
   * 
   * @example
   * i2a-1yu****
   */
  buildTaskId?: string;
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-shac42yvqzvq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. If you specify a value greater than 100 for this parameter, the system reports a parameter error or uses 100 as the maximum value.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      buildTaskId: 'BuildTaskId',
      instanceId: 'InstanceId',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTaskId: 'string',
      instanceId: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

