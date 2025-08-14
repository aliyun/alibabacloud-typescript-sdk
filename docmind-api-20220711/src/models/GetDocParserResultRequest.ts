// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocParserResultRequest extends $dara.Model {
  /**
   * @example
   * docmind-20220816-1e89d65c
   */
  id?: string;
  layoutNum?: number;
  layoutStepSize?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      layoutNum: 'LayoutNum',
      layoutStepSize: 'LayoutStepSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      layoutNum: 'number',
      layoutStepSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

