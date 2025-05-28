// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCubeOptimizationResponseBodyResultCubePerformanceDiagnoseModel } from "./QueryCubeOptimizationResponseBodyResultCubePerformanceDiagnoseModel";


export class QueryCubeOptimizationResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The type of the suggestion. Valid values:
   * 
   * *   **OPEN_CACHE**: Open cache.
   * *   **OPEN_QUICK_ENGINE**: Open FAST Cache.
   * *   **INCREASE_CACHE_TIME**: Increase the cache time.
   * 
   * @example
   * OPENQUICKENGINE
   */
  adviceType?: string;
  /**
   * @remarks
   * The diagnostic information about the dataset.
   */
  cubePerformanceDiagnoseModel?: QueryCubeOptimizationResponseBodyResultCubePerformanceDiagnoseModel;
  static names(): { [key: string]: string } {
    return {
      adviceType: 'AdviceType',
      cubePerformanceDiagnoseModel: 'CubePerformanceDiagnoseModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceType: 'string',
      cubePerformanceDiagnoseModel: QueryCubeOptimizationResponseBodyResultCubePerformanceDiagnoseModel,
    };
  }

  validate() {
    if(this.cubePerformanceDiagnoseModel && typeof (this.cubePerformanceDiagnoseModel as any).validate === 'function') {
      (this.cubePerformanceDiagnoseModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

