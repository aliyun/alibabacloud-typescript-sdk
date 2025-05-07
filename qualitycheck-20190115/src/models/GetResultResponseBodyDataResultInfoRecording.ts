// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResultResponseBodyDataResultInfoRecording extends $dara.Model {
  business?: string;
  /**
   * @example
   * XXXX
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
   * 1888888****
   */
  callee?: string;
  /**
   * @example
   * 0108888****
   */
  caller?: string;
  customerName?: string;
  /**
   * @example
   * XXXX
   */
  dataSetName?: string;
  /**
   * @example
   * 32
   */
  dialogueSize?: number;
  /**
   * @example
   * 60
   */
  duration?: number;
  /**
   * @example
   * XXXXX
   */
  id?: string;
  /**
   * @example
   * 123456.mkv
   */
  name?: string;
  /**
   * @example
   * 3437500
   */
  primaryId?: string;
  /**
   * @example
   * XXX
   */
  remark1?: string;
  /**
   * @example
   * XXX
   */
  remark10?: string;
  /**
   * @example
   * XXX
   */
  remark11?: string;
  /**
   * @example
   * XXX
   */
  remark12?: string;
  /**
   * @example
   * XXX
   */
  remark13?: string;
  /**
   * @example
   * XXX
   */
  remark2?: string;
  /**
   * @example
   * XXX
   */
  remark3?: string;
  /**
   * @example
   * XXX
   */
  remark4?: string;
  /**
   * @example
   * 1232
   */
  remark5?: number;
  /**
   * @example
   * XXX
   */
  remark6?: string;
  /**
   * @example
   * XXX
   */
  remark7?: string;
  /**
   * @example
   * XXX
   */
  remark8?: string;
  /**
   * @example
   * XXX
   */
  remark9?: string;
  taskConfigId?: number;
  taskConfigName?: string;
  /**
   * @example
   * http://aliyun.com/audio.wav
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
      customerName: 'CustomerName',
      dataSetName: 'DataSetName',
      dialogueSize: 'DialogueSize',
      duration: 'Duration',
      id: 'Id',
      name: 'Name',
      primaryId: 'PrimaryId',
      remark1: 'Remark1',
      remark10: 'Remark10',
      remark11: 'Remark11',
      remark12: 'Remark12',
      remark13: 'Remark13',
      remark2: 'Remark2',
      remark3: 'Remark3',
      remark4: 'Remark4',
      remark5: 'Remark5',
      remark6: 'Remark6',
      remark7: 'Remark7',
      remark8: 'Remark8',
      remark9: 'Remark9',
      taskConfigId: 'TaskConfigId',
      taskConfigName: 'TaskConfigName',
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
      customerName: 'string',
      dataSetName: 'string',
      dialogueSize: 'number',
      duration: 'number',
      id: 'string',
      name: 'string',
      primaryId: 'string',
      remark1: 'string',
      remark10: 'string',
      remark11: 'string',
      remark12: 'string',
      remark13: 'string',
      remark2: 'string',
      remark3: 'string',
      remark4: 'string',
      remark5: 'number',
      remark6: 'string',
      remark7: 'string',
      remark8: 'string',
      remark9: 'string',
      taskConfigId: 'number',
      taskConfigName: 'string',
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

