// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistryModulesRequest extends $dara.Model {
  /**
   * @example
   * key
   */
  keyword?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * test_namespace
   */
  namespaceName?: string;
  /**
   * @example
   * NFzbQCa7/yd7rAuSo5xZb54dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      namespaceName: 'namespaceName',
      nextToken: 'nextToken',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      namespaceName: 'string',
      nextToken: 'string',
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

