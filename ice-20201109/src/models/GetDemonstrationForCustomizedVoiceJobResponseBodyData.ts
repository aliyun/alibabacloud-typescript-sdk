// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDemonstrationForCustomizedVoiceJobResponseBodyDataDemonstrationList } from "./GetDemonstrationForCustomizedVoiceJobResponseBodyDataDemonstrationList";


export class GetDemonstrationForCustomizedVoiceJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of 20 text entries to be read and the corresponding sample audio.
   */
  demonstrationList?: GetDemonstrationForCustomizedVoiceJobResponseBodyDataDemonstrationList[];
  static names(): { [key: string]: string } {
    return {
      demonstrationList: 'DemonstrationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demonstrationList: { 'type': 'array', 'itemType': GetDemonstrationForCustomizedVoiceJobResponseBodyDataDemonstrationList },
    };
  }

  validate() {
    if(Array.isArray(this.demonstrationList)) {
      $dara.Model.validateArray(this.demonstrationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

