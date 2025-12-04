// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataEventSelectorsResponseBodyDataDataEventSelectorInfosSlsDeliveryConfigs extends $dara.Model {
  /**
   * @example
   * 2023-09-30T16:11Z
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

export class ListDataEventSelectorsResponseBodyDataDataEventSelectorInfos extends $dara.Model {
  /**
   * @example
   * [{"EventName":{"Equals":["GetObject","CopyObject","AppendObject"]},"ReadWriteType":"All","ServiceName":"Oss"}]
   */
  eventSelectors?: string;
  /**
   * @example
   * true
   */
  isTrailAllRegion?: boolean;
  slsDeliveryConfigs?: ListDataEventSelectorsResponseBodyDataDataEventSelectorInfosSlsDeliveryConfigs[];
  /**
   * @example
   * acs:actiontrail:cn-shanghai:159498693826****:trail/trail-name
   */
  trailArn?: string;
  /**
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
  dataEventSelectorInfos?: ListDataEventSelectorsResponseBodyDataDataEventSelectorInfos[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
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
  data?: ListDataEventSelectorsResponseBodyData;
  /**
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

