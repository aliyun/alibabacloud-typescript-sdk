// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUmodelDataResponseBodyErrors extends $dara.Model {
  /**
   * @remarks
   * The detailed information.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The type of the error.
   * 
   * @example
   * external
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

export class GetUmodelDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error messages.
   */
  errors?: GetUmodelDataResponseBodyErrors[];
  /**
   * @remarks
   * The list of links between nodes.
   */
  links?: any[];
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: any[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 123-123-234-345-123
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of links between nodes.
   * 
   * @example
   * 0
   */
  totalLinksCount?: number;
  /**
   * @remarks
   * The total number of nodes.
   * 
   * @example
   * 0
   */
  totalNodesCount?: number;
  static names(): { [key: string]: string } {
    return {
      errors: 'errors',
      links: 'links',
      nodes: 'nodes',
      requestId: 'requestId',
      totalLinksCount: 'totalLinksCount',
      totalNodesCount: 'totalNodesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errors: { 'type': 'array', 'itemType': GetUmodelDataResponseBodyErrors },
      links: { 'type': 'array', 'itemType': 'any' },
      nodes: { 'type': 'array', 'itemType': 'any' },
      requestId: 'string',
      totalLinksCount: 'number',
      totalNodesCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.errors)) {
      $dara.Model.validateArray(this.errors);
    }
    if(Array.isArray(this.links)) {
      $dara.Model.validateArray(this.links);
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

