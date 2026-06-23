// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaEntitiesRequestAttributeFilters extends $dara.Model {
  /**
   * @remarks
   * The key of the entity attribute to filter by.
   * 
   * This parameter is required.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * A list of values for the specified entity attribute.
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
   * The key of the custom attribute to filter by.
   * 
   * This parameter is required.
   * 
   * @example
   * custom_attr_1
   */
  key?: string;
  /**
   * @remarks
   * A list of values for the specified custom attribute.
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
   * Conditions for filtering entities by entity attributes. The `AND` operator is used between different filters, and the `OR` operator is used for multiple values within a single filter.
   * 
   * @example
   * []
   */
  attributeFilters?: ListMetaEntitiesRequestAttributeFilters[];
  /**
   * @remarks
   * Filters entities by comment. This is a token-based match.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * Conditions for filtering entities by custom attributes. The `AND` operator is used between different filters, and the `OR` operator is used for multiple values within a single filter. This parameter supports only `ENUM` custom attributes.
   * 
   * @example
   * []
   */
  customAttributeFilters?: ListMetaEntitiesRequestCustomAttributeFilters[];
  /**
   * @remarks
   * The type of the entity to list.
   * 
   * This parameter is required.
   * 
   * @example
   * custom_entity-customer_api
   */
  entityType?: string;
  /**
   * @remarks
   * The maximum number of results to return per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Filters entities by name. This is a containment match.
   * 
   * @example
   * xm_create_test
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that specifies the next page of results. To retrieve the first page, do not specify this parameter. To retrieve subsequent pages, set this parameter to the `NextToken` value from the previous response.
   * 
   * @example
   * AAAAAaUpAxoCTD/+sbOf3f+uxvnYyILMeAjoTFQSX64R12GN
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Valid values: `Asc` and `Desc`.
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The field to use for sorting the results.
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

