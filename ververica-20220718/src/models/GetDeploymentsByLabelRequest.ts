// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentsByLabelRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to exclude job summary information, such as jobName and status, from the response. If set to true, the response includes only the JobId. This improves performance.
   * 
   * @example
   * true
   */
  ignoreJobSummary?: boolean;
  /**
   * @remarks
   * Specifies whether to exclude resource configuration information, such as parallelism and the number of CUs, from the response. This reduces the size of the returned data.
   * 
   * @example
   * true
   */
  ignoreResourceSetting?: boolean;
  /**
   * @remarks
   * The label key used for filtering.
   * 
   * This parameter is required.
   * 
   * @example
   * key
   */
  labelKey?: string;
  /**
   * @remarks
   * The label value. You can specify multiple values separated by commas (,) to create an OR condition.
   * 
   * This parameter is required.
   * 
   * @example
   * value
   */
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      ignoreJobSummary: 'ignoreJobSummary',
      ignoreResourceSetting: 'ignoreResourceSetting',
      labelKey: 'labelKey',
      labelValue: 'labelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreJobSummary: 'boolean',
      ignoreResourceSetting: 'boolean',
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

