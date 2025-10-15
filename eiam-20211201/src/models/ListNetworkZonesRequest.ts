// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkZonesRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 分页查询时每页行数。默认值为20，最大值为100。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 网络ID集合
   */
  networkZoneIds?: string[];
  /**
   * @remarks
   * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @example
   * PTxxxxxexample
   */
  previousToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      networkZoneIds: 'NetworkZoneIds',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      networkZoneIds: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      previousToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkZoneIds)) {
      $dara.Model.validateArray(this.networkZoneIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

