// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection } from "./RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection";


export class RunSearchGenerationRequestAgentContextBizContext extends $dara.Model {
  multimodalMediaSelection?: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection;
  skipCurrentSupplement?: boolean;
  static names(): { [key: string]: string } {
    return {
      multimodalMediaSelection: 'MultimodalMediaSelection',
      skipCurrentSupplement: 'SkipCurrentSupplement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multimodalMediaSelection: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection,
      skipCurrentSupplement: 'boolean',
    };
  }

  validate() {
    if(this.multimodalMediaSelection && typeof (this.multimodalMediaSelection as any).validate === 'function') {
      (this.multimodalMediaSelection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

