// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVpdRequestSubnets } from "./CreateVpdRequestSubnets";
import { CreateVpdRequestTag } from "./CreateVpdRequestTag";


export class CreateVpdRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the VPD.
   * 
   * *   We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other.
   * *   You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/8
   */
  cidr?: string;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu).
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Lingjun subnet information list
   */
  subnets?: CreateVpdRequestSubnets[];
  /**
   * @remarks
   * A tag.
   */
  tag?: CreateVpdRequestTag[];
  /**
   * @remarks
   * Lingjun CIDR block instance name
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-1
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subnets: 'Subnets',
      tag: 'Tag',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subnets: { 'type': 'array', 'itemType': CreateVpdRequestSubnets },
      tag: { 'type': 'array', 'itemType': CreateVpdRequestTag },
      vpdName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subnets)) {
      $dara.Model.validateArray(this.subnets);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

