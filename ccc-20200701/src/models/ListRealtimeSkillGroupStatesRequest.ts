// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRealtimeSkillGroupStatesRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Media type.
   * 
   * Enumeration values:
   * 
   * AUDIO: Voice.
   * 
   * VIDEO: Video.
   * 
   * CHAT: Message.
   * 
   * ALL: All.
   * 
   * @example
   * AUDIO
   */
  mediaType?: string;
  /**
   * @remarks
   * Page number, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * List of skill group IDs for which data is queried. If not specified, all skill groups under the current instance are queried. The format is a JSON array string, with each array element being a skill group ID.
   * 
   * @example
   * ["skillgroup1@ccc-test", "skillgroup2@ccc-test"]
   */
  skillGroupIdList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mediaType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupIdList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

