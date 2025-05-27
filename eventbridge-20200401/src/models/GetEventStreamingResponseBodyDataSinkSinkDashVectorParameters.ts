// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParameters } from "./GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParameters";
import { GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPartition } from "./GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPartition";
import { GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPrimaryKeyId } from "./GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPrimaryKeyId";
import { GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersVector } from "./GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersVector";


export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParameters extends $dara.Model {
  apiKey?: string;
  collection?: string;
  dashVectorSchemaParameters?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParameters;
  instanceId?: string;
  network?: string;
  operation?: string;
  partition?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPartition;
  primaryKeyId?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPrimaryKeyId;
  vector?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersVector;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      collection: 'Collection',
      dashVectorSchemaParameters: 'DashVectorSchemaParameters',
      instanceId: 'InstanceId',
      network: 'Network',
      operation: 'Operation',
      partition: 'Partition',
      primaryKeyId: 'PrimaryKeyId',
      vector: 'Vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      collection: 'string',
      dashVectorSchemaParameters: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParameters,
      instanceId: 'string',
      network: 'string',
      operation: 'string',
      partition: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPartition,
      primaryKeyId: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPrimaryKeyId,
      vector: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersVector,
    };
  }

  validate() {
    if(this.dashVectorSchemaParameters && typeof (this.dashVectorSchemaParameters as any).validate === 'function') {
      (this.dashVectorSchemaParameters as any).validate();
    }
    if(this.partition && typeof (this.partition as any).validate === 'function') {
      (this.partition as any).validate();
    }
    if(this.primaryKeyId && typeof (this.primaryKeyId as any).validate === 'function') {
      (this.primaryKeyId as any).validate();
    }
    if(this.vector && typeof (this.vector as any).validate === 'function') {
      (this.vector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

