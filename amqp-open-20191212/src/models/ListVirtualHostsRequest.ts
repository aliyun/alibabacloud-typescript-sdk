// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirtualHostsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1880770869023***
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values:
   * **1 to 100**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. If the number of results exceeds the value of MaxResults, NextToken is returned. You can include this parameter in the next call to retrieve the next page of results. Leave this parameter empty for the first call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

