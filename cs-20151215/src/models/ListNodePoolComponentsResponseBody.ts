// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodePoolComponentsResponseBodyComponents extends $dara.Model {
  /**
   * @example
   * "{\\"$schema\\": \\"\\",\\"properties\\": {}"
   */
  configSchema?: string;
  /**
   * @example
   * kubelet
   */
  name?: string;
  /**
   * @example
   * 1.28.9-aliyun.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      configSchema: 'config_schema',
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSchema: 'string',
      name: 'string',
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

export class ListNodePoolComponentsResponseBody extends $dara.Model {
  components?: ListNodePoolComponentsResponseBodyComponents[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 5c0a1c0f91c14c6****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      components: 'components',
      maxResults: 'max_results',
      nextToken: 'next_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': ListNodePoolComponentsResponseBodyComponents },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

