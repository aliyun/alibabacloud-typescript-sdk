// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobAudioCensorResult extends $dara.Model {
  label?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

