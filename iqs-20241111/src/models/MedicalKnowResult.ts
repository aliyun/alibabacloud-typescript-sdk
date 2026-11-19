// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MedicalKnowledgeInfo } from "./MedicalKnowledgeInfo";
import { MultimodalQueryContext } from "./MultimodalQueryContext";
import { UnifiedSearchInformation } from "./UnifiedSearchInformation";


export class MedicalKnowResult extends $dara.Model {
  /**
   * @remarks
   * The list of recognized entity property results. An empty array is returned if no entities are recognized.
   */
  messages?: MedicalKnowledgeInfo[];
  /**
   * @remarks
   * The query context information, such as the original query content.
   */
  queryContext?: MultimodalQueryContext;
  /**
   * @remarks
   * The ID of the request, which can be provided for troubleshooting.
   * 
   * @example
   * 35E5608A-A737-2038-AFB6-D9D34C6BFD9E
   */
  requestId?: string;
  /**
   * @remarks
   * The search information for the query, such as the search duration.
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
      messages: { 'type': 'array', 'itemType': MedicalKnowledgeInfo },
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

