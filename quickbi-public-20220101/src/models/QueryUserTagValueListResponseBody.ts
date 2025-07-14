// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserTagValueListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Tag ID.
   * 
   * @example
   * pop_001
   */
  tagId?: string;
  /**
   * @remarks
   * Tag name.
   * 
   * @example
   * Position
   */
  tagName?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * Supervisor
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
      tagName: 'TagName',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
      tagName: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserTagValueListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request for a list of user tags and their values.
   */
  result?: QueryUserTagValueListResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryUserTagValueListResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

