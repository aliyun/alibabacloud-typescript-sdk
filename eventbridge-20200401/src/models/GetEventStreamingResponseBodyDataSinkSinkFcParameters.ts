// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataSinkSinkFcParametersBody } from "./GetEventStreamingResponseBodyDataSinkSinkFcParametersBody";
import { GetEventStreamingResponseBodyDataSinkSinkFcParametersConcurrency } from "./GetEventStreamingResponseBodyDataSinkSinkFcParametersConcurrency";
import { GetEventStreamingResponseBodyDataSinkSinkFcParametersDataFormat } from "./GetEventStreamingResponseBodyDataSinkSinkFcParametersDataFormat";
import { GetEventStreamingResponseBodyDataSinkSinkFcParametersFunctionName } from "./GetEventStreamingResponseBodyDataSinkSinkFcParametersFunctionName";
import { GetEventStreamingResponseBodyDataSinkSinkFcParametersInvocationType } from "./GetEventStreamingResponseBodyDataSinkSinkFcParametersInvocationType";
import { GetEventStreamingResponseBodyDataSinkSinkFcParametersQualifier } from "./GetEventStreamingResponseBodyDataSinkSinkFcParametersQualifier";
import { GetEventStreamingResponseBodyDataSinkSinkFcParametersServiceName } from "./GetEventStreamingResponseBodyDataSinkSinkFcParametersServiceName";


export class GetEventStreamingResponseBodyDataSinkSinkFcParameters extends $dara.Model {
  /**
   * @remarks
   * The message body that is sent to the function.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkFcParametersBody;
  /**
   * @remarks
   * The delivery concurrency. Minimum value: 1.
   */
  concurrency?: GetEventStreamingResponseBodyDataSinkSinkFcParametersConcurrency;
  dataFormat?: GetEventStreamingResponseBodyDataSinkSinkFcParametersDataFormat;
  /**
   * @remarks
   * The function name.
   */
  functionName?: GetEventStreamingResponseBodyDataSinkSinkFcParametersFunctionName;
  /**
   * @remarks
   * The invocation type. Valid values: Sync: synchronous Async: asynchronous
   */
  invocationType?: GetEventStreamingResponseBodyDataSinkSinkFcParametersInvocationType;
  /**
   * @remarks
   * The alias of the service to which the function belongs.
   */
  qualifier?: GetEventStreamingResponseBodyDataSinkSinkFcParametersQualifier;
  /**
   * @remarks
   * The service name.
   */
  serviceName?: GetEventStreamingResponseBodyDataSinkSinkFcParametersServiceName;
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
      body: GetEventStreamingResponseBodyDataSinkSinkFcParametersBody,
      concurrency: GetEventStreamingResponseBodyDataSinkSinkFcParametersConcurrency,
      dataFormat: GetEventStreamingResponseBodyDataSinkSinkFcParametersDataFormat,
      functionName: GetEventStreamingResponseBodyDataSinkSinkFcParametersFunctionName,
      invocationType: GetEventStreamingResponseBodyDataSinkSinkFcParametersInvocationType,
      qualifier: GetEventStreamingResponseBodyDataSinkSinkFcParametersQualifier,
      serviceName: GetEventStreamingResponseBodyDataSinkSinkFcParametersServiceName,
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

