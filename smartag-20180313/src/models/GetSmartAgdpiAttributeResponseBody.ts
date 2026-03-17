// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmartAGDpiAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the DPI-based monitoring feature. Valid values:
   * 
   * *   **Active**: enabled
   * *   **Inactive**: disabled
   * 
   * @example
   * Inactive
   */
  dpiMonitorStatus?: string;
  /**
   * @remarks
   * The status of the DPI feature. Valid values:
   * 
   * *   **On**: enabled
   * *   **Off**: disabled
   * 
   * @example
   * On
   */
  dpiStatus?: string;
  /**
   * @remarks
   * The name of the Log Service Logstore that is associated with the DPI feature.
   * 
   * @example
   * test1
   */
  logstoreName?: string;
  /**
   * @remarks
   * The name of the Log Service project that is associated with the DPI feature.
   * 
   * @example
   * test2
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2997DC4-F1A2-418B-81FC-C8892CD31CFF
   */
  requestId?: string;
  /**
   * @remarks
   * The region where Log Service is deployed.
   * 
   * @example
   * cn-shanghai
   */
  slsRegion?: string;
  static names(): { [key: string]: string } {
    return {
      dpiMonitorStatus: 'DpiMonitorStatus',
      dpiStatus: 'DpiStatus',
      logstoreName: 'LogstoreName',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      slsRegion: 'SlsRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiMonitorStatus: 'string',
      dpiStatus: 'string',
      logstoreName: 'string',
      projectName: 'string',
      requestId: 'string',
      slsRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

