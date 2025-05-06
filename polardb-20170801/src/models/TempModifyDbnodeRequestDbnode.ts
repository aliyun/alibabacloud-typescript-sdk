// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TempModifyDBNodeRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The specifications of the scaled/added node.
   * 
   * > 
   * 
   * *   The specification of the new node must be consistent with the specifications of the original nodes.
   * 
   * *   You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to view the specifications of the original nodes.
   * 
   * @example
   * polar.mysql.x4.medium
   */
  targetClass?: string;
  /**
   * @remarks
   * The ID of the zone in which the added node is deployed. It must be the same zone as the original nodes.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      targetClass: 'TargetClass',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetClass: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

