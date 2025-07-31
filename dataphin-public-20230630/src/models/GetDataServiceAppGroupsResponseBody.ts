// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceAppGroupsResponseBodyAppGroupList extends $dara.Model {
  /**
   * @example
   * 1022
   */
  id?: number;
  /**
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceAppGroupsResponseBody extends $dara.Model {
  appGroupList?: GetDataServiceAppGroupsResponseBodyAppGroupList[];
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      appGroupList: 'AppGroupList',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupList: { 'type': 'array', 'itemType': GetDataServiceAppGroupsResponseBodyAppGroupList },
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.appGroupList)) {
      $dara.Model.validateArray(this.appGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

