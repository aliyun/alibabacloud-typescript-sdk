// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSearchParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB primary cluster, which is used to locate the Search cluster associated with the current account. Only PolarDB for MySQL clusters are supported. PolarDB for PostgreSQL and PolarDB for PostgreSQL (Oracle-Compatible) clusters do not support Search. Before you call this operation, you must enable the Search engine for the target cluster in the PolarDB console. If the Search engine is not enabled, the InvalidDBClusterId.NotFound error may be returned.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-xxxxxxxx
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

