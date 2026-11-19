// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MedicalAnswerMessage } from "./MedicalAnswerMessage";
import { MultimodalQueryContext } from "./MultimodalQueryContext";
import { UnifiedSearchInformation } from "./UnifiedSearchInformation";


export class MedicalAnswerResult extends $dara.Model {
  /**
   * @remarks
   * The list of medical Q&A answers. An empty array is returned if the question is empty or no content is matched.
   */
  messages?: MedicalAnswerMessage[];
  /**
   * @remarks
   * The query context information, such as the original query content.
   */
  queryContext?: MultimodalQueryContext;
  /**
   * @remarks
   * The ID of the request. You can provide this ID for troubleshooting.
   * 
   * @example
   * 35E5608A-A737-2038-AFB6-D9D34C6BFD9E
   */
  requestId?: string;
  /**
   * @remarks
   * The search information, such as the execution duration.
   */
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

