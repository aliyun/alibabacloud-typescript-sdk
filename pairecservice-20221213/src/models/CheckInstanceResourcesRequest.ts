// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceResourcesRequest extends $dara.Model {
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - Hologres
   * 
   * - EAS
   * 
   * - BE
   * 
   * - Rec
   * 
   * - Platform
   * 
   * - SLS
   * 
   * - DataHub
   * 
   * - Kafka
   * 
   * - Flinkvvp
   * 
   * - ACR
   * 
   * - OSS
   * 
   * - DataWorks
   * 
   * - PAI
   * 
   * - MaxCompute
   * 
   * - GraphCompute
   * 
   * - Redis
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  type?: string;
  /**
   * @remarks
   * The resource URI.
   * 
   * @example
   * bucket-test-123
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      type: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

