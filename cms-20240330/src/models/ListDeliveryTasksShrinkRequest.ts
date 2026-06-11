// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeliveryTasksShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The keywords for a fuzzy search by task name or task ID. The search uses `LIKE` semantics.
   * 
   * @example
   * test-task
   */
  keyWords?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used to retrieve the next page of results. You do not need to specify this parameter for the first request. For subsequent requests, set this parameter to the `nextToken` value that is returned in the previous response.
   * 
   * @example
   * sjC5rekx93Ew7K7VcmI3wkBZBYQ-GphB2ilQu3zJCGxoZuicwyJznfo2riTjr-lq
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2bhocin5e2na
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'keyWords',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      resourceGroupId: 'resourceGroupId',
      tagShrink: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

