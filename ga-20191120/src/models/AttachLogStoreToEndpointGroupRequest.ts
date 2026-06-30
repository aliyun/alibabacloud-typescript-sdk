// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachLogStoreToEndpointGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  accessLogRecordCustomizedHeaderList?: string[];
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of endpoint group IDs.
   * 
   * This parameter is required.
   */
  endpointGroupIds?: string[];
  /**
   * @remarks
   * The instance ID of the listener.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The region ID of the Alibaba Cloud Global Accelerator (GA) instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the SLS Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-01
   */
  slsLogStoreName?: string;
  /**
   * @remarks
   * The name of the SLS project.
   * 
   * This parameter is required.
   * 
   * @example
   * pn-01
   */
  slsProjectName?: string;
  /**
   * @remarks
   * The region ID of the SLS service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  slsRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      accessLogRecordCustomizedHeaderList: 'AccessLogRecordCustomizedHeaderList',
      accessLogRecordCustomizedHeadersEnabled: 'AccessLogRecordCustomizedHeadersEnabled',
      clientToken: 'ClientToken',
      endpointGroupIds: 'EndpointGroupIds',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
      slsLogStoreName: 'SlsLogStoreName',
      slsProjectName: 'SlsProjectName',
      slsRegionId: 'SlsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      accessLogRecordCustomizedHeaderList: { 'type': 'array', 'itemType': 'string' },
      accessLogRecordCustomizedHeadersEnabled: 'boolean',
      clientToken: 'string',
      endpointGroupIds: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      regionId: 'string',
      slsLogStoreName: 'string',
      slsProjectName: 'string',
      slsRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessLogRecordCustomizedHeaderList)) {
      $dara.Model.validateArray(this.accessLogRecordCustomizedHeaderList);
    }
    if(Array.isArray(this.endpointGroupIds)) {
      $dara.Model.validateArray(this.endpointGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

