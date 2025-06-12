// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PickOutboundNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1388888****
   */
  calledNumber?: string;
  /**
   * @example
   * 1
   */
  count?: number;
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

