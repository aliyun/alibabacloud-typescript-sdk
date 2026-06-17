// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSdlEventSdListResponseBodySdlEventSensitiveDataList extends $dara.Model {
  /**
   * @remarks
   * The sensitive data.
   * 
   * @example
   * sk-N***************************SxiJ
   */
  sensitiveData?: string;
  /**
   * @remarks
   * The number of times the sensitive data appears.
   * 
   * @example
   * 6
   */
  sensitiveDataCnt?: number;
  /**
   * @remarks
   * The sensitivity level of the data.
   * 
   * @example
   * S3
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The type of sensitive data.
   * 
   * @example
   * id_card
   */
  sensitiveType?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 172.23.191.XXX
   */
  srcIp?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1753928907
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      sensitiveData: 'SensitiveData',
      sensitiveDataCnt: 'SensitiveDataCnt',
      sensitiveLevel: 'SensitiveLevel',
      sensitiveType: 'SensitiveType',
      srcIp: 'SrcIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveData: 'string',
      sensitiveDataCnt: 'number',
      sensitiveLevel: 'string',
      sensitiveType: 'string',
      srcIp: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSdlEventSdListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 15FCCC52-1E23-57AE-B5EF-3E00A3******
   */
  requestId?: string;
  /**
   * @remarks
   * A list of sensitive data from the data breach.
   */
  sdlEventSensitiveDataList?: DescribeSdlEventSdListResponseBodySdlEventSensitiveDataList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sdlEventSensitiveDataList: 'SdlEventSensitiveDataList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sdlEventSensitiveDataList: { 'type': 'array', 'itemType': DescribeSdlEventSdListResponseBodySdlEventSensitiveDataList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sdlEventSensitiveDataList)) {
      $dara.Model.validateArray(this.sdlEventSensitiveDataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

