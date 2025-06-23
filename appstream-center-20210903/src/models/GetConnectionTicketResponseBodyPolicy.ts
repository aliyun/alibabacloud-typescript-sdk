// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionTicketResponseBodyPolicy extends $dara.Model {
  resolutionAdaptive?: string;
  resolutionHeight?: number;
  resolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      resolutionAdaptive: 'ResolutionAdaptive',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resolutionAdaptive: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

