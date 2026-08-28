// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodePoolComponentInstanceNodesRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  configRevision?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 5c0a1c0f91c14c6****
   */
  nextToken?: string;
  /**
   * @example
   * ["cn-hangzhou.10.91.xx.xx"]
   */
  nodeNames?: string[];
  /**
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

