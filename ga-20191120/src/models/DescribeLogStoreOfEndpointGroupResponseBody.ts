// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogStoreOfEndpointGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * @example
   * ga-xxxxxxxxxxxxx
   */
  acceleratorId?: string;
  accessLogRecordCustomizedHeaderList?: string[];
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  /**
   * @remarks
   * The ID of the endpoint group.
   * 
   * @example
   * epg-xxxxxxxxxxxxxxx
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * @example
   * lsr-xxxxxxxxxxxxxxx
   */
  listenerId?: string;
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * 1777E713-8456-55F1-9A69-9AD9EAE2B3B6
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * ga_log
   */
  slsLogStoreName?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * ga_project_name
   */
  slsProjectName?: string;
  /**
   * @remarks
   * The region ID of the Simple Log Service project.
   * 
   * @example
   * cn-hangzhou
   */
  slsRegionId?: string;
  /**
   * @remarks
   * Indicates whether the endpoint group is bound to the Simple Log Service project.
   * 
   * *   **on:** The endpoint group is bound to the Simple Log Service project.
   * *   **off:** The endpoint group is not bound to the Simple Log Service project.
   * 
   * @example
   * on - binding
   * off - unbinding
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      accessLogRecordCustomizedHeaderList: 'AccessLogRecordCustomizedHeaderList',
      accessLogRecordCustomizedHeadersEnabled: 'AccessLogRecordCustomizedHeadersEnabled',
      endpointGroupId: 'EndpointGroupId',
      listenerId: 'ListenerId',
      requestId: 'RequestId',
      slsLogStoreName: 'SlsLogStoreName',
      slsProjectName: 'SlsProjectName',
      slsRegionId: 'SlsRegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      accessLogRecordCustomizedHeaderList: { 'type': 'array', 'itemType': 'string' },
      accessLogRecordCustomizedHeadersEnabled: 'boolean',
      endpointGroupId: 'string',
      listenerId: 'string',
      requestId: 'string',
      slsLogStoreName: 'string',
      slsProjectName: 'string',
      slsRegionId: 'string',
      status: 'string',
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

