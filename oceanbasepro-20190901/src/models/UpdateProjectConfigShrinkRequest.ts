// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectConfigShrinkRequest extends $dara.Model {
  commonTransferConfigShrink?: string;
  fullTransferConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * np_fe****
   */
  id?: string;
  incrTransferConfigShrink?: string;
  reverseIncrTransferConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonTransferConfigShrink: 'CommonTransferConfig',
      fullTransferConfigShrink: 'FullTransferConfig',
      id: 'Id',
      incrTransferConfigShrink: 'IncrTransferConfig',
      reverseIncrTransferConfigShrink: 'ReverseIncrTransferConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonTransferConfigShrink: 'string',
      fullTransferConfigShrink: 'string',
      id: 'string',
      incrTransferConfigShrink: 'string',
      reverseIncrTransferConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

