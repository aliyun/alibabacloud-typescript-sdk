// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParameters } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParameters";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPartition } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPartition";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPrimaryKeyId } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPrimaryKeyId";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersVector } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersVector";


export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParameters extends $dara.Model {
  /**
   * @example
   * Q34nExQH7sQ****
   */
  apiKey?: string;
  /**
   * @example
   * collection1
   */
  collection?: string;
  dashVectorSchemaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParameters;
  /**
   * @example
   * vrs-cn-lbj3ru1***
   */
  instanceId?: string;
  /**
   * @example
   * PublicNetwork
   */
  network?: string;
  /**
   * @example
   * Upsert
   */
  operation?: string;
  partition?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPartition;
  primaryKeyId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPrimaryKeyId;
  vector?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersVector;
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
      dashVectorSchemaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParameters,
      instanceId: 'string',
      network: 'string',
      operation: 'string',
      partition: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPartition,
      primaryKeyId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPrimaryKeyId,
      vector: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersVector,
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

