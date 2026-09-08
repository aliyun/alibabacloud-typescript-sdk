// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceAttributeResponseBody extends $dara.Model {
  currentKernelVersion?: string;
  engine?: string;
  engineVersion?: string;
  errorCode?: string;
  errorMessage?: string;
  kmsEncryptionSupported?: boolean;
  maintainEndTime?: number;
  maintainStartTime?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentKernelVersion: 'CurrentKernelVersion',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      kmsEncryptionSupported: 'KmsEncryptionSupported',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentKernelVersion: 'string',
      engine: 'string',
      engineVersion: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      kmsEncryptionSupported: 'boolean',
      maintainEndTime: 'number',
      maintainStartTime: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

