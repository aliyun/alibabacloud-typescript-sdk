// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveGraphDraftResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success. A failure returns a backend error code (ERR.* / InvalidParameter.*).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The draft change ID (the draftChangeId returned by listGraphDraftResources).
   * 
   * @example
   * 401001
   */
  draftChangeId?: number;
  /**
   * @remarks
   * The online content hash on which the draft save is based (draft starting point), a 64-character SHA-256 hexadecimal string.
   * 
   * @example
   * sha256:abc123
   */
  draftContentHash?: string;
  /**
   * @remarks
   * The element type. Currently, only text is supported.
   * 
   * @example
   * object_type
   */
  elementType?: string;
  /**
   * @remarks
   * The last modified time in ISO 8601 format.
   * 
   * @example
   * 2026-09-08T10:30:00+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The graph name.
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * UPDATE
   */
  operationType?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * customer
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * object
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      draftChangeId: 'draftChangeId',
      draftContentHash: 'draftContentHash',
      elementType: 'elementType',
      gmtModified: 'gmtModified',
      graphName: 'graphName',
      message: 'message',
      operationType: 'operationType',
      requestId: 'requestId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      draftChangeId: 'number',
      draftContentHash: 'string',
      elementType: 'string',
      gmtModified: 'string',
      graphName: 'string',
      message: 'string',
      operationType: 'string',
      requestId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

