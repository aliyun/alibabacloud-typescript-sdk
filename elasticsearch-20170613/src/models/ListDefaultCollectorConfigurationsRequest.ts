// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDefaultCollectorConfigurationsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the collector. Valid values:
   * 
   * - fileBeat
   * - metricBeat
   * - heartBeat
   * - auditBeat.
   * 
   * This parameter is required.
   * 
   * @example
   * fileBeat
   */
  resType?: string;
  /**
   * @remarks
   * The version of the collector. The available versions vary based on the type of machine on which the collector is deployed. Valid values:
   * 
   * - ECS: 6.8.5_with_community
   * - ACK: 6.8.13_with_community.
   * 
   * This parameter is required.
   * 
   * @example
   * 6.8.5_with_community
   */
  resVersion?: string;
  /**
   * @remarks
   * The type of machine on which the collector is deployed. If you do not specify this parameter, all types are returned. Valid values:
   * 
   * - ECS: Elastic Compute Service (ECS) instance
   * - ACK: Container Service for Kubernetes (ACK) cluster.
   * 
   * @example
   * ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resType: 'resType',
      resVersion: 'resVersion',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resType: 'string',
      resVersion: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

