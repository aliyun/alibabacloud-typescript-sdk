// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductResourceTagKeyListResponseBodyTagKeys extends $dara.Model {
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeProductResourceTagKeyListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  message?: string;
  /**
   * @remarks
   * The pagination token. If more entries are to be returned on the next page, a pagination token is returned.
   * 
   * >  If the value of this parameter is not null, more entries are to be returned on the next page. You can use the returned pagination token as a request parameter to retrieve a new page of results. If the value of this parameter is null, all the entries have been returned.
   * 
   * @example
   * dbc2826f237e****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 945ACAA9-89F2-4A62-8913-076FDEDAA8DB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: boolean;
  tagKeys?: DescribeProductResourceTagKeyListResponseBodyTagKeys;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      tagKeys: DescribeProductResourceTagKeyListResponseBodyTagKeys,
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

