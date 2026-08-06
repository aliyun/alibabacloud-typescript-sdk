// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKgEntityResponseBodyEntityInfoPropertyList extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * company_name
   */
  code?: string;
  /**
   * @remarks
   * The property data type. Valid values:
   * 
   * - STRING: string
   * - INTEGER: integer
   * - FLOAT: floating-point number
   * - BOOLEAN: Boolean
   * - DATE: date
   * - LIST: list
   * 
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @remarks
   * The property value.
   * 
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
   * @remarks
   * The entity record ID.
   * 
   * @example
   * abc-xxx
   */
  entityId?: string;
  /**
   * @remarks
   * The entity type code.
   * 
   * @example
   * Company
   */
  entityType?: string;
  /**
   * @remarks
   * The list of entity record properties.
   */
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
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The entity record details.
   */
  entityInfo?: GetKgEntityResponseBodyEntityInfo;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
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
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
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

