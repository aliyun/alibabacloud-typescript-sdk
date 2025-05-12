// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImAuditResponseBodyImageResultsResultResultsSfaceDataFaces extends $dara.Model {
  /**
   * @remarks
   * The ID of the detected face. The value is a string.
   * 
   * @example
   * AliFace_0001234
   */
  idid?: string;
  /**
   * @remarks
   * This value is a string, which indicates the name of a similar person.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The score of the confidence level. The value is a float point number. Valid values: 0 to 100. A greater value indicates a higher confidence level for facial recognition.
   * 
   * @example
   * 91.54
   */
  re?: number;
  static names(): { [key: string]: string } {
    return {
      idid: 'idid',
      name: 'name',
      re: 're',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idid: 'string',
      name: 'string',
      re: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

