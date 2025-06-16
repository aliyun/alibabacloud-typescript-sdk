// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcPrefixListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the prefix list.
   * 
   * @example
   * pl-0b700s2ee3***
   */
  prefixListId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the prefix list belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      prefixListId: 'PrefixListId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefixListId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

