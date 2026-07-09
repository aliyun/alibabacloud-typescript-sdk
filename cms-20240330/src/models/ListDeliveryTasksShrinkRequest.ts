// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeliveryTasksShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Fuzzy search by task name or task ID (LIKE semantics).
   * 
   * @example
   * test-task
   */
  keyWords?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Leave this parameter empty for the first request. For subsequent requests, pass the nextToken value returned in the previous response.
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
   * The list of tags.
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

