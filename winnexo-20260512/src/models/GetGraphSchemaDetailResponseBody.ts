// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGraphSchemaDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business description of the graph. An empty string is returned if this parameter is not configured.
   * 
   * @example
   * Customer domain semantic graph
   */
  businessProfile?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The hash fingerprint of the schema content.
   * 
   * @example
   * a1b2c3
   */
  contentHash?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * u001
   */
  createdBy?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * CRM Graph
   */
  displayName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-09-08T10:00:00+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last update time.
   * 
   * @example
   * 2026-09-08T11:30:00+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The name of the graph.
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * The status of the semantic graph.
   * 
   * @example
   * PUBLISHING: A publish task is in progress for this graph.
   * DEVELOPING: An active draft exists for this graph (being edited, not yet published).
   * PUBLISHED: Normal status
   */
  graphStatus?: string;
  /**
   * @remarks
   * Indicates whether the graph contains a draft.
   * 
   * @example
   * false
   */
  hasDraft?: boolean;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 0.0.0
   */
  schemaVersion?: string;
  /**
   * @remarks
   * The original YAML text of the graph schema trimmed by READ permission. The $ref references within the authorized subgraph are retained.
   * 
   * @example
   * name: crm_graph
   */
  yamlEdit?: string;
  static names(): { [key: string]: string } {
    return {
      businessProfile: 'businessProfile',
      code: 'code',
      contentHash: 'contentHash',
      createdBy: 'createdBy',
      displayName: 'displayName',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      graphName: 'graphName',
      graphStatus: 'graphStatus',
      hasDraft: 'hasDraft',
      message: 'message',
      requestId: 'requestId',
      schemaVersion: 'schemaVersion',
      yamlEdit: 'yamlEdit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessProfile: 'string',
      code: 'string',
      contentHash: 'string',
      createdBy: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      graphName: 'string',
      graphStatus: 'string',
      hasDraft: 'boolean',
      message: 'string',
      requestId: 'string',
      schemaVersion: 'string',
      yamlEdit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

