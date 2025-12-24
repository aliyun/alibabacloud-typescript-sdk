// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescriberPython3ScriptLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID that is returned when the Python3 script is run.
   * 
   * >  You can call the [RunPython3Script](~~RunPython3Script~~) operation to query the UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 69edc2b4-c95c-424f-9114-xxxxxxx
   */
  requestUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      requestUuid: 'RequestUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      requestUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

