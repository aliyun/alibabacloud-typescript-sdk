// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLogStoreConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of Alibaba Cloud Global Accelerator (GA).
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * A list of custom header field names to be included in access logs.
   */
  accessLogRecordCustomizedHeaderList?: string[];
  /**
   * @remarks
   * Specifies whether to include custom headers in access logs. Valid values:
   * 
   * - **true**: Yes.
   * - **false** (default): No.
   * 
   * > You can set this parameter to **true** only when the **AccessLogEnabled** toggle for the instance is turned on.
   * 
   * @example
   * False
   */
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  /**
   * @remarks
   * An idempotent token.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the endpoint group.
   * 
   * This parameter is required.
   * 
   * @example
   * epg-bp1dmlohjjz4kqaun****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The listener ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-xxxxxxxxxxxxxxx
   */
  listenerId?: string;
  /**
   * @remarks
   * The region ID of the Alibaba Cloud Global Accelerator (GA) instance. The only valid value is cn-hangzhou.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-access-log-epg-01
   */
  slsLogStoreName?: string;
  /**
   * @remarks
   * The name of the Data Service Project.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-access-log
   */
  slsProjectName?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      accessLogRecordCustomizedHeaderList: 'AccessLogRecordCustomizedHeaderList',
      accessLogRecordCustomizedHeadersEnabled: 'AccessLogRecordCustomizedHeadersEnabled',
      clientToken: 'ClientToken',
      endpointGroupId: 'EndpointGroupId',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
      slsLogStoreName: 'SlsLogStoreName',
      slsProjectName: 'SlsProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      accessLogRecordCustomizedHeaderList: { 'type': 'array', 'itemType': 'string' },
      accessLogRecordCustomizedHeadersEnabled: 'boolean',
      clientToken: 'string',
      endpointGroupId: 'string',
      listenerId: 'string',
      regionId: 'string',
      slsLogStoreName: 'string',
      slsProjectName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessLogRecordCustomizedHeaderList)) {
      $dara.Model.validateArray(this.accessLogRecordCustomizedHeaderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

