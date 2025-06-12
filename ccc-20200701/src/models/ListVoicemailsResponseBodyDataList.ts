// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoicemailsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 0533128****
   */
  callee?: string;
  /**
   * @example
   * 073xxxx7539
   */
  caller?: string;
  cdrStartTime?: number;
  /**
   * @example
   * job-125152394144124921
   */
  contactId?: string;
  /**
   * @example
   * 16
   */
  duration?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * voicemail-test
   */
  name?: string;
  recordingDuration?: number;
  /**
   * @example
   * 1631440860000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
      cdrStartTime: 'CdrStartTime',
      contactId: 'ContactId',
      duration: 'Duration',
      instanceId: 'InstanceId',
      name: 'Name',
      recordingDuration: 'RecordingDuration',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      caller: 'string',
      cdrStartTime: 'number',
      contactId: 'string',
      duration: 'number',
      instanceId: 'string',
      name: 'string',
      recordingDuration: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

