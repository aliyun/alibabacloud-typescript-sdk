// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentsByNameRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  ignoreJobSummary?: boolean;
  /**
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

