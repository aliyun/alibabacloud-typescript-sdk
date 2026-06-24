// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollectorsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID associated with the collector.
   * 
   * @example
   * es-cn-nif1q8auz0003****
   */
  instanceId?: string;
  /**
   * @remarks
   * The collector name.
   * 
   * @example
   * collectorName1
   */
  name?: string;
  /**
   * @remarks
   * The page number of the returned results. Default value: 1. Minimum value: 1. Maximum value: 200.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The collector ID.
   * 
   * @example
   * ct-cn-77uqof2s7rg5c****
   */
  resId?: string;
  /**
   * @remarks
   * The number of results per page. Default value: 20. Minimum value: 1. Maximum value: 500.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The type of machine on which the collector is deployed. If this parameter is not specified, all types are returned. Valid values:
   * 
   * - ECS: ECS instance
   * 
   * - ACK: Container Kubernetes cluster.
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

