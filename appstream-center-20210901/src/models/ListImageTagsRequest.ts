// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The label categorization to query.
   * 
   * @example
   * Gpu
   */
  category?: string;
  /**
   * @remarks
   * A compatibility field. The current version does not use this field to specify the number of returned entries.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to determine whether a next query is available. This parameter is not currently supported.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kEmoGlTNe3ekUrwnesWV1Vn+tWdc+4WoaoMP/kUNF7Gg==
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

