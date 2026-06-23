// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaEntitiesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Conditions for filtering entities by entity attributes. The `AND` operator is used between different filters, and the `OR` operator is used for multiple values within a single filter.
   * 
   * @example
   * []
   */
  attributeFiltersShrink?: string;
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
  customAttributeFiltersShrink?: string;
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

