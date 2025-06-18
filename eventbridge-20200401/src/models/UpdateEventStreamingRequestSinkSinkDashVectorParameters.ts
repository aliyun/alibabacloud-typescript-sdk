// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters } from "./UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters";
import { UpdateEventStreamingRequestSinkSinkDashVectorParametersPartition } from "./UpdateEventStreamingRequestSinkSinkDashVectorParametersPartition";
import { UpdateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId } from "./UpdateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId";
import { UpdateEventStreamingRequestSinkSinkDashVectorParametersVector } from "./UpdateEventStreamingRequestSinkSinkDashVectorParametersVector";


export class UpdateEventStreamingRequestSinkSinkDashVectorParameters extends $dara.Model {
  /**
   * @remarks
   * The API key that you want to create in the DashVector console.
   * 
   * @example
   * Q34nExQH7sQ****
   */
  apiKey?: string;
  /**
   * @remarks
   * The collection name.
   * 
   * @example
   * collection1
   */
  collection?: string;
  /**
   * @remarks
   * The parameters in the Schema field of the table when data is inserted into DashVector. After the event content is transformed, the data must be in JSON format.
   */
  dashVectorSchemaParameters?: UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters;
  /**
   * @remarks
   * The ID of the DashVector instance.
   * 
   * @example
   * vrs-cn-lbj3ru1***
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   PrivateNetwork
   * *   PublicNetwork
   * 
   * @example
   * PublicNetwork
   */
  network?: string;
  /**
   * @remarks
   * The type of operation that you want to perform on the DashVector database. Valid values:
   * 
   * *   Delete
   * *   Upsert
   * 
   * @example
   * Upsert
   */
  operation?: string;
  /**
   * @remarks
   * The partition. Default value: default.
   */
  partition?: UpdateEventStreamingRequestSinkSinkDashVectorParametersPartition;
  /**
   * @remarks
   * The ID of the primary key that you want to use when you insert or delete records. If you do not specify this parameter, a random primary key ID is returned.
   */
  primaryKeyId?: UpdateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId;
  /**
   * @remarks
   * The vector that is recorded when data is inserted into DashVector.
   */
  vector?: UpdateEventStreamingRequestSinkSinkDashVectorParametersVector;
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
      dashVectorSchemaParameters: UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters,
      instanceId: 'string',
      network: 'string',
      operation: 'string',
      partition: UpdateEventStreamingRequestSinkSinkDashVectorParametersPartition,
      primaryKeyId: UpdateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId,
      vector: UpdateEventStreamingRequestSinkSinkDashVectorParametersVector,
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

