// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaEntitiesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The entity attribute filter conditions. Multiple filter conditions have an AND relationship. Multiple values within the same filter condition have an OR relationship.
   * 
   * @example
   * []
   */
  attributeFiltersShrink?: string;
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
  customAttributeFiltersShrink?: string;
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
      attributeFiltersShrink: 'AttributeFilters',
      comment: 'Comment',
      customAttributeFiltersShrink: 'CustomAttributeFilters',
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
      attributeFiltersShrink: 'string',
      comment: 'string',
      customAttributeFiltersShrink: 'string',
      entityType: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      order: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

