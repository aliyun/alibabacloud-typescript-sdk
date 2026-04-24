// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesShrinkRequest extends $dara.Model {
  /**
   * @example
   * Public
   */
  accessibility?: string;
  /**
   * @example
   * image
   */
  name?: string;
  official?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  projectIdsShrink?: string;
  providerTypesShrink?: string;
  searchAll?: boolean;
  /**
   * @example
   * CreatedTime Desc
   */
  sortBy?: string;
  stagesShrink?: string;
  statusesShrink?: string;
  supportedModulesShrink?: string;
  supportedTaskTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      name: 'Name',
      official: 'Official',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectIdsShrink: 'ProjectIds',
      providerTypesShrink: 'ProviderTypes',
      searchAll: 'SearchAll',
      sortBy: 'SortBy',
      stagesShrink: 'Stages',
      statusesShrink: 'Statuses',
      supportedModulesShrink: 'SupportedModules',
      supportedTaskTypesShrink: 'SupportedTaskTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      name: 'string',
      official: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      projectIdsShrink: 'string',
      providerTypesShrink: 'string',
      searchAll: 'boolean',
      sortBy: 'string',
      stagesShrink: 'string',
      statusesShrink: 'string',
      supportedModulesShrink: 'string',
      supportedTaskTypesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

