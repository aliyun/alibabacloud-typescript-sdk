// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAiccsRobotResponseBodyData extends $dara.Model {
  atProfession?: string;
  atSence?: string;
  /**
   * @example
   * 123456
   */
  id?: number;
  robotName?: string;
  /**
   * @example
   * CUSTOM
   */
  robotType?: string;
  static names(): { [key: string]: string } {
    return {
      atProfession: 'AtProfession',
      atSence: 'AtSence',
      id: 'Id',
      robotName: 'RobotName',
      robotType: 'RobotType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atProfession: 'string',
      atSence: 'string',
      id: 'number',
      robotName: 'string',
      robotType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

