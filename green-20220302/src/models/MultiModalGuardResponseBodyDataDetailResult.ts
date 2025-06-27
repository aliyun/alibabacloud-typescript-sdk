// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalGuardResponseBodyDataDetailResult extends $dara.Model {
  /**
   * @example
   * 0
   */
  confidence?: number;
  description?: string;
  /**
   * @example
   * {}
   */
  ext?: any;
  /**
   * @example
   * contraband_act
   */
  label?: string;
  /**
   * @example
   * none
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      ext: 'Ext',
      label: 'Label',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      ext: 'any',
      label: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

