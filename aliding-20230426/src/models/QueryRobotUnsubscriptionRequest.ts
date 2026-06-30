// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRobotUnsubscriptionRequest extends $dara.Model {
  pageNo?: number;
  pageSize?: number;
  robotCode?: string;
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      robotCode: 'RobotCode',
      sceneCode: 'SceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      robotCode: 'string',
      sceneCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

