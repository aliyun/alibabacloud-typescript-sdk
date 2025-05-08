// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRoutinesResponseBodyRoutines extends $dara.Model {
  createTime?: string;
  description?: string;
  routineName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      routineName: 'RoutineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      routineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

