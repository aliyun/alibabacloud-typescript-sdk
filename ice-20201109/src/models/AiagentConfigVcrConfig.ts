// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentConfigVcrConfigEquipment } from "./AiagentConfigVcrConfigEquipment";
import { AIAgentConfigVcrConfigHeadMotion } from "./AiagentConfigVcrConfigHeadMotion";
import { AIAgentConfigVcrConfigInvalidFrameMotion } from "./AiagentConfigVcrConfigInvalidFrameMotion";
import { AIAgentConfigVcrConfigPeopleCount } from "./AiagentConfigVcrConfigPeopleCount";
import { AIAgentConfigVcrConfigStillFrameMotion } from "./AiagentConfigVcrConfigStillFrameMotion";


export class AIAgentConfigVcrConfig extends $dara.Model {
  equipment?: AIAgentConfigVcrConfigEquipment;
  headMotion?: AIAgentConfigVcrConfigHeadMotion;
  invalidFrameMotion?: AIAgentConfigVcrConfigInvalidFrameMotion;
  peopleCount?: AIAgentConfigVcrConfigPeopleCount;
  stillFrameMotion?: AIAgentConfigVcrConfigStillFrameMotion;
  static names(): { [key: string]: string } {
    return {
      equipment: 'Equipment',
      headMotion: 'HeadMotion',
      invalidFrameMotion: 'InvalidFrameMotion',
      peopleCount: 'PeopleCount',
      stillFrameMotion: 'StillFrameMotion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      equipment: AIAgentConfigVcrConfigEquipment,
      headMotion: AIAgentConfigVcrConfigHeadMotion,
      invalidFrameMotion: AIAgentConfigVcrConfigInvalidFrameMotion,
      peopleCount: AIAgentConfigVcrConfigPeopleCount,
      stillFrameMotion: AIAgentConfigVcrConfigStillFrameMotion,
    };
  }

  validate() {
    if(this.equipment && typeof (this.equipment as any).validate === 'function') {
      (this.equipment as any).validate();
    }
    if(this.headMotion && typeof (this.headMotion as any).validate === 'function') {
      (this.headMotion as any).validate();
    }
    if(this.invalidFrameMotion && typeof (this.invalidFrameMotion as any).validate === 'function') {
      (this.invalidFrameMotion as any).validate();
    }
    if(this.peopleCount && typeof (this.peopleCount as any).validate === 'function') {
      (this.peopleCount as any).validate();
    }
    if(this.stillFrameMotion && typeof (this.stillFrameMotion as any).validate === 'function') {
      (this.stillFrameMotion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

