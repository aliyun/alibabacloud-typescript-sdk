// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineExperimentConfig extends $dara.Model {
  /**
   * @remarks
   * The experiment description.
   * 
   * @example
   * Baseline experiment
   */
  desc?: string;
  /**
   * @remarks
   * The experiment label.
   * 
   * @example
   * A
   */
  label?: string;
  /**
   * @remarks
   * The experiment name.
   * 
   * @example
   * baseline
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      label: 'label',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      label: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

