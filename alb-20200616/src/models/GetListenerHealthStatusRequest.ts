// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerHealthStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the health check results of forwarding rules. Valid values:
   * 
   * - **true**: Include the results.
   * - **false** (default): Do not include the results.
   * 
   * @example
   * true
   */
  includeRule?: boolean;
  /**
   * @remarks
   * The listener ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-o4u54y73wq7b******
   */
  listenerId?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page in a paginated query. Valid values: **1** to **30**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether there is a token for the next query. Valid values:
   * - For the first query or when no next query exists, leave this parameter empty.
   * - If a next query exists, set this parameter to the **NextToken** value returned by the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      includeRule: 'IncludeRule',
      listenerId: 'ListenerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeRule: 'boolean',
      listenerId: 'string',
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

