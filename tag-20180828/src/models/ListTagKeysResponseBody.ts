// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagKeysResponseBodyKeysKey extends $dara.Model {
  /**
   * @remarks
   * The type of the resource tag. Valid values:
   * 
   * *   custom
   * *   system
   * 
   * @example
   * custom
   */
  category?: string;
  /**
   * @remarks
   * The description of the tag key.
   * 
   * @example
   * Business team
   */
  description?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * team
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
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

export class ListTagKeysResponseBodyKeys extends $dara.Model {
  key?: ListTagKeysResponseBodyKeysKey[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: { 'type': 'array', 'itemType': ListTagKeysResponseBodyKeysKey },
    };
  }

  validate() {
    if(Array.isArray(this.key)) {
      $dara.Model.validateArray(this.key);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the tag keys.
   */
  keys?: ListTagKeysResponseBodyKeys;
  /**
   * @remarks
   * Indicates whether the next query is required. The value of this parameter may be empty.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC09A6AA-2713-4E10-A2E9-E6C5C43A8842
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
      keys: ListTagKeysResponseBodyKeys,
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.keys && typeof (this.keys as any).validate === 'function') {
      (this.keys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

