// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudSiemEventsResponseBodyDataResponseDataAttckStages extends $dara.Model {
  alertNum?: number;
  tacticId?: string;
  tacticName?: string;
  static names(): { [key: string]: string } {
    return {
      alertNum: 'AlertNum',
      tacticId: 'TacticId',
      tacticName: 'TacticName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNum: 'number',
      tacticId: 'string',
      tacticName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

