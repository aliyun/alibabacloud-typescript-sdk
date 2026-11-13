// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveKnowledgePointsRequestFocusObjects extends $dara.Model {
  /**
   * @remarks
   * The location ID of the knowledge point. Copy this value exactly as it appears in the search results and use it together with the corresponding KnowledgeBaseId and Type. Do not parse or convert this value.
   * 
   * This parameter is required.
   * 
   * @example
   * node-sales
   */
  id?: string;
  /**
   * @remarks
   * The ID of the knowledge base to which the knowledge point belongs. This parameter is used together with Type and Id to locate the knowledge point.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The read category of the knowledge point. Use GRAPH for the current focus objects and graph nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * GRAPH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      knowledgeBaseId: 'KnowledgeBaseId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      knowledgeBaseId: 'string',
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

export class RetrieveKnowledgePointsRequest extends $dara.Model {
  /**
   * @remarks
   * The graph objects to focus the search on. You can specify up to 2 unique objects. The objects must be within the current authorized search scope and do not expand permissions.
   */
  focusObjects?: RetrieveKnowledgePointsRequestFocusObjects[];
  /**
   * @remarks
   * A list of 1 to 50 unique knowledge base IDs that restricts the search. If you omit this parameter, the operation discovers knowledge bases within the caller’s authorized scope. If you provide IDs, the operation checks access to each knowledge base and the entire request fails if the caller lacks access to any of them.
   */
  knowledgeBaseIds?: string[];
  /**
   * @remarks
   * The maximum number of hits across all knowledge bases. Default value: 10. Valid values: 1 to 50. This parameter does not specify the quota for each knowledge base or the page size.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The natural language question. The length cannot exceed 256 Unicode code points after leading and trailing whitespaces are removed.
   * 
   * This parameter is required.
   * 
   * @example
   * How is sales revenue calculated, and which tables does it come from?
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      focusObjects: 'FocusObjects',
      knowledgeBaseIds: 'KnowledgeBaseIds',
      maxResults: 'MaxResults',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      focusObjects: { 'type': 'array', 'itemType': RetrieveKnowledgePointsRequestFocusObjects },
      knowledgeBaseIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      query: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.focusObjects)) {
      $dara.Model.validateArray(this.focusObjects);
    }
    if(Array.isArray(this.knowledgeBaseIds)) {
      $dara.Model.validateArray(this.knowledgeBaseIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

