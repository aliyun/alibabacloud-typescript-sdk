// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventRequestCardInstances extends $dara.Model {
  outTrackId?: string;
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      outTrackId: 'OutTrackId',
      scenario: 'Scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outTrackId: 'string',
      scenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

