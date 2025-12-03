// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQosPolicyRequest extends $dara.Model {
  description?: string;
  federationId?: string;
  fileSystemId?: string;
  flowIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  inputRegionId?: string;
  maxIOBandWidth?: number;
  maxIOps?: number;
  maxMetaQps?: number;
  reqTags?: string[];
  zoneIds?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      federationId: 'FederationId',
      fileSystemId: 'FileSystemId',
      flowIds: 'FlowIds',
      inputRegionId: 'InputRegionId',
      maxIOBandWidth: 'MaxIOBandWidth',
      maxIOps: 'MaxIOps',
      maxMetaQps: 'MaxMetaQps',
      reqTags: 'ReqTags',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      federationId: 'string',
      fileSystemId: 'string',
      flowIds: { 'type': 'array', 'itemType': 'number' },
      inputRegionId: 'string',
      maxIOBandWidth: 'number',
      maxIOps: 'number',
      maxMetaQps: 'number',
      reqTags: { 'type': 'array', 'itemType': 'string' },
      zoneIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.flowIds)) {
      $dara.Model.validateArray(this.flowIds);
    }
    if(Array.isArray(this.reqTags)) {
      $dara.Model.validateArray(this.reqTags);
    }
    if(Array.isArray(this.zoneIds)) {
      $dara.Model.validateArray(this.zoneIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

