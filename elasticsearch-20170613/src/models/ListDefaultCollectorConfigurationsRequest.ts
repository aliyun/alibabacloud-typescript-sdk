// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDefaultCollectorConfigurationsRequest extends $dara.Model {
  /**
   * @remarks
   * The shipper type. Valid values:
   * 
   * *   fileBeat
   * *   metricBeat
   * *   heartBeat
   * *   auditBeat
   * 
   * This parameter is required.
   * 
   * @example
   * fileBeat
   */
  resType?: string;
  /**
   * @remarks
   * The shipper version. The shipper version varies based on the type of the machine on which the shipper is deployed. Valid values:
   * 
   * *   ECS: 6.8.5_with_community
   * *   ACK: 6.8.13_with_community
   * 
   * This parameter is required.
   * 
   * @example
   * 6.8.5_with_community
   */
  resVersion?: string;
  /**
   * @remarks
   * The type of the machine on which the shipper is deployed. If you do not configure this parameter, the default configuration files of shippers deployed on all types of machines are returned. Valid values:
   * 
   * *   ECS: ECS instance
   * *   ACK: ACK cluster
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

