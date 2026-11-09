// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCustomAuthPermissionResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to allow or deny access.
   * 
   * @example
   * ALLOW
   */
  effect?: string;
  /**
   * @remarks
   * The username or client ID.
   * 
   * @example
   * test
   */
  identity?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * 
   * *   USER
   * *   CLIENT
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The authorized permissions.
   * 
   * @example
   * PUB_SUB
   */
  permitAction?: string;
  /**
   * @remarks
   * The topic name. Multi-level topics and wildcard characters are supported.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      identity: 'Identity',
      identityType: 'IdentityType',
      permitAction: 'PermitAction',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      identity: 'string',
      identityType: 'string',
      permitAction: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthPermissionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * AAAAAV/vsqTyeMlX1MIk7/b6NrZLIlsSVf49O04ac7HAmlBoaYspakK7ZZkR3vRDp5Y9Nz0EmuWYrtF+1qkUwuJzPk/qEto/FGxl5Kd+qdwNt3t8
   */
  nextToken?: string;
  /**
   * @remarks
   * The response results.
   */
  results?: QueryCustomAuthPermissionResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      results: { 'type': 'array', 'itemType': QueryCustomAuthPermissionResponseBodyDataResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryCustomAuthPermissionResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 63309FDB-ED6C-46AE-B31C-A172FBA0****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: QueryCustomAuthPermissionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

