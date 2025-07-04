// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunLegalAdviceConsultationRequestExtra extends $dara.Model {
  deepThink?: boolean;
  onlineSearch?: boolean;
  static names(): { [key: string]: string } {
    return {
      deepThink: 'deepThink',
      onlineSearch: 'onlineSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deepThink: 'boolean',
      onlineSearch: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

