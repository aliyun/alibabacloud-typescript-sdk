// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOutboundNumbersOfUserRequest extends $dara.Model {
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
   * The page number. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A JSON-formatted list of skill group IDs. If specified, the operation returns outbound numbers for the specified skill groups. If omitted, it returns outbound numbers for all skill groups associated with the agent. Note: The agent must be a member of the specified skill groups.
   * 
   * @example
   * ["skillgroup1@ccc-test","skillgroup2@ccc-test"]
   */
  skillGroupIdList?: string;
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupIdList: 'SkillGroupIdList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupIdList: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

