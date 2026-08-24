// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataAgentMemoryRequest extends $dara.Model {
  /**
   * @example
   * Diamond pricing analysis requires examining the skewness and outliers of the distribution of each feature.
   */
  content?: string;
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @example
   * 2037**********23
   */
  fromId?: string;
  /**
   * @example
   * fact_specifications
   */
  label?: string;
  /**
   * @example
   * user
   */
  memFrom?: string;
  /**
   * @example
   * fc5ice**********ac6e
   */
  sessionUuid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      DMSUnit: 'DMSUnit',
      fromId: 'FromId',
      label: 'Label',
      memFrom: 'MemFrom',
      sessionUuid: 'SessionUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      DMSUnit: 'string',
      fromId: 'string',
      label: 'string',
      memFrom: 'string',
      sessionUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

