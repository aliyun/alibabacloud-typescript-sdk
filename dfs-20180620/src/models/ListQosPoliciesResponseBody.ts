// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQosPoliciesResponseBodyQosPolicies extends $dara.Model {
  description?: string;
  federationId?: string;
  fileSystemId?: string;
  flowIds?: string;
  maxIOBandWidth?: number;
  maxIOps?: number;
  maxMetaQps?: number;
  qosPolicyId?: string;
  reqTags?: string;
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      federationId: 'FederationId',
      fileSystemId: 'FileSystemId',
      flowIds: 'FlowIds',
      maxIOBandWidth: 'MaxIOBandWidth',
      maxIOps: 'MaxIOps',
      maxMetaQps: 'MaxMetaQps',
      qosPolicyId: 'QosPolicyId',
      reqTags: 'ReqTags',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      federationId: 'string',
      fileSystemId: 'string',
      flowIds: 'string',
      maxIOBandWidth: 'number',
      maxIOps: 'number',
      maxMetaQps: 'number',
      qosPolicyId: 'string',
      reqTags: 'string',
      zoneIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQosPoliciesResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  qosPolicies?: ListQosPoliciesResponseBodyQosPolicies[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      qosPolicies: 'QosPolicies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      qosPolicies: { 'type': 'array', 'itemType': ListQosPoliciesResponseBodyQosPolicies },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.qosPolicies)) {
      $dara.Model.validateArray(this.qosPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

