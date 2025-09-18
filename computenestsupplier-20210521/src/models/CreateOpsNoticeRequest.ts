// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpsNoticeRequest extends $dara.Model {
  /**
   * @example
   * {"cveId":"CVE-2021-4034"}
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Availability
   */
  category?: string;
  /**
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * content
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  serviceVersion?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * High
   */
  severity?: string;
  /**
   * @example
   * You need to upgrade the service instance
   */
  solutions?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ServiceInstanceUpgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      category: 'Category',
      clientToken: 'ClientToken',
      content: 'Content',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      severity: 'Severity',
      solutions: 'Solutions',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      category: 'string',
      clientToken: 'string',
      content: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
      solutions: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(Array.isArray(this.serviceVersion)) {
      $dara.Model.validateArray(this.serviceVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

