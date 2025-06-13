// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyServiceConfigRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  serviceDesc?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      serviceDesc: 'ServiceDesc',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      serviceDesc: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

