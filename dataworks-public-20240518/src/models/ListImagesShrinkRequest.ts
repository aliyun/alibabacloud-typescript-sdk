// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesShrinkRequest extends $dara.Model {
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
  projectIdsShrink?: string;
  /**
   * @remarks
   * The list of image provider types.
   */
  providerTypesShrink?: string;
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

