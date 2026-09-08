// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillGroupsRequest extends $dara.Model {
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
   * The media type. The default is AUDIO. Other options include CHAT and VIDEO.
   * 
   * @example
   * Audio
   */
  mediaType?: string;
  /**
   * @remarks
   * The page number, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The paging size, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Performs fuzzy matching based on the skill group name or display name. This parameter is optional and defaults to empty, which means no filtering is applied.
   * 
   * @example
   * 测试技能组
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

