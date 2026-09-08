// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBriefSkillGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The media type. The default value is AUDIO. Other valid values include CHAT and VIDEO.
   * 
   * @example
   * CHAT
   */
  mediaType?: string;
  /**
   * @remarks
   * The page number for paging, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size for paging, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Perform fuzzy matching based on the skill group name or display name. This parameter is optional and defaults to empty, which means no filtering is applied.
   * 
   * @example
   * skillgroup
   */
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mediaType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

