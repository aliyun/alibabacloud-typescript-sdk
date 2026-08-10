// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The project description, used for filtering.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to retrieve the project quota information.
   * 
   * @example
   * false
   */
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
   * The name of the project. Fuzzy match is supported.
   * 
   * @example
   * ali-test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzf******sxby
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: 100. A maximum of 500 project entries can be returned.
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

