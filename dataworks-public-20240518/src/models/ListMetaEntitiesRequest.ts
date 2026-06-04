// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaEntitiesRequestAttributeFilters extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * key1
   */
  key?: string;
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
   * This parameter is required.
   * 
   * @example
   * custom_attr_1
   */
  key?: string;
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
   * @example
   * []
   */
  attributeFilters?: ListMetaEntitiesRequestAttributeFilters[];
  /**
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @example
   * []
   */
  customAttributeFilters?: ListMetaEntitiesRequestCustomAttributeFilters[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom_entity-customer_api
   */
  entityType?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * xm_create_test
   */
  name?: string;
  /**
   * @example
   * AAAAAaUpAxoCTD/+sbOf3f+uxvnYyILMeAjoTFQSX64R12GN
   */
  nextToken?: string;
  /**
   * @example
   * Asc
   */
  order?: string;
  /**
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

