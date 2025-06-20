// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBlockEventResponseBodyDataDataInfoEventTimesRule extends $dara.Model {
  level1?: string;
  level2?: string;
  level3?: string;
  level4?: string;
  level5?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      level1: 'Level1',
      level2: 'Level2',
      level3: 'Level3',
      level4: 'Level4',
      level5: 'Level5',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level1: 'string',
      level2: 'string',
      level3: 'string',
      level4: 'string',
      level5: 'string',
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

