// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesRequest extends $dara.Model {
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
  projectIds?: number[];
  providerTypes?: string[];
  searchAll?: boolean;
  /**
   * @example
   * CreatedTime Desc
   */
  sortBy?: string;
  stages?: string[];
  statuses?: string[];
  supportedModules?: string[];
  supportedTaskTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      name: 'Name',
      official: 'Official',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectIds: 'ProjectIds',
      providerTypes: 'ProviderTypes',
      searchAll: 'SearchAll',
      sortBy: 'SortBy',
      stages: 'Stages',
      statuses: 'Statuses',
      supportedModules: 'SupportedModules',
      supportedTaskTypes: 'SupportedTaskTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      name: 'string',
      official: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      projectIds: { 'type': 'array', 'itemType': 'number' },
      providerTypes: { 'type': 'array', 'itemType': 'string' },
      searchAll: 'boolean',
      sortBy: 'string',
      stages: { 'type': 'array', 'itemType': 'string' },
      statuses: { 'type': 'array', 'itemType': 'string' },
      supportedModules: { 'type': 'array', 'itemType': 'string' },
      supportedTaskTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.projectIds)) {
      $dara.Model.validateArray(this.projectIds);
    }
    if(Array.isArray(this.providerTypes)) {
      $dara.Model.validateArray(this.providerTypes);
    }
    if(Array.isArray(this.stages)) {
      $dara.Model.validateArray(this.stages);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    if(Array.isArray(this.supportedModules)) {
      $dara.Model.validateArray(this.supportedModules);
    }
    if(Array.isArray(this.supportedTaskTypes)) {
      $dara.Model.validateArray(this.supportedTaskTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

