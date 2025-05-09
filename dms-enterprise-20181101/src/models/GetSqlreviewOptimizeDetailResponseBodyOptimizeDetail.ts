// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResult } from "./GetSqlreviewOptimizeDetailResponseBodyOptimizeDetailQualityResult";


export class GetSQLReviewOptimizeDetailResponseBodyOptimizeDetail extends $dara.Model {
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 111222
   */
  dbId?: number;
  /**
   * @remarks
   * The ID of the instance to which the database belongs.
   * 
   * @example
   * 123321
   */
  instanceId?: number;
  /**
   * @remarks
   * The quality of the SQL statement.
   */
  qualityResult?: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResult;
  /**
   * @remarks
   * The key that is used to query the details of optimization suggestions.
   * 
   * @example
   * a57e54ec5433475ea3082d882fdb****
   */
  queryKey?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values: DELETE, UPDATE, and ALTER_TABLE.
   * 
   * @example
   * UPDATE
   */
  sqlType?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      instanceId: 'InstanceId',
      qualityResult: 'QualityResult',
      queryKey: 'QueryKey',
      sqlType: 'SqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      instanceId: 'number',
      qualityResult: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResult,
      queryKey: 'string',
      sqlType: 'string',
    };
  }

  validate() {
    if(this.qualityResult && typeof (this.qualityResult as any).validate === 'function') {
      (this.qualityResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

