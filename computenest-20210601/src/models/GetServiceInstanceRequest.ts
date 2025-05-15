// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The MarketInstance ID.
   * 
   * @example
   * 704***59
   */
  marketInstanceId?: string;
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
   * The service instance ID.
   * 
   * >  You must specify either `ServiceInstanceId` or `MarketInstanceId`. Otherwise, the operation fails.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      marketInstanceId: 'MarketInstanceId',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marketInstanceId: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

