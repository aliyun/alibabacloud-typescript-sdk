// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBNodesRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The specifications of the read-only node that you want to add, which must be the same as the specifications of the existing nodes. For more information, see the following topics:
   * 
   * *   PolarDB for MySQL: [Specifications of compute nodes](https://help.aliyun.com/document_detail/102542.html)
   * *   PolarDB for PostgreSQL (Compatible with Oracle): [Specifications of compute nodes](https://help.aliyun.com/document_detail/207921.html)
   * *   PolarDB for PostgreSQL: [Specifications of compute nodes](https://help.aliyun.com/document_detail/209380.html)
   * 
   * >- You need to specify either DBNode.N.ZoneId or DBNode.N.TargetClass. N is an integer that starts from 1. The maximum value of N is equal to 16 minus the number of existing nodes.
   * >- You can add multiple read-only nodes at the same time only to PolarDB for MySQL clusters, which can contain up to of 15 read-only nodes.
   * >- This parameter is required for PolarDB for PostgreSQL (Compatible with Oracle) clusters or PolarDB for PostgreSQL clusters. This parameter is optional for PolarDB for MySQL clusters.
   * 
   * @example
   * polar.mysql.x4.medium
   */
  targetClass?: string;
  /**
   * @remarks
   * The zone ID of the node that you want to add, which must be the same as the zone ID of existing nodes. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the IDs of zones.
   * 
   * >- You need to specify either DBNode.N.ZoneId or DBNode.N.TargetClass. N is an integer that starts from 1. The maximum value of N is equal to 16 minus the number of existing nodes.
   * >- You can add multiple read-only nodes at the same time only to PolarDB for MySQL clusters, which can contain up to of 15 read-only nodes.
   * >- This parameter is required for PolarDB for PostgreSQL (Compatible with Oracle) clusters or PolarDB for PostgreSQL clusters. This parameter is optional for PolarDB for MySQL clusters.
   * 
   * @example
   * cn-qingdao-c
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

