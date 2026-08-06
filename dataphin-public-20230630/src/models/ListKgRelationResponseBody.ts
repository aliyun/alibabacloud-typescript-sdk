// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKgRelationResponseBodyPageResultRelationListPropertyList extends $dara.Model {
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
   * The property data type. Valid values: STRING (string), INTEGER (integer), FLOAT (float), BOOLEAN (boolean), DATE (date), LIST (list), and others.
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

export class ListKgRelationResponseBodyPageResultRelationList extends $dara.Model {
  /**
   * @remarks
   * The relationship record property list.
   */
  propertyList?: ListKgRelationResponseBodyPageResultRelationListPropertyList[];
  /**
   * @remarks
   * The relationship record ID.
   * 
   * @example
   * abc-xxx
   */
  relationId?: string;
  /**
   * @remarks
   * The relationship type code.
   * 
   * @example
   * BELONG_TO
   */
  relationType?: string;
  /**
   * @remarks
   * The source entity ID.
   * 
   * @example
   * abc-xxx
   */
  sourceEntityId?: string;
  /**
   * @remarks
   * The target entity ID.
   * 
   * @example
   * abd-xxx
   */
  targetEntityId?: string;
  static names(): { [key: string]: string } {
    return {
      propertyList: 'PropertyList',
      relationId: 'RelationId',
      relationType: 'RelationType',
      sourceEntityId: 'SourceEntityId',
      targetEntityId: 'TargetEntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyList: { 'type': 'array', 'itemType': ListKgRelationResponseBodyPageResultRelationListPropertyList },
      relationId: 'string',
      relationType: 'string',
      sourceEntityId: 'string',
      targetEntityId: 'string',
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

export class ListKgRelationResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The paged relationship record list.
   */
  relationList?: ListKgRelationResponseBodyPageResultRelationList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      relationList: 'RelationList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationList: { 'type': 'array', 'itemType': ListKgRelationResponseBodyPageResultRelationList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.relationList)) {
      $dara.Model.validateArray(this.relationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKgRelationResponseBody extends $dara.Model {
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
   * The paged query result.
   */
  pageResult?: ListKgRelationResponseBodyPageResult;
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListKgRelationResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

