// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetTestResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100.
   * 
   * Default value:
   * 
   * - If you do not set this parameter or you set it to a value less than 20, the default value is 20.
   * - If you set the value to greater than 100, the default value is 100.
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
   * The token that is used to retrieve the next page of results. Set this parameter to the value of \\`NextToken\\` that is returned in the last response.
   * 
   * @example
   * 3a6b93229825ac667104463b5679****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group.
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

