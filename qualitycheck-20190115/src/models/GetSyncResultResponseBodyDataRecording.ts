// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSyncResultResponseBodyDataRecording extends $dara.Model {
  business?: string;
  /**
   * @example
   * xxx
   */
  callId?: string;
  /**
   * @example
   * 1563967699000
   */
  callTime?: string;
  /**
   * @example
   * 1
   */
  callType?: number;
  /**
   * @example
   * 1888888***
   */
  callee?: string;
  /**
   * @example
   * 0108888****
   */
  caller?: string;
  /**
   * @example
   * xxx
   */
  dataSetName?: string;
  /**
   * @example
   * 232
   */
  duration?: number;
  /**
   * @example
   * 120
   */
  durationAudio?: number;
  /**
   * @example
   * xxxx
   */
  id?: string;
  /**
   * @example
   * 123123.wav
   */
  name?: string;
  /**
   * @example
   * xxxx
   */
  primaryId?: string;
  /**
   * @example
   * xxx
   */
  remark1?: string;
  /**
   * @example
   * xxx
   */
  remark2?: string;
  /**
   * @example
   * xxx
   */
  remark3?: string;
  /**
   * @example
   * http://aliyun.com/xxx.wav
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      callId: 'CallId',
      callTime: 'CallTime',
      callType: 'CallType',
      callee: 'Callee',
      caller: 'Caller',
      dataSetName: 'DataSetName',
      duration: 'Duration',
      durationAudio: 'DurationAudio',
      id: 'Id',
      name: 'Name',
      primaryId: 'PrimaryId',
      remark1: 'Remark1',
      remark2: 'Remark2',
      remark3: 'Remark3',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: 'string',
      callId: 'string',
      callTime: 'string',
      callType: 'number',
      callee: 'string',
      caller: 'string',
      dataSetName: 'string',
      duration: 'number',
      durationAudio: 'number',
      id: 'string',
      name: 'string',
      primaryId: 'string',
      remark1: 'string',
      remark2: 'string',
      remark3: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

