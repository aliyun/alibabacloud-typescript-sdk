// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesShrinkRequest extends $dara.Model {
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
  projectIdsShrink?: string;
  /**
   * @remarks
   * The list of image reference data types.
   */
  providerTypesShrink?: string;
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
  stagesShrink?: string;
  /**
   * @remarks
   * The list of image statuses to query.
   */
  statusesShrink?: string;
  /**
   * @remarks
   * The list of supported modules.
   */
  supportedModulesShrink?: string;
  /**
   * @remarks
   * The list of supported task types.
   */
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

