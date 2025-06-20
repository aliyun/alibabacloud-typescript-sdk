// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetTestResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100.
   * 
   * Default value:
   * 
   * *   If you do not configure this parameter or if you set this parameter to a value less than 20, the default value is 20.
   * *   If you set this parameter to a value that is greater than 100, the default value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The type of the network test.
   * 
   * @example
   * DelayTest
   */
  netTestType?: string;
  /**
   * @remarks
   * The token that determines the start position of the query. Set this parameter to the value of the NextToken parameter that is returned from the last call.
   * 
   * @example
   * 3a6b93229825ac667104463b56790c91
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxno4vh5muoq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      netTestType: 'NetTestType',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      netTestType: 'string',
      nextToken: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

