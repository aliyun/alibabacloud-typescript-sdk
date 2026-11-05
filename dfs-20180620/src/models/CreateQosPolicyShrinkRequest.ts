// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQosPolicyShrinkRequest extends $dara.Model {
  description?: string;
  federationId?: string;
  fileSystemId?: string;
  flowIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputRegionId?: string;
  maxIOBandWidth?: number;
  maxIOps?: number;
  maxMetaQps?: number;
  reqTagsShrink?: string;
  zoneIdsShrink?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      federationId: 'FederationId',
      fileSystemId: 'FileSystemId',
      flowIdsShrink: 'FlowIds',
      inputRegionId: 'InputRegionId',
      maxIOBandWidth: 'MaxIOBandWidth',
      maxIOps: 'MaxIOps',
      maxMetaQps: 'MaxMetaQps',
      reqTagsShrink: 'ReqTags',
      zoneIdsShrink: 'ZoneIds',
      storageType: 'storageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      federationId: 'string',
      fileSystemId: 'string',
      flowIdsShrink: 'string',
      inputRegionId: 'string',
      maxIOBandWidth: 'number',
      maxIOps: 'number',
      maxMetaQps: 'number',
      reqTagsShrink: 'string',
      zoneIdsShrink: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

