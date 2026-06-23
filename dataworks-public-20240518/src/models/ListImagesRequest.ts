// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The accessibility:
   * 
   * - Public: Visible to all members.
   * 
   * - Private: Visible only to the creator.
   * 
   * @example
   * Public
   */
  accessibility?: string;
  /**
   * @remarks
   * The image name, used for fuzzy search.
   * 
   * @example
   * image
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the image is an official image.
   */
  official?: boolean;
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
   * The list of workspace IDs.
   */
  projectIds?: number[];
  /**
   * @remarks
   * The list of image provider types.
   */
  providerTypes?: string[];
  /**
   * @remarks
   * Specifies whether to search all images.
   */
  searchAll?: boolean;
  /**
   * @remarks
   * The list of sort fields. You can sort by scheduled time, start time, and other fields. The format is "SortField+SortOrder(Desc/Asc)", where Asc is the default and can be omitted. Valid values of sort fields:
   * 
   * - CreateTime (Desc/Asc): The creation time.
   * 
   * - Name (Desc/Asc): The image name.
   *   Default value: CreateTime Asc.
   * 
   * @example
   * CreatedTime Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The list of image publish stages to query.
   */
  stages?: string[];
  /**
   * @remarks
   * The list of image statuses to query.
   */
  statuses?: string[];
  /**
   * @remarks
   * The list of supported modules.
   */
  supportedModules?: string[];
  /**
   * @remarks
   * The list of supported task types.
   */
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

