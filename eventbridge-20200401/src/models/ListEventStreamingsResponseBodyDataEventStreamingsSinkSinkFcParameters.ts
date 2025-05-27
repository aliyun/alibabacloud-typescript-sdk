// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersBody } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersBody";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersConcurrency } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersConcurrency";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersDataFormat } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersDataFormat";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersFunctionName } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersFunctionName";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersInvocationType } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersInvocationType";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersQualifier } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersQualifier";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersServiceName } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersServiceName";


export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParameters extends $dara.Model {
  /**
   * @remarks
   * The message body that is delivered to Function Compute.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersBody;
  /**
   * @remarks
   * The delivery concurrency. Minimum value: 1.
   */
  concurrency?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersConcurrency;
  dataFormat?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersDataFormat;
  /**
   * @remarks
   * The function name.
   */
  functionName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersFunctionName;
  /**
   * @remarks
   * The invocation mode. Valid values:
   * 
   * *   Sync
   * *   Async
   */
  invocationType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersInvocationType;
  /**
   * @remarks
   * The alias of the service to which the function belongs.
   */
  qualifier?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersQualifier;
  /**
   * @remarks
   * The service name.
   */
  serviceName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersServiceName;
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
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersBody,
      concurrency: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersConcurrency,
      dataFormat: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersDataFormat,
      functionName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersFunctionName,
      invocationType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersInvocationType,
      qualifier: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersQualifier,
      serviceName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersServiceName,
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

