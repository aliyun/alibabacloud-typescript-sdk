// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRealtimeSkillGroupStatesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  mediaType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
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

