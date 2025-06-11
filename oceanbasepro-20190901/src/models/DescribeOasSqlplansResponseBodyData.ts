// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOasSQLPlansResponseBodyDataPlanExplain } from "./DescribeOasSqlplansResponseBodyDataPlanExplain";
import { DescribeOasSQLPlansResponseBodyDataPlans } from "./DescribeOasSqlplansResponseBodyDataPlans";


export class DescribeOasSQLPlansResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Average CPU time (in milliseconds) during the execution period.
   * 
   * @example
   * 1875.34
   */
  avgCpuTime?: number;
  /**
   * @remarks
   * Whether to bind the execution plan.
   * 
   * @example
   * false
   */
  bounded?: boolean;
  /**
   * @remarks
   * Execution count.
   * 
   * @example
   * 1
   */
  executions?: number;
  /**
   * @remarks
   * First loading time.
   * 
   * @example
   * 2023-04-12T04:46:38Z
   */
  firstLoadTime?: string;
  /**
   * @remarks
   * Whether to hit the diagnosis.
   * 
   * @example
   * false
   */
  hitDiagnosis?: boolean;
  /**
   * @remarks
   * Hit rate.
   * 
   * @example
   * 100.0
   */
  hitPercentage?: number;
  /**
   * @remarks
   * Merge version.
   * 
   * @example
   * 513
   */
  mergedVersion?: number;
  /**
   * @remarks
   * The ID of the outline used by the execution plan.
   * 
   * @example
   * 3********
   */
  outlineId?: string;
  /**
   * @remarks
   * The outline status of the execution plan. Valid values:
   * * **Effective**: indicates that the outline_data and outlIne_content fields exactly match with each other. 
   * * **Unknown**: indicates that the outline status is unknown.
   * 
   * @example
   * Effective
   */
  outlineStatus?: string;
  /**
   * @remarks
   * Execution plan.
   */
  planExplain?: DescribeOasSQLPlansResponseBodyDataPlanExplain;
  /**
   * @remarks
   * The internal identifier of the SQL execution plan in the diagnostic system.
   * 
   * @example
   * 1758****24913166****
   */
  planHash?: string;
  /**
   * @remarks
   * Execution plan type.
   * 
   * @example
   * LOCAL
   */
  planType?: string;
  /**
   * @remarks
   * The internal unique identifier of the SQL execution plan in the diagnostic system.
   * 
   * @example
   * "52c7c53****53e61b3f7586b17****ad"
   */
  planUnionHash?: string;
  /**
   * @remarks
   * The list of the execution plan.
   */
  plans?: DescribeOasSQLPlansResponseBodyDataPlans[];
  /**
   * @remarks
   * The SQL for the query.
   * 
   * @example
   * "select 1 from t"
   */
  querySql?: string;
  /**
   * @remarks
   * Indicates whether full table scan is performed.
   * 
   * @example
   * false
   */
  tableScan?: boolean;
  static names(): { [key: string]: string } {
    return {
      avgCpuTime: 'AvgCpuTime',
      bounded: 'Bounded',
      executions: 'Executions',
      firstLoadTime: 'FirstLoadTime',
      hitDiagnosis: 'HitDiagnosis',
      hitPercentage: 'HitPercentage',
      mergedVersion: 'MergedVersion',
      outlineId: 'OutlineId',
      outlineStatus: 'OutlineStatus',
      planExplain: 'PlanExplain',
      planHash: 'PlanHash',
      planType: 'PlanType',
      planUnionHash: 'PlanUnionHash',
      plans: 'Plans',
      querySql: 'QuerySql',
      tableScan: 'TableScan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgCpuTime: 'number',
      bounded: 'boolean',
      executions: 'number',
      firstLoadTime: 'string',
      hitDiagnosis: 'boolean',
      hitPercentage: 'number',
      mergedVersion: 'number',
      outlineId: 'string',
      outlineStatus: 'string',
      planExplain: DescribeOasSQLPlansResponseBodyDataPlanExplain,
      planHash: 'string',
      planType: 'string',
      planUnionHash: 'string',
      plans: { 'type': 'array', 'itemType': DescribeOasSQLPlansResponseBodyDataPlans },
      querySql: 'string',
      tableScan: 'boolean',
    };
  }

  validate() {
    if(this.planExplain && typeof (this.planExplain as any).validate === 'function') {
      (this.planExplain as any).validate();
    }
    if(Array.isArray(this.plans)) {
      $dara.Model.validateArray(this.plans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

