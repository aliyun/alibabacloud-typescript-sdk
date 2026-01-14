// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLogStoreConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  accessLogRecordCustomizedHeaderList?: string[];
  /**
   * @example
   * False
   */
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * epg-bp1dmlohjjz4kqaun****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lsr-xxxxxxxxxxxxxxx
   */
  listenerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ga-access-log-epg-01
   */
  slsLogStoreName?: string;
  /**
   * @remarks
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

