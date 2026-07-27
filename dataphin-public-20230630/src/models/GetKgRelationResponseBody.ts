// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKgRelationResponseBodyRelationInfoPropertyList extends $dara.Model {
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

export class GetKgRelationResponseBodyRelationInfo extends $dara.Model {
  propertyList?: GetKgRelationResponseBodyRelationInfoPropertyList[];
  /**
   * @example
   * abc-xxx
   */
  relationId?: string;
  /**
   * @example
   * BELONG_TO
   */
  relationType?: string;
  /**
   * @example
   * abc-xxx
   */
  sourceEntityId?: string;
  /**
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
      propertyList: { 'type': 'array', 'itemType': GetKgRelationResponseBodyRelationInfoPropertyList },
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

export class GetKgRelationResponseBody extends $dara.Model {
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
  relationInfo?: GetKgRelationResponseBodyRelationInfo;
  /**
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      relationInfo: 'RelationInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      relationInfo: GetKgRelationResponseBodyRelationInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.relationInfo && typeof (this.relationInfo as any).validate === 'function') {
      (this.relationInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

