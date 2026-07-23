// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckInstanceResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The access status. Valid values:
   * 
   * - Success
   * 
   * - Failure
   * 
   * @example
   * Success
   */
  status?: string;
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
      status: 'Status',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
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

export class CheckInstanceResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9763624B-5FBB-5E3A-9193-B1ADB554CEAE
   */
  requestId?: string;
  /**
   * @remarks
   * A list of resources.
   */
  resources?: CheckInstanceResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': CheckInstanceResourcesResponseBodyResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

