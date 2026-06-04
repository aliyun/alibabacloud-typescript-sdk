// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaEntitiesShrinkRequest extends $dara.Model {
  /**
   * @example
   * []
   */
  attributeFiltersShrink?: string;
  /**
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @example
   * []
   */
  customAttributeFiltersShrink?: string;
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

