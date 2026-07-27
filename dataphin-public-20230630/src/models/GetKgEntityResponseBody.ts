// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKgEntityResponseBodyEntityInfoPropertyList extends $dara.Model {
  /**
   * @example
   * company_name
   */
  code?: string;
  /**
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @example
   * Alibaba
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataType: 'DataType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKgEntityResponseBodyEntityInfo extends $dara.Model {
  /**
   * @example
   * abc-xxx
   */
  entityId?: string;
  /**
   * @example
   * Company
   */
  entityType?: string;
  propertyList?: GetKgEntityResponseBodyEntityInfoPropertyList[];
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityType: 'EntityType',
      propertyList: 'PropertyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
      propertyList: { 'type': 'array', 'itemType': GetKgEntityResponseBodyEntityInfoPropertyList },
    };
  }

  validate() {
    if(Array.isArray(this.propertyList)) {
      $dara.Model.validateArray(this.propertyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKgEntityResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  entityInfo?: GetKgEntityResponseBodyEntityInfo;
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
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      entityInfo: 'EntityInfo',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      entityInfo: GetKgEntityResponseBodyEntityInfo,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.entityInfo && typeof (this.entityInfo as any).validate === 'function') {
      (this.entityInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

