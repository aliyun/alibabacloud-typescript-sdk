// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReplicaEdgeSupportedResponseBodySupportedRegionsZones extends $dara.Model {
  /**
   * @remarks
   * Indicates whether replication time control is supported.
   * 
   * @example
   * false
   */
  supportRtc?: boolean;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      supportRtc: 'SupportRtc',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportRtc: 'boolean',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReplicaEdgeSupportedResponseBodySupportedRegions extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The set of zone information.
   */
  zones?: ListReplicaEdgeSupportedResponseBodySupportedRegionsZones[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zones: { 'type': 'array', 'itemType': ListReplicaEdgeSupportedResponseBodySupportedRegionsZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReplicaEdgeSupportedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * Valid values: 1 to 500.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query. If NextToken is empty, no more results are available.
   * 
   * @example
   * e71d8a535bd9c****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17EE62D8-064E-5404-8B0D-72122478****
   */
  requestId?: string;
  /**
   * @remarks
   * The set of region information.
   */
  supportedRegions?: ListReplicaEdgeSupportedResponseBodySupportedRegions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      supportedRegions: 'SupportedRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      supportedRegions: { 'type': 'array', 'itemType': ListReplicaEdgeSupportedResponseBodySupportedRegions },
    };
  }

  validate() {
    if(Array.isArray(this.supportedRegions)) {
      $dara.Model.validateArray(this.supportedRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

