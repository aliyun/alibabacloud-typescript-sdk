// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveEditingJobResponseBodyLiveEditingJobMediaProduceConfig extends $dara.Model {
  /**
   * @remarks
   * The editing mode. Default value: Accurate.
   * 
   * @example
   * Accurate
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

