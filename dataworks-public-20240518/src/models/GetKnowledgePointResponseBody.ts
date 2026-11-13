// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgePointResponseBodyDataGraphEdgesJoinJoinKeys extends $dara.Model {
  /**
   * @remarks
   * The name of the association field for the node corresponding to FromNodeId.
   * 
   * @example
   * customer_id
   */
  fromField?: string;
  /**
   * @remarks
   * The name of the association field for the node corresponding to ToNodeId.
   * 
   * @example
   * id
   */
  toField?: string;
  static names(): { [key: string]: string } {
    return {
      fromField: 'FromField',
      toField: 'ToField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromField: 'string',
      toField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgePointResponseBodyDataGraphEdgesJoin extends $dara.Model {
  /**
   * @remarks
   * The association cardinality from the start node to the end node. Valid values: ONE_TO_ONE, ONE_TO_MANY, MANY_TO_ONE, and MANY_TO_MANY. This parameter is returned when the cardinality is reliable.
   * 
   * @example
   * MANY_TO_ONE
   */
  cardinality?: string;
  /**
   * @remarks
   * The equivalent association field pairing for the nodes at both ends. Composite keys are returned in full.
   */
  joinKeys?: GetKnowledgePointResponseBodyDataGraphEdgesJoinJoinKeys[];
  static names(): { [key: string]: string } {
    return {
      cardinality: 'Cardinality',
      joinKeys: 'JoinKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardinality: 'string',
      joinKeys: { 'type': 'array', 'itemType': GetKnowledgePointResponseBodyDataGraphEdgesJoinJoinKeys },
    };
  }

  validate() {
    if(Array.isArray(this.joinKeys)) {
      $dara.Model.validateArray(this.joinKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgePointResponseBodyDataGraphEdges extends $dara.Model {
  /**
   * @remarks
   * The readable supplementary description of the current node or relationship. This parameter is omitted when no reliable content is available.
   * 
   * @example
   * Sales revenue is calculated based on the actual paid amount of orders
   */
  description?: string;
  /**
   * @remarks
   * The ID of the relationship in the current knowledge base graph.
   * 
   * @example
   * edge-sales-orders
   */
  edgeId?: string;
  /**
   * @remarks
   * The NodeId of the start node of the relationship. The start node must exist in the Graph.Nodes of the same page.
   * 
   * @example
   * node-sales
   */
  fromNodeId?: string;
  /**
   * @remarks
   * The typed field association information for verified relationships. This parameter is omitted when no reliable and complete field pairing is available.
   */
  join?: GetKnowledgePointResponseBodyDataGraphEdgesJoin;
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
   * The public relationship type from the start node to the end node. For example, CALCULATED_FROM indicates that the start node is calculated based on the end node. You cannot infer the complete formula based solely on the type.
   * 
   * @example
   * CALCULATED_FROM
   */
  relationType?: string;
  /**
   * @remarks
   * The NodeId of the end node of the relationship. The end node must exist in the Graph.Nodes of the same page.
   * 
   * @example
   * node-orders
   */
  toNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      edgeId: 'EdgeId',
      fromNodeId: 'FromNodeId',
      join: 'Join',
      knowledgeBaseId: 'KnowledgeBaseId',
      relationType: 'RelationType',
      toNodeId: 'ToNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      edgeId: 'string',
      fromNodeId: 'string',
      join: GetKnowledgePointResponseBodyDataGraphEdgesJoin,
      knowledgeBaseId: 'string',
      relationType: 'string',
      toNodeId: 'string',
    };
  }

  validate() {
    if(this.join && typeof (this.join as any).validate === 'function') {
      (this.join as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgePointResponseBodyDataGraphNodes extends $dara.Model {
  /**
   * @remarks
   * The list of reliable aliases for the node. This parameter is omitted when no aliases are available.
   */
  aliases?: string[];
  /**
   * @remarks
   * The reliable business definition of the graph node. This parameter is omitted when no public definition is available.
   * 
   * @example
   * The sum of the actual paid amounts of paid orders
   */
  definition?: string;
  /**
   * @remarks
   * The readable supplementary description of the current node or relationship. This parameter is omitted when no reliable content is available.
   * 
   * @example
   * Sales revenue is calculated based on the actual paid amount of orders
   */
  description?: string;
  /**
   * @remarks
   * The asset ID in DataWorks Data Map that can be reliably located. This is not the NodeId of the graph node. This parameter is omitted when no unique and reliable asset mapping is available.
   * 
   * @example
   * maxcompute-table:::sales:public:orders
   */
  entityId?: string;
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
   * The display name of the graph node.
   * 
   * @example
   * Sales revenue
   */
  name?: string;
  /**
   * @remarks
   * The ID of the node in the current knowledge base graph. You can use this value as the Id parameter when Type is set to GRAPH to read the local graph of this node.
   * 
   * @example
   * node-sales
   */
  nodeId?: string;
  /**
   * @remarks
   * The business category of the graph node, such as TABLE for a data table. This is not the read category of the knowledge point.
   * 
   * @example
   * TABLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliases: 'Aliases',
      definition: 'Definition',
      description: 'Description',
      entityId: 'EntityId',
      knowledgeBaseId: 'KnowledgeBaseId',
      name: 'Name',
      nodeId: 'NodeId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: { 'type': 'array', 'itemType': 'string' },
      definition: 'string',
      description: 'string',
      entityId: 'string',
      knowledgeBaseId: 'string',
      name: 'string',
      nodeId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliases)) {
      $dara.Model.validateArray(this.aliases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgePointResponseBodyDataGraph extends $dara.Model {
  /**
   * @remarks
   * The visible one-hop adjacency relationships on the current page. At least one end of each edge is the RootNodeId, and both ends are in the Nodes of the current page.
   */
  edges?: GetKnowledgePointResponseBodyDataGraphEdges[];
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
   * All visible endpoints involved by the entry node and the relationships on the current page, deduplicated by NodeId. Subsequent pages still include the entry node.
   */
  nodes?: GetKnowledgePointResponseBodyDataGraphNodes[];
  /**
   * @remarks
   * The ID of the entry node for the current local graph, which is the same as the requested Id.
   * 
   * @example
   * node-sales
   */
  rootNodeId?: string;
  /**
   * @remarks
   * The time when the current graph was last published. This parameter is returned when the time is reliable.
   * 
   * @example
   * 1794373200000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      knowledgeBaseId: 'KnowledgeBaseId',
      nodes: 'Nodes',
      rootNodeId: 'RootNodeId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': GetKnowledgePointResponseBodyDataGraphEdges },
      knowledgeBaseId: 'string',
      nodes: { 'type': 'array', 'itemType': GetKnowledgePointResponseBodyDataGraphNodes },
      rootNodeId: 'string',
      updateTime: 'number',
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

export class GetKnowledgePointResponseBodyDataKnowledgeContentSources extends $dara.Model {
  /**
   * @remarks
   * The temporary HTTPS download URL of the original file, which is valid for 2 hours. This parameter is returned only when the source can be reliably located and the caller has read permissions for the original file. Do not forward this URL publicly or store it for a long time.
   * 
   * @example
   * https://example.com/sales-policy.pdf
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The expiration time of the download URL, in UNIX milliseconds.
   * 
   * @example
   * 1794376800000
   */
  expirationTime?: number;
  /**
   * @remarks
   * The full file name of the original document used for building. This is not the name of the current knowledge point fragment.
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

export class GetKnowledgePointResponseBodyDataKnowledgeContent extends $dara.Model {
  /**
   * @remarks
   * The currently public Markdown body. The knowledge content may be a document fragment or a readable projection of structured knowledge, and is not guaranteed to be the full text of the original file.
   * 
   * @example
   * Sales revenue is aggregated based on the actual paid amount of paid orders
   */
  content?: string;
  /**
   * @remarks
   * The download information of the uploaded original document explicitly associated with the current content. This parameter is omitted when no reliable source is available or when you do not have read permissions for the original file. The ability to retrieve a knowledge point does not imply the ability to download the complete original file.
   */
  sources?: GetKnowledgePointResponseBodyDataKnowledgeContentSources[];
  /**
   * @remarks
   * The display title of the current knowledge point.
   * 
   * @example
   * Sales revenue
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      sources: 'Sources',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      sources: { 'type': 'array', 'itemType': GetKnowledgePointResponseBodyDataKnowledgeContentSources },
      title: 'string',
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

export class GetKnowledgePointResponseBodyDataWarnings extends $dara.Model {
  /**
   * @remarks
   * The truncation or degradation prompt code. For example, CONTENT_TRUNCATED indicates that the content is truncated, and SOURCE_UNAVAILABLE indicates that the original file download is temporarily unavailable.
   * 
   * @example
   * CONTENT_TRUNCATED
   */
  code?: string;
  /**
   * @remarks
   * The sanitized and readable description of the current prompt. Use Code for programmatic judgment instead of relying on the text.
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

export class GetKnowledgePointResponseBodyDataWikiSources extends $dara.Model {
  /**
   * @remarks
   * The temporary HTTPS download URL of the original file, which is valid for 2 hours. This parameter is returned only when the source can be reliably located and the caller has read permissions for the original file. Do not forward this URL publicly or store it for a long time.
   * 
   * @example
   * https://example.com/sales-policy.pdf
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The expiration time of the download URL, in UNIX milliseconds.
   * 
   * @example
   * 1794376800000
   */
  expirationTime?: number;
  /**
   * @remarks
   * The full file name of the original document used for building. This is not the name of the current knowledge point fragment.
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

export class GetKnowledgePointResponseBodyDataWiki extends $dara.Model {
  /**
   * @remarks
   * The currently public Markdown body. The knowledge content may be a document fragment or a readable projection of structured knowledge, and is not guaranteed to be the full text of the original file.
   * 
   * @example
   * Sales revenue is aggregated based on the actual paid amount of paid orders
   */
  content?: string;
  /**
   * @remarks
   * The download information of the uploaded original document explicitly associated with the current content. This parameter is omitted when no reliable source is available or when you do not have read permissions for the original file. The ability to retrieve a knowledge point does not imply the ability to download the complete original file.
   */
  sources?: GetKnowledgePointResponseBodyDataWikiSources[];
  /**
   * @remarks
   * The display title of the current knowledge point.
   * 
   * @example
   * Sales revenue
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      sources: 'Sources',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      sources: { 'type': 'array', 'itemType': GetKnowledgePointResponseBodyDataWikiSources },
      title: 'string',
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

export class GetKnowledgePointResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The one-hop local graph with the requested Id as the entry point. This parameter is returned only when Type is set to GRAPH. It includes the entry point, the relationships on the current page, and their visible endpoints.
   */
  graph?: GetKnowledgePointResponseBodyDataGraph;
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
   * The title, Markdown body, and optional sources of the knowledge content. This parameter is returned only when Type is set to KNOWLEDGE_CONTENT.
   */
  knowledgeContent?: GetKnowledgePointResponseBodyDataKnowledgeContent;
  /**
   * @remarks
   * The pagination cursor. Do not specify this parameter when you request the first page. For subsequent pages, use the NextToken value returned in the previous response. An empty response indicates that no more pages are available. If the current page is empty but the cursor is not empty, continue pagination. This parameter is used only when Type is set to GRAPH. You must keep the same knowledge base, entry point, and MaxResults values.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The read category of the knowledge point. Valid values: GRAPH for local graphs, WIKI for topic pages, and KNOWLEDGE_CONTENT for knowledge content.
   * 
   * @example
   * GRAPH
   */
  type?: string;
  /**
   * @remarks
   * The truncation, scope limitation, or degradation prompts for the current call. Use Code for programmatic judgment. Message is for reading purposes only.
   */
  warnings?: GetKnowledgePointResponseBodyDataWarnings[];
  /**
   * @remarks
   * The title, Markdown body, and optional sources of the topic page. This parameter is returned only when Type is set to WIKI.
   */
  wiki?: GetKnowledgePointResponseBodyDataWiki;
  static names(): { [key: string]: string } {
    return {
      graph: 'Graph',
      id: 'Id',
      knowledgeBaseId: 'KnowledgeBaseId',
      knowledgeContent: 'KnowledgeContent',
      nextToken: 'NextToken',
      type: 'Type',
      warnings: 'Warnings',
      wiki: 'Wiki',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graph: GetKnowledgePointResponseBodyDataGraph,
      id: 'string',
      knowledgeBaseId: 'string',
      knowledgeContent: GetKnowledgePointResponseBodyDataKnowledgeContent,
      nextToken: 'string',
      type: 'string',
      warnings: { 'type': 'array', 'itemType': GetKnowledgePointResponseBodyDataWarnings },
      wiki: GetKnowledgePointResponseBodyDataWiki,
    };
  }

  validate() {
    if(this.graph && typeof (this.graph as any).validate === 'function') {
      (this.graph as any).validate();
    }
    if(this.knowledgeContent && typeof (this.knowledgeContent as any).validate === 'function') {
      (this.knowledgeContent as any).validate();
    }
    if(Array.isArray(this.warnings)) {
      $dara.Model.validateArray(this.warnings);
    }
    if(this.wiki && typeof (this.wiki as any).validate === 'function') {
      (this.wiki as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgePointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. This parameter is omitted when the request is successful. For failures, the common error response protocol is followed.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The typed details of a single knowledge point. Only the item corresponding to the Type value is returned among Graph, Wiki, and KnowledgeContent.
   */
  data?: GetKnowledgePointResponseBodyData;
  /**
   * @remarks
   * The readable description of the business error. This parameter is omitted when the request is successful. Provide the RequestId when troubleshooting failures.
   * 
   * @example
   * The request parameters are invalid.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot issues.
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
      data: GetKnowledgePointResponseBodyData,
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

