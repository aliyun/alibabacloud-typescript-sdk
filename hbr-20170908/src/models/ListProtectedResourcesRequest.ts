// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProtectedResourcesRequest extends $dara.Model {
  /**
   * @example
   * BASIC
   */
  createdByProduct?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * aWQj********MCMy
   */
  nextToken?: string;
  /**
   * @example
   * i-wz95************7zrd
   */
  resourceId?: string;
  /**
   * @example
   * 10
   */
  skip?: number;
  /**
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      createdByProduct: 'CreatedByProduct',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      skip: 'Skip',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdByProduct: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceId: 'string',
      skip: 'number',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

