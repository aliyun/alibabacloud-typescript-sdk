// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDedicatedBlockStorageClusterInventoryDataRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure idempotence ](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * dbsc-xxx
   */
  dbscId?: string;
  /**
   * @remarks
   * End timestamp of trend data.
   * 
   * This parameter is required.
   * 
   * @example
   * 1606403800
   */
  endTime?: number;
  /**
   * @remarks
   * The time interval (seconds) between data retrieval points.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * Start timestamp of trend data.
   * 
   * This parameter is required.
   * 
   * @example
   * 1606303800
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dbscId: 'DbscId',
      endTime: 'EndTime',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dbscId: 'string',
      endTime: 'number',
      period: 'number',
      regionId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

