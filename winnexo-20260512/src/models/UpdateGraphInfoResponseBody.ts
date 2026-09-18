// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGraphInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business description of the knowledge graph. If not configured, the value is an empty string.
   * 
   * @example
   * Customer domain knowledge graph
   */
  businessProfile?: string;
  /**
   * @remarks
   * SUCCESS indicates success. In failure cases, the corresponding error type is returned, such as ERR_BAD_REQUEST, ERR_VALIDATION_FAILED, or ERR_INTERNAL_SERVER_ERROR.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The display name of the knowledge graph.
   * 
   * @example
   * CRM Graph
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the knowledge graph.
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * The description of the status code.
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
   * The updated items.
   * 
   * @example
   * true
   */
  updated?: boolean;
  static names(): { [key: string]: string } {
    return {
      businessProfile: 'businessProfile',
      code: 'code',
      displayName: 'displayName',
      graphName: 'graphName',
      message: 'message',
      requestId: 'requestId',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessProfile: 'string',
      code: 'string',
      displayName: 'string',
      graphName: 'string',
      message: 'string',
      requestId: 'string',
      updated: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

