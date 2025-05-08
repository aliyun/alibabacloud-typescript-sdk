// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtendsEnsRegionId extends $dara.Model {
  /**
   * @remarks
   * The region.
   * 
   * @example
   * EastChina
   */
  area?: string;
  /**
   * @remarks
   * The name. This parameter is empty by default.
   * 
   * @example
   * EnName
   */
  enName?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-chengdu-telecom-4
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The information about the Internet service provider (ISP).
   * 
   * @example
   * unicom
   */
  isp?: string;
  /**
   * @remarks
   * The name of the edge node.
   * 
   * @example
   * Taizhou Telecom, China Unicom, and China Mobile
   */
  name?: string;
  /**
   * @remarks
   * The province.
   * 
   * @example
   * Zhejiang Province
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      enName: 'EnName',
      ensRegionId: 'EnsRegionId',
      isp: 'Isp',
      name: 'Name',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      enName: 'string',
      ensRegionId: 'string',
      isp: 'string',
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

