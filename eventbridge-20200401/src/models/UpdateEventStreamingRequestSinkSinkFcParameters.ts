// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkFcParametersBody } from "./UpdateEventStreamingRequestSinkSinkFcParametersBody";
import { UpdateEventStreamingRequestSinkSinkFcParametersConcurrency } from "./UpdateEventStreamingRequestSinkSinkFcParametersConcurrency";
import { UpdateEventStreamingRequestSinkSinkFcParametersDataFormat } from "./UpdateEventStreamingRequestSinkSinkFcParametersDataFormat";
import { UpdateEventStreamingRequestSinkSinkFcParametersFunctionName } from "./UpdateEventStreamingRequestSinkSinkFcParametersFunctionName";
import { UpdateEventStreamingRequestSinkSinkFcParametersInvocationType } from "./UpdateEventStreamingRequestSinkSinkFcParametersInvocationType";
import { UpdateEventStreamingRequestSinkSinkFcParametersQualifier } from "./UpdateEventStreamingRequestSinkSinkFcParametersQualifier";
import { UpdateEventStreamingRequestSinkSinkFcParametersServiceName } from "./UpdateEventStreamingRequestSinkSinkFcParametersServiceName";


export class UpdateEventStreamingRequestSinkSinkFcParameters extends $dara.Model {
  /**
   * @remarks
   * The message body that you want to deliver to the function.
   */
  body?: UpdateEventStreamingRequestSinkSinkFcParametersBody;
  /**
   * @remarks
   * The delivery concurrency. Minimum value: 1.
   */
  concurrency?: UpdateEventStreamingRequestSinkSinkFcParametersConcurrency;
  dataFormat?: UpdateEventStreamingRequestSinkSinkFcParametersDataFormat;
  /**
   * @remarks
   * The function name.
   */
  functionName?: UpdateEventStreamingRequestSinkSinkFcParametersFunctionName;
  /**
   * @remarks
   * The invocation mode. Valid values: Sync and Async.
   */
  invocationType?: UpdateEventStreamingRequestSinkSinkFcParametersInvocationType;
  /**
   * @remarks
   * The alias of the service to which the function belongs.
   */
  qualifier?: UpdateEventStreamingRequestSinkSinkFcParametersQualifier;
  /**
   * @remarks
   * The service name.
   */
  serviceName?: UpdateEventStreamingRequestSinkSinkFcParametersServiceName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      concurrency: 'Concurrency',
      dataFormat: 'DataFormat',
      functionName: 'FunctionName',
      invocationType: 'InvocationType',
      qualifier: 'Qualifier',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateEventStreamingRequestSinkSinkFcParametersBody,
      concurrency: UpdateEventStreamingRequestSinkSinkFcParametersConcurrency,
      dataFormat: UpdateEventStreamingRequestSinkSinkFcParametersDataFormat,
      functionName: UpdateEventStreamingRequestSinkSinkFcParametersFunctionName,
      invocationType: UpdateEventStreamingRequestSinkSinkFcParametersInvocationType,
      qualifier: UpdateEventStreamingRequestSinkSinkFcParametersQualifier,
      serviceName: UpdateEventStreamingRequestSinkSinkFcParametersServiceName,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.concurrency && typeof (this.concurrency as any).validate === 'function') {
      (this.concurrency as any).validate();
    }
    if(this.dataFormat && typeof (this.dataFormat as any).validate === 'function') {
      (this.dataFormat as any).validate();
    }
    if(this.functionName && typeof (this.functionName as any).validate === 'function') {
      (this.functionName as any).validate();
    }
    if(this.invocationType && typeof (this.invocationType as any).validate === 'function') {
      (this.invocationType as any).validate();
    }
    if(this.qualifier && typeof (this.qualifier as any).validate === 'function') {
      (this.qualifier as any).validate();
    }
    if(this.serviceName && typeof (this.serviceName as any).validate === 'function') {
      (this.serviceName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

