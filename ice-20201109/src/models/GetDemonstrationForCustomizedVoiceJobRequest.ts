// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDemonstrationForCustomizedVoiceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The demonstration scenario.
   * 
   * Valid values:
   * 
   * *   **story**
   * *   **interaction**
   * *   **navigation**
   * 
   * This parameter is required.
   * 
   * @example
   * story
   */
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      scenario: 'Scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

