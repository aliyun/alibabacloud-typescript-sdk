// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsRegionsResponseBodyEnsRegionsEnsRegions extends $dara.Model {
  /**
   * @remarks
   * The code of the region.
   * 
   * @example
   * NorthEastChina
   */
  area?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * NorthChina
   */
  enName?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-dalian-unicom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Dalian Unicom
   */
  name?: string;
  /**
   * @remarks
   * The province where the node is deployed.
   * 
   * @example
   * Liaoning Province
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      enName: 'EnName',
      ensRegionId: 'EnsRegionId',
      name: 'Name',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      enName: 'string',
      ensRegionId: 'string',
      name: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

