// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlashSmsSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
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
  skillGroupIdList?: string[];
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupIdList: 'SkillGroupIdList',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      skillGroupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.skillGroupIdList)) {
      $dara.Model.validateArray(this.skillGroupIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

