// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataEventSelectorsResponseBodyDataDataEventSelectorInfosSlsDeliveryConfigs extends $dara.Model {
  /**
   * @remarks
   * The time when the trail was created.
   * 
   * @example
   * 2023-09-30T16:11Z
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
   * The initialization status of the tracked resource.
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

export class ListDataEventSelectorsResponseBodyDataDataEventSelectorInfos extends $dara.Model {
  /**
   * @remarks
   * The configuration of the data event selector. This parameter is a JSON array that can contain a maximum of 20 elements.
   * 
   * Each element in the JSON array includes the following fields:
   * 
   * - `ServiceName`: The name of the Alibaba Cloud service that supports data events.
   * 
   * - `ReadWriteType`: The type of data event. Valid values: Read, Write, and All.
   * 
   * - `EventName`: This field contains the `Equals` and `NotEquals` subfields.
   * 
   *   For example, the following configuration specifies that only `GetObject`, `CopyObject`, and `AppendObject`events are delivered:
   * 
   *   `{"EventName":{"Equals":["GetObject","CopyObject","AppendObject"]}}`
   * 
   *   If you specify `NotEquals`, events other than `GetObject`, `CopyObject`, and `AppendObject` are delivered.
   * 
   * - `ResourceArn`: This field also contains the `Equals` and `NotEquals` subfields, similar to `EventName`. For example:
   * 
   *   `{"ResourceArn":{"Equals":[arn1,...,arnx]}}`
   * 
   * @example
   * [{"EventName":{"Equals":["GetObject","CopyObject","AppendObject"]},"ReadWriteType":"All","ServiceName":"Oss"}]
   */
  eventSelectors?: string;
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
   * The list of configurations for delivering events to Simple Log Service (SLS).
   */
  slsDeliveryConfigs?: ListDataEventSelectorsResponseBodyDataDataEventSelectorInfosSlsDeliveryConfigs[];
  /**
   * @remarks
   * The ARN of the trail.
   * 
   * @example
   * acs:actiontrail:cn-shanghai:159498693826****:trail/trail-name
   */
  trailArn?: string;
  /**
   * @remarks
   * The name of the trail.
   * 
   * @example
   * trail-name
   */
  trailName?: string;
  static names(): { [key: string]: string } {
    return {
      eventSelectors: 'EventSelectors',
      isTrailAllRegion: 'IsTrailAllRegion',
      slsDeliveryConfigs: 'SlsDeliveryConfigs',
      trailArn: 'TrailArn',
      trailName: 'TrailName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSelectors: 'string',
      isTrailAllRegion: 'boolean',
      slsDeliveryConfigs: { 'type': 'array', 'itemType': ListDataEventSelectorsResponseBodyDataDataEventSelectorInfosSlsDeliveryConfigs },
      trailArn: 'string',
      trailName: 'string',
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

export class ListDataEventSelectorsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of data event selectors.
   */
  dataEventSelectorInfos?: ListDataEventSelectorsResponseBodyDataDataEventSelectorInfos[];
  /**
   * @remarks
   * The maximum number of entries returned for the current request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * VjE6bHJlTGoxdm1M****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      dataEventSelectorInfos: 'DataEventSelectorInfos',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEventSelectorInfos: { 'type': 'array', 'itemType': ListDataEventSelectorsResponseBodyDataDataEventSelectorInfos },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataEventSelectorInfos)) {
      $dara.Model.validateArray(this.dataEventSelectorInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataEventSelectorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListDataEventSelectorsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8A74FD2E-A9B9-461C-BCE9-D9668DF1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataEventSelectorsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

