// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataEventSelectorResponseBodySlsDeliveryConfigs extends $dara.Model {
  /**
   * @example
   * 2024-12-18T03:25:36Z
   */
  createTime?: string;
  /**
   * @example
   * LogServiceException
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * acs:log:cn-shanghai:159498693826****:project/actiontrail-log-159498693826****-cn-shanghai
   */
  regionSlsProjectArn?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * cn-shanghai
   */
  trailRegion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      regionSlsProjectArn: 'RegionSlsProjectArn',
      status: 'Status',
      trailRegion: 'TrailRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      regionSlsProjectArn: 'string',
      status: 'string',
      trailRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataEventSelectorResponseBody extends $dara.Model {
  /**
   * @example
   * [{"EventName":{"Equals":["GetObject","CopyObject","AppendObject"]},"ReadWriteType":"All","ServiceName":"Oss"}]
   */
  dataEventSelectors?: string;
  /**
   * @example
   * true
   */
  isTrailAllRegion?: boolean;
  /**
   * @example
   * 90771C32-635B-529C-950C-75A9607D****
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  slsDeliveryConfigs?: GetDataEventSelectorResponseBodySlsDeliveryConfigs[];
  /**
   * @example
   * acs:actiontrail:cn-shanghai:159498693826****:trail/trail-name
   */
  trailArn?: string;
  static names(): { [key: string]: string } {
    return {
      dataEventSelectors: 'DataEventSelectors',
      isTrailAllRegion: 'IsTrailAllRegion',
      requestId: 'RequestId',
      slsDeliveryConfigs: 'SlsDeliveryConfigs',
      trailArn: 'TrailArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEventSelectors: 'string',
      isTrailAllRegion: 'boolean',
      requestId: 'string',
      slsDeliveryConfigs: { 'type': 'array', 'itemType': GetDataEventSelectorResponseBodySlsDeliveryConfigs },
      trailArn: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.slsDeliveryConfigs)) {
      $dara.Model.validateArray(this.slsDeliveryConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

