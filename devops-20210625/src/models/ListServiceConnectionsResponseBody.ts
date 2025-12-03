// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceConnectionsResponseBodyServiceConnections extends $dara.Model {
  /**
   * @example
   * 1586863220000
   */
  createTime?: number;
  /**
   * @example
   * 123
   */
  id?: number;
  /**
   * @example
   * 张三的oss服务连接
   */
  name?: string;
  /**
   * @example
   * 1212123212121212
   */
  ownerAccountId?: number;
  /**
   * @example
   * oss
   */
  type?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      name: 'name',
      ownerAccountId: 'ownerAccountId',
      type: 'type',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'number',
      name: 'string',
      ownerAccountId: 'number',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConnectionsResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  serviceConnections?: ListServiceConnectionsResponseBodyServiceConnections[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      serviceConnections: 'serviceConnections',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      serviceConnections: { 'type': 'array', 'itemType': ListServiceConnectionsResponseBodyServiceConnections },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.serviceConnections)) {
      $dara.Model.validateArray(this.serviceConnections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

