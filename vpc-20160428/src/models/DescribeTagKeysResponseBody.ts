// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagKeysResponseBodyTagKeysTagKey extends $dara.Model {
  tagKey?: string;
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
   * The pagination token. Valid values:
   * - If **NextToken** is empty, no subsequent query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DE65F6B7-7566-4802-9007-96F2494AC512
   */
  requestId?: string;
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

