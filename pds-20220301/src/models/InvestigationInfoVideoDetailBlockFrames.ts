// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvestigationInfoVideoDetailBlockFrames extends $dara.Model {
  label?: string;
  offset?: number;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      offset: 'offset',
      rate: 'rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      offset: 'number',
      rate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

