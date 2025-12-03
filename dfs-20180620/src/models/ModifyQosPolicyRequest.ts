// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyQosPolicyRequest extends $dara.Model {
  description?: string;
  federationId?: string;
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputRegionId?: string;
  maxIOBandWidth?: number;
  maxIOps?: number;
  maxMetaQps?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  qosPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      federationId: 'FederationId',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      maxIOBandWidth: 'MaxIOBandWidth',
      maxIOps: 'MaxIOps',
      maxMetaQps: 'MaxMetaQps',
      qosPolicyId: 'QosPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      federationId: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      maxIOBandWidth: 'number',
      maxIOps: 'number',
      maxMetaQps: 'number',
      qosPolicyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

