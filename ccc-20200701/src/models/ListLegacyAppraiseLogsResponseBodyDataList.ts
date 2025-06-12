// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLegacyAppraiseLogsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 3786929579
   */
  acid?: string;
  /**
   * @example
   * Outbound
   */
  contactType?: string;
  /**
   * @example
   * 10505
   */
  id?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * {}
   */
  keyMarkRelation?: string;
  note?: string;
  parentNote?: string;
  /**
   * @example
   * 2
   */
  pressKey?: string;
  /**
   * @example
   * 28036411123456****
   */
  ramId?: string;
  /**
   * @example
   * test@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * 2021-12-03T10:15:30
   */
  statisticDate?: string;
  /**
   * @example
   * Launch
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      contactType: 'ContactType',
      id: 'Id',
      instanceId: 'InstanceId',
      keyMarkRelation: 'KeyMarkRelation',
      note: 'Note',
      parentNote: 'ParentNote',
      pressKey: 'PressKey',
      ramId: 'RamId',
      skillGroupId: 'SkillGroupId',
      statisticDate: 'StatisticDate',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      contactType: 'string',
      id: 'number',
      instanceId: 'string',
      keyMarkRelation: 'string',
      note: 'string',
      parentNote: 'string',
      pressKey: 'string',
      ramId: 'string',
      skillGroupId: 'string',
      statisticDate: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

