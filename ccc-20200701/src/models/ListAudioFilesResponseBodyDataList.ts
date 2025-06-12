// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAudioFilesResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * test-file.wav
   */
  audioFileName?: string;
  /**
   * @example
   * d5cd7a94-3b6a-47d2-b7fd-0b1cd839bf77
   */
  audioResourceId?: string;
  auditResult?: string;
  /**
   * @example
   * 2021-03-05 17:35:45.0
   */
  createdTime?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  name?: string;
  /**
   * @example
   * ccc-test/test-file.wav
   */
  ossFileKey?: string;
  status?: string;
  /**
   * @example
   * 2021-03-08 15:34:49.0
   */
  updatedTime?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      audioFileName: 'AudioFileName',
      audioResourceId: 'AudioResourceId',
      auditResult: 'AuditResult',
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      name: 'Name',
      ossFileKey: 'OssFileKey',
      status: 'Status',
      updatedTime: 'UpdatedTime',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFileName: 'string',
      audioResourceId: 'string',
      auditResult: 'string',
      createdTime: 'string',
      instanceId: 'string',
      name: 'string',
      ossFileKey: 'string',
      status: 'string',
      updatedTime: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

