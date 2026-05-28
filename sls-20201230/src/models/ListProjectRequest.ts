// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectRequest extends $dara.Model {
  description?: string;
  fetchQuota?: boolean;
  /**
   * @remarks
   * The line from which the query starts. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * ali-test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzf******sxby
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 100. This operation can return up to 500 projects.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      fetchQuota: 'fetchQuota',
      offset: 'offset',
      projectName: 'projectName',
      resourceGroupId: 'resourceGroupId',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fetchQuota: 'boolean',
      offset: 'number',
      projectName: 'string',
      resourceGroupId: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

