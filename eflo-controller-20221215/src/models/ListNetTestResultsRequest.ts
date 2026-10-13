// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetTestResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: 100.
   * 
   * Default value:
   * 
   * - If this parameter is not specified or is set to a value less than 20, the default value is 20.
   * 
   * - If this parameter is set to a value greater than 100, the default value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The network test type.
   * 
   * @example
   * DelayTest
   */
  netTestType?: string;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of NextToken that is returned from the previous API call.
   * 
   * @example
   * 3a6b93229825ac667104463b5679****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxno4vh5****
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

