// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisRecordsResponseBodyQuerysQueryProperties extends $dara.Model {
  /**
   * @remarks
   * The name of the query property.
   * 
   * @example
   * ff
   */
  name?: string;
  /**
   * @remarks
   * The value of the query property.
   * 
   * @example
   * 40
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

