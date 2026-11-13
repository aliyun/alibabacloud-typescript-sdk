// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveKnowledgePointsResponseBodyDataAmbiguitiesCandidates extends $dara.Model {
  /**
   * @remarks
   * The location ID of the knowledge point. Copy this value exactly as it appears in the search results and use it together with the corresponding KnowledgeBaseId and Type. Do not parse or convert this value.
   * 
   * @example
   * node-sales
   */
  id?: string;
  /**
   * @remarks
   * The ID of the knowledge base to which the knowledge point belongs. This parameter is used together with Type and Id to locate the knowledge point.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The display title of the current knowledge point.
   * 
   * @example
   * Sales revenue
   */
  title?: string;
  /**
   * @remarks
   * The read category of the knowledge point. Use GRAPH for the current focus objects and graph nodes.
   * 
   * @example
   * GRAPH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      knowledgeBaseId: 'KnowledgeBaseId',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      knowledgeBaseId: 'string',
      title: 'string',
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

export class RetrieveKnowledgePointsResponseBodyDataAmbiguities extends $dara.Model {
  /**
   * @remarks
   * The candidate graph nodes when ambiguity exists. Each candidate carries the KnowledgeBaseId, Type, and Id for reading details, which does not indicate that the user has confirmed the selection.
   */
  candidates?: RetrieveKnowledgePointsResponseBodyDataAmbiguitiesCandidates[];
  /**
   * @remarks
   * The name or description of the object whose referent is not yet determined in the query.
   * 
   * @example
   * Sales revenue
   */
  mention?: string;
  static names(): { [key: string]: string } {
    return {
      candidates: 'Candidates',
      mention: 'Mention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidates: { 'type': 'array', 'itemType': RetrieveKnowledgePointsResponseBodyDataAmbiguitiesCandidates },
      mention: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.candidates)) {
      $dara.Model.validateArray(this.candidates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveKnowledgePointsResponseBodyDataPathsEdges extends $dara.Model {
  /**
   * @remarks
   * The Id of the start node in the Nodes array of the same path.
   * 
   * @example
   * node-sales
   */
  fromId?: string;
  /**
   * @remarks
   * The public relationship type directed from the start node to the end node. For example, CALCULATED_FROM indicates that the start node is calculated based on the end node. You cannot infer the complete formula based solely on the relationship type.
   * 
   * @example
   * CALCULATED_FROM
   */
  relationType?: string;
  /**
   * @remarks
   * The Id of the end node in the Nodes array of the same path.
   * 
   * @example
   * node-orders
   */
  toId?: string;
  static names(): { [key: string]: string } {
    return {
      fromId: 'FromId',
      relationType: 'RelationType',
      toId: 'ToId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromId: 'string',
      relationType: 'string',
      toId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveKnowledgePointsResponseBodyDataPathsNodes extends $dara.Model {
  /**
   * @remarks
   * The location ID of the knowledge point. Copy this value exactly as it appears in the search results and use it together with the corresponding KnowledgeBaseId and Type. Do not parse or convert this value.
   * 
   * @example
   * node-sales
   */
  id?: string;
  /**
   * @remarks
   * The ID of the knowledge base to which the knowledge point belongs. This parameter is used together with Type and Id to locate the knowledge point.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The display title of the current knowledge point.
   * 
   * @example
   * Sales revenue
   */
  title?: string;
  /**
   * @remarks
   * The read category of the knowledge point. Use GRAPH for the current focus objects and graph nodes.
   * 
   * @example
   * GRAPH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      knowledgeBaseId: 'KnowledgeBaseId',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      knowledgeBaseId: 'string',
      title: 'string',
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

export class RetrieveKnowledgePointsResponseBodyDataPaths extends $dara.Model {
  /**
   * @remarks
   * The directed relationships that connect the nodes in the Nodes array of the current path.
   */
  edges?: RetrieveKnowledgePointsResponseBodyDataPathsEdges[];
  /**
   * @remarks
   * The graph nodes in the relationship path. You can read the details of each node by using its KnowledgeBaseId, Type, and Id.
   */
  nodes?: RetrieveKnowledgePointsResponseBodyDataPathsNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': RetrieveKnowledgePointsResponseBodyDataPathsEdges },
      nodes: { 'type': 'array', 'itemType': RetrieveKnowledgePointsResponseBodyDataPathsNodes },
    };
  }

  validate() {
    if(Array.isArray(this.edges)) {
      $dara.Model.validateArray(this.edges);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveKnowledgePointsResponseBodyDataResultsSources extends $dara.Model {
  /**
   * @remarks
   * The temporary HTTPS download URL of the original file. The URL is valid for 2 hours. This parameter is returned only when the source can be reliably located and the caller has read permissions for the original file. Do not forward the URL publicly or store it for a long time.
   * 
   * @example
   * https://example.com/sales-policy.pdf
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The expiration time of the download URL. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1794376800000
   */
  expirationTime?: number;
  /**
   * @remarks
   * The full file name of the original document used for building. This is not the name of the current knowledge point segment.
   * 
   * @example
   * Sales_policy.pdf
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      expirationTime: 'ExpirationTime',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      expirationTime: 'number',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveKnowledgePointsResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The location ID of the knowledge point. Copy this value exactly as it appears in the search results and use it together with the corresponding KnowledgeBaseId and Type. Do not parse or convert this value.
   * 
   * @example
   * node-sales
   */
  id?: string;
  /**
   * @remarks
   * The ID of the knowledge base to which the knowledge point belongs. This parameter is used together with Type and Id to locate the knowledge point.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The download information of the uploaded original documents explicitly associated with the current content. This parameter is omitted if no reliable source is available or if the caller lacks read permissions for the original files. The ability to retrieve knowledge points does not imply the permission to download the complete original files.
   */
  sources?: RetrieveKnowledgePointsResponseBodyDataResultsSources[];
  /**
   * @remarks
   * The readable summary of the knowledge point. The summary is not guaranteed to contain the complete content. To obtain details, call GetKnowledgePoint.
   * 
   * @example
   * The sales revenue metric and its associated order table
   */
  summary?: string;
  /**
   * @remarks
   * The display title of the current knowledge point.
   * 
   * @example
   * Sales revenue
   */
  title?: string;
  /**
   * @remarks
   * The read category of the knowledge point. GRAPH indicates a local graph, WIKI indicates a topic page, and KNOWLEDGE_CONTENT indicates knowledge content.
   * 
   * @example
   * GRAPH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      knowledgeBaseId: 'KnowledgeBaseId',
      sources: 'Sources',
      summary: 'Summary',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      knowledgeBaseId: 'string',
      sources: { 'type': 'array', 'itemType': RetrieveKnowledgePointsResponseBodyDataResultsSources },
      summary: 'string',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveKnowledgePointsResponseBodyDataWarnings extends $dara.Model {
  /**
   * @remarks
   * The truncation or degradation warning code. For example, CONTENT_TRUNCATED indicates that the content is truncated, and SOURCE_UNAVAILABLE indicates that the original file download is temporarily unavailable.
   * 
   * @example
   * CONTENT_TRUNCATED
   */
  code?: string;
  /**
   * @remarks
   * The sanitized readable description of the current warning. Use Code for programmatic judgment instead of relying on the text.
   * 
   * @example
   * Some content exceeds the length limit and has been truncated
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveKnowledgePointsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ambiguity descriptions and candidate objects returned when the target is not yet confirmed.
   */
  ambiguities?: RetrieveKnowledgePointsResponseBodyDataAmbiguities[];
  /**
   * @remarks
   * The relationship paths matched by the search. Path indexes do not correspond to indexes in the Results array. The paths may cover only a subset of relationships.
   */
  paths?: RetrieveKnowledgePointsResponseBodyDataPaths[];
  /**
   * @remarks
   * Knowledge point summaries ranked by relevance across all knowledge bases. The total number of results does not exceed MaxResults. Results can include GRAPH, WIKI, and KNOWLEDGE_CONTENT.
   */
  results?: RetrieveKnowledgePointsResponseBodyDataResults[];
  /**
   * @remarks
   * The truncation, scope limitation, or degradation warnings for the current call. Use Code for programmatic judgment. Message is for reading purposes only.
   */
  warnings?: RetrieveKnowledgePointsResponseBodyDataWarnings[];
  static names(): { [key: string]: string } {
    return {
      ambiguities: 'Ambiguities',
      paths: 'Paths',
      results: 'Results',
      warnings: 'Warnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ambiguities: { 'type': 'array', 'itemType': RetrieveKnowledgePointsResponseBodyDataAmbiguities },
      paths: { 'type': 'array', 'itemType': RetrieveKnowledgePointsResponseBodyDataPaths },
      results: { 'type': 'array', 'itemType': RetrieveKnowledgePointsResponseBodyDataResults },
      warnings: { 'type': 'array', 'itemType': RetrieveKnowledgePointsResponseBodyDataWarnings },
    };
  }

  validate() {
    if(Array.isArray(this.ambiguities)) {
      $dara.Model.validateArray(this.ambiguities);
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    if(Array.isArray(this.warnings)) {
      $dara.Model.validateArray(this.warnings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveKnowledgePointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. This field may be omitted if the request succeeds. If the request fails, the common error response protocol applies.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The knowledge point summaries, relationship paths, ambiguity candidates, and warnings for the current search.
   */
  data?: RetrieveKnowledgePointsResponseBodyData;
  /**
   * @remarks
   * A human-readable description of the business error. This field may be omitted if the request succeeds. Provide the RequestId when troubleshooting failures.
   * 
   * @example
   * The request parameters are invalid.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RetrieveKnowledgePointsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

