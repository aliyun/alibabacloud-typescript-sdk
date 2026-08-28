// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodePoolComponentInstanceNodesShrinkRequest extends $dara.Model {
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
  nodeNamesShrink?: string;
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
      nodeNamesShrink: 'node_names',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRevision: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeNamesShrink: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

