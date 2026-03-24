// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagKeysResponseBodyKeys extends $dara.Model {
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * - custom: The custom tag.
   * 
   * - system: The system tag.
   * 
   * @example
   * custom
   */
  category?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * demoTagKey
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The keys and types of the tags.
   */
  keys?: ListTagKeysResponseBodyKeys[];
  /**
   * @remarks
   * The pagination token. If NextToken is empty, there are no more results to return.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8CB8BB88-24C7-5608-BF5E-4DCA****CF1C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': ListTagKeysResponseBodyKeys },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

