// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaEntitiesRequestAttributeFilters extends $dara.Model {
  /**
   * @remarks
   * The filter attribute key.
   * 
   * This parameter is required.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The list of filter attribute values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaEntitiesRequestCustomAttributeFilters extends $dara.Model {
  /**
   * @remarks
   * The filter attribute key.
   * 
   * This parameter is required.
   * 
   * @example
   * custom_attr_1
   */
  key?: string;
  /**
   * @remarks
   * The list of filter attribute values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * The entity attribute filter conditions. Multiple filter conditions have an AND relationship. Multiple values within the same filter condition have an OR relationship.
   * 
   * @example
   * []
   */
  attributeFilters?: ListMetaEntitiesRequestAttributeFilters[];
  /**
   * @remarks
   * The comment filter. Performs token matching.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The custom attribute filter conditions. Multiple filter conditions have an AND relationship. Multiple values within the same filter condition have an OR relationship. Only ENUM custom attributes are supported.
   * 
   * @example
   * []
   */
  customAttributeFilters?: ListMetaEntitiesRequestCustomAttributeFilters[];
  /**
   * @remarks
   * The entity type.
   * 
   * This parameter is required.
   * 
   * @example
   * custom_entity-customer_api
   */
  entityType?: string;
  /**
   * @remarks
   * The maximum number of results per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The entity name filter. Performs keyword-contains matching.
   * 
   * @example
   * xm_create_test
   */
  name?: string;
  /**
   * @remarks
   * The pagination token. Do not specify this parameter for the first request. For subsequent requests, use the NextToken value returned in the previous response.
   * 
   * @example
   * AAAAAaUpAxoCTD/+sbOf3f+uxvnYyILMeAjoTFQSX64R12GN
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort direction.
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * Name
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      attributeFilters: 'AttributeFilters',
      comment: 'Comment',
      customAttributeFilters: 'CustomAttributeFilters',
      entityType: 'EntityType',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      order: 'Order',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeFilters: { 'type': 'array', 'itemType': ListMetaEntitiesRequestAttributeFilters },
      comment: 'string',
      customAttributeFilters: { 'type': 'array', 'itemType': ListMetaEntitiesRequestCustomAttributeFilters },
      entityType: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      order: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeFilters)) {
      $dara.Model.validateArray(this.attributeFilters);
    }
    if(Array.isArray(this.customAttributeFilters)) {
      $dara.Model.validateArray(this.customAttributeFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

