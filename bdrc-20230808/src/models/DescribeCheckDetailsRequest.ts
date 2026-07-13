// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return on each page. The default value is 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. Set this parameter to the value of NextToken that is returned from the last API call. For more information about how to set this parameter, see the API description.
   * 
   * @example
   * cae**********699
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique identifier of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ecs:123***890:cn-shanghai:instance/i-001***90
   */
  resourceArn?: string;
  /**
   * @remarks
   * The unique ID of the data protection rule.
   * 
   * @example
   * rule-000***dav
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceArn: 'ResourceArn',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceArn: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

