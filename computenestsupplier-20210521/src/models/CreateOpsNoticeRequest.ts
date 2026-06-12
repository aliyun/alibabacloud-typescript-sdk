// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpsNoticeRequest extends $dara.Model {
  /**
   * @remarks
   * The properties of the O\\&M item.
   * 
   * @example
   * {"cveId":"CVE-2021-4034"}
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * The category of the notice. Valid values:
   * 
   * - Availability
   * 
   * - Cost
   * 
   * - Performance
   * 
   * - Recovery
   * 
   * - Security
   * 
   * This parameter is required.
   * 
   * @example
   * Availability
   */
  category?: string;
  /**
   * @remarks
   * A client token to ensure that the request is idempotent. Generate a unique token for each request. The token can contain only ASCII characters. Note: If you do not set this parameter, the system uses the RequestId as the ClientToken. The RequestId may be different for each request.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * The content of the notice.
   * 
   * This parameter is required.
   * 
   * @example
   * content
   */
  content?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The service versions to which the notice applies.
   */
  serviceVersion?: string[];
  /**
   * @remarks
   * The severity level of the notice. Valid values:
   * 
   * - Critical
   * 
   * - High
   * 
   * - Medium
   * 
   * - Low
   * 
   * This parameter is required.
   * 
   * @example
   * High
   */
  severity?: string;
  /**
   * @remarks
   * The solution.
   * 
   * @example
   * You need to upgrade the service instance
   */
  solutions?: string;
  /**
   * @remarks
   * The type of the notice. Valid values:
   * 
   * - ServiceInstanceUpgrade: Upgrade
   * 
   * - VulnerabilityFix: Vulnerability
   * 
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

