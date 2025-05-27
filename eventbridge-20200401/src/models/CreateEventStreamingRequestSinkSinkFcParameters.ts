// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingRequestSinkSinkFcParametersBody } from "./CreateEventStreamingRequestSinkSinkFcParametersBody";
import { CreateEventStreamingRequestSinkSinkFcParametersConcurrency } from "./CreateEventStreamingRequestSinkSinkFcParametersConcurrency";
import { CreateEventStreamingRequestSinkSinkFcParametersDataFormat } from "./CreateEventStreamingRequestSinkSinkFcParametersDataFormat";
import { CreateEventStreamingRequestSinkSinkFcParametersFunctionName } from "./CreateEventStreamingRequestSinkSinkFcParametersFunctionName";
import { CreateEventStreamingRequestSinkSinkFcParametersInvocationType } from "./CreateEventStreamingRequestSinkSinkFcParametersInvocationType";
import { CreateEventStreamingRequestSinkSinkFcParametersQualifier } from "./CreateEventStreamingRequestSinkSinkFcParametersQualifier";
import { CreateEventStreamingRequestSinkSinkFcParametersServiceName } from "./CreateEventStreamingRequestSinkSinkFcParametersServiceName";


export class CreateEventStreamingRequestSinkSinkFcParameters extends $dara.Model {
  /**
   * @remarks
   * The message body that you want to deliver to Function Compute.
   */
  body?: CreateEventStreamingRequestSinkSinkFcParametersBody;
  /**
   * @remarks
   * The delivery concurrency. Minimum value: 1.
   */
  concurrency?: CreateEventStreamingRequestSinkSinkFcParametersConcurrency;
  dataFormat?: CreateEventStreamingRequestSinkSinkFcParametersDataFormat;
  /**
   * @remarks
   * The function name.
   */
  functionName?: CreateEventStreamingRequestSinkSinkFcParametersFunctionName;
  /**
   * @remarks
   * The invocation mode. Valid values: Sync and Async.
   */
  invocationType?: CreateEventStreamingRequestSinkSinkFcParametersInvocationType;
  /**
   * @remarks
   * The service version.
   */
  qualifier?: CreateEventStreamingRequestSinkSinkFcParametersQualifier;
  /**
   * @remarks
   * The service name.
   */
  serviceName?: CreateEventStreamingRequestSinkSinkFcParametersServiceName;
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
      body: CreateEventStreamingRequestSinkSinkFcParametersBody,
      concurrency: CreateEventStreamingRequestSinkSinkFcParametersConcurrency,
      dataFormat: CreateEventStreamingRequestSinkSinkFcParametersDataFormat,
      functionName: CreateEventStreamingRequestSinkSinkFcParametersFunctionName,
      invocationType: CreateEventStreamingRequestSinkSinkFcParametersInvocationType,
      qualifier: CreateEventStreamingRequestSinkSinkFcParametersQualifier,
      serviceName: CreateEventStreamingRequestSinkSinkFcParametersServiceName,
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

