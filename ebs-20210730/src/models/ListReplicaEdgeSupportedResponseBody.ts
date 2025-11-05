// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReplicaEdgeSupportedResponseBodySupportedRegionsZones extends $dara.Model {
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * e71d8a535bd9c****
   */
  nextToken?: string;
  /**
   * @example
   * 17EE62D8-064E-5404-8B0D-72122478****
   */
  requestId?: string;
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

