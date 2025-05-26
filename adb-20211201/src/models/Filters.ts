// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FiltersExecutionTimeRange } from "./FiltersExecutionTimeRange";
import { FiltersSubmitTimeRange } from "./FiltersSubmitTimeRange";
import { FiltersTermiatedTimeRange } from "./FiltersTermiatedTimeRange";


export class Filters extends $dara.Model {
  appIdRegex?: string;
  appNameRegex?: string;
  appState?: string;
  appType?: string;
  executionTimeRange?: FiltersExecutionTimeRange;
  submitTimeRange?: FiltersSubmitTimeRange;
  termiatedTimeRange?: FiltersTermiatedTimeRange;
  static names(): { [key: string]: string } {
    return {
      appIdRegex: 'AppIdRegex',
      appNameRegex: 'AppNameRegex',
      appState: 'AppState',
      appType: 'AppType',
      executionTimeRange: 'ExecutionTimeRange',
      submitTimeRange: 'SubmitTimeRange',
      termiatedTimeRange: 'TermiatedTimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdRegex: 'string',
      appNameRegex: 'string',
      appState: 'string',
      appType: 'string',
      executionTimeRange: FiltersExecutionTimeRange,
      submitTimeRange: FiltersSubmitTimeRange,
      termiatedTimeRange: FiltersTermiatedTimeRange,
    };
  }

  validate() {
    if(this.executionTimeRange && typeof (this.executionTimeRange as any).validate === 'function') {
      (this.executionTimeRange as any).validate();
    }
    if(this.submitTimeRange && typeof (this.submitTimeRange as any).validate === 'function') {
      (this.submitTimeRange as any).validate();
    }
    if(this.termiatedTimeRange && typeof (this.termiatedTimeRange as any).validate === 'function') {
      (this.termiatedTimeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

