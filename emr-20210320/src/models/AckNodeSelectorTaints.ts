// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AckNodeSelectorTaints extends $dara.Model {
  /**
   * @remarks
   * 污点效果。
   */
  effect?: string;
  /**
   * @remarks
   * 污点键。
   * 
   * @example
   * emr
   */
  key?: string;
  /**
   * @remarks
   * 污点值。
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

