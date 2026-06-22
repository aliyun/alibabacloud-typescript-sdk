// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoReadSummaryOption extends $dara.Model {
  summarize?: boolean;
  static names(): { [key: string]: string } {
    return {
      summarize: 'Summarize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summarize: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

