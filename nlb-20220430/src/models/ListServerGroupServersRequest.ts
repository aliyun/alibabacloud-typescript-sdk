// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerGroupServersRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return in each call. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to specify a particular page of results. Valid values:
   * 
   * *   Left this parameter empty if this is the first query or the only query.
   * *   Set this parameter to the value of NextToken obtained from the previous query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sgp-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The IDs of the backend servers. You can specify up to 40 backend servers in each call.
   */
  serverIds?: string[];
  /**
   * @remarks
   * The IP addresses of the backend servers. You can specify up to 40 backend servers in each call.
   */
  serverIps?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serverGroupId: 'ServerGroupId',
      serverIds: 'ServerIds',
      serverIps: 'ServerIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serverGroupId: 'string',
      serverIds: { 'type': 'array', 'itemType': 'string' },
      serverIps: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serverIds)) {
      $dara.Model.validateArray(this.serverIds);
    }
    if(Array.isArray(this.serverIps)) {
      $dara.Model.validateArray(this.serverIps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

