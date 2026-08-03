// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataEventSelectorResponseBodySlsDeliveryConfigs extends $dara.Model {
  /**
   * @remarks
   * The time when the trail was created.
   * 
   * @example
   * 2024-12-18T03:25:36Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error code returned if the resource initialization fails.
   * 
   * @example
   * LogServiceException
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the resource initialization fails.
   * 
   * @example
   * RequestError Web request failed.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the SLS project in the region where events are delivered.
   * 
   * @example
   * acs:log:cn-shanghai:159498693826****:project/actiontrail-log-159498693826****-cn-shanghai
   */
  regionSlsProjectArn?: string;
  /**
   * @remarks
   * The initialization status of the resource for the trail.
   * 
   * - success
   * 
   * - failure
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The region of the trail.
   * 
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
   * @remarks
   * The configuration of the data event selector. This parameter is a JSON array that can contain a maximum of 20 elements.
   * 
   * Each element in the JSON array includes the following elements:
   * 
   * - `ServiceName`: The name of the Alibaba Cloud service that supports data events.
   * 
   * - `ReadWriteType`: The type of data event. Valid values: Read, Write, and All.
   * 
   * - `EventName`: This element contains the `Equals` and `NotEquals` fields.
   * 
   *   For example, the following configuration specifies that only `GetObject`, `CopyObject`, and `AppendObject`events are delivered:
   * 
   *   `{"EventName":{"Equals":["GetObject","CopyObject","AppendObject"]}}`
   * 
   *   If you specify `NotEquals`, events other than `GetObject`, `CopyObject`, and `AppendObject` are delivered.
   * 
   * - `ResourceArn`: This element also contains the `Equals` and `NotEquals` fields, similar to `EventName`. For example:
   * 
   *   `{"ResourceArn":{"Equals":[arn1,...,arnx]}}`
   * 
   * @example
   * [{"EventName":{"Equals":["GetObject","CopyObject","AppendObject"]},"ReadWriteType":"All","ServiceName":"Oss"}]
   */
  dataEventSelectors?: string;
  /**
   * @remarks
   * Specifies whether the trail tracks data events in all regions.
   * 
   * Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  isTrailAllRegion?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90771C32-635B-529C-950C-75A9607D****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of configurations for delivering events to Simple Log Service (SLS).
   * 
   * This parameter is required.
   */
  slsDeliveryConfigs?: GetDataEventSelectorResponseBodySlsDeliveryConfigs[];
  /**
   * @remarks
   * The ARN of the trail.
   * 
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

