// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupUserRequest extends $dara.Model {
  /**
   * @example
   * ENTERPRISE
   */
  bizType?: string;
  filter?: string;
  /**
   * @example
   * ug-12341234****
   */
  groupId?: string;
  maxResults?: number;
  nextToken?: string;
  /**
   * @example
   * co-0esnf80jab***
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      filter: 'Filter',
      groupId: 'GroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      filter: 'string',
      groupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      solutionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

