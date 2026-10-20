// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodePoolComponentInstanceNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Filters nodes by the specified configuration version number of the node component.
   * 
   * @example
   * 1
   */
  configRevision?: string;
  /**
   * @remarks
   * The maximum number of records to return in a single response for pagination. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination cursor. Do not specify this parameter for the first request. For subsequent requests, specify the token returned in the previous response.
   * 
   * @example
   * 5c0a1c0f91c14c6****
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies the list of node names to query.
   * 
   * @example
   * ["cn-hangzhou.10.91.xx.xx"]
   */
  nodeNames?: string[];
  /**
   * @remarks
   * Filters nodes by the specified node component version.
   * 
   * @example
   * 1.28.9-aliyun.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      configRevision: 'config_revision',
      maxResults: 'max_results',
      nextToken: 'next_token',
      nodeNames: 'node_names',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRevision: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

