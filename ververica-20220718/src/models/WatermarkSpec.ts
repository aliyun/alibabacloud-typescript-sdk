// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WatermarkSpec extends $dara.Model {
  column?: string;
  watermarkExpression?: string;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'column',
      watermarkExpression: 'watermarkExpression',
      watermarkType: 'watermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      watermarkExpression: 'string',
      watermarkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

