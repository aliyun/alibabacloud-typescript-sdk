// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeliveryTasksShrinkRequest extends $dara.Model {
  /**
   * @example
   * test-task
   */
  keyWords?: string;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * sjC5rekx93Ew7K7VcmI3wkBZBYQ-GphB2ilQu3zJCGxoZuicwyJznfo2riTjr-lq
   */
  nextToken?: string;
  /**
   * @example
   * rg-aek2bhocin5e2na
   */
  resourceGroupId?: string;
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

