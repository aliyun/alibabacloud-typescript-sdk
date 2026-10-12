// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The accessibility of the image. Valid values:
   * - Public: The image is visible to all users.
   * - Private: The image is visible only to the creator.
   * 
   * @example
   * Public
   */
  accessibility?: string;
  /**
   * @remarks
   * The image name used for fuzzy match.
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
   * The number of entries per page.
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
   * The list of image reference data types.
   */
  providerTypes?: string[];
  /**
   * @remarks
   * Specifies whether to search for all images.
   */
  searchAll?: boolean;
  /**
   * @remarks
   * The list of sort fields. Fields such as scheduled time and start time are supported. The format is "sort field + sort order (Desc/Asc)". Asc can be omitted. Valid values for sort fields:
   * - CreateTime (Desc/Asc): creation time.
   * - Name (Desc/Asc): image name.
   * Default value: CreateTime Asc.
   * 
   * @example
   * CreatedTime Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The list of image publishing stages to query.
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

