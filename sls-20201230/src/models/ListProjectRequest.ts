// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * Specifies whether to retrieve the quota information for the project.
   * 
   * @example
   * false
   */
  fetchQuota?: boolean;
  /**
   * @remarks
   * The line from which the query starts. The default value is 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The name of the project. Fuzzy queries are supported.
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
   * The number of rows to return on each page for a paged query. The default value is 100. A maximum of 500 projects can be returned.
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

