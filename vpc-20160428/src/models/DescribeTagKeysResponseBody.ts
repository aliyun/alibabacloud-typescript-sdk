// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagKeysResponseBodyTagKeysTagKey extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string;
  /**
   * @remarks
   * The type of the tag key. Valid values:
   * 
   * *   **Custom**: custom
   * *   **System**: system
   * 
   * @example
   * Custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
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

export class DescribeTagKeysResponseBodyTagKeys extends $dara.Model {
  tagKey?: DescribeTagKeysResponseBodyTagKeysTagKey[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: { 'type': 'array', 'itemType': DescribeTagKeysResponseBodyTagKeysTagKey },
    };
  }

  validate() {
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If the value of **NextToken** is not returned, it indicates that no next query is to be sent.
   * *   If a value of **NextToken** is returned, the value is the token that is used for the subsequent query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DE65F6B7-7566-4802-9007-96F2494AC512
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tag keys.
   */
  tagKeys?: DescribeTagKeysResponseBodyTagKeys;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagKeys: DescribeTagKeysResponseBodyTagKeys,
    };
  }

  validate() {
    if(this.tagKeys && typeof (this.tagKeys as any).validate === 'function') {
      (this.tagKeys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

