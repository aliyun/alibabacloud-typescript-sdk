// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequestJobFilterDiagnosis extends $dara.Model {
  /**
   * @remarks
   * Job diagnosis threshold comparator.
   * 
   * @example
   * greater
   */
  operator?: string;
  /**
   * @remarks
   * Job diagnosis and analysis metrics
   * 
   * @example
   * run_duration
   */
  option?: string;
  /**
   * @remarks
   * Job diagnosis threshold.
   * 
   * @example
   * 24
   */
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      option: 'Option',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      option: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

