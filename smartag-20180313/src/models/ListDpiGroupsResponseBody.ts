// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDpiGroupsResponseBodyDpiGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 1
   */
  dpiGroupId?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * P2P
   */
  dpiGroupName?: string;
  /**
   * @remarks
   * The earliest version of engine that supports the application group.
   * 
   * @example
   * 0-0.0.1
   */
  minEngineVersion?: string;
  /**
   * @remarks
   * The earliest version of signature database that supports the application group.
   * 
   * @example
   * 20201117_1_0-0.0.1
   */
  minSignatureDbVersion?: string;
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
      dpiGroupName: 'DpiGroupName',
      minEngineVersion: 'MinEngineVersion',
      minSignatureDbVersion: 'MinSignatureDbVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: 'string',
      dpiGroupName: 'string',
      minEngineVersion: 'string',
      minSignatureDbVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the application group.
   */
  dpiGroup?: ListDpiGroupsResponseBodyDpiGroup[];
  /**
   * @remarks
   * The token returned for the next query.
   * 
   * @example
   * FFPSpX59Ebw****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC184A86-3C93-49D6-BB34-6C193E14D37F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 22
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dpiGroup: 'DpiGroup',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroup: { 'type': 'array', 'itemType': ListDpiGroupsResponseBodyDpiGroup },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dpiGroup)) {
      $dara.Model.validateArray(this.dpiGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

