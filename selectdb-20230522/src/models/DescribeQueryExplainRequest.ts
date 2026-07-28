// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQueryExplainRequest extends $dara.Model {
  /**
   * @remarks
   * The database instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The Explain mode.
   * 
   * @example
   * BASIC
   */
  mode?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * 40e8a568-d2a2-4f7e-a3f8-cec554ce5143
   */
  queryId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      mode: 'Mode',
      queryId: 'QueryId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      mode: 'string',
      queryId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

