// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MedicalAnswerMessage } from "./MedicalAnswerMessage";
import { MultimodalQueryContext } from "./MultimodalQueryContext";
import { UnifiedSearchInformation } from "./UnifiedSearchInformation";


export class MedicalAnswerResult extends $dara.Model {
  messages?: MedicalAnswerMessage[];
  queryContext?: MultimodalQueryContext;
  requestId?: string;
  searchInformation?: UnifiedSearchInformation;
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
      queryContext: 'queryContext',
      requestId: 'requestId',
      searchInformation: 'searchInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': MedicalAnswerMessage },
      queryContext: MultimodalQueryContext,
      requestId: 'string',
      searchInformation: UnifiedSearchInformation,
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.queryContext && typeof (this.queryContext as any).validate === 'function') {
      (this.queryContext as any).validate();
    }
    if(this.searchInformation && typeof (this.searchInformation as any).validate === 'function') {
      (this.searchInformation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

