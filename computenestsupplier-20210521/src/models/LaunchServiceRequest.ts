// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LaunchServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The service categories.
   */
  categories?: string[];
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request. Generate a unique value from your client for each request. The ClientToken parameter supports only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to recommend the service when publishing it to the Service Catalog.
   * 
   * @example
   * false
   */
  recommend?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a544xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      clientToken: 'ClientToken',
      recommend: 'Recommend',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      recommend: 'boolean',
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

