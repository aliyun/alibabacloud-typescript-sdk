// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MqGroup } from "./MqGroup";


export class LaneMqGroupInfo extends $dara.Model {
  allowClean?: boolean;
  laneId?: number;
  laneName?: string;
  mqGroups?: MqGroup;
  static names(): { [key: string]: string } {
    return {
      allowClean: 'allowClean',
      laneId: 'laneId',
      laneName: 'laneName',
      mqGroups: 'mqGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowClean: 'boolean',
      laneId: 'number',
      laneName: 'string',
      mqGroups: MqGroup,
    };
  }

  validate() {
    if(this.mqGroups && typeof (this.mqGroups as any).validate === 'function') {
      (this.mqGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

