// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregatorsResponseBodyAggregatorsResultAggregators } from "./ListAggregatorsResponseBodyAggregatorsResultAggregators";


export class ListAggregatorsResponseBodyAggregatorsResult extends $dara.Model {
  /**
   * @remarks
   * The list of the account groups.
   */
  aggregators?: ListAggregatorsResponseBodyAggregatorsResultAggregators[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * TGlzdFJlc291cmNlU2hhcmVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      aggregators: 'Aggregators',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregators: { 'type': 'array', 'itemType': ListAggregatorsResponseBodyAggregatorsResultAggregators },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aggregators)) {
      $dara.Model.validateArray(this.aggregators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

