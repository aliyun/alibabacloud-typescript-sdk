// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutEventTargetsResponseBodyContactParameters } from "./PutEventTargetsResponseBodyContactParameters";
import { PutEventTargetsResponseBodyFailedContactParameters } from "./PutEventTargetsResponseBodyFailedContactParameters";
import { PutEventTargetsResponseBodyFailedFcParameters } from "./PutEventTargetsResponseBodyFailedFcParameters";
import { PutEventTargetsResponseBodyFailedMnsParameters } from "./PutEventTargetsResponseBodyFailedMnsParameters";
import { PutEventTargetsResponseBodyFailedSlsParameters } from "./PutEventTargetsResponseBodyFailedSlsParameters";
import { PutEventTargetsResponseBodyFcParameters } from "./PutEventTargetsResponseBodyFcParameters";
import { PutEventTargetsResponseBodyMnsParameters } from "./PutEventTargetsResponseBodyMnsParameters";


export class PutEventTargetsResponseBody extends $dara.Model {
  code?: string;
  contactParameters?: PutEventTargetsResponseBodyContactParameters;
  failedContactParameters?: PutEventTargetsResponseBodyFailedContactParameters;
  failedFcParameters?: PutEventTargetsResponseBodyFailedFcParameters;
  failedMnsParameters?: PutEventTargetsResponseBodyFailedMnsParameters;
  failedParameterCount?: string;
  failedSlsParameters?: PutEventTargetsResponseBodyFailedSlsParameters;
  fcParameters?: PutEventTargetsResponseBodyFcParameters;
  message?: string;
  mnsParameters?: PutEventTargetsResponseBodyMnsParameters;
  parameterCount?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactParameters: 'ContactParameters',
      failedContactParameters: 'FailedContactParameters',
      failedFcParameters: 'FailedFcParameters',
      failedMnsParameters: 'FailedMnsParameters',
      failedParameterCount: 'FailedParameterCount',
      failedSlsParameters: 'FailedSlsParameters',
      fcParameters: 'FcParameters',
      message: 'Message',
      mnsParameters: 'MnsParameters',
      parameterCount: 'ParameterCount',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactParameters: PutEventTargetsResponseBodyContactParameters,
      failedContactParameters: PutEventTargetsResponseBodyFailedContactParameters,
      failedFcParameters: PutEventTargetsResponseBodyFailedFcParameters,
      failedMnsParameters: PutEventTargetsResponseBodyFailedMnsParameters,
      failedParameterCount: 'string',
      failedSlsParameters: PutEventTargetsResponseBodyFailedSlsParameters,
      fcParameters: PutEventTargetsResponseBodyFcParameters,
      message: 'string',
      mnsParameters: PutEventTargetsResponseBodyMnsParameters,
      parameterCount: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.contactParameters && typeof (this.contactParameters as any).validate === 'function') {
      (this.contactParameters as any).validate();
    }
    if(this.failedContactParameters && typeof (this.failedContactParameters as any).validate === 'function') {
      (this.failedContactParameters as any).validate();
    }
    if(this.failedFcParameters && typeof (this.failedFcParameters as any).validate === 'function') {
      (this.failedFcParameters as any).validate();
    }
    if(this.failedMnsParameters && typeof (this.failedMnsParameters as any).validate === 'function') {
      (this.failedMnsParameters as any).validate();
    }
    if(this.failedSlsParameters && typeof (this.failedSlsParameters as any).validate === 'function') {
      (this.failedSlsParameters as any).validate();
    }
    if(this.fcParameters && typeof (this.fcParameters as any).validate === 'function') {
      (this.fcParameters as any).validate();
    }
    if(this.mnsParameters && typeof (this.mnsParameters as any).validate === 'function') {
      (this.mnsParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

