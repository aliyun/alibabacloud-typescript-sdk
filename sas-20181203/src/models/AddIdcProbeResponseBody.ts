// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddIdcProbeResponseBodyAddIdcProbeFailedList extends $dara.Model {
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * The ResourceDirectoryId is invalid.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The name of the data center.
   * 
   * @example
   * test
   */
  idcName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * Hangzhou
   */
  idcRegion?: string;
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * sas-yqcl2ck3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * gl-sms-01
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 95.214.XXX.XXX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 172.29.XXX.XXX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The settings of the CIDR block.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  ipSegments?: string;
  /**
   * @remarks
   * The UUID of the server. Multiple UUIDs are separated by commas (,).
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUID.
   * 
   * @example
   * 076a446d-df7d-424c-bdc5-bb5dc7f1****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      idcName: 'IdcName',
      idcRegion: 'IdcRegion',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ipSegments: 'IpSegments',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      idcName: 'string',
      idcRegion: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ipSegments: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIdcProbeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The records of failure.
   */
  addIdcProbeFailedList?: AddIdcProbeResponseBodyAddIdcProbeFailedList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  count?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D706F2DD-FF07-576B-9DD1-0B484A9B3065
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addIdcProbeFailedList: 'AddIdcProbeFailedList',
      count: 'Count',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addIdcProbeFailedList: { 'type': 'array', 'itemType': AddIdcProbeResponseBodyAddIdcProbeFailedList },
      count: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addIdcProbeFailedList)) {
      $dara.Model.validateArray(this.addIdcProbeFailedList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

