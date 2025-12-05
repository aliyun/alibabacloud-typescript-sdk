// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentsByLabelRequest extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * key
   */
  labelKey?: string;
  /**
   * @remarks
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

