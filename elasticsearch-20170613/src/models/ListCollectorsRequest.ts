// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollectorsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource with which the shipper is associated.
   * 
   * @example
   * es-cn-nif1q8auz0003****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the shipper.
   * 
   * @example
   * collectorName1
   */
  name?: string;
  /**
   * @remarks
   * The number of the page to return. Valid values: 1 to 200. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The ID of the shipper.
   * 
   * @example
   * ct-cn-77uqof2s7rg5c****
   */
  resId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 500. Default value: 20.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The type of the machine on which the shipper is deployed. If you leave this parameter empty, shippers deployed on all types of machines are returned. Valid values:
   * 
   * *   ECS
   * *   ACK
   * 
   * @example
   * ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      name: 'name',
      page: 'page',
      resId: 'resId',
      size: 'size',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      page: 'number',
      resId: 'string',
      size: 'number',
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

