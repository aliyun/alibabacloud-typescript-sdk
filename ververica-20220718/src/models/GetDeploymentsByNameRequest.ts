// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentsByNameRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to exclude job summary information, such as jobName and status, from the response. Set this to true to return only the JobId and improve performance.
   * 
   * @example
   * true
   */
  ignoreJobSummary?: boolean;
  /**
   * @remarks
   * Specifies whether to exclude resource configuration information, such as parallelism and the number of CUs, to reduce the response size.
   * 
   * @example
   * true
   */
  ignoreResourceSetting?: boolean;
  static names(): { [key: string]: string } {
    return {
      ignoreJobSummary: 'ignoreJobSummary',
      ignoreResourceSetting: 'ignoreResourceSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreJobSummary: 'boolean',
      ignoreResourceSetting: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

