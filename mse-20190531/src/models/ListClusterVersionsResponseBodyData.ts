// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterVersionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * Nacos-Ans
   */
  clusterType?: string;
  /**
   * @remarks
   * The code of the instance type.
   * 
   * @example
   * NACOS_2_0_0
   */
  code?: string;
  /**
   * @remarks
   * The version of the instance.
   * 
   * @example
   * 2.1.0
   */
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      code: 'Code',
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      code: 'string',
      showName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

