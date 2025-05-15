// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExperimentResponseBodyDataResultsErrorWorker } from "./GetExperimentResponseBodyDataResultsErrorWorker";
import { GetExperimentResponseBodyDataResultsTaskIndividualResultList } from "./GetExperimentResponseBodyDataResultsTaskIndividualResultList";
import { DataResultsTaskIndividualResultMapValue } from "./DataResultsTaskIndividualResultMapValue";
import { GetExperimentResponseBodyDataResultsWarningBoundList } from "./GetExperimentResponseBodyDataResultsWarningBoundList";
import { GetExperimentResponseBodyDataResultsWarningWorker } from "./GetExperimentResponseBodyDataResultsWarningWorker";


export class GetExperimentResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * Duration
   * 
   * @example
   * 764
   */
  duration?: number;
  /**
   * @remarks
   * Error node
   */
  errorWorker?: GetExperimentResponseBodyDataResultsErrorWorker[];
  /**
   * @remarks
   * Parameter name
   * 
   * @example
   * 1748274952976261121
   */
  experimentId?: number;
  /**
   * @remarks
   * MFU
   * 
   * @example
   * 54.2
   */
  mfu?: number;
  /**
   * @remarks
   * Samples Per Second
   * 
   * @example
   * 10
   */
  samplesPerSecond?: number;
  /**
   * @remarks
   * Seconds per iteration
   * 
   * @example
   * 1000
   */
  secondsPerIteration?: number;
  /**
   * @remarks
   * Task individual result list
   */
  taskIndividualResultList?: GetExperimentResponseBodyDataResultsTaskIndividualResultList[];
  /**
   * @remarks
   * Invalid task results
   */
  taskIndividualResultMap?: { [key: string]: DataResultsTaskIndividualResultMapValue[] };
  /**
   * @remarks
   * Warning bound list
   */
  warningBoundList?: GetExperimentResponseBodyDataResultsWarningBoundList[];
  /**
   * @remarks
   * Warning worker
   */
  warningWorker?: GetExperimentResponseBodyDataResultsWarningWorker[];
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      errorWorker: 'ErrorWorker',
      experimentId: 'ExperimentId',
      mfu: 'Mfu',
      samplesPerSecond: 'SamplesPerSecond',
      secondsPerIteration: 'SecondsPerIteration',
      taskIndividualResultList: 'TaskIndividualResultList',
      taskIndividualResultMap: 'TaskIndividualResultMap',
      warningBoundList: 'WarningBoundList',
      warningWorker: 'WarningWorker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      errorWorker: { 'type': 'array', 'itemType': GetExperimentResponseBodyDataResultsErrorWorker },
      experimentId: 'number',
      mfu: 'number',
      samplesPerSecond: 'number',
      secondsPerIteration: 'number',
      taskIndividualResultList: { 'type': 'array', 'itemType': GetExperimentResponseBodyDataResultsTaskIndividualResultList },
      taskIndividualResultMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataResultsTaskIndividualResultMapValue } },
      warningBoundList: { 'type': 'array', 'itemType': GetExperimentResponseBodyDataResultsWarningBoundList },
      warningWorker: { 'type': 'array', 'itemType': GetExperimentResponseBodyDataResultsWarningWorker },
    };
  }

  validate() {
    if(Array.isArray(this.errorWorker)) {
      $dara.Model.validateArray(this.errorWorker);
    }
    if(Array.isArray(this.taskIndividualResultList)) {
      $dara.Model.validateArray(this.taskIndividualResultList);
    }
    if(this.taskIndividualResultMap) {
      $dara.Model.validateMap(this.taskIndividualResultMap);
    }
    if(Array.isArray(this.warningBoundList)) {
      $dara.Model.validateArray(this.warningBoundList);
    }
    if(Array.isArray(this.warningWorker)) {
      $dara.Model.validateArray(this.warningWorker);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

