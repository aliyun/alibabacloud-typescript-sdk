// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PickOutboundNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * Called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1388888****
   */
  calledNumber?: string;
  /**
   * @remarks
   * The desired quantity of selectable numbers to return. Default is 1.
   * 
   * @example
   * 1
   */
  count?: number;
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
   * A collection of skill group IDs, formatted as a JSON array string. Each array element is a skill group ID. Numbers are associated with skill groups, and this parameter specifies from which skill groups to select numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * ["skillgroup@ccc-test"]
   */
  skillGroupIdList?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      count: 'Count',
      instanceId: 'InstanceId',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      count: 'number',
      instanceId: 'string',
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

