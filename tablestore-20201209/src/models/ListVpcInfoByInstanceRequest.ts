// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcInfoByInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mkdd-test
   */
  instanceName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of VPCs to return on each page.
   * 
   * @example
   * 8
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

