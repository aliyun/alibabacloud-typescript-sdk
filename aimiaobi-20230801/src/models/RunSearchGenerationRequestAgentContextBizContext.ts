// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection } from "./RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection";


export class RunSearchGenerationRequestAgentContextBizContext extends $dara.Model {
  askUser?: string;
  askUserKeywords?: string[];
  currentStep?: string;
  multimodalMediaSelection?: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection;
  nextStep?: string;
  skipCurrentSupplement?: boolean;
  supplementDataType?: string;
  supplementEnable?: boolean;
  userBack?: string;
  userBackKeywords?: string[];
  static names(): { [key: string]: string } {
    return {
      askUser: 'AskUser',
      askUserKeywords: 'AskUserKeywords',
      currentStep: 'CurrentStep',
      multimodalMediaSelection: 'MultimodalMediaSelection',
      nextStep: 'NextStep',
      skipCurrentSupplement: 'SkipCurrentSupplement',
      supplementDataType: 'SupplementDataType',
      supplementEnable: 'SupplementEnable',
      userBack: 'UserBack',
      userBackKeywords: 'UserBackKeywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      askUser: 'string',
      askUserKeywords: { 'type': 'array', 'itemType': 'string' },
      currentStep: 'string',
      multimodalMediaSelection: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection,
      nextStep: 'string',
      skipCurrentSupplement: 'boolean',
      supplementDataType: 'string',
      supplementEnable: 'boolean',
      userBack: 'string',
      userBackKeywords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.askUserKeywords)) {
      $dara.Model.validateArray(this.askUserKeywords);
    }
    if(this.multimodalMediaSelection && typeof (this.multimodalMediaSelection as any).validate === 'function') {
      (this.multimodalMediaSelection as any).validate();
    }
    if(Array.isArray(this.userBackKeywords)) {
      $dara.Model.validateArray(this.userBackKeywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

